(this["webpackJsonpnaive-gh-events-demo"]=this["webpackJsonpnaive-gh-events-demo"]||[]).push([[0],{168:function(n,e,t){"use strict";t.r(e);var i,a,r,o,s,c,d,p,l,u,b,x,j,m,h,g,f,O,v,w,y,k,z,D,S,E,C,F,T,B,L,A,I,_,N,P,U,M,G=t(1),H=t.n(G),X=t(59),J=t.n(X),q=(t(70),t(2)),R=t(3),V=t.p+"static/media/npm-logo.3cad4cc6.svg",W=t.p+"static/media/gh.04be58c1.svg",K=t(0),Q=R.a.div(i||(i=Object(q.a)(["\n  max-width: 700px;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: left;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-self: baseline;\n  font-size: 30px;\n  width: 100%;\n  font-weight: bolder;\n  color: purple;\n  box-sizing: border-box;\n"]))),Y=R.a.div(a||(a=Object(q.a)(["\n  margin-bottom: auto;\n  margin-top: auto;\n  font-size: 20px;\n  \n"]))),Z=R.a.div(r||(r=Object(q.a)(["\n  border: 2px solid thistle;\n\n  margin: 4px 0 4px auto;\n  border-radius: 10px;\n  padding: 4px 0px 8px 8px;\n\n\n  @media (min-width: 600px) {\n    width: 45%;\n  }\n  @media (max-width: 599px) {\n    width: 100%;\n  }\n"]))),$=R.a.div(o||(o=Object(q.a)(["\n  font-size: 12px;\n  font-weight: normal;\n\n\n"]))),nn=R.a.div(s||(s=Object(q.a)(["\n  font-weight: bold;\n  display: flex;\n  flex-direction: row;\n  margin-top: 0px;\n  margin-bottom: 4px;\n  font-size: 12px;\n  align-content: center;\n  a {\n    > span {\n      margin-top: auto;\n      bottom: auto;\n    }\n    margin-top: auto;\n    margin-bottom: auto;\n  }\n"]))),en=R.a.img(c||(c=Object(q.a)(["\n  max-height: 15px;\n  margin-left: 5px;\n"]))),tn=function(){return Object(K.jsxs)(Q,{children:[Object(K.jsx)(Y,{children:"naive-gh-events demo"}),Object(K.jsxs)(Z,{children:[Object(K.jsxs)(nn,{children:[Object(K.jsx)("a",{href:"https://github.com/timfitzzz/naive-gh-events",children:"naive-gh-events"}),Object(K.jsx)("a",{href:"https://github.com/timfitzzz/naive-gh-events",children:Object(K.jsx)(en,{src:W})}),Object(K.jsx)("a",{href:"https://www.npmjs.com/package/naive-gh-events",children:Object(K.jsx)(en,{src:V})})]}),Object(K.jsxs)($,{children:["Render event objects from the GitHub API as natural English, in plaintext or markdown. By ",Object(K.jsx)("a",{href:"https://github.com/timfitzzz",children:"timfitzzz"}),"."]})]})]})},an=t(8),rn=t(63),on=t.n(rn),sn=t(65),cn=t(64),dn=t.n(cn),pn=t(7),ln=t(25),un=R.a.label(d||(d=Object(q.a)(["\n  position: relative;\n  display: inline-block;\n  min-width: 30px;\n  height: 17px;\n"]))),bn=R.a.input(p||(p=Object(q.a)(["\n  opacity: 0;\n  width: 0;\n  height: 0;\n\n  &:checked {\n    background-color: #2196F3\n  }\n\n  &:focus {\n    box-shadow: 0 0 1px #2196F3;\n  }\n"]))),xn=R.a.span(l||(l=Object(q.a)(['\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .2s;\n  transition: .2s;\n  border-radius: 20px;\n\n  &:before {\n    position: absolute;\n    content: "";\n    height: 13px;\n    width: 13px;\n    left: 2px;\n    bottom: 2px;\n    background-color: white;\n    -webkit-transition: .2s;\n    transition: .2s;\n    border-radius: 50%;\n\n    ',"\n  }\n\n  ","\n"])),(function(n){return n.state?"\n      -webkit-transform: translateX(13px);\n      -ms-transform: translateX(13px);\n      transform: translateX(13px);\n    ":""}),(function(n){return n.state?"\n    background-color: purple;\n    box-shadow: 0 0 1px #2196F3;\n  ":""})),jn=function(n){var e=n.name,t=n.toggleCb,i=n.state;return Object(K.jsxs)(un,{children:[Object(K.jsx)(bn,{type:"checkbox",value:i,onClick:function(n){n.preventDefault(),t(e)}}),Object(K.jsx)(xn,{state:i})]})},mn=R.a.div(u||(u=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-right: 5px;\n  padding-top: 5px;\n  padding-left: 2px;\n  font-size: 10px;\n  margin-top: 0;\n  box-sizing: border-box;\n\n  @media (max-width: 599px) {\n    min-width: 47%;\n  }\n  @media (min-width: 600px) {\n    min-width: 20%;\n  }\n\n  select {\n    font-size: 10px;\n  }\n"]))),hn=R.a.div(b||(b=Object(q.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-top: 0;\n  margin-bottom: auto;\n  > span {\n\n    margin-right: 10px;\n  }\n"]))),gn=R.a.div(x||(x=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-right: 10px;\n  font-weight: normal;\n  margin-top: 1px;\n"]))),fn=function(n){var e=n.description,t=n.disabled,i=n.name,a=n.options,r=n.state,o=n.setter,s=n.setAsNumber;return Object(K.jsxs)(mn,{children:[Object(K.jsxs)(hn,{children:[Object(K.jsx)("span",{children:i}),Object(K.jsx)("select",{defaultValue:r,disabled:t,name:i,onChange:function(n){o(Object(ln.a)({},i,s?parseInt(n.target.value):n.target.value))},children:a.map((function(n){return Object(K.jsx)("option",{value:n.value,children:n.description},"option"+n.value)}))})]}),Object(K.jsx)(gn,{children:e})]})},On=R.a.div(j||(j=Object(q.a)(["\n  display: flex;\n  flex-direction: row;\n  font-size: 10px;\n  margin-bottom: 5px;\n"]))),vn=R.a.div(m||(m=Object(q.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-right: 20px;\n"]))),wn=Object(R.a)(vn)(h||(h=Object(q.a)(["\n  color: maroon;\n"]))),yn=R.a.div(g||(g=Object(q.a)(["\n  margin-top: auto;\n  margin-bottom: auto;\n"]))),kn=R.a.div(f||(f=Object(q.a)(["\n\n  height: 10px;\n  width: 10px;\n  border-radius: 50%;\n  border: 3px solid purple;\n  background-color: ",";\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-right: 5px;\n\n"])),(function(n){return n.current?"white":"purple"})),zn=R.a.input(O||(O=Object(q.a)(["\n  font-size: 10px;\n"]))),Dn=R.a.button(v||(v=Object(q.a)(["\n  font-size: 10px;\n"]))),Sn=function(n){var e=n.source,t=n.setSource,i=n.sourceError,a=n.setSourceError,r=Object(G.useState)(!!e),o=Object(an.a)(r,2),s=o[0],c=o[1],d=Object(G.useState)(""),p=Object(an.a)(d,2),l=p[0],u=p[1];function b(n){t(l),c(!0),a(null)}return Object(G.useEffect)((function(){e&&c(!0)}),[e]),Object(K.jsxs)(On,{children:[Object(K.jsxs)(vn,{children:[Object(K.jsx)(kn,{onClick:function(){return c(!1),t(null),void a(null)},current:!e&&!s})," ",Object(K.jsx)(yn,{children:"GitHub username"})]}),Object(K.jsxs)(vn,{children:[Object(K.jsx)(kn,{onClick:function(n){l&&c(!0),b()},current:!(!e&&!s)}),Object(K.jsx)(zn,{value:l,onChange:function(n){u(n.target.value)},placeholder:"Github User Public Feed"}),Object(K.jsx)(Dn,{onClick:b,disabled:!l,children:"get feed"})]}),Object(K.jsx)(wn,{children:i})]})},En=R.a.div(w||(w=Object(q.a)(["\n  background-color: thistle;\n  padding: 2px 8px 8px 8px;\n  border-radius: 8px;\n  width: 100%;\n"]))),Cn=R.a.div(y||(y=Object(q.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n"]))),Fn=R.a.div(k||(k=Object(q.a)(["\n  width: 50%;\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  margin-bottom: 5px;\n"]))),Tn=R.a.div(z||(z=Object(q.a)(["\n\n  font-size: 10px;\n  margin-left: 6px;\n  margin-top: 0;\n  margin-bottom: auto;\n  > span {\n    font-weight: normal;\n    margin-left: 5px;\n  }\n\n"]))),Bn=R.a.div(D||(D=Object(q.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-bottom: 5px;\n  max-width: 700px;\n  margin-top: 5px;\n  align-items: top;\n  justify-content: space-between;\n"]))),Ln={collapse:"combine similar events",dateSummaries:"prepend dates to summary lines",dateContent:"prepend dates to content lines",md:"render as markdown",omitContent:"display only summaries",indentContent:"indent content lines",newLinesBetween:"add extra line between items",sortBy:"display order",groupStartDay:"day of week to start first group from",groupByDays:"number of days of events to group together",dateTimeFormatOptions:"example Luxon display format",startDate:"filter out prior events",reverseSortEvents:"reverse sortBy"},An={sortBy:[{value:"date",description:"date"},{value:"actor",description:"actor (user)"},{value:"type",description:"event type"},{value:"parent",description:"parent of action"}],groupByDays:[{value:1,description:"1 day"},{value:3,description:"3 days"},{value:7,description:"7 days"},{value:14,description:"14 days"},{value:30,description:"30 days"}],groupStartDay:[{value:0,description:"sunday"},{value:1,description:"monday"},{value:2,description:"tuesday"},{value:3,description:"wednesday"},{value:4,description:"thursday"},{value:5,description:"friday"},{value:6,description:"saturday"}],dateTimeFormatOptions:[{value:"DATE_FULL",description:"month, day, year"},{value:"DATETIME_FULL",description:"month, day, year, time"},{value:"DATETIME_FULL_WITH_SECONDS",description:"month, day, year, time:seconds"}]},In=R.a.div(S||(S=Object(q.a)(["\n  font-size: 16px;\n  margin-bottom: 8px;\n"]))),_n=function(n){var e=n.sourceControls,t=n.changeOptions,i=n.options,a=n.sourceError,r=n.setSourceError,o=Object(G.useState)("DATE_FULL"),s=Object(an.a)(o,2),c=s[0],d=s[1],p=Object(an.a)(e,2),l=p[0],u=p[1];function b(n){t(Object(ln.a)({},n,!i[n]))}return Object(K.jsxs)(En,{children:[Object(K.jsx)(In,{children:"source"}),Object(K.jsx)(Sn,{source:l,setSource:u,sourceError:a,setSourceError:r}),Object(K.jsx)(In,{children:"render options"}),Object(K.jsx)(Cn,{children:Object.getOwnPropertyNames(i).filter((function(n){return"boolean"===typeof i[n]})).map((function(n){return Object(K.jsxs)(Fn,{children:[Object(K.jsx)(jn,{name:n,toggleCb:b,state:i[n]}),Object(K.jsxs)(Tn,{children:[n,Object(K.jsx)("span",{children:Ln[n]})]})]},n+"toggler")}))}),Object(K.jsxs)(Bn,{children:[Object(K.jsx)(fn,{description:Ln.sortby,name:"sortBy",options:An.sortBy,state:i.sortBy,setter:t}),Object(K.jsx)(fn,{description:Ln.groupByDays,name:"groupByDays",options:An.groupByDays,state:i.groupByDays,setter:t,setAsNumber:!0}),Object(K.jsx)(fn,{description:Ln.groupStartDay,name:"groupStartDay",options:An.groupStartDay,state:i.groupStartDay,setter:t,setAsNumber:!0}),Object(K.jsx)(fn,{description:Ln.dateTimeFormatOptions,name:"dateTimeFormatOptions",options:An.dateTimeFormatOptions,state:c,setter:function(n){var e=n.dateTimeFormatOptions;d(e),t({dateTimeFormatOptions:pn.DateTime[e]})}})]})]})},Nn=R.a.div(E||(E=Object(q.a)(["\n  background-color: white;\n  padding: 2px 8px 8px 8px;\n  border-radius: 8px;\n  border: 1px solid thistle;\n  width: 100%;\n  margin-top: 4px;\n"]))),Pn=R.a.div(C||(C=Object(q.a)(["\n  font-size: 16px;\n  margin-bottom: 8px;\n"]))),Un=Object(R.a)(jn)(F||(F=Object(q.a)(["\n  div { \n    color: purple;\n  }\n"]))),Mn=function(n){var e=n.display,t=n.setDisplay;return Object(K.jsxs)(Nn,{children:[Object(K.jsx)(Pn,{children:"display options"}),Object(K.jsxs)(Fn,{children:[Object(K.jsx)(Un,{name:"render markdown via react-markdown",toggleCb:function(){return t(!e)},state:e}),Object(K.jsx)(Tn,{children:Object(K.jsxs)("span",{children:["render markdown as html via ",Object(K.jsx)("a",{href:"https://github.com/remarkjs/react-markdown",children:"react-markdown"})," or show raw"]})})]})]})},Gn=R.a.div(T||(T=Object(q.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"]))),Hn=R.a.div(B||(B=Object(q.a)(["\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  justify-self: baseline;\n  font-size: 30px;\n  width: 100%;\n  font-weight: bolder;\n  color: purple;\n"]))),Xn=Object(R.a)(dn.a)(L||(L=Object(q.a)(["\n  max-width: 700px;\n  margin-left: 8px;\n  margin-right: 8px;\n  text-align: left;\n  font-size: 12px;\n  word-wrap: normal;\n\n  a {\n      color: purple;\n    }\n\n  a {\n    font-weight: bold;\n  }\n\n  ul {\n    margin-left: 20px;\n    padding-left: 5px;\n    border-left: 1px solid black;\n    border-top: 1px solid black;\n    border-bottom: 1px solid black;\n    border-bottom-left-radius: 5px;\n    border-top-left-radius: 5px;\n    list-style: none;\n  }\n\n  li {\n    padding: 5px;\n    padding-left: 10px;\n    margin-bottom: 5px;\n    background-color: purple;\n    color: white;\n\n    img {\n      width: 100%;\n    }\n\n    a {\n      color: thistle;\n    }\n\n    &:last-of-type {\n      margin-bottom: 0px;\n    }\n  }\n\n  > p {\n    &:first-of-type {\n      margin-top: 8px;\n    }\n  }\n"]))),Jn=R.a.div(A||(A=Object(q.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n"]))),qn=R.a.div(I||(I=Object(q.a)(["\n  margin: 20px auto auto auto;\n"]))),Rn=R.a.div(_||(_=Object(q.a)(["\n  font-family: monospace;\n  max-width: 700px;\n  overflow: wrap;\n  margin-left: auto;\n  margin-right: auto;\n  text-align: left;\n  font-size: 12px;\n  margin-top: 14px;\n"]))),Vn=R.a.div(N||(N=Object(q.a)(["\n  white-space: pre-wrap;       /* css-3 */\n  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */\n  white-space: -pre-wrap;      /* Opera 4-6 */\n  white-space: -o-pre-wrap;    /* Opera 7 */\n  word-wrap: break-word;       /* Internet Explorer 5.5+ */\n"]))),Wn=R.a.div(P||(P=Object(q.a)(["\n  text-align: left;\n  font-size: 15px;\n  width: 100%;\n  display: inline-block;\n  margin-top: 20px;\n  font-weight: bold;\n  color: purple;\n"]))),Kn=function(){var n=Object(G.useState)(!1),e=Object(an.a)(n,2),t=e[0],i=e[1],a=Object(G.useState)(null),r=Object(an.a)(a,2),o=r[0],s=r[1],c=Object(G.useState)({sortBy:"date",collapse:!0,dateSummaries:!1,dateContent:!1,groupByDays:7,groupStartDay:0,startDate:new Date(1/1970),md:!0,omitContent:!1,indentContent:!0,dateTimeFormatOptions:pn.DateTime.DATE_FULL,newLinesBetween:!0,reverseSortEvents:!1}),d=Object(an.a)(c,2),p=d[0],l=d[1],u=Object(G.useState)(null),b=Object(an.a)(u,2),x=b[0],j=b[1],m=Object(G.useState)(null),h=Object(an.a)(m,2),g=h[0],f=h[1],O=Object(G.useState)(!0),v=Object(an.a)(O,2),w=v[0],y=v[1];Object(G.useEffect)((function(){on.a.request(x?"https://api.github.com/users/".concat(x,"/events?per_page=100"):"https://api.github.com/events?per_page=100").then((function(n){n.data.length<1&&f("No events in last 90 days"),s(n.data),i(!0)}),(function(n){404===n.response.status?(s(null),i(!0),f("GitHub user not found")):403===n.response.status&&(s(null),i(!0),f("403, API limits likely exceeded"))}))}),[t,x]);var k=Object(G.useMemo)((function(){return o?sn.a.renderEvents(o,p):null}),[o,p]);return Object(K.jsxs)(Gn,{children:[Object(K.jsxs)(Hn,{children:[Object(K.jsx)(_n,{sourceControls:[x,j],changeOptions:function(n){l(Object.assign({},p,n))},options:p,sourceError:g,setSourceError:f}),Object(K.jsx)(Mn,{display:w,setDisplay:y})]}),k&&k.map((function(n,e){return p.md&&w?Object(K.jsxs)("div",{children:[Object(K.jsxs)(Wn,{children:[n.startDate," - ",n.endDate]}),Object(K.jsx)(Xn,{children:n.renderedEventCollections.join("")})]},"event"+e):Object(K.jsx)(Rn,{children:n.renderedEventCollections.map((function(n,e){return Object(K.jsx)(Vn,{hanging:0!==e,children:n})}))})})),!t&&Object(K.jsx)(Jn,{children:Object(K.jsx)(qn,{children:"Loading..."})})]})},Qn=R.a.div(U||(U=Object(q.a)(["\n  width: '100vw';\n\n  div {\n    box-sizing: border-box;\n  }\n"]))),Yn=R.a.div(M||(M=Object(q.a)(["\n  max-width: 700px;\n  display: flex;\n  flex-direction: column;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 5px;\n  padding-right: 5px;\n"])));var Zn=function(){return Object(K.jsx)(Qn,{children:Object(K.jsxs)(Yn,{children:[Object(K.jsx)(tn,{}),Object(K.jsx)(Kn,{})]})})},$n=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,169)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;t(n),i(n),a(n),r(n),o(n)}))};J.a.render(Object(K.jsx)(H.a.StrictMode,{children:Object(K.jsx)(Zn,{})}),document.getElementById("root")),$n()},70:function(n,e,t){}},[[168,1,2]]]);
//# sourceMappingURL=main.4b0776ac.chunk.js.map