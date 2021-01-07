(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{431:function(e,t,a){"use strict";a.r(t);var s=a(27),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"publish-your-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish-your-app"}},[e._v("#")]),e._v(" Publish your app")]),e._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("h3",{attrs:{id:"install-change-log-generator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-change-log-generator"}},[e._v("#")]),e._v(" Install Change log generator")]),e._v(" "),a("p",[e._v("In order to be able to generate the changelog for your published app/modules you need this "),a("a",{attrs:{href:"https://github.com/skywinder/github-changelog-generator",target:"_blank",rel:"noopener noreferrer"}},[e._v("gem"),a("OutboundLink")],1),e._v(", which creates a log file based on "),a("strong",[e._v("tags")]),e._v(", "),a("strong",[e._v("issues")]),e._v(" and merged "),a("strong",[e._v("pull requests")]),e._v(" (and splits them into separate lists according to labels) from :octocat: GitHub Issue Tracker. This requires you to install (e.g. for Windows) "),a("a",{attrs:{href:"http://rubyinstaller.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ruby"),a("OutboundLink")],1),e._v(" and its "),a("a",{attrs:{href:"https://github.com/oneclick/rubyinstaller/wiki/Development-Kit",target:"_blank",rel:"noopener noreferrer"}},[e._v("DevKit"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"plugins-modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugins-modules"}},[e._v("#")]),e._v(" Plugins/Modules")]),e._v(" "),a("p",[e._v("The same process applies when releasing a patch, minor or major version, i.e. the following tasks are done automatically on release:")]),e._v(" "),a("ol",[a("li",[e._v("increase the package version number in the "),a("strong",[e._v("package.json")]),e._v(" file (frontend and backend API)")]),e._v(" "),a("li",[e._v("publish the module on the NPM registry")]),e._v(" "),a("li",[e._v("create a tag accordingly in the git repository and push it")]),e._v(" "),a("li",[e._v("generates the changelog in the git repository and push it")])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Kalisio maintained modules are published under the "),a("code",[e._v("@kalisio")]),e._v(" namespace in NPM, e.g. "),a("code",[e._v("kdk")]),e._v(" NPM package is named "),a("code",[e._v("@kalisio/kdk")]),e._v(", but you are free to use another one for your own modules.")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("This requires you to have a NPM and GitHub account and be a team member of the namespace organization, if you'd like to become a maintainer of Kalisio maintained modules please tell us.")])]),e._v(" "),a("p",[e._v("Depending on the release type the following command will do the job (where type is either "),a("code",[e._v("patch")]),e._v(", "),a("code",[e._v("minor")]),e._v(", "),a("code",[e._v("major")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run release:type\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("If you have a lot of issues/PRs to be integrated in change log please "),a("a",{attrs:{href:"https://github.com/github-changelog-generator/github-changelog-generator#github-token",target:"_blank",rel:"noopener noreferrer"}},[e._v("generate a GitHub token"),a("OutboundLink")],1),e._v(" to avoid rate-limiting on their API and set the "),a("code",[e._v("CHANGELOG_GITHUB_TOKEN")]),e._v(" environment variable to your token before publishing")])]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("The changelog suffers from the following "),a("a",{attrs:{href:"https://github.com/github-changelog-generator/github-changelog-generator/issues/497",target:"_blank",rel:"noopener noreferrer"}},[e._v("issue"),a("OutboundLink")],1),e._v(" so you might have to edit the generated changelog when pushing on different branches or systematically merge changes to "),a("code",[e._v("master")]),e._v(" before generating the changelog so that all issues are closed in Github.")])]),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Before you publish a module take care of updating the version of your dependent modules to the latest version published, for example  perform "),a("code",[e._v("yarn upgrade xxx")]),e._v(" for a module depending on the xxx module before publishing it")])]),e._v(" "),a("h2",{attrs:{id:"web-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-app"}},[e._v("#")]),e._v(" Web app")]),e._v(" "),a("p",[e._v("Almost the same process applies as for the plugins/modules except the app is not published on the NPM registry but in the Docker Hub. However, the process is less automated to ensure more flexibility so that the build artefacts of the different flavors can be managed independently. In a nutshell, the tasks are performed manually and independently using the required commands at the different stages of the application lifecycle.")]),e._v(" "),a("p",[e._v("In order to change the version number in a web app you have to increase the package version number in the "),a("strong",[e._v("package.json")]),e._v(" file (frontend and backend API), and possibly Cordova configuration file, of your branch so that the generated artefacts will not erase previously published ones. Depending on the release typing the following command will do the job (where type is either "),a("code",[e._v("patch")]),e._v(", "),a("code",[e._v("minor")]),e._v(", "),a("code",[e._v("major")]),e._v("):")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" run release:type\n")])])]),a("p",[e._v("Usually, you start a new version by creating a "),a("code",[e._v("test")]),e._v(" (a.k.a release or staging) branch from your "),a("code",[e._v("master")]),e._v(" branch. You should then increase the version number (major or minor) of your "),a("code",[e._v("master")]),e._v(" branch so that the generated artefacts of the new development version will not erase previously published ones, e.g. "),a("code",[e._v("npm run release:major")]),e._v(".")]),e._v(" "),a("p",[e._v("When you are satisfied enough with your version you typically release it starting from your "),a("code",[e._v("test")]),e._v(" (a.k.a release or staging) branch:")]),e._v(" "),a("ol",[a("li",[e._v("create a tag accordingly in the git repository and push it,")]),e._v(" "),a("li",[e._v("generates the changelog in the git repository and push it")])]),e._v(" "),a("p",[e._v("This process usually triggers your "),a("RouterLink",{attrs:{to:"/guides/development/deploy.html"}},[e._v("CI/CD")]),e._v(" process to build the target artefacts.")],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("Before you publish your app take care of updating the version of all dependent modules to the latest version published, for example perform "),a("code",[e._v("yarn upgrade kdk")]),e._v(" to use the latest versin of the KDK.")])]),e._v(" "),a("p",[e._v("Then, you should then increase the version patch number of your "),a("code",[e._v("test")]),e._v(" branch so that the generated artefacts of the new staging version will not erase previously published ones, e.g. "),a("code",[e._v("npm run release:patch")]),e._v(". Indeed, a staging branch should only include patch versions not major/minor versions.")]),e._v(" "),a("h3",{attrs:{id:"manual-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-build"}},[e._v("#")]),e._v(" Manual build")]),e._v(" "),a("p",[e._v("Because Kalisio web app are also released as Docker images you can build it like this:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker build -t kalisio/kapp "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])]),a("p",[e._v("Then release it as latest version:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker login\ndocker push kalisio/kapp\n")])])]),a("p",[e._v("And tag it ("),a("code",[e._v("version_tag")]),e._v(" being the current version number like "),a("code",[e._v("1.1.2-prod")]),e._v(" or "),a("code",[e._v("1.1.0-dev")]),e._v(" depending on the "),a("RouterLink",{attrs:{to:"/guides/development/deploy.html"}},[e._v("flavor")]),e._v(")")],1),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker tag kalisio/kapp kalisio/kapp:version_tag\ndocker push kalisio/kapp:version_tag\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("This requires you to have a DockerHub account and be a team member of the Kalisio organization, if you'd like to become a maintainer please tell us")])])])}),[],!1,null,null,null);t.default=o.exports}}]);