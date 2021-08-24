(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4468],{3905:function(e,a,n){"use strict";n.r(a),n.d(a,{MDXContext:function(){return l},MDXProvider:function(){return c},mdx:function(){return u},useMDXComponents:function(){return s},withMDXComponents:function(){return p}});var d=n(2784);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&(e[d]=n[d])}return e}).apply(this,arguments)}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);a&&(d=d.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,d)}return n}function m(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function t(e,a){if(null==e)return{};var n,d,r=function(e,a){if(null==e)return{};var n,d,r={},o=Object.keys(e);for(d=0;d<o.length;d++)n=o[d],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(d=0;d<o.length;d++)n=o[d],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=d.createContext({}),p=function(e){return function(a){var n=s(a.components);return d.createElement(e,o({},a,{components:n}))}},s=function(e){var a=d.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):m(m({},a),e)),n},c=function(e){var a=s(e.components);return d.createElement(l.Provider,{value:a},e.children)},x={inlineCode:"code",wrapper:function(e){var a=e.children;return d.createElement(d.Fragment,{},a)}},f=d.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=t(e,["components","mdxType","originalType","parentName"]),p=s(n),c=r,f=p["".concat(i,".").concat(c)]||p[c]||x[c]||o;return n?d.createElement(f,m(m({ref:a},l),{},{components:n})):d.createElement(f,m({ref:a},l))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var m={};for(var t in a)hasOwnProperty.call(a,t)&&(m[t]=a[t]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var l=2;l<o;l++)i[l]=n[l];return d.createElement.apply(null,i)}return d.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36942:function(e,a,n){"use strict";n.r(a),n.d(a,{frontMatter:function(){return m},metadata:function(){return t},toc:function(){return l},default:function(){return s}});var d=n(22122),r=n(19756),o=(n(2784),n(3905)),i=["components"],m={title:"Command line reference",sidebar_label:"CLI reference",id:"cli"},t={unversionedId:"cli",id:"cli",isDocsHomePage:!1,title:"Command line reference",description:"Commands",source:"@site/docs/cli.md",sourceDirName:".",slug:"/cli",permalink:"/docs/cli",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/cli.md",version:"current",sidebar_label:"CLI reference",frontMatter:{title:"Command line reference",sidebar_label:"CLI reference",id:"cli"},sidebar:"someSidebar",previous:{title:"Still images",permalink:"/docs/stills"},next:{title:"Configuration file",permalink:"/docs/config"}},l=[{value:"Commands",id:"commands",children:[{value:"<code>npx remotion preview</code>",id:"npx-remotion-preview",children:[]},{value:"<code>npx remotion render</code>",id:"npx-remotion-render",children:[]},{value:"<code>npx remotion still</code>",id:"npx-remotion-still",children:[]},{value:"<code>npx remotion upgrade</code>",id:"npx-remotion-upgrade",children:[]},{value:"<code>npx remotion --help</code>",id:"npx-remotion---help",children:[]}]},{value:"Flags",id:"flags",children:[{value:"<code>--props</code>",id:"--props",children:[]},{value:"<code>--concurrency</code>",id:"--concurrency",children:[]},{value:"<code>--pixel-format</code>",id:"--pixel-format",children:[]},{value:"<code>--image-format</code>",id:"--image-format",children:[]},{value:"<code>--config</code>",id:"--config",children:[]},{value:"<code>--env-file</code>",id:"--env-file",children:[]},{value:"<code>--quality</code>",id:"--quality",children:[]},{value:"<code>--overwrite</code>",id:"--overwrite",children:[]},{value:"<code>--sequence</code>",id:"--sequence",children:[]},{value:"<code>--codec</code>",id:"--codec",children:[]},{value:"<code>--prores-profile</code>",id:"--prores-profile",children:[]},{value:"<code>--crf</code>",id:"--crf",children:[]},{value:"<code>--browser-executable</code>",id:"--browser-executable",children:[]},{value:"<code>--frames</code>",id:"--frames",children:[]},{value:"<code>--frame</code>",id:"--frame",children:[]},{value:"<code>--bundle-cache</code>",id:"--bundle-cache",children:[]},{value:"<code>--log</code>",id:"--log",children:[]},{value:"<code>--port</code>",id:"--port",children:[]},{value:"<code>--help</code>",id:"--help",children:[]}]},{value:"Example command",id:"example-command",children:[]},{value:"See also",id:"see-also",children:[]}],p={toc:l};function s(e){var a=e.components,n=(0,r.default)(e,i);return(0,o.mdx)("wrapper",(0,d.default)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("h2",{id:"commands"},"Commands"),(0,o.mdx)("p",null,"The following commands are available - you can always run them using ",(0,o.mdx)("inlineCode",{parentName:"p"},"npx remotion")," or even without the ",(0,o.mdx)("inlineCode",{parentName:"p"},"npx")," prefix if you put the command inside an npm script."),(0,o.mdx)("h3",{id:"npx-remotion-preview"},(0,o.mdx)("inlineCode",{parentName:"h3"},"npx remotion preview")),(0,o.mdx)("p",null,"Start the server which allows you to preview the Remotion video. The only argument to pass is the entry file:"),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"npx remotion preview src/index.tsx"))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki min-dark",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"npx remotion preview src/index.tsx")))))),(0,o.mdx)("h3",{id:"npx-remotion-render"},(0,o.mdx)("inlineCode",{parentName:"h3"},"npx remotion render")),(0,o.mdx)("p",null,"Render a video based on the entry point, the composition ID and save it to the output location."),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"npx remotion render "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"<"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"entry-file"),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},">"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"<"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"composition-id"),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},">"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"<"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"output-location"),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},">"))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki min-dark",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"npx remotion render "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"<"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"entry-file"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},">"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"<"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"composition-id"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},">"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"<"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"output-location"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},">")))))),(0,o.mdx)("h3",{id:"npx-remotion-still"},(0,o.mdx)("inlineCode",{parentName:"h3"},"npx remotion still")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"Available from v2.3.")),(0,o.mdx)("p",null,"Render a still frame basd on the entry point, the composition ID and save it to the output location."),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"npx remotion still "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"<"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"entry-file"),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},">"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"<"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"composition-id"),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},">"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"<"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"output-location"),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},">"))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki min-dark",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"bash"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"npx remotion still "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"<"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"entry-file"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},">"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"<"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"composition-id"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},">"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"<"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"output-location"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},">")))))),(0,o.mdx)("h3",{id:"npx-remotion-upgrade"},(0,o.mdx)("inlineCode",{parentName:"h3"},"npx remotion upgrade")),(0,o.mdx)("p",null,"Upgrade all Remotion-related dependencies to the newest version."),(0,o.mdx)("h3",{id:"npx-remotion---help"},(0,o.mdx)("inlineCode",{parentName:"h3"},"npx remotion --help")),(0,o.mdx)("p",null,"Prints the list of commands and flags for quick lookup."),(0,o.mdx)("h2",{id:"flags"},"Flags"),(0,o.mdx)("p",null,"Besides choosing a video and output location with the command line arguments, the following flags are supported:"),(0,o.mdx)("h3",{id:"--props"},(0,o.mdx)("inlineCode",{parentName:"h3"},"--props")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"available for ",(0,o.mdx)("inlineCode",{parentName:"em"},"preview"),", ",(0,o.mdx)("inlineCode",{parentName:"em"},"render"),", ",(0,o.mdx)("inlineCode",{parentName:"em"},"still")," commands")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/parametrized-rendering#passing-input-props-in-the-cli"},"React Props to pass to the root component of your video.")," Must be a serialized JSON string (",(0,o.mdx)("inlineCode",{parentName:"p"},'--props=\'{"hello": "world"}\''),") or a path to a JSON file (",(0,o.mdx)("inlineCode",{parentName:"p"},"./path/to/props.json"),")."),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"Inline JSON string isn't supported on Windows because it removes the ",(0,o.mdx)("inlineCode",{parentName:"p"},'"')," character, use a temporary file instead."))),(0,o.mdx)("h3",{id:"--concurrency"},(0,o.mdx)("inlineCode",{parentName:"h3"},"--concurrency")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"available for ",(0,o.mdx)("inlineCode",{parentName:"em"},"render")," command")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/config#setconcurrency"},"How many CPU threads to use.")," Minimum 1. The maximum is the amount of threads you have (In Node.JS ",(0,o.mdx)("inlineCode",{parentName:"p"},"os.cpus().length"),")."),(0,o.mdx)("h3",{id:"--pixel-format"},(0,o.mdx)("inlineCode",{parentName:"h3"},"--pixel-format")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"available for ",(0,o.mdx)("inlineCode",{parentName:"em"},"render")," command")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/config#setpixelformat"},"Set a custom pixel format. See here for available values.")),(0,o.mdx)("h3",{id:"--image-format"},(0,o.mdx)("inlineCode",{parentName:"h3"},"--image-format")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"available for ",(0,o.mdx)("inlineCode",{parentName:"em"},"render"),", ",(0,o.mdx)("inlineCode",{parentName:"em"},"still")," commands")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/config#setimageformat"},(0,o.mdx)("inlineCode",{parentName:"a"},"jpeg")," or ",(0,o.mdx)("inlineCode",{parentName:"a"},"png")," - JPEG is faster, but doesn't support transparency.")," The default image format is ",(0,o.mdx)("inlineCode",{parentName:"p"},"jpeg")," since v1.1. Flag available since v1.4."),(0,o.mdx)("h3",{id:"--config"},(0,o.mdx)("inlineCode",{parentName:"h3"},"--config")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"available for ",(0,o.mdx)("inlineCode",{parentName:"em"},"preview"),", ",(0,o.mdx)("inlineCode",{parentName:"em"},"render"),", ",(0,o.mdx)("inlineCode",{parentName:"em"},"still")," commands")),(0,o.mdx)("p",null,"Specify a location for the Remotion config file. Available in v1.2 and later."),(0,o.mdx)("h3",{id:"--env-file"},(0,o.mdx)("inlineCode",{parentName:"h3"},"--env-file")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"available for ",(0,o.mdx)("inlineCode",{parentName:"em"},"preview"),", ",(0,o.mdx)("inlineCode",{parentName:"em"},"render"),", ",(0,o.mdx)("inlineCode",{parentName:"em"},"still")," commands")),(0,o.mdx)("p",null,"Specify a location for a dotenv file. Default ",(0,o.mdx)("inlineCode",{parentName:"p"},".env"),". Available in v2.2 and later."),(0,o.mdx)("h3",{id:"--quality"},(0,o.mdx)("inlineCode",{parentName:"h3"},"--quality")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"available for ",(0,o.mdx)("inlineCode",{parentName:"em"},"render"),", ",(0,o.mdx)("inlineCode",{parentName:"em"},"still")," commands")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/config#setquality"},"Value between 0 and 100 for JPEG rendering quality"),". Doesn't work when PNG frames are rendered. Available since v1.4."),(0,o.mdx)("h3",{id:"--overwrite"},(0,o.mdx)("inlineCode",{parentName:"h3"},"--overwrite")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"available for ",(0,o.mdx)("inlineCode",{parentName:"em"},"render"),", ",(0,o.mdx)("inlineCode",{parentName:"em"},"still")," commands")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/config#setoverwriteoutput"},"Write to output even if file already exists.")),(0,o.mdx)("h3",{id:"--sequence"},(0,o.mdx)("inlineCode",{parentName:"h3"},"--sequence")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"available for ",(0,o.mdx)("inlineCode",{parentName:"em"},"render")," command")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/config#setimagesequence"},"Pass this flag if you want an image sequence as the output instead of a video.")," Available since v1.4."),(0,o.mdx)("h3",{id:"--codec"},(0,o.mdx)("inlineCode",{parentName:"h3"},"--codec")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"available for ",(0,o.mdx)("inlineCode",{parentName:"em"},"render")," command")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/config#setcodec"},(0,o.mdx)("inlineCode",{parentName:"a"},"h264")," or ",(0,o.mdx)("inlineCode",{parentName:"a"},"h265")," or ",(0,o.mdx)("inlineCode",{parentName:"a"},"png")," or ",(0,o.mdx)("inlineCode",{parentName:"a"},"vp8")," or ",(0,o.mdx)("inlineCode",{parentName:"a"},"vp9")," or ",(0,o.mdx)("inlineCode",{parentName:"a"},"mp3")," or ",(0,o.mdx)("inlineCode",{parentName:"a"},"aac")," or ",(0,o.mdx)("inlineCode",{parentName:"a"},"wav")," or ",(0,o.mdx)("inlineCode",{parentName:"a"},"prores")," or ",(0,o.mdx)("inlineCode",{parentName:"a"},"h264-mkv")),". If you don't supply ",(0,o.mdx)("inlineCode",{parentName:"p"},"--codec"),", it will use the H.264 encoder. Available since v1.4."),(0,o.mdx)("h3",{id:"--prores-profile"},(0,o.mdx)("inlineCode",{parentName:"h3"},"--prores-profile")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"available for ",(0,o.mdx)("inlineCode",{parentName:"em"},"render")," command")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/config#setproresprofile"},"Set the ProRes profile"),". This option is only valid if the ",(0,o.mdx)("a",{parentName:"p",href:"#--codec"},(0,o.mdx)("inlineCode",{parentName:"a"},"codec"))," has been set to ",(0,o.mdx)("inlineCode",{parentName:"p"},"prores"),". Possible values: ",(0,o.mdx)("inlineCode",{parentName:"p"},"4444-xq"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"4444"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"hq"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"standard"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"light"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"proxy"),". See ",(0,o.mdx)("a",{parentName:"p",href:"https://video.stackexchange.com/a/14715"},"here")," for explanation of possible values. Default: ",(0,o.mdx)("inlineCode",{parentName:"p"},"hq"),". Available since v2.1.6."),(0,o.mdx)("h3",{id:"--crf"},(0,o.mdx)("inlineCode",{parentName:"h3"},"--crf")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"available for ",(0,o.mdx)("inlineCode",{parentName:"em"},"render")," command")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/config#setcrf"},"To set Constant Rate Factor (CRF) of the output"),". Minimum 0. Use this rate control mode if you want to keep the best quality and care less about the file size. Available since v1.4."),(0,o.mdx)("h3",{id:"--browser-executable"},(0,o.mdx)("inlineCode",{parentName:"h3"},"--browser-executable")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"available for ",(0,o.mdx)("inlineCode",{parentName:"em"},"still"),", ",(0,o.mdx)("inlineCode",{parentName:"em"},"render")," commands")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/config#setbrowserexecutable"},"Path to a Chrome executable"),". If not specified and Remotion cannot find one, it will download one during rendering. Available since v1.5."),(0,o.mdx)("h3",{id:"--frames"},(0,o.mdx)("inlineCode",{parentName:"h3"},"--frames")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"available for ",(0,o.mdx)("inlineCode",{parentName:"em"},"render")," command")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/config#setframerange"},"Render a still frame or a subset of a video"),". Example: ",(0,o.mdx)("inlineCode",{parentName:"p"},"--frames=0-9")," (To select the first 10 frames) or ",(0,o.mdx)("inlineCode",{parentName:"p"},"--frames=50")," (To render a still of the 51st frame). Available since v2.0."),(0,o.mdx)("h3",{id:"--frame"},(0,o.mdx)("inlineCode",{parentName:"h3"},"--frame")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"available for ",(0,o.mdx)("inlineCode",{parentName:"em"},"still")," command")),(0,o.mdx)("p",null,"Which frame should be rendered when rendering a still. Example ",(0,o.mdx)("inlineCode",{parentName:"p"},"--frame=10"),". Default ",(0,o.mdx)("inlineCode",{parentName:"p"},"0"),". Available from v2.3"),(0,o.mdx)("h3",{id:"--bundle-cache"},(0,o.mdx)("inlineCode",{parentName:"h3"},"--bundle-cache")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"available for ",(0,o.mdx)("inlineCode",{parentName:"em"},"still"),", ",(0,o.mdx)("inlineCode",{parentName:"em"},"render")," commands")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/config#setcachingenabled"},"Enable or disable Webpack caching"),". This flag is enabled by default, use ",(0,o.mdx)("inlineCode",{parentName:"p"},"--bundle-cache=false")," to disable caching. Available since v2.0."),(0,o.mdx)("h3",{id:"--log"},(0,o.mdx)("inlineCode",{parentName:"h3"},"--log")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"available for ",(0,o.mdx)("inlineCode",{parentName:"em"},"preview"),", ",(0,o.mdx)("inlineCode",{parentName:"em"},"still"),", ",(0,o.mdx)("inlineCode",{parentName:"em"},"render")," commands")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/config#setlevel"},"Set the log level"),". Increase or decrease the amount of output. Acceptable values: ",(0,o.mdx)("inlineCode",{parentName:"p"},"error"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"warn"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"info")," (",(0,o.mdx)("em",{parentName:"p"},"default"),"), ",(0,o.mdx)("inlineCode",{parentName:"p"},"verbose")),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"If you don't feel like passing command line flags every time, consider creating a ",(0,o.mdx)("inlineCode",{parentName:"p"},"remotion.config.ts")," ",(0,o.mdx)("a",{parentName:"p",href:"/docs/config"},"config file"),"."))),(0,o.mdx)("h3",{id:"--port"},(0,o.mdx)("inlineCode",{parentName:"h3"},"--port")),(0,o.mdx)("p",null,(0,o.mdx)("em",{parentName:"p"},"available for ",(0,o.mdx)("inlineCode",{parentName:"em"},"preview"),", ",(0,o.mdx)("inlineCode",{parentName:"em"},"still"),", ",(0,o.mdx)("inlineCode",{parentName:"em"},"render")," commands")),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/config#setPort"},"Set a custom HTTP server port"),". If not defined, Remotion will try to find a free port."),(0,o.mdx)("h3",{id:"--help"},(0,o.mdx)("inlineCode",{parentName:"h3"},"--help")),(0,o.mdx)("p",null,"Print the list of available CLI commands and flags."),(0,o.mdx)("h2",{id:"example-command"},"Example command"),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"undefined"}},"npx remotion render --codec=vp8 src/index.tsx HelloWorld video.webm"))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki min-dark",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"undefined"}},"npx remotion render --codec=vp8 src/index.tsx HelloWorld video.webm")))))),(0,o.mdx)("h2",{id:"see-also"},"See also"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/render"},"Render your video")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/docs/config"},"Configuration file"))))}s.isMDXComponent=!0}}]);