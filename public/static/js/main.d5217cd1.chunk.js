(this.webpackJsonpclient = this.webpackJsonpclient || []).push([[0], { 18: function (e, t, n) { e.exports = n(30) }, 23: function (e, t, n) { }, 24: function (e, t, n) { }, 30: function (e, t, n) { "use strict"; n.r(t); var a = n(0), o = n.n(a), l = n(15), c = n.n(l), r = n(1), s = (n(23), n(5)), i = n(7), u = o.a.createContext({ token: null, userID: null, login: function () { }, logout: function () { } }), m = (n(24), function () { var e = Object(a.useState)(!1), t = Object(r.a)(e, 2), n = t[0], l = t[1], c = Object(a.useState)("login"), s = Object(r.a)(c, 2), i = s[0], m = s[1], g = Object(a.useState)(""), d = Object(r.a)(g, 2), h = d[0], f = d[1], E = Object(a.useState)(""), b = Object(r.a)(E, 2), p = b[0], v = b[1], j = Object(a.useState)(""), O = Object(r.a)(j, 2), S = O[0], y = O[1], k = Object(a.useContext)(u); return o.a.createElement("div", null, o.a.createElement("h1", null, "login" !== i ? "SignUp" : "Login"), o.a.createElement("form", { className: "container", onSubmit: function (e) { if (k.token = "a", console.log(k), e.preventDefault(), 0 !== h.trim().length && 0 !== p.trim().length) { var t = { query: '\n        mutation{\n            signUp(UserData:{email:"'.concat(h, '",password:"').concat(p, '"})\n        }') }; "login" === i && (t = { query: '\n            query{\n                login(UserData:{email:"'.concat(h, '",password:"').concat(p, '"}){\n                    userID\n                    tokenExpiration\n                    token\n                }\n            }') }), fetch("https://sof-clone.herokuapp.com/graphhql", { method: "POST", body: JSON.stringify(t), headers: { "Content-Type": "application/json" } }).then((function (e) { return e.json() })).then((function (e) { console.log(e), console.log(e), e.errors ? (y(e.errors[0].message), l(!0), setTimeout((function () { l(!1) }), 3e3)) : (y(""), l(!1)), e.data.login.token && (sessionStorage.setItem("token", e.data.login.token), sessionStorage.setItem("userID", e.data.login.userID), sessionStorage.setItem("tokenExpiration", e.data.login.tokenExpiration), k.login(e.data.login.token, e.data.login.userID, e.data.login.tokenExpiration)), console.log(e.errors), console.log(e) })).catch((function (e) { console.log(e) })) } } }, o.a.createElement("div", { className: "w-50 mr-auto" }, o.a.createElement("div", { className: "form-group" }, o.a.createElement("label", { htmlFor: "emailID" }, "Email address"), o.a.createElement("input", { onChange: function (e) { f(e.target.value) }, type: "email", className: "form-control", id: "emailID", "aria-describedby": "emailHelp" }), o.a.createElement("small", { id: "emailHelp", className: "form-text text-muted" }, "We'll never share your email with anyone else.")), o.a.createElement("div", { className: "form-group" }, o.a.createElement("label", { htmlFor: "password" }, "Password"), o.a.createElement("input", { onChange: function (e) { v(e.target.value) }, type: "password", className: "form-control", id: "password" })), o.a.createElement("p", { className: "alert alert-danger ".concat(n ? "" : "d-none"), role: "alert" }, S), o.a.createElement("div", { className: "d-flex justify-content-around mt-5" }, o.a.createElement("button", { className: "btn btn-primary" }, "login" !== i ? "SignUp" : "Login")), o.a.createElement("p", { onClick: function () { m("login" === i ? "signup" : "login") } }, "Go to ", "login" === i ? "SignUp" : "Login", " Page")))) }), g = function () { return o.a.createElement("div", null, o.a.createElement("h1", null, "Home")) }, d = function (e) { var t = Object(a.useState)([]), n = Object(r.a)(t, 2), l = n[0], c = n[1], i = Object(a.useState)(!0), m = Object(r.a)(i, 2), g = m[0], d = m[1], h = Object(a.useState)(""), f = Object(r.a)(h, 2), E = f[0], b = f[1], p = Object(a.useState)(""), v = Object(r.a)(p, 2), j = v[0], O = v[1], S = Object(a.useState)(!1), y = Object(r.a)(S, 2), k = y[0], x = y[1], N = Object(a.useState)(!1), q = Object(r.a)(N, 2), w = q[0], C = q[1], I = Object(a.useContext)(u); Object(a.useEffect)((function () { console.log("useeffect"); fetch("https://sof-clone.herokuapp.com/graphhql", { method: "POST", body: JSON.stringify({ query: "\n        query{\n            questions{\n                _id\n                title\n            }\n        }" }), headers: { "Content-Type": "application/json" } }).then((function (e) { return e.json() })).then((function (e) { c(e.data.questions), d(!1) })).catch((function (e) { console.log(e) })) }), [w]); var D = o.a.createElement("h1", null, "Is Loading..."); return g || (D = l.map((function (e) { return o.a.createElement("div", { key: e._id }, o.a.createElement("h1", null, e.title), o.a.createElement(s.b, { to: "/questions/".concat(e._id) }, "View Question")) }))), o.a.createElement("div", null, o.a.createElement("h1", null, "Questions"), o.a.createElement("div", { className: "container", style: { transition: "height 2s" } }, !k && o.a.createElement("button", { onClick: function () { x(!0) } }, "Open "), k && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", { className: "d-flex justify-content-start align-items-center" }, o.a.createElement("h3", null, "Ask your Question"), o.a.createElement("button", { onClick: function () { x(!1) }, type: "button", className: "close ml-5 mb-1", "aria-label": "Close" }, o.a.createElement("span", { "aria-hidden": "true" }, "\xd7"))), o.a.createElement("form", { className: "container", onSubmit: function (e) { e.preventDefault(), C(!w), alert("Question submitted"), x(!1); var t = { query: '\n            mutation{\n                askQuestion(QuestionData:{title:"'.concat(E, '",text:"').concat(j, '"})\n              }') }; fetch("https://sof-clone.herokuapp.com/graphhql", { method: "POST", body: JSON.stringify(t), headers: { Authorization: "Bearer " + I.token, "Content-Type": "application/json" } }).then((function (e) { return console.log(e), e.json() })).then((function (e) { console.log(e) })).catch((function (e) { console.log(e) })) } }, o.a.createElement("div", { className: "w-50 mr-auto" }, o.a.createElement("div", { className: "form-group" }, o.a.createElement("label", { htmlFor: "emailID" }, "Title"), o.a.createElement("input", { onChange: function (e) { b(e.target.value) }, type: "text", className: "form-control", id: "title" })), o.a.createElement("div", { className: "form-group" }, o.a.createElement("label", { htmlFor: "text" }, "Text"), o.a.createElement("textarea", { onChange: function (e) { O(e.target.value) }, className: "form-control", id: "text", rows: "3" })), o.a.createElement("button", null, "Submit"))))), "s", o.a.createElement(s.b, { to: "questions/ask" }, "Ask"), D) }, h = function () { var e = Object(a.useState)(""), t = Object(r.a)(e, 2), n = t[0], l = t[1], c = Object(a.useState)(""), s = Object(r.a)(c, 2), i = s[0], m = s[1], g = Object(a.useState)(!1), d = Object(r.a)(g, 2), h = d[0], f = d[1], E = Object(a.useContext)(u); return o.a.createElement("div", { className: "container", style: { transition: "height 2s" } }, !h && o.a.createElement("button", { onClick: function () { f(!0) } }, "Open "), h && o.a.createElement(o.a.Fragment, null, o.a.createElement("div", { className: "d-flex justify-content-start align-items-center" }, o.a.createElement("h3", null, "Ask your Question"), o.a.createElement("button", { onClick: function () { f(!1) }, type: "button", className: "close ml-5 mb-1", "aria-label": "Close" }, o.a.createElement("span", { "aria-hidden": "true" }, "\xd7"))), o.a.createElement("form", { className: "container", onSubmit: function (e) { e.preventDefault(); var t = { query: '\n            mutation{\n                askQuestion(QuestionData:{title:"'.concat(n, '",text:"').concat(i, '"})\n              }') }; fetch("https://sof-clone.herokuapp.com/graphhql", { method: "POST", body: JSON.stringify(t), headers: { Authorization: "Bearer " + E.token, "Content-Type": "application/json" } }).then((function (e) { return console.log(e), e.json() })).then((function (e) { console.log(e) })).catch((function (e) { console.log(e) })) } }, o.a.createElement("div", { className: "w-50 mr-auto" }, o.a.createElement("div", { className: "form-group" }, o.a.createElement("label", { htmlFor: "emailID" }, "Title"), o.a.createElement("input", { onChange: function (e) { l(e.target.value) }, type: "text", className: "form-control", id: "title" })), o.a.createElement("div", { className: "form-group" }, o.a.createElement("label", { htmlFor: "text" }, "Text"), o.a.createElement("textarea", { onChange: function (e) { m(e.target.value) }, className: "form-control", id: "text", rows: "3" })), o.a.createElement("button", null, "Submit"))))) }, f = function () { var e = Object(a.useContext)(u), t = Object(i.g)().id, n = Object(a.useState)(""), l = Object(r.a)(n, 2), c = l[0], s = l[1], m = Object(a.useState)([]), g = Object(r.a)(m, 2), d = g[0], h = g[1], f = Object(a.useState)([]), E = Object(r.a)(f, 2), b = E[0], p = E[1], v = Object(a.useState)(!1), j = Object(r.a)(v, 2), O = j[0], S = j[1], y = Object(a.useState)(!0), k = Object(r.a)(y, 2), x = k[0], N = k[1], q = Object(a.useState)([]), w = Object(r.a)(q, 2), C = w[0], I = w[1]; return Object(a.useEffect)((function () { console.log("useEffect"); var n = { query: '\n        query{\n            question(id:"'.concat(t, '"){\n                _id\n                title\n                text\n                creator{\n                    email\n                }\n                createdAt\n                answers{\n                    _id\n                        creator{\n                            _id \n                            email\n                        }\n                        text\n                }\n            }\n        }') }; fetch("https://sof-clone.herokuapp.com/graphhql", { method: "POST", body: JSON.stringify(n), headers: { "Content-Type": "application/json" } }).then((function (e) { return e.json() })).then((function (t) { h(t.data.question), p(t.data.question.answers), N(!1), console.log(t.data), b.forEach((function (t) { t.creator._id === e.userID && S(!0) })) })).catch((function (e) { console.log(e) })) }), [C]), o.a.createElement("div", null, x && o.a.createElement("h1", null, "Loading"), !x && o.a.createElement("div", null, o.a.createElement("h1", null, d.title), o.a.createElement("p", null, " Asked On ", d.createdAt), o.a.createElement("p", null, d.text), o.a.createElement("div", { className: "d-flex justify-content-start align-items-center" }, o.a.createElement("h3", null, "Answer this Question")), o.a.createElement("form", { className: "container", onSubmit: function (n) { n.preventDefault(); var a = { query: '\n            mutation{\n                answerQuestion(AnswerData:{text:"'.concat(c, '",questionID:"').concat(t, '"})\n              }') }; fetch("https://sof-clone.herokuapp.com/graphhql", { method: "POST", body: JSON.stringify(a), headers: { Authorization: "Bearer " + e.token, "Content-Type": "application/json" } }).then((function (e) { return console.log(e), e.json() })).then((function (e) { console.log(e) })).catch((function (e) { console.log(e) })), I(!C) } }, o.a.createElement("div", { className: "w-50 mr-auto" }, o.a.createElement("div", { className: "form-group" }, o.a.createElement("label", { htmlFor: "text" }, "Text"), o.a.createElement("textarea", { onChange: function (e) { s(e.target.value) }, className: "form-control", id: "text", rows: "3" })), o.a.createElement("button", { disabled: O }, "Submit"))), o.a.createElement("div", null, o.a.createElement("h3", null, "Answers"), b.map((function (e) { return o.a.createElement("div", { key: e._id }, o.a.createElement("p", null, e.text), o.a.createElement("p", null, e.createdAt)) }))))) }, E = function () { var e = Object(a.useContext)(u); return o.a.createElement(o.a.Fragment, null, o.a.createElement("nav", { className: "navbar navbar-expand-sm navbar-light bg-light" }, o.a.createElement("div", { className: "navbar-brand" }, "SF CLone"), o.a.createElement("div", { className: "navbar-nav ml-sm-auto" }, e.token && o.a.createElement("li", { className: "nav-item nav-link" }, o.a.createElement(s.c, { to: "/questions" }, "Questions")), !e.token && o.a.createElement("li", { className: "nav-item nav-link" }, o.a.createElement(s.c, { to: "/auth" }, "Login")), e.token && o.a.createElement("li", { onClick: e.logout, className: "nav-item nav-link" }, o.a.createElement(s.c, { to: "/auth" }, "Logout"))))) }; var b = function () { var e = Object(a.useState)(null), t = Object(r.a)(e, 2), n = t[0], l = t[1], c = Object(a.useState)(null), b = Object(r.a)(c, 2), p = b[0], v = b[1], j = function (e, t, n) { l(e), v(t) }; return Object(a.useEffect)((function () { sessionStorage.getItem("token") && j(sessionStorage.getItem("token"), sessionStorage.getItem("userID"), sessionStorage.getItem("tokenExpiration")) }), []), o.a.createElement(s.a, null, o.a.createElement(o.a.Fragment, null, o.a.createElement(u.Provider, { value: { token: n, userID: p, login: j, logout: function () { l(null), v(null), sessionStorage.removeItem("token"), sessionStorage.removeItem("tokenExpiration"), sessionStorage.removeItem("userID") } } }, o.a.createElement(E, null), o.a.createElement(i.d, null, !n && o.a.createElement(i.b, { path: "/auth", component: m, exact: !0 }), n && o.a.createElement(i.a, { from: "/auth", to: "/questions", component: d, exact: !0 }), !n && o.a.createElement(i.a, { from: "/", to: "/auth", component: m }), o.a.createElement(i.b, { path: "/questions", component: d, exact: !0 }), o.a.createElement(i.b, { path: "/questions/ask", component: h, exact: !0 }), o.a.createElement(i.b, { path: "/questions/:id", component: f, exact: !0 }), o.a.createElement(i.b, { path: "/", component: g }))))) }; Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)); c.a.render(o.a.createElement(o.a.StrictMode, null, o.a.createElement(b, null)), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (e) { e.unregister() })).catch((function (e) { console.error(e.message) })) } }, [[18, 1, 2]]]);
//# sourceMappingURL=main.d5217cd1.chunk.js.map