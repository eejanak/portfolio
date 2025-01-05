import{g as v}from"./NavBar-bde9a36b.js";import{_,u as s,p as m,R as d}from"./ReactPlayer-9ff42813.js";var i=Object.defineProperty,O=Object.getOwnPropertyDescriptor,b=Object.getOwnPropertyNames,E=Object.prototype.hasOwnProperty,f=(e,a)=>{for(var r in a)i(e,r,{get:a[r],enumerable:!0})},z=(e,a,r,o)=>{if(a&&typeof a=="object"||typeof a=="function")for(let y of b(a))!E.call(e,y)&&y!==r&&i(e,y,{get:()=>a[y],enumerable:!(o=O(a,y))||o.enumerable});return e},h=e=>z(i({},"__esModule",{value:!0}),e),c={};f(c,{default:()=>D});var k=h(c),l=s,t=m,D=[{key:"youtube",name:"YouTube",canPlay:t.canPlay.youtube,lazyPlayer:(0,l.lazy)(()=>_(()=>import("./YouTube-312ffc43.js").then(e=>e.Y),["assets/YouTube-312ffc43.js","assets/NavBar-bde9a36b.js","assets/ReactPlayer-9ff42813.js"]))},{key:"soundcloud",name:"SoundCloud",canPlay:t.canPlay.soundcloud,lazyPlayer:(0,l.lazy)(()=>_(()=>import("./SoundCloud-b94591cf.js").then(e=>e.S),["assets/SoundCloud-b94591cf.js","assets/NavBar-bde9a36b.js","assets/ReactPlayer-9ff42813.js"]))},{key:"vimeo",name:"Vimeo",canPlay:t.canPlay.vimeo,lazyPlayer:(0,l.lazy)(()=>_(()=>import("./Vimeo-3f5b3fe5.js").then(e=>e.V),["assets/Vimeo-3f5b3fe5.js","assets/NavBar-bde9a36b.js","assets/ReactPlayer-9ff42813.js"]))},{key:"facebook",name:"Facebook",canPlay:t.canPlay.facebook,lazyPlayer:(0,l.lazy)(()=>_(()=>import("./Facebook-0aa3a42d.js").then(e=>e.F),["assets/Facebook-0aa3a42d.js","assets/NavBar-bde9a36b.js","assets/ReactPlayer-9ff42813.js"]))},{key:"streamable",name:"Streamable",canPlay:t.canPlay.streamable,lazyPlayer:(0,l.lazy)(()=>_(()=>import("./Streamable-2e63b4e2.js").then(e=>e.S),["assets/Streamable-2e63b4e2.js","assets/NavBar-bde9a36b.js","assets/ReactPlayer-9ff42813.js"]))},{key:"wistia",name:"Wistia",canPlay:t.canPlay.wistia,lazyPlayer:(0,l.lazy)(()=>_(()=>import("./Wistia-dd0afedc.js").then(e=>e.W),["assets/Wistia-dd0afedc.js","assets/NavBar-bde9a36b.js","assets/ReactPlayer-9ff42813.js"]))},{key:"twitch",name:"Twitch",canPlay:t.canPlay.twitch,lazyPlayer:(0,l.lazy)(()=>_(()=>import("./Twitch-791e34ec.js").then(e=>e.T),["assets/Twitch-791e34ec.js","assets/NavBar-bde9a36b.js","assets/ReactPlayer-9ff42813.js"]))},{key:"dailymotion",name:"DailyMotion",canPlay:t.canPlay.dailymotion,lazyPlayer:(0,l.lazy)(()=>_(()=>import("./DailyMotion-bc70b113.js").then(e=>e.D),["assets/DailyMotion-bc70b113.js","assets/NavBar-bde9a36b.js","assets/ReactPlayer-9ff42813.js"]))},{key:"mixcloud",name:"Mixcloud",canPlay:t.canPlay.mixcloud,lazyPlayer:(0,l.lazy)(()=>_(()=>import("./Mixcloud-d26fae10.js").then(e=>e.M),["assets/Mixcloud-d26fae10.js","assets/NavBar-bde9a36b.js","assets/ReactPlayer-9ff42813.js"]))},{key:"vidyard",name:"Vidyard",canPlay:t.canPlay.vidyard,lazyPlayer:(0,l.lazy)(()=>_(()=>import("./Vidyard-2f2adf8b.js").then(e=>e.V),["assets/Vidyard-2f2adf8b.js","assets/NavBar-bde9a36b.js","assets/ReactPlayer-9ff42813.js"]))},{key:"kaltura",name:"Kaltura",canPlay:t.canPlay.kaltura,lazyPlayer:(0,l.lazy)(()=>_(()=>import("./Kaltura-11831563.js").then(e=>e.K),["assets/Kaltura-11831563.js","assets/NavBar-bde9a36b.js","assets/ReactPlayer-9ff42813.js"]))},{key:"file",name:"FilePlayer",canPlay:t.canPlay.file,canEnablePIP:e=>t.canPlay.file(e)&&(document.pictureInPictureEnabled||(0,l.supportsWebKitPresentationMode)())&&!t.AUDIO_EXTENSIONS.test(e),lazyPlayer:(0,l.lazy)(()=>_(()=>import("./FilePlayer-a1f7a1bd.js").then(e=>e.F),["assets/FilePlayer-a1f7a1bd.js","assets/NavBar-bde9a36b.js","assets/ReactPlayer-9ff42813.js"]))}],R=Object.create,n=Object.defineProperty,w=Object.getOwnPropertyDescriptor,I=Object.getOwnPropertyNames,T=Object.getPrototypeOf,V=Object.prototype.hasOwnProperty,g=(e,a)=>{for(var r in a)n(e,r,{get:a[r],enumerable:!0})},u=(e,a,r,o)=>{if(a&&typeof a=="object"||typeof a=="function")for(let y of I(a))!V.call(e,y)&&y!==r&&n(e,y,{get:()=>a[y],enumerable:!(o=w(a,y))||o.enumerable});return e},j=(e,a,r)=>(r=e!=null?R(T(e)):{},u(a||!e||!e.__esModule?n(r,"default",{value:e,enumerable:!0}):r,e)),A=e=>u(n({},"__esModule",{value:!0}),e),p={};g(p,{default:()=>M});var L=A(p),P=j(k),x=d;const S=P.default[P.default.length-1];var M=(0,x.createReactPlayer)(P.default,S);const F=v(L);export{F as R};