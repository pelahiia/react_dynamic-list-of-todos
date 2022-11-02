(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),d=(c(10),c(11),c(4)),i=c.n(d),o=c(0),r=function(e){var t=e.todos,c=e.selectTodo,s=e.selectedTodoId;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:i()({"has-background-info-light":s===e.id}),children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),Object(o.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:i()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(o.jsx)("span",{className:"icon",children:s===e.id?Object(o.jsx)("i",{className:"far fa-eye-slash"}):Object(o.jsx)("i",{className:"far fa-eye"})})})})]})}))})]})},j=function(e){var t=e.query,c=e.setQuery,s=e.setStatus;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return s(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",onChange:function(e){return c(e.target.value)}}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),t.length>0&&Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onChange:function(){return c("")}})})]})]})},b=(c(13),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})});function h(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var u=function(e){var t=e.cancelSelectedTodo,c=e.todo,s=Object(l.useState)(null),a=Object(n.a)(s,2),d=a[0],i=a[1];return Object(l.useEffect)((function(){var e;(e=c.userId,h("/users/".concat(e))).then(i)})),Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),d?Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(c.id)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){t()}})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:c.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[c.completed?Object(o.jsx)("strong",{className:"has-text-danger",children:"Done"}):Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(d.email),children:d.name})]})]})]}):Object(o.jsx)(b,{})]})},m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(""),d=Object(n.a)(a,2),i=d[0],m=d[1],O=Object(l.useState)(null),x=Object(n.a)(O,2),f=x[0],p=x[1],N=Object(l.useState)("all"),v=Object(n.a)(N,2),y=v[0],g=v[1];Object(l.useEffect)((function(){h("/todos").then((function(e){return s(e)}))}),[]);var k=c.filter((function(e){return!("active"===y&&e.completed||"completed"===y&&!e.completed)&&e.title.toLowerCase().includes(i.toLowerCase())}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{query:i,setQuery:m,setStatus:g})}),Object(o.jsx)("div",{className:"block",children:c.length>0?Object(o.jsx)(b,{}):Object(o.jsx)(r,{todos:k,selectTodo:p,selectedTodoId:null===f||void 0===f?void 0:f.id})})]})})}),(null===f||void 0===f?void 0:f.id)&&Object(o.jsx)(u,{cancelSelectedTodo:function(){return p(null)},todo:f})]})};a.a.render(Object(o.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d09b0450.chunk.js.map