(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(15),s=a.n(c),r=(a(79),a(80),a(32)),i=a(114),o=a(112),l=a(115),d=a(33),u=a.n(d),j=a(3),m=a.n(j),h=a(1),b=function(){return Object(h.jsx)("div",{className:"NavbarComponent",children:Object(h.jsx)(i.a,{className:u.a.navbar,collapseOnSelect:!0,expand:"lg",bg:"",variant:"light",children:Object(h.jsxs)(o.a,{children:[Object(h.jsx)(i.a.Toggle,{"aria-controls":"basic-navbar-nav",className:u.a.toggle}),Object(h.jsx)(i.a.Collapse,{id:"responsive-navbar-nav",children:Object(h.jsxs)(l.a,{className:u.a.meAuto,children:[Object(h.jsx)(l.a.Link,{as:r.b,className:m()(["SectionNavigation-Item",u.a.Section]),to:"/",children:"Weather"}),Object(h.jsx)(l.a.Link,{as:r.b,className:m()(["SectionNavigation-Item",u.a.Section]),to:"/favourites",children:"Fafourites"})]})})]})})})},p=a(9),O=a(6);function x(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(n){return console.log(n),t}})),c=Object(O.a)(a,2),s=c[0],r=c[1];return[s,function(t){try{var a=t instanceof Function?t(s):t;r(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(n){console.log(n)}}]}var y=a(34),f=a.n(y),v=function(e){var t=e.city,a=e.country,n=e.deleteItem,c=e.selectItem;return Object(h.jsxs)("div",{className:f.a.itemWrapper,children:[Object(h.jsxs)("span",{className:f.a.cityName,children:[t,"/",Object(h.jsx)("span",{className:f.a.countryName,children:a})]}),Object(h.jsx)("div",{className:f.a.btn,onClick:function(){return c(t,a)},children:"Select"}),Object(h.jsx)("div",{className:f.a.btn,onClick:function(){return n(t,a)},children:"Delete"})]})},w=a(26),A=a.n(w),N="SET_ERROR",g="SET_WEATHER",_="SET_FORECAST",D="SET_LOCATION",I="SET_SELECTED_CITY",B=function(e){return{type:N,payload:e}},G=function(e){return{type:g,payload:e}},R=function(e){return{type:_,payload:e}},S=a(21),k={theme:{class:""},setNewTheme:function(){}},C=Object(n.createContext)(k);function M(e){var t=e.children,a=Object(n.useState)("normal"),c=Object(O.a)(a,2),s=c[0],r=c[1];return Object(h.jsx)(C.Provider,{value:{theme:s,setNewTheme:function(e){r(e)}},children:t})}var Y,H=function(){var e,t=Object(S.b)(),a=x("favourites",[]),c=Object(O.a)(a,2),s=c[0],r=c[1],i=Object(n.useContext)(C).theme,o="cold"===i?A.a.cold:"warm"===i?A.a.warm:"",l=function(e,t){var a=s.filter((function(a){return!(a.city===e&&a.country===t)}));r(a),console.log(a)},d=function(e,a){t(function(e){return{type:I,payload:e}}(e)),Y.push("/")};return Object(h.jsxs)("div",{className:m()([A.a.mainContainer,o]),children:[Object(h.jsx)("h3",{className:A.a.title,children:"Favourites"}),void 0!==s&&s.length>0?Object(h.jsx)("div",{className:A.a.listContainer,children:(e=s,Object(h.jsx)("div",{children:e.map((function(e){return Object(h.jsx)("div",{children:Object(h.jsx)(v,{city:e.city,country:e.country,deleteItem:l,selectItem:d})},e.city+"/"+e.country)}))}))}):Object(h.jsx)("div",{className:A.a.listPlaceholder,children:Object(h.jsx)("p",{children:"There are no saved cities yet"})})]})},P="//api.openweathermap.org/data/2.5/weather",E="f2bc9f4f53d43099962546ce7af56be0",W=-273.15,F=a(27),T=a.n(F),L=a(47),Q=a(48),J=a.n(Q),Z=function(e){return function(){var t=Object(L.a)(T.a.mark((function t(a){var n,c,s;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={appid:E,q:e,lang:"en",unit:"metric"},t.next=4,J.a.get(P,{params:n});case 4:c=t.sent,s=c.data,a(G(s)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a(B(t.t0));case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},K=function(){return function(e){navigator.geolocation.getCurrentPosition((function(t){var a=t.coords,n=a.latitude,c=a.longitude;e({type:D,payload:{lat:n,lon:c}})}))}},z=a(54),q=a.n(z),V=a(113),X=a(28),U=a.n(X),$=a.p+"static/media/sun.788b16cf.png",ee=a.p+"static/media/clouds.93a79157.png",te=a.p+"static/media/rain.286edc73.png",ae=a.p+"static/media/thunder.dfd07b5c.png",ne=a.p+"static/media/fog.a69f37dd.png",ce=a.p+"static/media/snow.174d37a6.png",se=function(e){var t=e.weather,a=e.className,n="";switch(t.main){case"Clear":default:n=$;break;case"Clouds":n=ee;break;case"Rain":n="moderate rain"===t.description?te:ae;break;case"Fog":case"Haze":n=ne;break;case"Snow":n=ce}return Object(h.jsx)("div",{className:"imageWeather",children:Object(h.jsx)("img",{className:a,src:n,alt:"iconWeather"})})},re=a.p+"static/media/arrow.3d89c629.png",ie=function(e){var t=e.weather,a=t.dt,n=t.temp,c=t.weather,s=t.wind_deg,r=t.wind_speed;return Object(h.jsxs)("div",{className:U.a.itemBox,children:[Object(h.jsxs)("div",{className:"forecastHourlyTime",children:[new Date(1e3*a).getHours(),":00"]}),Object(h.jsxs)("div",{className:U.a.temp,children:[Math.round(n+W),"\xb0"]}),Object(h.jsx)("div",{className:U.a.weather,children:Object(h.jsx)(se,{weather:c[0],className:U.a.iconWeather})}),Object(h.jsx)("div",{className:"forecastHourlyWind",children:Object(h.jsx)("img",{className:U.a.iconWind,style:{transform:"rotate("+(s+90)+"deg)"},src:re,alt:"arrow"})}),Object(h.jsx)("div",{className:U.a.windTitle,children:Object(h.jsxs)("p",{children:[Math.round(r),"m/s"]})})]},a)},oe=function(e){var t=e.forecast,a=(t=void 0===t?{}:t).hourly,c=void 0===a?[]:a,s=c.slice(0,24),r=Object(n.useState)(!0),i=Object(O.a)(r,2),o=i[0],l=i[1];return Object(h.jsx)(h.Fragment,{children:c&&Object(h.jsxs)("div",{children:[Object(h.jsx)(V.a,{className:q.a.btn,onClick:function(){return l(!o)},children:o?" Hourly Forecast":"Hide Hourly"}),!o&&Object(h.jsx)("div",{className:q.a.forecast,children:s.map((function(e){return Object(h.jsx)(ie,{weather:e},e.dt)}))})]})})},le=a(55),de=a.n(le),ue=a(56),je=a.n(ue),me=function(e){var t=e.dt;return Object(h.jsxs)("div",{className:"forecastDailyTime",children:[new Date(1e3*t).getDate(),"/",new Date(1e3*t).getMonth()+1,"/",new Date(1e3*t).getFullYear()]})},he=a(71),be=a.n(he),pe=function(e){var t=e.temp,a=t.night,n=t.day;return Object(h.jsxs)("div",{className:be.a.temp,children:[Math.round(a+W),"\xb0",Math.round(n+W),"\xb0"]})},Oe=function(e){var t=e.weather,a=t.dt,n=t.temp,c=t.weather;return Object(h.jsxs)("div",{className:je.a.itemBox,children:[Object(h.jsx)(me,{dt:a}),Object(h.jsx)(pe,{temp:n}),Object(h.jsx)(se,{weather:c[0],className:je.a.iconWeather})]})},xe=function(e){var t=e.forecast,a=(t=void 0===t?{}:t).daily,c=Object(n.useState)(!0),s=Object(O.a)(c,2),r=s[0],i=s[1];return Object(h.jsx)(h.Fragment,{children:a&&Object(h.jsxs)("div",{children:[Object(h.jsx)(V.a,{className:de.a.btn,onClick:function(){return i(!r)},children:r?"Daily Forecast":"Hide Daily"}),!r&&Object(h.jsx)("div",{className:de.a.forecast,children:a.map((function(e){return Object(h.jsx)(Oe,{weather:e},e.dt)}))})]})})},ye=a(29),fe=a.n(ye),ve=a(30),we=a.n(ve),Ae=a.p+"static/media/compass.edc1eff5.png",Ne=function(e){var t=e.weather;return Object(h.jsx)("div",{className:we.a.windBox,children:void 0!==t&&void 0!==t.main&&Object(h.jsxs)("div",{className:we.a.windWrapper,children:[Object(h.jsx)("div",{className:"windDirection",children:Object(h.jsx)("img",{className:we.a.iconWind,style:{transform:"rotate("+(t.wind.deg+90)+"deg)"},src:re,alt:"arrow"})}),Object(h.jsx)("div",{className:we.a.windCompass,children:Object(h.jsx)("img",{className:we.a.iconCompass,src:Ae,alt:"compass"})}),Object(h.jsx)("div",{className:we.a.windTitle,children:Object(h.jsxs)("p",{children:[Math.round(t.wind.speed),"m/s"]})})]})})},ge=a(35),_e=a.n(ge),De=function(e){var t=e.weather,a=e.weather,n=(a=void 0===a?{}:a).main,c=a.main,s=(c=void 0===c?{}:c).temp,r=c.temp_min,i=c.temp_max;return Object(h.jsx)(h.Fragment,{children:t&&n&&Object(h.jsx)("div",{className:_e.a.weatherBox,children:Object(h.jsxs)("div",{className:_e.a.tempBox,children:[Object(h.jsxs)("div",{className:_e.a.temp,children:[Math.round(s+W),"\xb0"]}),Object(h.jsxs)("div",{className:_e.a.tempDaily,children:[Math.round(r+W),"\xb0  ",Math.round(i+W),"\xb0"]}),Object(h.jsx)("div",{className:_e.a.weather,children:t.weather[0].main})]})})})},Ie=a(46),Be=a(36),Ge=a.n(Be),Re=a.p+"static/media/addedToFavourite.f90368e4.png",Se=function(e){var t=e.weather,a=x("favourites",[]),n=Object(O.a)(a,2),c=n[0],s=n[1];return Object(h.jsx)(h.Fragment,{children:void 0!==t&&Object(h.jsxs)("div",{className:Ge.a.locationBox,children:[Object(h.jsxs)("div",{className:Ge.a.location,children:[t.name,",",t.sys.country,c.some((function(e){return e.city===t.name&&e.country===t.sys.country}))?Object(h.jsx)("img",{className:Ge.a.iconAdd,src:Re,alt:"added",title:"Already Added to favourites"}):Object(h.jsx)("img",{className:Ge.a.iconAdd,src:"data:image/png;base64,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",alt:"add",onClick:function(){return e=t.name,a=t.sys.country,void(!c.some((function(t){return t.city===e&&t.country===a}))&&s([].concat(Object(Ie.a)(c),[{city:e,country:a}])));var e,a},title:"Add this city to favourites"})]}),Object(h.jsx)("div",{className:Ge.a.date,children:new Date(1e3*t.dt).toLocaleDateString()})]})})},ke=a(57),Ce=a.n(ke),Me=function(){var e=Object(S.b)(),t=Object(n.useState)(""),a=Object(O.a)(t,2),c=a[0],s=a[1];return Object(h.jsx)("div",{className:Ce.a.searchBox,children:Object(h.jsx)("input",{type:"text",className:Ce.a.searchBar,placeholder:"Search...",name:"city",value:c,onChange:function(e){s(e.target.value)},onKeyPress:function(t){"Enter"===t.key&&""!==c&&void 0!==c&&function(t){e(Z(t))}(c)}})})},Ye=function(){var e=Object(S.b)(),t=Object(n.useContext)(C),a=t.theme,c=t.setNewTheme,s=Object(S.c)((function(e){return e.weatherStore})),r=s.weather,i=s.forecast,o=Object(S.c)((function(e){return e.locationStore})),l=o.location,d=o.selectedCity,u="cold"===a?fe.a.cold:"warm"===a?fe.a.warm:"";return Object(n.useEffect)((function(){if(r&&r.main){var e=r.main.temp,t="normal";e+W<=0&&(t="cold"),e+W>16&&(t="warm"),c(t)}}),[r,c]),Object(n.useEffect)((function(){e(K())}),[e]),Object(n.useEffect)((function(){e(void 0===d?function(e){return function(){var t=Object(L.a)(T.a.mark((function t(a){var n,c,s;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={appid:E,lang:"en",lat:e.lat,lon:e.lon,unit:"metric"},t.next=4,J.a.get(P,{params:n});case 4:c=t.sent,s=c.data,a(G(s)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),B(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(l):Z(d))}),[e,d,l]),Object(n.useEffect)((function(){e(function(e){return function(){var t=Object(L.a)(T.a.mark((function t(a){var n,c,s,r,i;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,void 0===e||void 0===e.coord){t.next=11;break}return n=e.coord.lat,c=e.coord.lon,s={appid:E,lang:"en",lat:n,lon:c,unit:"metric"},t.next=7,J.a.get("//api.openweathermap.org/data/2.5/onecall",{params:s});case 7:r=t.sent,i=r.data,a(R(i));case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),B(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}()}(r))}),[e,r]),Object(h.jsxs)("div",{className:m()([fe.a.mainContainer,u]),children:[Object(h.jsx)(Me,{}),Object(h.jsx)(Se,{weather:r}),Object(h.jsxs)("div",{className:fe.a.wrapper,children:[Object(h.jsx)(De,{weather:r}),Object(h.jsx)(Ne,{weather:r}),Object(h.jsxs)("div",{className:fe.a.subWrapper,children:[Object(h.jsx)(oe,{forecast:i}),Object(h.jsx)(xe,{forecast:i})]})]}),void 0!==r&&Object(h.jsx)(se,{weather:r.weather[0],className:fe.a.iconWeather})]})},He=function(){return Y=Object(p.f)(),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(b,{}),Object(h.jsxs)(p.c,{children:[Object(h.jsx)(p.a,{path:"/",exact:!0,component:Ye}),Object(h.jsx)(p.a,{path:"/WeatherApp",exact:!0,component:Ye}),Object(h.jsx)(p.a,{path:"/favourites",component:H})]})]})},Pe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,116)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))},Ee=a(12),We=a(72),Fe=a(39),Te=a(73),Le=a(2),Qe={error:""},Je={weather:void 0,forecast:void 0},Ze={location:void 0,selectedCity:void 0},Ke=Object(Fe.b)({errorsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;return a===N?(console.log(n),Object(Le.a)(Object(Le.a)({},e),{},{error:n})):{state:e}},weatherStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case g:return Object(Le.a)(Object(Le.a)({},e),{},{weather:n});case _:return Object(Le.a)(Object(Le.a)({},e),{},{forecast:n});default:return{state:e}}},locationStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case D:return Object(Le.a)(Object(Le.a)({},e),{},{location:n});case I:return Object(Le.a)(Object(Le.a)({},e),{},{selectedCity:n});default:return Object(Le.a)({},e)}}}),ze=a(74),qe=Object(Ee.a)(),Ve=Object(We.a)(qe),Xe=Object(Fe.c)(Ke,Object(Te.composeWithDevTools)(Object(Fe.a)(ze.a,Ve)));s.a.render(Object(h.jsx)(S.a,{store:Xe,children:Object(h.jsx)(M,{children:Object(h.jsx)(r.a,{children:Object(h.jsx)(He,{})})})}),document.getElementById("root")),Pe()},26:function(e,t,a){e.exports={mainContainer:"styles_mainContainer__4sB4O",warm:"styles_warm__2B2jq",cold:"styles_cold__3LQEv",title:"styles_title__szYu6",listcontainer:"styles_listcontainer__3dg_w",listPlaceholder:"styles_listPlaceholder__xLxxR",listContainer:"styles_listContainer__Rex33"}},28:function(e,t,a){e.exports={itemBox:"styles_itemBox__12VL2",temp:"styles_temp__2IRVn",weather:"styles_weather__21HKr",iconWeather:"styles_iconWeather__2x8O0",iconWind:"styles_iconWind__1WsSp",windTitle:"styles_windTitle__TIGr4"}},29:function(e,t,a){e.exports={mainContainer:"styles_mainContainer__138x2",warm:"styles_warm__1TUyU",cold:"styles_cold__e969q",iconWeather:"styles_iconWeather__3vph9",wrapper:"styles_wrapper__3sCS8",subWrapper:"styles_subWrapper__Rqx20"}},30:function(e,t,a){e.exports={windBox:"styles_windBox__32y4_",windWrapper:"styles_windWrapper__3yLLu",iconWind:"styles_iconWind__2OKDO",windCompass:"styles_windCompass__2YCDo",iconCompass:"styles_iconCompass__1OPaD",windTitle:"styles_windTitle__bOkeZ"}},33:function(e,t,a){e.exports={navbar:"styles_navbar__hDGGJ",toggle:"styles_toggle__2dSEC",meAuto:"styles_meAuto__16SLp",Section:"styles_Section__30p1w"}},34:function(e,t,a){e.exports={itemWrapper:"styles_itemWrapper__2PqBy",cityName:"styles_cityName__3ZmG4",countryName:"styles_countryName__fM_eA",btn:"styles_btn__3JTGn"}},35:function(e,t,a){e.exports={weatherBox:"styles_weatherBox__35Yfs",tempBox:"styles_tempBox__3E0DV",temp:"styles_temp__2uuiV",tempDaily:"styles_tempDaily__3Xljf",weather:"styles_weather__2zm_e"}},36:function(e,t,a){e.exports={locationBox:"styles_locationBox__1FWVR",location:"styles_location__1ZLOM",iconAdd:"styles_iconAdd__Cf_Tr",date:"styles_date__3G-Et"}},54:function(e,t,a){e.exports={btn:"styles_btn__2o3uQ",forecast:"styles_forecast__2-Zru"}},55:function(e,t,a){e.exports={btn:"styles_btn__wO_mo",forecast:"styles_forecast__34qff"}},56:function(e,t,a){e.exports={itemBox:"styles_itemBox__Oe5zE",iconWeather:"styles_iconWeather__24efn"}},57:function(e,t,a){e.exports={searchBox:"styles_searchBox__2QnrM",searchBar:"styles_searchBar__1Sm_A"}},71:function(e,t,a){e.exports={temp:"styles_temp__3Bq0o"}},79:function(e,t,a){}},[[109,1,2]]]);
//# sourceMappingURL=main.b6cc1012.chunk.js.map