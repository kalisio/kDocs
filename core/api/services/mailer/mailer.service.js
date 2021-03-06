import mailer from 'feathers-mailer'
import makeDebug from 'debug'

const debug = makeDebug('kdk:core:mailer:service')

export default function (name, app, options) {
  // Keep track of config
  Object.assign(options, app.get('mailer'))
  debug('Mailer created with config ', options)
  return mailer(options)
}
