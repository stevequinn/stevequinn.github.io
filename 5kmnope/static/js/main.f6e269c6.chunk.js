(this.webpackJsonp5kmnope=this.webpackJsonp5kmnope||[]).push([[0],{17:function(e,t,a){e.exports=a(26)},22:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(8),r=a.n(c),i=(a(22),a(16)),l=a(4),s=a.n(l),h=a(30),u=a(32),m=a(29),p=a(28),d=a(31);Number.prototype.toRad=function(){return this*Math.PI/180},Number.prototype.toDeg=function(){return 180*this/Math.PI};var w=function(e,t,a){a/=6371,t=t.toRad();var n=e[0].toRad(),o=e[1].toRad(),c=Math.asin(Math.sin(n)*Math.cos(a)+Math.cos(n)*Math.sin(a)*Math.cos(t)),r=o+Math.atan2(Math.sin(t)*Math.sin(a)*Math.cos(n),Math.cos(a)-Math.sin(n)*Math.sin(c));return isNaN(c)||isNaN(r)?null:[c.toDeg(),r.toDeg()]},g=new s.a.Icon({iconUrl:"nope.jpg",iconRetinaUrl:"nope.jpg",iconAnchor:null,popupAnchor:[0,-40],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new s.a.Point(65,85),className:"leaflet-div-icon"}),f=new s.a.Icon({iconUrl:"northface.png",iconRetinaUrl:"northface.png",iconAnchor:null,popupAnchor:[0,-20],shadowUrl:null,shadowSize:null,shadowAnchor:null,iconSize:new s.a.Point(40,40),className:"leaflet-div-icon"}),v=[[-37.82491,144.949317],[-37.814895,144.963516],[-37.885037,145.083173]],E=function(e){var t=e.home,a=void 0===t?null:t,n=[];return a&&(n=[w(a,20,6.5),w(a,50,6.5),w(a,90,6.5),w(a,120,6.5),w(a,150,6.5),w(a,180,6.5),w(a,220,6.5),w(a,250,6.5),w(a,290,6.5),w(a,320,6.5),w(a,350,6.5)]),o.a.createElement(h.a,{center:a,zoom:12,style:{height:"calc(100vh - 60px)"}},o.a.createElement(u.a,{attribution:'Map data \xa9 <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',url:"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",accessToken:"pk.eyJ1Ijoic3RldmVxIiwiYSI6ImNrZXl2eTEzODAydmwycXA3aHl6ejA4Zm0ifQ.SisK7lNbUyNKkpS3opH_GA",id:"mapbox/streets-v11",maxZoom:18}),a&&o.a.createElement("div",null,o.a.createElement(m.a,{center:a,radius:5e3}),o.a.createElement(p.a,{position:a},o.a.createElement(d.a,null,"Only four reasons to leave home. Just don't ask what they are."))),n.map((function(e){return o.a.createElement(p.a,{position:e,icon:g},o.a.createElement(d.a,null,"No getting on the beers with ya mates"))})),v.map((function(e){return o.a.createElement(p.a,{position:e,icon:f},o.a.createElement(d.a,null,'It\'s called "smart casual"'))})))};a(25);var M=function(){var e=Object(n.useState)([-37.81061,144.954386]),t=Object(i.a)(e,2),a=t[0],c=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement("div",{class:"App-header"},o.a.createElement("h2",null,"5km or NOPE")),o.a.createElement(E,{home:a}),o.a.createElement("button",{className:"btn",onClick:function(e){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(e){console.log("location",e.coords),c([e.coords.latitude,e.coords.longitude])}))}},"Can I pleeeaaaaasssse?"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.f6e269c6.chunk.js.map