(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{171:function(t,a,n){t.exports=n.p+"assets/img/kano-iframe.635774e6.png"},250:function(t,a,n){"use strict";n.r(a);var s=[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"iframe-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iframe-integration","aria-hidden":"true"}},[this._v("#")]),this._v(" IFrame integration")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("img",{attrs:{src:n(171),alt:"Kano application integrated as an iframe"}})])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ol",[n("li",[t._v("select which is the target component\n"),n("ul",[n("li",[t._v("event name = "),n("code",[t._v("map")]),t._v(" for 2D map and "),n("code",[t._v("globe")]),t._v(" for 3D globe")])])]),t._v(" "),n("li",[t._v("transform external method calls to internal calls using the following event payload\n"),n("ul",[n("li",[t._v("the "),n("code",[t._v("command")]),t._v(" property is the mixin method name")]),t._v(" "),n("li",[t._v("the "),n("code",[t._v("args")]),t._v(" property is the expected method arguments")])])]),t._v(" "),n("li",[t._v("retrieve internal method call result externally\n"),n("ul",[n("li",[t._v("event response data is the method result object")])])]),t._v(" "),n("li",[t._v("retrieve internal property externally\n"),n("ul",[n("li",[t._v("event response data is the property value")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),a("p",[this._v('In-memory data exchange is Json and more specifically GeoJson for map features. Do not try to inject functions or "complex" objects (e.g. class instances) in event payloads.')])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ul",[n("li",[n("code",[t._v("kano-ready")]),t._v(": to be listened by integrating application to know when the Kano application has been initialized in the iframe so that you can safely use the API")]),t._v(" "),n("li",[n("code",[t._v("setLocalStorage")]),t._v(": listened by Kano to set key/value pairs (provided as event data payload) in its local storage, typically useful to inject access tokens")]),t._v(" "),n("li",[n("code",[t._v("kano-login")]),t._v(": to be listened by integrating application to know when the user has been authenticated in the Kano application")]),t._v(" "),n("li",[n("code",[t._v("kano-logout")]),t._v(": to be listened by integrating application to know when the user has been unauthenticated in the Kano application")]),t._v(" "),n("li",[n("code",[t._v("map-ready")]),t._v(": to be listened by integrating application to know when the 2D map component has been initialized in the Kano application so that you can safely use the underlying API")]),t._v(" "),n("li",[n("code",[t._v("map-destroyed")]),t._v(": to be listened by integrating application to know when the 2D map component has been destroyed in the Kano application before switching to another route")]),t._v(" "),n("li",[n("code",[t._v("globe-ready")]),t._v(": to be listened by integrating application to know when the 3D globe component has been initialized in the Kano application so that you can safely use the underlying API")]),t._v(" "),n("li",[n("code",[t._v("globe-destroyed")]),t._v(": to be listened by integrating application to know when the 3D globe component has been destroyed in the Kano application before switching to another route")]),t._v(" "),n("li",[n("code",[t._v("layer-added")]),t._v(": to be listened by integrating application to know whenever a new layer has been added to the 2D/3D map (from the internal catalog or externally)")]),t._v(" "),n("li",[n("code",[t._v("layer-removed")]),t._v(": to be listened by integrating application to know whenever a layer has been removed from the 2D/3D map")]),t._v(" "),n("li",[n("code",[t._v("layer-shown")]),t._v(": to be listened by integrating application to know whenever a layer has been shown in the 2D/3D map")]),t._v(" "),n("li",[n("code",[t._v("layer-hidden")]),t._v(": to be listened by integrating application to know whenever a new layer has been hidden in the 2D/3D map")]),t._v(" "),n("li",[n("code",[t._v("click")]),t._v(": to be listened by integrating application to know whenever a feature has been clicked on a layer in the 2D/3D map, will provide the "),n("code",[t._v("feature")]),t._v(" and "),n("code",[t._v("layer")]),t._v(" (descriptor) as data payload properties")])])},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("./post-robot.min.js"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}}),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("iframe")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("kano"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("title")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Kano"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("allow")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("geolocation *"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1024px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 768px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("kano.kalisio.com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token script language-javascript"}},[t._v("\n\t  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" kano "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kano'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("contentWindow\n\t  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Wait for Kano to be initialized")]),t._v("\n\t  postRobot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kano-ready'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t  \t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optionnaly overrides default setup of Kano")]),t._v("\n\t  \tpostRobot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kano"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setConfiguration'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appName'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t  \t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Optionnaly set a valid token to avoid authentication")]),t._v("\n\t\t  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" postRobot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kano"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setLocalStorage'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'kano-jwt'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t  \t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Show and zoom to a layer")]),t._v("\n\t\t  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" postRobot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kano"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'showLayer'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Layer name'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" postRobot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kano"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zoomToLayer'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Layer name'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" postRobot"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("kano"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'map'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" property"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'layers'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Layer list'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t")]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],e=n(0),o=Object(e.a)({},function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("The "),n("a",{attrs:{href:"https://github.com/kalisio/kano",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kano"),n("OutboundLink")],1),t._v(" application is a map and weather forecast data explorer in 2D/3D built on top of the KDK. To avoid the burden of developping a completely new application for every mapping needs you might have, it has been designed to be integrated in your web application as an "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/HTML_element#Frames",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("<iframe/>")]),n("OutboundLink")],1),t._v(" like this:")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("The iframe API is a subset of the internal Kano components API exposing:")]),t._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"./../kmap/mixins.html#map"}},[t._v("2D map mixins")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"./../kmap/mixins.html#globe"}},[t._v("3D globe mixins")])],1)]),t._v(" "),n("p",[t._v("It uses "),n("a",{attrs:{href:"https://github.com/krakenjs/post-robot",target:"_blank",rel:"noopener noreferrer"}},[t._v("post-robot"),n("OutboundLink")],1),t._v(" to")]),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("Event messaging using post-robot is always async because it relies on the "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage",target:"_blank",rel:"noopener noreferrer"}},[t._v("postMessage API"),n("OutboundLink")],1),t._v(" under-the-hood.")])]),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("In addition to the events used to access mixin methods there are a couple of dedicated events:")]),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("Here is a simple code sample:")]),t._v(" "),t._m(5),n("p",[t._v("A full sample exploring the different ways to interact with the API is provided "),n("a",{attrs:{href:"https://github.com/kalisio/kano/blob/master/src/statics/iframe.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),n("OutboundLink")],1),t._v(". When running the demo you can dynamically call API methods when toggling the different buttons on the left.")])])},s,!1,null,null,null);o.options.__file="README.md";a.default=o.exports}}]);