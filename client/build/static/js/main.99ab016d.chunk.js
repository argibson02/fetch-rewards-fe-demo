(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{60:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var c,n,s,r,i,o=a(2),l=a.n(o),j=a(48),d=a.n(j),b=(a(60),a(39)),m=a(7),O=a(76),h=a(78),u=a(75),p=a(24),x=a(79),f=a(26),v=a(77),N=(Object(v.a)(c||(c=Object(f.a)(["\n  query states {\n    states {\n      name\n      abbreviation\n    }\n  }\n"]))),Object(v.a)(n||(n=Object(f.a)(["\n  query occupation {\n    occupation {\n      name\n    }\n  }\n"]))),Object(v.a)(s||(s=Object(f.a)(["\n  query form {\n    form {\n      name\n      email\n      password\n      occupation\n      state\n    }\n  }\n"]))),Object(v.a)(r||(r=Object(f.a)(["\n  query getStateAndOccupation {\n    getStateAndOccupation {\n        stateAndOccupationData\n      }\n  }\n"]))));Object(v.a)(i||(i=Object(f.a)(["\n  query postFormDetails($formData: JSON) {\n    postFormDetails(formData: $formData) {\n      formData\n    }\n  }\n"])));function g(e){return!e.match(/^$/)}var w=a(3),S=function(){var e=Object(x.a)(N,{},[]),t=e.loading,a=e.data;console.log(t),console.log(a);var c=Object(o.useState)(""),n=Object(p.a)(c,2),s=n[0],r=n[1],i=Object(o.useState)(""),l=Object(p.a)(i,2),j=l[0],d=l[1],b=Object(o.useState)(""),m=Object(p.a)(b,2),O=m[0],h=m[1],u=Object(o.useState)(""),f=Object(p.a)(u,2),v=f[0],S=f[1],y=Object(o.useState)(""),q=Object(p.a)(y,2),D=q[0],A=q[1],F=Object(o.useState)(""),k=Object(p.a)(F,2),C=k[0],$=k[1],E=function(e){var t=e.target,a=t.name,c=t.value;"contactName"===a?h(c):"email"===a?r(c):"password"===a?d(c):"occupation"===a?S(c):"etat"===a&&A(c)},z=a||[];return Object(w.jsxs)("div",{className:"card bg-white card-rounded w-50",children:[Object(w.jsx)("div",{className:"card-header bg-dark text-center",children:Object(w.jsx)("h1",{children:"Welcome to Tech Matchup!"})}),Object(w.jsxs)("div",{className:"card-body m-5",children:[Object(w.jsx)("h2",{children:"Here is a list of matchups you can vote on:"}),t?Object(w.jsx)("div",{children:"Loading..."}):Object(w.jsx)("ul",{className:"square",children:z.map((function(e){return Object(w.jsxs)("li",{children:[e.name,Object(w.jsx)("br",{}),e.abbreviation]})}))})]}),Object(w.jsxs)("section",{className:"h-100 bisection bisection-3 col-lg-6",children:[Object(w.jsx)("h1",{className:"bisection-h1 bisection-3-h1",children:"contact form"}),Object(w.jsxs)("form",{children:[Object(w.jsxs)("div",{className:"form-group mb-2",children:[Object(w.jsx)("label",{htmlFor:"contact-name",children:"Name"}),Object(w.jsx)("input",{value:O,name:"contactName",onChange:E,type:"contactName",className:"form-control",id:"contact-name",placeholder:"Sammy Sample"})]}),Object(w.jsxs)("div",{className:"form-group mb-2",children:[Object(w.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(w.jsx)("input",{value:s,name:"email",onChange:E,type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email"})]}),Object(w.jsxs)("div",{className:"form-group mb-2",children:[Object(w.jsx)("label",{htmlFor:"password",children:"Password"}),Object(w.jsx)("input",{value:j,name:"password",onChange:E,type:"password",className:"form-control",id:"password",placeholder:"abcd1234"})]}),Object(w.jsxs)("div",{className:"form-group col-md-4",children:[Object(w.jsx)("label",{htmlFor:"inputState",children:"State"}),t?Object(w.jsx)("div",{children:"Loading..."}):Object(w.jsx)("select",{id:"inputState",className:"form-control",children:z.map((function(e){return Object(w.jsx)("option",{children:e})}))})]}),Object(w.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){(e.preventDefault(),g(O))?/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(s).toLowerCase())?!function(e){return!!e.match(/^[A-Za-z]\w{7,14}$/)}(j)?$("Password is invalid"):g(v)?g(D)?(h(""),r(""),d(""),S(""),A("")):$("State is required."):$("Occupation is required."):$("Email is invalid"):$("Name is required.")},children:"Submit"})]}),C&&Object(w.jsx)("div",{children:Object(w.jsx)("p",{className:"error-text",children:C})})]})]})};var y=function(){var e=Object(m.f)();return Object(w.jsx)("div",{className:"card bg-white card-rounded w-50",children:Object(w.jsx)("div",{className:"card-header bg-dark text-center",children:Object(w.jsxs)("h1",{children:["No match for ",Object(w.jsx)("code",{children:e.pathname})]})})})},q=new O.a({uri:"/graphql",cache:new h.a});var D=function(){return Object(w.jsx)(u.a,{client:q,children:Object(w.jsx)(b.a,{children:Object(w.jsx)("div",{className:"flex-column justify-center align-center min-100-vh bg-primary",children:Object(w.jsxs)(m.c,{children:[Object(w.jsx)(m.a,{exact:!0,path:"/",children:Object(w.jsx)(S,{})}),Object(w.jsx)(m.a,{children:Object(w.jsx)(y,{})})]})})})})};d.a.render(Object(w.jsx)(l.a.StrictMode,{children:Object(w.jsx)(D,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.99ab016d.chunk.js.map