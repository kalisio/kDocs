(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{520:function(e,t,o){e.exports=o.p+"assets/img/users-data-model.e037f5f6.svg"},521:function(e,t,o){e.exports=o.p+"assets/img/organizations-data-model.0d40de04.svg"},522:function(e,t,o){e.exports=o.p+"assets/img/groups-data-model.437e9630.svg"},569:function(e,t,o){"use strict";o.r(t);var a=o(13),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"data-model-oriented-view-of-the-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-model-oriented-view-of-the-architecture"}},[e._v("#")]),e._v(" Data model-oriented view of the architecture")]),e._v(" "),a("p",[e._v("According to the "),a("a",{attrs:{href:"https://docs.feathersjs.com/guides/about/philosophy.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Feathers philosophy"),a("OutboundLink")],1),e._v(" each data model is manipulated using a "),a("a",{attrs:{href:"https://docs.feathersjs.com/api/services.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("service interface"),a("OutboundLink")],1),e._v(" to perform "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete",target:"_blank",rel:"noopener noreferrer"}},[e._v("CRUD operations"),a("OutboundLink")],1),e._v(" of the "),a("a",{attrs:{href:"https://docs.feathersjs.com/api/databases/common.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("persistence layer"),a("OutboundLink")],1),e._v(". So this data model-oriented view is a service-oriented view in the same manner.")]),e._v(" "),a("p",[e._v("Because data models internally rely on "),a("a",{attrs:{href:"http://www.json.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON"),a("OutboundLink")],1),e._v(" they are by nature hierarchical. In the following diagrams each nested JSON object is represented as a smaller "),a("em",[e._v("bubble")]),e._v(" in a bigger "),a("em",[e._v("bubble")]),e._v(" (the nesting/parent object), the data model instance being the root JSON object or the "),a("em",[e._v("biggest")]),e._v(" bubble. The name of the bubble is the name of the nesting object property owing the nested object.")]),e._v(" "),a("p",[e._v("Data models are dynamic by nature, allowing any plugin to add custom fields whenever required using "),a("a",{attrs:{href:"https://docs.feathersjs.com/api/hooks.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("hooks"),a("OutboundLink")],1),e._v(". Each data model includes an implicit "),a("a",{attrs:{href:"https://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("ObjectID"),a("OutboundLink")],1),e._v(" "),a("code",[e._v("_id")]),e._v(" field provided by the database.")]),e._v(" "),a("h2",{attrs:{id:"user-data-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user-data-model"}},[e._v("#")]),e._v(" User data model")]),e._v(" "),a("p",[e._v("The most common properties of a user are described by the following data model:")]),e._v(" "),a("p",[a("img",{attrs:{src:o(520),alt:"User data model"}})]),e._v(" "),a("p",[e._v("The details of each property are the following:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("email")]),e._v(" : user e-mail used as an internal unique ID")]),e._v(" "),a("li",[a("strong",[e._v("password")]),e._v(" : hashed user password")]),e._v(" "),a("li",[a("strong",[e._v("locale")]),e._v(" : user locale when registering")]),e._v(" "),a("li",[a("strong",[e._v("previousPasswords")]),e._v(" : hashed user password history if "),a("RouterLink",{attrs:{to:"/guides/basics/step-by-step.html#configuring-the-app"}},[e._v("password policy has been enabled")])],1),e._v(" "),a("li",[a("strong",[e._v("profile")]),e._v(" : user profile information including name")]),e._v(" "),a("li",[a("strong",[e._v("[provider]")]),e._v(" : user profile information for associated OAuth provider, e.g. "),a("code",[e._v("google")])]),e._v(" "),a("li",[a("strong",[e._v("[scope]")]),e._v(" : user permissions for associated scope, e.g. "),a("code",[e._v("groups")])]),e._v(" "),a("li",[a("strong",[e._v("tags")]),e._v(" : user affected tags if any")]),e._v(" "),a("li",[a("strong",[e._v("devices")]),e._v(" : user mobile devices if any, each time the user uses a new device it is registered, provided by "),a("RouterLink",{attrs:{to:"/api/"}},[e._v("kNotify plugin")])],1)]),e._v(" "),a("h2",{attrs:{id:"device-data-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#device-data-model"}},[e._v("#")]),e._v(" Device data model")]),e._v(" "),a("p",[e._v("The most common properties of a device object are described by the following data model:")]),e._v(" "),a("p",[a("strong",[e._v("TODO")])]),e._v(" "),a("p",[e._v("This data model is manipulated through the "),a("RouterLink",{attrs:{to:"/api/core/services.html"}},[e._v("Device API")]),e._v(".")],1),e._v(" "),a("p",[e._v("The details of each property are the following:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("platform")]),e._v(": the platform of the device, e.g. "),a("code",[e._v("Android")])]),e._v(" "),a("li",[a("strong",[e._v("model")]),e._v(": the model of the device, e.g. "),a("code",[e._v("SM-G930U")])]),e._v(" "),a("li",[a("strong",[e._v("manufacturer")]),e._v(": the manufacturer of the device, e.g. "),a("code",[e._v("samsung")])]),e._v(" "),a("li",[a("strong",[e._v("uuid")]),e._v(": UUID of the device")]),e._v(" "),a("li",[a("strong",[e._v("registrationId")]),e._v(": the ID of the associated device in the notification system (APNS or Firebase)")]),e._v(" "),a("li",[a("strong",[e._v("arn")]),e._v(": the ARN of associated SNS device")]),e._v(" "),a("li",[a("strong",[e._v("lastActivity")]),e._v(": the date/time of the last connection of this device")])]),e._v(" "),a("p",[e._v("Most data are retrieved using the "),a("a",{attrs:{href:"https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-device/",target:"_blank",rel:"noopener noreferrer"}},[e._v("cordova-plugin-device"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"tag-data-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tag-data-model"}},[e._v("#")]),e._v(" Tag data model")]),e._v(" "),a("p",[e._v("The most common properties of a tag object are described by the following data model:")]),e._v(" "),a("p",[a("strong",[e._v("TODO")])]),e._v(" "),a("p",[e._v("This data model is manipulated through the "),a("RouterLink",{attrs:{to:"/api/core/services.html"}},[e._v("Tag API")]),e._v(".")],1),e._v(" "),a("p",[e._v("The details of each property are the following:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("scope")]),e._v(": the scope of the tag (i.e. category), e.g. "),a("code",[e._v("skill")])]),e._v(" "),a("li",[a("strong",[e._v("value")]),e._v(": the value of the tag, e.g. "),a("code",[e._v("developer")])]),e._v(" "),a("li",[a("strong",[e._v("count")]),e._v(": the number of tagged objects")]),e._v(" "),a("li",[a("strong",[e._v("context")]),e._v(": the ID of the associated context object providing this tag if any (e.g. the organisation)")]),e._v(" "),a("li",[a("strong",[e._v("topics")]),e._v(": the ARN of associated SNS topics for each platform used to publish messages to tagged objects, provided by "),a("RouterLink",{attrs:{to:"/api/"}},[e._v("kNotify plugin")])],1)]),e._v(" "),a("h2",{attrs:{id:"organization-data-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#organization-data-model"}},[e._v("#")]),e._v(" Organization data model")]),e._v(" "),a("p",[e._v("The most common properties of an organization are described by the following data model, provided by "),a("RouterLink",{attrs:{to:"/api/"}},[e._v("kTeam plugin")]),e._v(":")],1),e._v(" "),a("p",[a("img",{attrs:{src:o(521),alt:"Organization data model"}})]),e._v(" "),a("p",[e._v("This data model is manipulated through the "),a("RouterLink",{attrs:{to:"/api/kTeam/services.html"}},[e._v("Organization API")]),e._v(".")],1),e._v(" "),a("p",[e._v("The details of each property are the following:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("name")]),e._v(": the name of the organisation")]),e._v(" "),a("li",[a("strong",[e._v("topics")]),e._v(": the ARN of associated SNS topics for each platform used to publish messages to organization' members, provided by "),a("RouterLink",{attrs:{to:"/api/"}},[e._v("kNotify plugin")])],1)]),e._v(" "),a("blockquote",[a("p",[e._v("the organization ObjectID is used as the internal DB name")])]),e._v(" "),a("h2",{attrs:{id:"group-data-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#group-data-model"}},[e._v("#")]),e._v(" Group data model")]),e._v(" "),a("p",[e._v("The most common properties of a group object are described by the following data model, provided by "),a("a",{attrs:{href:"./../api/readme.MD"}},[e._v("kTeam plugin")]),e._v(":")]),e._v(" "),a("p",[a("img",{attrs:{src:o(522),alt:"Group data model"}})]),e._v(" "),a("p",[e._v("This data model is manipulated through the "),a("RouterLink",{attrs:{to:"/api/kTeam/services.html"}},[e._v("Group API")]),e._v(".")],1),e._v(" "),a("p",[e._v("The details of each property are the following:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("name")]),e._v(": the name of the group")]),e._v(" "),a("li",[a("strong",[e._v("description")]),e._v(": the description of the group")]),e._v(" "),a("li",[a("strong",[e._v("topics")]),e._v(": the ARN of associated SNS topics for each platform used to publish messages to group' members, provided by "),a("RouterLink",{attrs:{to:"/api/"}},[e._v("kNotify plugin")])],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);