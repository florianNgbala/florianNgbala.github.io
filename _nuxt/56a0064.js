(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{236:function(e,t,r){var content=r(240);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(50).default)("bad8e090",content,!0,{sourceMap:!1})},237:function(e,t,r){e.exports=r.p+"img/vue.3260de0.png"},239:function(e,t,r){"use strict";r(236)},240:function(e,t,r){var n=r(49)((function(i){return i[1]}));n.push([e.i,'.container{\n  margin:0 auto;\n  min-height:100vh;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  text-align:center\n}\n.title{\n  font-family:"Quicksand","Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n  display:block;\n  font-weight:300;\n  font-size:100px;\n  color:#35495e;\n  letter-spacing:1px\n}\n.subtitle{\n  font-weight:300;\n  font-size:42px;\n  color:#526488;\n  word-spacing:5px;\n  padding-bottom:15px\n}\n.links{\n  padding-top:15px\n}',""]),e.exports=n},241:function(e,t,r){"use strict";r.r(t);var n=r(6),o=(r(35),r(29),r(238)),c={components:{QrcodeStream:o.QrcodeStream,QrcodeDropZone:o.QrcodeDropZone,QrcodeCapture:o.QrcodeCapture},data:function(){return{result:"",error:""}},methods:{onDecode:function(e){console.log("RESULT",e),this.result=e},onInit:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e;case 3:r.next=9;break;case 5:r.prev=5,r.t0=r.catch(0),console.log("ERRROR",r.t0),"NotAllowedError"===r.t0.name?t.error="ERROR: you need to grant camera access permisson":"NotFoundError"===r.t0.name?t.error="ERROR: no camera on this device":"NotSupportedError"===r.t0.name?t.error="ERROR: secure context required (HTTPS, localhost)":"NotReadableError"===r.t0.name?t.error="ERROR: is the camera already in use?":"OverconstrainedError"===r.t0.name?t.error="ERROR: installed cameras are not suitable":"StreamApiNotSupportedError"===r.t0.name&&(t.error="ERROR: Stream API is not supported in this browser");case 9:case"end":return r.stop()}}),r,null,[[0,5]])})))()}}},l=(r(239),r(34)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",[n("Logo"),e._v(" "),n("h1",{staticClass:"bg-blue-200 w-32"},[e._v("\n        florianNgbala.github.io/\n      ")]),e._v(" "),n("img",{staticClass:"w-12 h-12 mx-auto mt-3",attrs:{src:r(237)}}),e._v(" "),n("p",{staticClass:"decode-result"},[e._v("Last result: "),n("b",[e._v(e._s(e.result))])]),e._v(" "),n("p",{staticClass:"font-bold text-red"},[e._v("Erreur : "+e._s(e.error))]),e._v(" "),n("qrcode-stream",{on:{decode:e.onDecode,init:e.onInit}}),e._v(" "),n("qrcode-drop-zone"),e._v(" "),n("qrcode-capture"),e._v(" "),e._m(0)],1)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"links"},[r("a",{staticClass:"button--green",attrs:{href:"https://nuxtjs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("\n\n        \n          Documentation\n        ")]),e._v(" "),r("a",{staticClass:"button--grey",attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("\n          GitHub\n        ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Logo:r(112).default})}}]);