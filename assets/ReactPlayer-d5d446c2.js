import{b as B,d as Ne,e as j}from"./NavBar-da0edcd8.js";var ne={exports:{}},xe="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",He=xe,ke=He;function ae(){}function oe(){}oe.resetWarningCache=ae;var Ve=function(){function e(n,a,o,s,c,y){if(y!==ke){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:oe,resetWarningCache:ae};return r.PropTypes=r,r};ne.exports=Ve();var Be=ne.exports;const Fe="modulepreload",ze=function(e){return"/"+e},q={},We=function(t,r,n){if(!r||r.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(r.map(o=>{if(o=ze(o),o in q)return;q[o]=!0;const s=o.endsWith(".css"),c=s?'[rel="stylesheet"]':"";if(!!n)for(let f=a.length-1;f>=0;f--){const g=a[f];if(g.href===o&&(!s||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const p=document.createElement("link");if(p.rel=s?"stylesheet":Fe,s||(p.as="script",p.crossOrigin=""),p.href=o,document.head.appendChild(p),s)return new Promise((f,g)=>{p.addEventListener("load",f),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})};var Ke=function(t,r,n){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");typeof r=="function"&&(n=r,r={}),r=r||{},n=n||function(){},o.type=r.type||"text/javascript",o.charset=r.charset||"utf8",o.async="async"in r?!!r.async:!0,o.src=t,r.attrs&&Xe(o,r.attrs),r.text&&(o.text=""+r.text);var s="onload"in o?J:Ye;s(o,n),o.onload||J(o,n),a.appendChild(o)};function Xe(e,t){for(var r in t)e.setAttribute(r,t[r])}function J(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function Ye(e,t){e.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,t(null,e))}}var qe=function(t){return Je(t)&&!Ze(t)};function Je(e){return!!e&&typeof e=="object"}function Ze(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||et(e)}var Qe=typeof Symbol=="function"&&Symbol.for,Ge=Qe?Symbol.for("react.element"):60103;function et(e){return e.$$typeof===Ge}function tt(e){return Array.isArray(e)?[]:{}}function A(e,t){return t.clone!==!1&&t.isMergeableObject(e)?w(tt(e),e,t):e}function rt(e,t,r){return e.concat(t).map(function(n){return A(n,r)})}function nt(e,t){if(!t.customMerge)return w;var r=t.customMerge(e);return typeof r=="function"?r:w}function at(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function Z(e){return Object.keys(e).concat(at(e))}function se(e,t){try{return t in e}catch{return!1}}function ot(e,t){return se(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function st(e,t,r){var n={};return r.isMergeableObject(e)&&Z(e).forEach(function(a){n[a]=A(e[a],r)}),Z(t).forEach(function(a){ot(e,a)||(se(e,a)&&r.isMergeableObject(t[a])?n[a]=nt(a,r)(e[a],t[a],r):n[a]=A(t[a],r))}),n}function w(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||rt,r.isMergeableObject=r.isMergeableObject||qe,r.cloneUnlessOtherwiseSpecified=A;var n=Array.isArray(t),a=Array.isArray(e),o=n===a;return o?n?r.arrayMerge(e,t,r):st(e,t,r):A(t,r)}w.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(n,a){return w(n,a,r)},{})};var it=w,ie=it,lt=Object.create,L=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,ct=Object.getOwnPropertyNames,pt=Object.getPrototypeOf,ft=Object.prototype.hasOwnProperty,dt=(e,t)=>{for(var r in t)L(e,r,{get:t[r],enumerable:!0})},le=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of ct(t))!ft.call(e,a)&&a!==r&&L(e,a,{get:()=>t[a],enumerable:!(n=ut(t,a))||n.enumerable});return e},F=(e,t,r)=>(r=e!=null?lt(pt(e)):{},le(t||!e||!e.__esModule?L(r,"default",{value:e,enumerable:!0}):r,e)),yt=e=>le(L({},"__esModule",{value:!0}),e),ue={};dt(ue,{callPlayer:()=>Mt,getConfig:()=>Rt,getSDK:()=>At,isBlobUrl:()=>Lt,isMediaStream:()=>It,lazy:()=>vt,omit:()=>Ct,parseEndTime:()=>Tt,parseStartTime:()=>wt,queryString:()=>Et,randomString:()=>St,supportsWebKitPresentationMode:()=>$t});var z=yt(ue),ht=F(B),_t=F(Ke),mt=F(ie);const vt=e=>ht.default.lazy(async()=>{const t=await e();return typeof t.default=="function"?t:t.default}),gt=/[?&#](?:start|t)=([0-9hms]+)/,Pt=/[?&#]end=([0-9hms]+)/,H=/(\d+)(h|m|s)/g,Ot=/^\d+$/;function ce(e,t){if(e instanceof Array)return;const r=e.match(t);if(r){const n=r[1];if(n.match(H))return bt(n);if(Ot.test(n))return parseInt(n)}}function bt(e){let t=0,r=H.exec(e);for(;r!==null;){const[,n,a]=r;a==="h"&&(t+=parseInt(n,10)*60*60),a==="m"&&(t+=parseInt(n,10)*60),a==="s"&&(t+=parseInt(n,10)),r=H.exec(e)}return t}function wt(e){return ce(e,gt)}function Tt(e){return ce(e,Pt)}function St(){return Math.random().toString(36).substr(2,5)}function Et(e){return Object.keys(e).map(t=>`${t}=${e[t]}`).join("&")}function D(e){return window[e]?window[e]:window.exports&&window.exports[e]?window.exports[e]:window.module&&window.module.exports&&window.module.exports[e]?window.module.exports[e]:null}const P={},At=function(t,r,n=null,a=()=>!0,o=_t.default){const s=D(r);return s&&a(s)?Promise.resolve(s):new Promise((c,y)=>{if(P[t]){P[t].push({resolve:c,reject:y});return}P[t]=[{resolve:c,reject:y}];const p=f=>{P[t].forEach(g=>g.resolve(f))};if(n){const f=window[n];window[n]=function(){f&&f(),p(D(r))}}o(t,f=>{f?(P[t].forEach(g=>g.reject(f)),P[t]=null):n||p(D(r))})})};function Rt(e,t){return(0,mt.default)(t.config,e.config)}function Ct(e,...t){const r=[].concat(...t),n={},a=Object.keys(e);for(const o of a)r.indexOf(o)===-1&&(n[o]=e[o]);return n}function Mt(e,...t){if(!this.player||!this.player[e]){let r=`ReactPlayer: ${this.constructor.displayName} player could not call %c${e}%c – `;return this.player?this.player[e]||(r+="The method was not available"):r+="The player was not available",console.warn(r,"font-weight: bold",""),null}return this.player[e](...t)}function It(e){return typeof window<"u"&&typeof window.MediaStream<"u"&&e instanceof window.MediaStream}function Lt(e){return/^blob:/.test(e)}function $t(e=document.createElement("video")){const t=/iPhone|iPod/.test(navigator.userAgent)===!1;return e.webkitSupportsPresentationMode&&typeof e.webkitSetPresentationMode=="function"&&t}var W=Object.defineProperty,Ut=Object.getOwnPropertyDescriptor,jt=Object.getOwnPropertyNames,Dt=Object.prototype.hasOwnProperty,Nt=(e,t)=>{for(var r in t)W(e,r,{get:t[r],enumerable:!0})},xt=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of jt(t))!Dt.call(e,a)&&a!==r&&W(e,a,{get:()=>t[a],enumerable:!(n=Ut(t,a))||n.enumerable});return e},Ht=e=>xt(W({},"__esModule",{value:!0}),e),pe={};Nt(pe,{AUDIO_EXTENSIONS:()=>K,DASH_EXTENSIONS:()=>Te,FLV_EXTENSIONS:()=>Se,HLS_EXTENSIONS:()=>Y,MATCH_URL_DAILYMOTION:()=>Pe,MATCH_URL_FACEBOOK:()=>ye,MATCH_URL_FACEBOOK_WATCH:()=>he,MATCH_URL_KALTURA:()=>we,MATCH_URL_MIXCLOUD:()=>Oe,MATCH_URL_SOUNDCLOUD:()=>fe,MATCH_URL_STREAMABLE:()=>_e,MATCH_URL_TWITCH_CHANNEL:()=>ge,MATCH_URL_TWITCH_VIDEO:()=>ve,MATCH_URL_VIDYARD:()=>be,MATCH_URL_VIMEO:()=>de,MATCH_URL_WISTIA:()=>me,MATCH_URL_YOUTUBE:()=>k,VIDEO_EXTENSIONS:()=>X,canPlay:()=>kt});var Dr=Ht(pe),Q=z;const k=/(?:youtu\.be\/|youtube(?:-nocookie|education)?\.com\/(?:embed\/|v\/|watch\/|watch\?v=|watch\?.+&v=|shorts\/|live\/))((\w|-){11})|youtube\.com\/playlist\?list=|youtube\.com\/user\//,fe=/(?:soundcloud\.com|snd\.sc)\/[^.]+$/,de=/vimeo\.com\/(?!progressive_redirect).+/,ye=/^https?:\/\/(www\.)?facebook\.com.*\/(video(s)?|watch|story)(\.php?|\/).+$/,he=/^https?:\/\/fb\.watch\/.+$/,_e=/streamable\.com\/([a-z0-9]+)$/,me=/(?:wistia\.(?:com|net)|wi\.st)\/(?:medias|embed)\/(?:iframe\/)?([^?]+)/,ve=/(?:www\.|go\.)?twitch\.tv\/videos\/(\d+)($|\?)/,ge=/(?:www\.|go\.)?twitch\.tv\/([a-zA-Z0-9_]+)($|\?)/,Pe=/^(?:(?:https?):)?(?:\/\/)?(?:www\.)?(?:(?:dailymotion\.com(?:\/embed)?\/video)|dai\.ly)\/([a-zA-Z0-9]+)(?:_[\w_-]+)?(?:[\w.#_-]+)?/,Oe=/mixcloud\.com\/([^/]+\/[^/]+)/,be=/vidyard.com\/(?:watch\/)?([a-zA-Z0-9-_]+)/,we=/^https?:\/\/[a-zA-Z]+\.kaltura.(com|org)\/p\/([0-9]+)\/sp\/([0-9]+)00\/embedIframeJs\/uiconf_id\/([0-9]+)\/partner_id\/([0-9]+)(.*)entry_id.([a-zA-Z0-9-_].*)$/,K=/\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i,X=/\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,Y=/\.(m3u8)($|\?)/i,Te=/\.(mpd)($|\?)/i,Se=/\.(flv)($|\?)/i,V=e=>{if(e instanceof Array){for(const t of e)if(typeof t=="string"&&V(t)||V(t.src))return!0;return!1}return(0,Q.isMediaStream)(e)||(0,Q.isBlobUrl)(e)?!0:K.test(e)||X.test(e)||Y.test(e)||Te.test(e)||Se.test(e)},kt={youtube:e=>e instanceof Array?e.every(t=>k.test(t)):k.test(e),soundcloud:e=>fe.test(e)&&!K.test(e),vimeo:e=>de.test(e)&&!X.test(e)&&!Y.test(e),facebook:e=>ye.test(e)||he.test(e),streamable:e=>_e.test(e),wistia:e=>me.test(e),twitch:e=>ve.test(e)||ge.test(e),dailymotion:e=>Pe.test(e),mixcloud:e=>Oe.test(e),vidyard:e=>be.test(e),kaltura:e=>we.test(e),file:V};var G=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Vt(e,t){return!!(e===t||G(e)&&G(t))}function Bt(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!Vt(e[r],t[r]))return!1;return!0}function Ft(e,t){t===void 0&&(t=Bt);var r,n=[],a,o=!1;function s(){for(var c=[],y=0;y<arguments.length;y++)c[y]=arguments[y];return o&&r===this&&t(c,n)||(a=e.apply(this,c),o=!0,r=this,n=c),a}return s}const zt=Object.freeze(Object.defineProperty({__proto__:null,default:Ft},Symbol.toStringTag,{value:"Module"})),Wt=Ne(zt);var Kt=typeof Element<"u",Xt=typeof Map=="function",Yt=typeof Set=="function",qt=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function I(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var r,n,a;if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!I(e[n],t[n]))return!1;return!0}var o;if(Xt&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(n=o.next()).done;)if(!t.has(n.value[0]))return!1;for(o=e.entries();!(n=o.next()).done;)if(!I(n.value[1],t.get(n.value[0])))return!1;return!0}if(Yt&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(n=o.next()).done;)if(!t.has(n.value[0]))return!1;return!0}if(qt&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(e[n]!==t[n])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(a=Object.keys(e),r=a.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[n]))return!1;if(Kt&&e instanceof Element)return!1;for(n=r;n--!==0;)if(!((a[n]==="_owner"||a[n]==="__v"||a[n]==="__o")&&e.$$typeof)&&!I(e[a[n]],t[a[n]]))return!1;return!0}return e!==e&&t!==t}var Ee=function(t,r){try{return I(t,r)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}},Jt=Object.create,$=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,Qt=Object.getOwnPropertyNames,Gt=Object.getPrototypeOf,er=Object.prototype.hasOwnProperty,tr=(e,t)=>{for(var r in t)$(e,r,{get:t[r],enumerable:!0})},Ae=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Qt(t))!er.call(e,a)&&a!==r&&$(e,a,{get:()=>t[a],enumerable:!(n=Zt(t,a))||n.enumerable});return e},rr=(e,t,r)=>(r=e!=null?Jt(Gt(e)):{},Ae(t||!e||!e.__esModule?$(r,"default",{value:e,enumerable:!0}):r,e)),nr=e=>Ae($({},"__esModule",{value:!0}),e),Re={};tr(Re,{defaultProps:()=>sr,propTypes:()=>or});var Ce=nr(Re),ar=rr(Be);const{string:h,bool:_,number:O,array:N,oneOfType:T,shape:v,object:m,func:u,node:ee}=ar.default,or={url:T([h,N,m]),playing:_,loop:_,controls:_,volume:O,muted:_,playbackRate:O,width:T([h,O]),height:T([h,O]),style:m,progressInterval:O,playsinline:_,pip:_,stopOnUnmount:_,light:T([_,h,m]),playIcon:ee,previewTabIndex:O,fallback:ee,oEmbedUrl:h,wrapper:T([h,u,v({render:u.isRequired})]),config:v({soundcloud:v({options:m}),youtube:v({playerVars:m,embedOptions:m,onUnstarted:u}),facebook:v({appId:h,version:h,playerId:h,attributes:m}),dailymotion:v({params:m}),vimeo:v({playerOptions:m,title:h}),file:v({attributes:m,tracks:N,forceVideo:_,forceAudio:_,forceHLS:_,forceSafariHLS:_,forceDisableHls:_,forceDASH:_,forceFLV:_,hlsOptions:m,hlsVersion:h,dashVersion:h,flvVersion:h}),wistia:v({options:m,playerId:h,customControls:N}),mixcloud:v({options:m}),twitch:v({options:m,playerId:h}),vidyard:v({options:m})}),onReady:u,onStart:u,onPlay:u,onPause:u,onBuffer:u,onBufferEnd:u,onEnded:u,onError:u,onDuration:u,onSeek:u,onPlaybackRateChange:u,onPlaybackQualityChange:u,onProgress:u,onClickPreview:u,onEnablePIP:u,onDisablePIP:u},d=()=>{},sr={playing:!1,loop:!1,controls:!1,volume:null,muted:!1,playbackRate:1,width:"640px",height:"360px",style:{},progressInterval:1e3,playsinline:!1,pip:!1,stopOnUnmount:!0,light:!1,fallback:null,wrapper:"div",previewTabIndex:0,oEmbedUrl:"https://noembed.com/embed?url={url}",config:{soundcloud:{options:{visual:!0,buying:!1,liking:!1,download:!1,sharing:!1,show_comments:!1,show_playcount:!1}},youtube:{playerVars:{playsinline:1,showinfo:0,rel:0,iv_load_policy:3,modestbranding:1},embedOptions:{},onUnstarted:d},facebook:{appId:"1309697205772819",version:"v3.3",playerId:null,attributes:{}},dailymotion:{params:{api:1,"endscreen-enable":!1}},vimeo:{playerOptions:{autopause:!1,byline:!1,portrait:!1,title:!1},title:null},file:{attributes:{},tracks:[],forceVideo:!1,forceAudio:!1,forceHLS:!1,forceDASH:!1,forceFLV:!1,hlsOptions:{},hlsVersion:"1.1.4",dashVersion:"3.1.3",flvVersion:"1.5.0",forceDisableHls:!1},wistia:{options:{},playerId:null,customControls:null},mixcloud:{options:{hide_cover:1}},twitch:{options:{},playerId:null},vidyard:{options:{}}},onReady:d,onStart:d,onPlay:d,onPause:d,onBuffer:d,onBufferEnd:d,onEnded:d,onError:d,onDuration:d,onSeek:d,onPlaybackRateChange:d,onPlaybackQualityChange:d,onProgress:d,onClickPreview:d,onEnablePIP:d,onDisablePIP:d};var ir=Object.create,R=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,ur=Object.getOwnPropertyNames,cr=Object.getPrototypeOf,pr=Object.prototype.hasOwnProperty,fr=(e,t,r)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,dr=(e,t)=>{for(var r in t)R(e,r,{get:t[r],enumerable:!0})},Me=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of ur(t))!pr.call(e,a)&&a!==r&&R(e,a,{get:()=>t[a],enumerable:!(n=lr(t,a))||n.enumerable});return e},Ie=(e,t,r)=>(r=e!=null?ir(cr(e)):{},Me(t||!e||!e.__esModule?R(r,"default",{value:e,enumerable:!0}):r,e)),yr=e=>Me(R({},"__esModule",{value:!0}),e),l=(e,t,r)=>(fr(e,typeof t!="symbol"?t+"":t,r),r),Le={};dr(Le,{default:()=>U});var hr=yr(Le),te=Ie(B),_r=Ie(Ee),$e=Ce,mr=z;const vr=5e3;class U extends te.Component{constructor(){super(...arguments),l(this,"mounted",!1),l(this,"isReady",!1),l(this,"isPlaying",!1),l(this,"isLoading",!0),l(this,"loadOnReady",null),l(this,"startOnPlay",!0),l(this,"seekOnPlay",null),l(this,"onDurationCalled",!1),l(this,"handlePlayerMount",t=>{if(this.player){this.progress();return}this.player=t,this.player.load(this.props.url),this.progress()}),l(this,"getInternalPlayer",t=>this.player?this.player[t]:null),l(this,"progress",()=>{if(this.props.url&&this.player&&this.isReady){const t=this.getCurrentTime()||0,r=this.getSecondsLoaded(),n=this.getDuration();if(n){const a={playedSeconds:t,played:t/n};r!==null&&(a.loadedSeconds=r,a.loaded=r/n),(a.playedSeconds!==this.prevPlayed||a.loadedSeconds!==this.prevLoaded)&&this.props.onProgress(a),this.prevPlayed=a.playedSeconds,this.prevLoaded=a.loadedSeconds}}this.progressTimeout=setTimeout(this.progress,this.props.progressFrequency||this.props.progressInterval)}),l(this,"handleReady",()=>{if(!this.mounted)return;this.isReady=!0,this.isLoading=!1;const{onReady:t,playing:r,volume:n,muted:a}=this.props;t(),!a&&n!==null&&this.player.setVolume(n),this.loadOnReady?(this.player.load(this.loadOnReady,!0),this.loadOnReady=null):r&&this.player.play(),this.handleDurationCheck()}),l(this,"handlePlay",()=>{this.isPlaying=!0,this.isLoading=!1;const{onStart:t,onPlay:r,playbackRate:n}=this.props;this.startOnPlay&&(this.player.setPlaybackRate&&n!==1&&this.player.setPlaybackRate(n),t(),this.startOnPlay=!1),r(),this.seekOnPlay&&(this.seekTo(this.seekOnPlay),this.seekOnPlay=null),this.handleDurationCheck()}),l(this,"handlePause",t=>{this.isPlaying=!1,this.isLoading||this.props.onPause(t)}),l(this,"handleEnded",()=>{const{activePlayer:t,loop:r,onEnded:n}=this.props;t.loopOnEnded&&r&&this.seekTo(0),r||(this.isPlaying=!1,n())}),l(this,"handleError",(...t)=>{this.isLoading=!1,this.props.onError(...t)}),l(this,"handleDurationCheck",()=>{clearTimeout(this.durationCheckTimeout);const t=this.getDuration();t?this.onDurationCalled||(this.props.onDuration(t),this.onDurationCalled=!0):this.durationCheckTimeout=setTimeout(this.handleDurationCheck,100)}),l(this,"handleLoaded",()=>{this.isLoading=!1})}componentDidMount(){this.mounted=!0}componentWillUnmount(){clearTimeout(this.progressTimeout),clearTimeout(this.durationCheckTimeout),this.isReady&&this.props.stopOnUnmount&&(this.player.stop(),this.player.disablePIP&&this.player.disablePIP()),this.mounted=!1}componentDidUpdate(t){if(!this.player)return;const{url:r,playing:n,volume:a,muted:o,playbackRate:s,pip:c,loop:y,activePlayer:p,disableDeferredLoading:f}=this.props;if(!(0,_r.default)(t.url,r)){if(this.isLoading&&!p.forceLoad&&!f&&!(0,mr.isMediaStream)(r)){console.warn(`ReactPlayer: the attempt to load ${r} is being deferred until the player has loaded`),this.loadOnReady=r;return}this.isLoading=!0,this.startOnPlay=!0,this.onDurationCalled=!1,this.player.load(r,this.isReady)}!t.playing&&n&&!this.isPlaying&&this.player.play(),t.playing&&!n&&this.isPlaying&&this.player.pause(),!t.pip&&c&&this.player.enablePIP&&this.player.enablePIP(),t.pip&&!c&&this.player.disablePIP&&this.player.disablePIP(),t.volume!==a&&a!==null&&this.player.setVolume(a),t.muted!==o&&(o?this.player.mute():(this.player.unmute(),a!==null&&setTimeout(()=>this.player.setVolume(a)))),t.playbackRate!==s&&this.player.setPlaybackRate&&this.player.setPlaybackRate(s),t.loop!==y&&this.player.setLoop&&this.player.setLoop(y)}getDuration(){return this.isReady?this.player.getDuration():null}getCurrentTime(){return this.isReady?this.player.getCurrentTime():null}getSecondsLoaded(){return this.isReady?this.player.getSecondsLoaded():null}seekTo(t,r,n){if(!this.isReady){t!==0&&(this.seekOnPlay=t,setTimeout(()=>{this.seekOnPlay=null},vr));return}if(r?r==="fraction":t>0&&t<1){const o=this.player.getDuration();if(!o){console.warn("ReactPlayer: could not seek using fraction – duration not yet available");return}this.player.seekTo(o*t,n);return}this.player.seekTo(t,n)}render(){const t=this.props.activePlayer;return t?te.default.createElement(t,{...this.props,onMount:this.handlePlayerMount,onReady:this.handleReady,onPlay:this.handlePlay,onPause:this.handlePause,onEnded:this.handleEnded,onLoaded:this.handleLoaded,onError:this.handleError}):null}}l(U,"displayName","Player");l(U,"propTypes",$e.propTypes);l(U,"defaultProps",$e.defaultProps);var gr=Object.create,C=Object.defineProperty,Pr=Object.getOwnPropertyDescriptor,Or=Object.getOwnPropertyNames,br=Object.getPrototypeOf,wr=Object.prototype.hasOwnProperty,Tr=(e,t,r)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Sr=(e,t)=>{for(var r in t)C(e,r,{get:t[r],enumerable:!0})},Ue=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of Or(t))!wr.call(e,a)&&a!==r&&C(e,a,{get:()=>t[a],enumerable:!(n=Pr(t,a))||n.enumerable});return e},M=(e,t,r)=>(r=e!=null?gr(br(e)):{},Ue(t||!e||!e.__esModule?C(r,"default",{value:e,enumerable:!0}):r,e)),Er=e=>Ue(C({},"__esModule",{value:!0}),e),i=(e,t,r)=>(Tr(e,typeof t!="symbol"?t+"":t,r),r),je={};Sr(je,{createReactPlayer:()=>Ur});var Nr=Er(je),b=M(B),Ar=M(ie),x=M(Wt),re=M(Ee),E=Ce,De=z,Rr=M(hr);const Cr=(0,De.lazy)(()=>We(()=>import("./Preview-3a72af43.js").then(e=>e.P),["assets/Preview-3a72af43.js","assets/NavBar-da0edcd8.js"])),Mr=typeof window<"u"&&window.document,Ir=typeof j<"u"&&j.window&&j.window.document,Lr=Object.keys(E.propTypes),$r=Mr||Ir?b.Suspense:()=>null,S=[],Ur=(e,t)=>{var r;return r=class extends b.Component{constructor(){super(...arguments),i(this,"state",{showPreview:!!this.props.light}),i(this,"references",{wrapper:n=>{this.wrapper=n},player:n=>{this.player=n}}),i(this,"handleClickPreview",n=>{this.setState({showPreview:!1}),this.props.onClickPreview(n)}),i(this,"showPreview",()=>{this.setState({showPreview:!0})}),i(this,"getDuration",()=>this.player?this.player.getDuration():null),i(this,"getCurrentTime",()=>this.player?this.player.getCurrentTime():null),i(this,"getSecondsLoaded",()=>this.player?this.player.getSecondsLoaded():null),i(this,"getInternalPlayer",(n="player")=>this.player?this.player.getInternalPlayer(n):null),i(this,"seekTo",(n,a,o)=>{if(!this.player)return null;this.player.seekTo(n,a,o)}),i(this,"handleReady",()=>{this.props.onReady(this)}),i(this,"getActivePlayer",(0,x.default)(n=>{for(const a of[...S,...e])if(a.canPlay(n))return a;return t||null})),i(this,"getConfig",(0,x.default)((n,a)=>{const{config:o}=this.props;return Ar.default.all([E.defaultProps.config,E.defaultProps.config[a]||{},o,o[a]||{}])})),i(this,"getAttributes",(0,x.default)(n=>(0,De.omit)(this.props,Lr))),i(this,"renderActivePlayer",n=>{if(!n)return null;const a=this.getActivePlayer(n);if(!a)return null;const o=this.getConfig(n,a.key);return b.default.createElement(Rr.default,{...this.props,key:a.key,ref:this.references.player,config:o,activePlayer:a.lazyPlayer||a,onReady:this.handleReady})})}shouldComponentUpdate(n,a){return!(0,re.default)(this.props,n)||!(0,re.default)(this.state,a)}componentDidUpdate(n){const{light:a}=this.props;!n.light&&a&&this.setState({showPreview:!0}),n.light&&!a&&this.setState({showPreview:!1})}renderPreview(n){if(!n)return null;const{light:a,playIcon:o,previewTabIndex:s,oEmbedUrl:c}=this.props;return b.default.createElement(Cr,{url:n,light:a,playIcon:o,previewTabIndex:s,oEmbedUrl:c,onClick:this.handleClickPreview})}render(){const{url:n,style:a,width:o,height:s,fallback:c,wrapper:y}=this.props,{showPreview:p}=this.state,f=this.getAttributes(n),g=typeof y=="string"?this.references.wrapper:void 0;return b.default.createElement(y,{ref:g,style:{...a,width:o,height:s},...f},b.default.createElement($r,{fallback:c},p?this.renderPreview(n):this.renderActivePlayer(n)))}},i(r,"displayName","ReactPlayer"),i(r,"propTypes",E.propTypes),i(r,"defaultProps",E.defaultProps),i(r,"addCustomPlayer",n=>{S.push(n)}),i(r,"removeCustomPlayers",()=>{S.length=0}),i(r,"canPlay",n=>{for(const a of[...S,...e])if(a.canPlay(n))return!0;return!1}),i(r,"canEnablePIP",n=>{for(const a of[...S,...e])if(a.canEnablePIP&&a.canEnablePIP(n))return!0;return!1}),r};export{Nr as R,We as _,Dr as p,z as u};
