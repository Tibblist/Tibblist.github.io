(this["webpackJsonpweb-app"]=this["webpackJsonpweb-app"]||[]).push([[0],{72:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(24),i=n.n(r),o=n(13),s=n(121),l=n(117),u=n(119),d=n(122),j=n(118),b=n(2),m=Object(j.a)((function(e){return{inputItem:{paddingRight:25}}}));var h=function(){var e=m(),t=Object(a.useState)(0),n=Object(o.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(),j=Object(o.a)(i,2),h=j[0],p=j[1],f="",g="green";return c<1500?f="You can eat plenty more food!":c<2e3?(f="You can eat some more food!",g="#8B8000"):c<2500?(f="You have reached peak calories for today!",g="red"):c>2500&&(f="You have exceeded optimal calories for today.",g="darkred"),Object(b.jsxs)(s.a,{container:!0,direction:"column",alignItems:"center",justifyContent:"center",children:[Object(b.jsxs)(s.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",children:[Object(b.jsx)(s.a,{item:!0,className:e.inputItem,children:Object(b.jsx)(l.a,{className:e.inputItem,onChange:function(e){isNaN(parseInt(e.target.value))||p(parseInt(e.target.value))},value:h||"",label:"Enter Calories from meal"})}),Object(b.jsx)(s.a,{item:!0,children:Object(b.jsx)(u.a,{variant:"contained",onClick:function(){console.log("captured click"),r(c+(h||0)),p(null)},children:"Submit"})})]}),Object(b.jsx)(s.a,{item:!0,children:Object(b.jsx)(d.a,{variant:"h3",style:{color:g},children:f})})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),p()}},[[72,1,2]]]);
//# sourceMappingURL=main.ccead9c3.chunk.js.map