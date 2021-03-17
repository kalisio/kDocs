(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{580:function(t,a,e){"use strict";e.r(a);var s=e(13),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"command-line-tools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-line-tools"}},[t._v("#")]),t._v(" Command-line tools")]),t._v(" "),e("h2",{attrs:{id:"kdk-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kdk-cli"}},[t._v("#")]),t._v(" KDK CLI")]),t._v(" "),e("p",[t._v("The KDK CLI (a.k.a. "),e("code",[t._v("kli")]),t._v(") is a multiplexer for usual git/npm/yarn commands used when developing KDK-based applications. It allows to easily clone, install, link, unlink, switch branch on all modules and application using a single command.")]),t._v(" "),e("h3",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[t._v("Production version:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g @kalisio/kli\n")])])]),e("p",[t._v("Or to use the master branch locally:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/kalisio/kli.git\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" kli\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v("\n")])])]),e("h3",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),e("p",[t._v("The CLI relies on a workspace file defining the dependency tree between your KDK-based application and modules like this:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Each key is the repo name of a module or application")]),t._v("\n  kdk"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    dependencies"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// List of dependent KDK modules if any")]),t._v("\n    branches"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'master'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// List of branches the module is available on")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// If the current target branch of the CLI is not included it will be skipped")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  kApp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    application"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Indicates if this is the main application module")]),t._v("\n    dependencies"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@kalisio/kdk'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    branch"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'master'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Branch the module should be forced on whatever the current target branch of the CLI")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("branch")]),t._v(" option can also target a git tag, typically fo production releases.")])]),t._v(" "),e("p",[t._v("All operations will take effect in the current working directory so that subdirectories named according to modules will be created or expected to already exist.")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("// Will clone all repositories\nkli workspace.js --clone\n// Will "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" dependencies "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" all modules and application\nkli workspace.js --install\n// Will perform "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" between required modules and application\nkli workspace.js --link\n// Will perform unlink between required modules and application\nkli workspace.js --unlink\n// Will perform branch switching on all modules and application\nkli workspace.js --branch "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("This CLI assumes git and yarn are already globally installed on your system.")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("By default all Git operations target the "),e("code",[t._v("kalisio")]),t._v(" organization, you can change this for the whole workspace using the "),e("code",[t._v("organization")]),t._v(" CLI option or on specific modules only using the "),e("code",[t._v("organization")]),t._v(" option in the workspace file. Like this you include modules coming from a separate organization but used as dependencies of the project owned by the main organization of the project.")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("All operations are performed relative to the CWD by default, you can change this for specific modules only using the "),e("code",[t._v("path")]),t._v(" option in the workspace file providing a module path relative to the CWD. Like this you can for instance have modules coming from a separate organization isolated into their own directory.")])]),t._v(" "),e("p",[t._v("Sample workspaces for our "),e("a",{attrs:{href:"https://github.com/kalisio/kApp",target:"_blank",rel:"noopener noreferrer"}},[t._v("application template"),e("OutboundLink")],1),t._v(" and "),e("a",{attrs:{href:"https://github.com/kalisio/kano",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kano"),e("OutboundLink")],1),t._v(" are provided in the "),e("a",{attrs:{href:"https://github.com/kalisio/kli",target:"_blank",rel:"noopener noreferrer"}},[t._v("kli repository"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Full CLI usage is the following:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("Usage: index "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("workspacefile"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("options"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\nOptions:\n  -V, --version                      output the version number\n  -o, --organization "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("organization"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  GitHub organization owing the project "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("default: "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kalisio"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  -d, --debug                        Verbose output "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" debugging\n  -c, --clone "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("               Clone "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" repositories "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("with optional target branch"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  -p, --pull                         Pull "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" repositories\n  -i, --install                      Perform "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n  -l, --link                         Perform "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v("\n  -ul, --unlink                      Perform "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" unlink\n  -b, --branch "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("branch"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("              Switch "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n  -m, --modules "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("modules"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("            Comma separated list of modules from the workspace to apply "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" on\n  -h, --help                         output usage information\n")])])]),e("h2",{attrs:{id:"gitrob"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitrob"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/michenriksen/gitrob",target:"_blank",rel:"noopener noreferrer"}},[t._v("Gitrob"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Gitrob is a tool to help find potentially sensitive files pushed to public repositories on Github. Simply run it using a GitHub token and a target user or organisation: "),e("code",[t._v("gitrob -github-access-token XXX kalisio")]),t._v(".")]),t._v(" "),e("p",[t._v("Then you can open the WebUI at "),e("a",{attrs:{href:"http://localhost:9393",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:9393"),e("OutboundLink")],1),t._v(" and see what's going on.")]),t._v(" "),e("h2",{attrs:{id:"nohup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nohup"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://en.wikipedia.org/wiki/Nohup",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nohup"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("We use it to launch processes in the background on servers, which won't be killed when closing the ssh session.")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://doc.ubuntu-fr.org/screen",target:"_blank",rel:"noopener noreferrer"}},[t._v("Screen"),e("OutboundLink")],1),t._v(" can also do the job")]),t._v(" "),e("h2",{attrs:{id:"tail"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tail"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://www.linode.com/docs/tools-reference/tools/view-and-follow-the-end-of-text-files-with-tail",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tail"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("To track logs currently written, Docker has an "),e("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/logs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("equivalent command"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"conemu"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conemu"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/Maximus5/ConEmu",target:"_blank",rel:"noopener noreferrer"}},[t._v("ConEmu"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("Customizable Windows terminal.")]),t._v(" "),e("p",[t._v("To add new tasks "),e("em",[t._v("right click on settings > Startup/Tasks")]),t._v(", and add commands like this to open a new PowerShell at a given location:\n"),e("code",[t._v('powershell.exe -new_console:t:"TaskName":d:D:\\path-to-directory')]),t._v(".")]),t._v(" "),e("p",[t._v("If you'd like the PowerShell to execute a script at launch time (e.g. to setup your environment variables): "),e("code",[t._v('powershell.exe -noexit path-to-script new_console:t:"TaskName":d:D:\\path-to-directory')])]),t._v(" "),e("p",[t._v("To make a command executed by default "),e("em",[t._v("right click on settings > Startup > Select it as named task")]),t._v(".")]),t._v(" "),e("blockquote",[e("p",[t._v("It might be required to modify the "),e("a",{attrs:{href:"https://technet.microsoft.com/fr-FR/library/hh847748.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("execution policy"),e("OutboundLink")],1),t._v(", e.g. "),e("code",[t._v("Set-ExecutionPolicy -ExecutionPolicy RemoteSigned")]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"travis-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#travis-cli"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://github.com/travis-ci/travis.rb#installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis CLI"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("To encrypt a file in reliable manner use a Linux VM or container because this does not work under Windows. For example with https://hub.docker.com/r/caktux/travis-cli/:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker pull caktux/travis-cli\n// Mount your project as volume\n// Override the default entry point "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("which")]),t._v(" automatically launch the travis CLI with provided arguments\n// otherwise you cannot "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" multiple commands\ndocker run -it --name travis -v d:/Development/kalisio/kaabah:/project --entrypoint"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v(" --rm caktux/travis-cli "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n$ travis login\n$ travis encrypt-file ssh.pem\n")])])]),e("p",[t._v("Add the output to your build script:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("before_install:\n  - openssl aes-256-cbc -K "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$encrypted_12c8071d2874_key")]),t._v(" -iv "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$encrypted_12c8071d2874_iv")]),t._v(" -in ssh.pem.enc -out ssh.pem -d\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);