(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{577:function(e,t,a){"use strict";a.r(t);var n=a(13),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[e._v("#")]),e._v(" Tips")]),e._v(" "),a("h2",{attrs:{id:"generating-service-account-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generating-service-account-tokens"}},[e._v("#")]),e._v(" Generating service account tokens")]),e._v(" "),a("p",[e._v("If you'd like a third-party application to rely on the API of your application without authenticating using a user/password you can generate an access token with a fixed expiration date to be used as an API key.")]),e._v(" "),a("p",[e._v("If your API needs a user ID to work as expected first register a user as usual. Then, using your application secret and a "),a("a",{attrs:{href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JWT library"),a("OutboundLink")],1),e._v(", issue a JWT with a payload matching the configuration options of your application regarding audience (i.e. domain), issuer and the user ID if any, e.g.:")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"aud"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"kano.kargo.kalisio.xyz"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"iss"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"kalisio"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"exp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1552402010")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"userId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"5bc5b166beb4648d3cd79327"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h2",{attrs:{id:"linking-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linking-errors"}},[e._v("#")]),e._v(" Linking errors")]),e._v(" "),a("p",[e._v("Due to the modular approach of the KDK we need to "),a("a",{attrs:{href:"https://medium.com/@alexishevia/the-magic-behind-npm-link-d94dcb3a81af",target:"_blank",rel:"noopener noreferrer"}},[e._v("link"),a("OutboundLink")],1),e._v(" the modules and the applications according to the dependency tree when developing.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Due to some "),a("a",{attrs:{href:"http://codetunnel.io/npm-5-changes-to-npm-link/",target:"_blank",rel:"noopener noreferrer"}},[e._v("changes"),a("OutboundLink")],1),e._v(" in the way "),a("code",[e._v("npm")]),e._v(" manages linked modules we prefer to use "),a("a",{attrs:{href:"https://yarnpkg.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Yarn"),a("OutboundLink")],1),e._v(" as a package manager.")])]),e._v(" "),a("p",[e._v("It appeared that when performing a new install, adding a new dependency, or launching two installs concurrently, some of these links often break raising different errors:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("TypeError: Cannot read property 'eventMappings' of undefined")])]),e._v(" "),a("li",[a("code",[e._v("TypeError: processNextTick is not a function")])]),e._v(" "),a("li",[a("code",[e._v("Error: Cannot find module 'safer-buffer'")])]),e._v(" "),a("li",[a("code",[e._v("An unexpected error occurred: \"ENOENT: no such file or directory, scandir 'xxx'")])]),e._v(" "),a("li",[e._v("...")])]),e._v(" "),a("p",[e._v("As a workaround you will either need to:")]),e._v(" "),a("ul",[a("li",[e._v("clear the yarn cache "),a("code",[e._v("yarn cache clean")]),e._v(" (or "),a("code",[e._v("yarn cache clean module")]),e._v(" to be more specific)")]),e._v(" "),a("li",[e._v("restore the broken links using commands like e.g. "),a("code",[e._v("yarn link @kalisio/kdk")]),e._v(" in the broken applications")]),e._v(" "),a("li",[e._v("reinstall all dependencies using "),a("code",[e._v("yarn install")]),e._v(" in broken modules/applications, and then restore the links as above")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You might also clean all dependencies frist using "),a("a",{attrs:{href:"http://www.nikola-breznjak.com/blog/javascript/nodejs/how-to-delete-node_modules-folder-on-windows-machine/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("rimraf node_modules")]),a("OutboundLink")],1)])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Errors are often visible when launching the app server but might come from an underlying module. For instance the "),a("code",[e._v("TypeError: Cannot read property 'eventMappings' of undefined")]),e._v(" error often appears in modules, probably due to the fact incompatible versions of the same library (e.g. Feathers) are installed. So try first to reinstall and relink the modules before your app, and if you'd like to see if a module is fine running its tests is usually a good indicator: "),a("code",[e._v("yarn mocha")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"profiling-applications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#profiling-applications"}},[e._v("#")]),e._v(" Profiling applications")]),e._v(" "),a("p",[e._v("In your local development environment you can usually use "),a("a",{attrs:{href:"https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chrome DevTools"),a("OutboundLink")],1),e._v(". However, it is trickier to perform profiling on remote production environments, here are the steps.")]),e._v(" "),a("ol",[a("li",[e._v("Override the command used to launch your application to activate the "),a("a",{attrs:{href:"https://nodejs.org/en/docs/guides/simple-profiling/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js V8 profiler"),a("OutboundLink")],1),e._v(":")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("node --prof app.js\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Once you have run your tests and recorded the profile, a file named like this "),a("code",[e._v("isolate-pid-1-v8.log")]),e._v(" should appear in your working directory. Process it using the following commands to get either:")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v('a "human-readable" file (txt)')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("node --prof-process .\\isolate-0x49489f0-1-v8.log > prof-processed.txt\n")])])])]),e._v(" "),a("li",[a("p",[e._v('a "machine-readable" file (json)')]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("node --prof-process --preprocess -j .\\isolate-0x49489f0-1-v8.log > prof-processed.json\n")])])])])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("In order to identify bottlenecks in your app you can either:")])]),e._v(" "),a("ul",[a("li",[e._v("Analyze the human-readable file")]),e._v(" "),a("li",[e._v("Install "),a("a",{attrs:{href:"https://github.com/mapbox/flamebearer",target:"_blank",rel:"noopener noreferrer"}},[e._v("flamebearer"),a("OutboundLink")],1),e._v(" and generate the flame graph")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("npm install -g flamebearer\nflamebearer prof-processed.json\n")])])]),a("ul",[a("li",[e._v("Use the "),a("a",{attrs:{href:"https://mapbox.github.io/flamebearer/",target:"_blank",rel:"noopener noreferrer"}},[e._v("online flame graph generator"),a("OutboundLink")],1),e._v(" and drag'n'drop your profile")])]),e._v(" "),a("h2",{attrs:{id:"running-multiple-applications-side-by-side"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-multiple-applications-side-by-side"}},[e._v("#")]),e._v(" Running multiple applications side-by-side")]),e._v(" "),a("p",[e._v("For instance, as Kano depends for some features on a running Weacast API you will need to run both on your local development environment. If your application also uses replication you will need to launch two instances in parallel. The problem is that by default all our apps uses the "),a("code",[e._v("8081")]),e._v(" port for server and "),a("code",[e._v("8080")]),e._v(" port for client in development mode, generating a port conflict. Similarly the Node.js debugger uses by default the "),a("code",[e._v("9229")]),e._v(" port.")]),e._v(" "),a("p",[e._v("You should run the first server by defining eg. "),a("code",[e._v("PORT=8082")]),e._v(" (to avoid port conflict). If single-sign-on is expected to work, define also "),a("code",[e._v("APP_SECRET=same value as in second application configuration")]),e._v(" as environment variables. Then execute the "),a("code",[e._v("yarn dev:replica")]),e._v(" command (will setup the Node.js debugger to use the "),a("code",[e._v("9229")]),e._v(" port to avoid port conflict). Last, you can launch the second server/client as usual.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("You usually don't need the client application but only the API on the replica but if required you can launch another client similarly e.g. by setting "),a("code",[e._v("CLIENT_PORT=8083")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("If you need more than two side-by-side applications then use set "),a("a",{attrs:{href:"https://nodejs.org/api/cli.html#cli_node_options_options",target:"_blank",rel:"noopener noreferrer"}},[e._v("NODE_OPTIONS"),a("OutboundLink")],1),e._v(" environment variable before launching each one, e.g. "),a("code",[e._v("NODE_OPTIONS='--inspect-port=9230'")]),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"application-instances-synchronization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-instances-synchronization"}},[e._v("#")]),e._v(" Application instances synchronization")]),e._v(" "),a("p",[e._v("If your application is not fully stateless or requires real-time events to be dispatched to clients you will also need to synchronize them using "),a("a",{attrs:{href:"https://github.com/feathersjs-ecosystem/feathers-sync",target:"_blank",rel:"noopener noreferrer"}},[e._v("feathers-sync"),a("OutboundLink")],1),e._v(". We previously relied on the "),a("a",{attrs:{href:"https://github.com/scttnlsn/mubsub",target:"_blank",rel:"noopener noreferrer"}},[e._v("mubsub"),a("OutboundLink")],1),e._v(" adapter because as we already use MongoDB it did not require any additional service to be deployed.")]),e._v(" "),a("p",[e._v("Unfortunately it has been "),a("a",{attrs:{href:"https://github.com/feathersjs-ecosystem/feathers-sync/pull/135",target:"_blank",rel:"noopener noreferrer"}},[e._v("deprecated"),a("OutboundLink")],1),e._v(". As a consequence we now rely on the "),a("a",{attrs:{href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis"),a("OutboundLink")],1),e._v(" adapter. For development you can easily run a Redis server using Docker:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("// Bind it to your prefered port\ndocker run -d --rm --name redis -p "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6300")]),e._v(":6379 redis:5\n")])])]),a("p",[e._v("You will need to play with the different options presented above to avoid port conflicts and define as well how your app connects to the Redis instance using the "),a("code",[e._v("REDIS_URL")]),e._v(" environment variable like "),a("code",[e._v("redis://127.0.0.1:6300")]),e._v(". You can see the subscriber apps and exchanged messages by connecting to the Redis container:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("// Bind it to your prefered port\ndocker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" -it redis "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" redis-cli\n// Number of subscribers\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" PUBSUB NUMSUB feathers-sync\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"feathers-sync"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n// Monitor messages\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" SUBSCRIBE feathers-sync\nReading messages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);