import _ from 'lodash'
import LruCache from 'lru-cache'
import makeDebug from 'debug'
import { defineAbilities } from '../../../common/permissions'

const debug = makeDebug('kdk:core:authorisations:service')

// Global key to store abilities in cache for anonymous users
const ANONYMOUS_USER = 'anonymous'

export default {
  // Used to change permissions for a subject on a resource
  // We pass parameters in the query/data object
  // The params object should be already filled by populate hooks
  create (data, params) {
    const query = params.query
    const context = params.resourcesService.context
    // Make hook usable with query params as well
    const scopeName = data.scope || query.scope // Get scope name first
    return Promise.all(params.subjects.map(async subject => {
      // Then retrieve the right scope on the subject
      const scope = _.get(subject, scopeName, [])
      // Then the target resource
      let resource = _.find(scope, resource => resource._id && (resource._id.toString() === params.resource._id.toString()))
      // On first authorisation create the resource in scope
      if (!resource) {
        resource = Object.assign({}, params.resource)
        if (context) {
          resource.context = (typeof context === 'object' ? context._id.toString() : context.toString())
        }
        scope.push(resource)
      }
      // Hooks should have populate subject/resource,
      // now we have to set permissions on the given subject's scope
      resource.permissions = data.permissions || query.permissions
      // This cover the case when we create the scope on the first auth,
      // so that if the caller want to get back the update subject he can have it
      _.set(subject, scopeName, scope)
      debug('Updating scope ' + scopeName + ' for subject ' + subject._id + ' on resource ' + params.resource._id + ':', scope)
      subject = await params.subjectsService.patch(subject._id, {
        [scopeName]: scope
      }, {
        user: params.user
      })
      this.updateAbilities(subject)
      debug('Authorisation ' + data.permissions + ' set for subject ' + subject._id + ' on resource ' + params.resource._id + ' with scope ' + scopeName)
      return subject
    }))
  },

  // Used to remove permissions for a subject on a resource
  // We use ID as target resource and pass parameters in the query object
  // The params object should be already filled by populate hooks
  remove (id, params) {
    const query = params.query
    const scopeName = query.scope // Get scope name first
    return Promise.all(params.subjects.map(async subject => {
      // Then retrieve the right scope on the subject
      const scope = _.get(subject, scopeName, [])
      // Remove the target resource if any
      const resources = _.remove(scope, resource => resource._id && (resource._id.toString() === id.toString()))
      if (resources.length > 0) {
        // This cover the case when we create the scope on the first auth,
        // so that if the caller want to get back the update subject he can have it
        _.set(subject, scopeName, scope)
        // Skip patching if the subject is currently deleted
        if (!subject.deleted) {
          debug('Updating scope ' + scopeName + ' for subject ' + subject._id + ' on resource ' + id + ':', scope)
          subject = await params.subjectsService.patch(subject._id, {
            [scopeName]: scope
          }, {
            user: params.user
          })
          this.updateAbilities(subject)
          debug('Authorisation unset for subject ' + subject._id + ' on resource ' + id + ' with scope ' + scopeName)
          return subject
        }
      }
      return subject
    }))
  },

  setup (app) {
    const config = app.get('authorisation')
    if (config && config.cache) {
      // Store abilities of the N most active users in LRU cache (defaults to 1000)
      this.cache = new LruCache(config.cache.maxUsers || 1000)
      debug('Using LRU cache for user abilities')
    } else {
      debug('Do not use LRU cache for user abilities')
    }
  },

  // Compute abilities for a given user and set it in cache the first time
  // or get it from cache if found
  getAbilities (subject) {
    if (this.cache) {
      if (subject && subject._id) {
        if (this.cache.has(subject._id.toString())) return this.cache.get(subject._id.toString())
      } else {
        if (this.cache.has(ANONYMOUS_USER)) return this.cache.get(ANONYMOUS_USER)
      }
    }

    const abilities = defineAbilities(subject)

    if (this.cache) {
      if (subject && subject._id) {
        this.cache.set(subject._id.toString(), abilities)
      } else {
        this.cache.set(ANONYMOUS_USER, abilities)
      }
    }

    return abilities
  },

  // Compute abilities for a given user and update it in cache
  updateAbilities (subject) {
    if (this.cache) {
      if (subject && subject._id) {
        this.cache.del(subject._id.toString())
      } else {
        this.cache.del(ANONYMOUS_USER)
      }
    }

    return this.getAbilities(subject)
  }
}
