(this["webpackJsonppart-time-theater"] = this["webpackJsonppart-time-theater"] || []).push([
    [0], {
        14: function(e, t, i) {
            e.exports = {
                container: "Home_container__3myiG",
                title: "Home_title__2p6As",
                "title--active": "Home_title--active__1fJge",
                "shad-anim": "Home_shad-anim__2Czx0",
                quote: "Home_quote__2i78z",
                main: "Home_main__2u8U0",
                tabs: "Home_tabs__K2QSL",
                tab: "Home_tab__1MGX3",
                "tab--active": "Home_tab--active__2hpfb",
                list: "Home_list__2uitQ",
                "list__items-container": "Home_list__items-container__3aYcr",
                "list__items-container__item": "Home_list__items-container__item__3og0k",
                "list__items-container__item--empty": "Home_list__items-container__item--empty__9Qycm",
                "list__items-container__showtime-item": "Home_list__items-container__showtime-item__3Y8SI"
            }
        },
        45: function(e, t, i) {},
        46: function(e, t, i) {},
        50: function(e, t, i) {
            "use strict";
            i.r(t);
            var a = i(5),
                c = i.n(a),
                n = i(34),
                s = i.n(n),
                r = i(38),
                o = (i(45), i(46), i(7)),
                m = i(31),
                d = i(12),
                _ = i(27),
                l = i(14),
                b = i.n(l),
                j = i(20),
                u = i(35),
                h = i(39),
                p = i(37),
                v = Object(u.a)({
                  apiKey: "AIzaSyDWdOcs-jCQU-uhVSu2qDlkMtGsEjD1atk",
                  authDomain: "part-time-theater-73516.firebaseapp.com",
                  projectId: "part-time-theater-73516",
                  storageBucket: "part-time-theater-73516.firebasestorage.app",
                  messagingSenderId: "817430213870",
                  appId: "1:817430213870:web:21db89c33dbb9e38692fff"
                }),
                O = (Object(h.a)(v), Object(p.a)());
            var f = i(51);
            var g = i(52),
                x = i(10),
                y = function() {
                    var e = c.a.useState("lib"),
                        t = Object(d.a)(e, 2),
                        i = t[0],
                        a = t[1],
                        n = function() {
                            var e = c.a.useState(void 0),
                                t = Object(d.a)(e, 2),
                                i = t[0],
                                a = t[1];
                            return c.a.useEffect((function() {
                                Object(j.b)(Object(j.e)(Object(j.a)(O, "showtime"), Object(j.d)("datetime", "desc"))).then((function(e) {
                                    a(e.docs.map((function(e) {
                                        return {
                                            id: e.id,
                                            dvd: e.get("dvd"),
                                            datetime: e.get("datetime").toDate()
                                        }
                                    })))
                                }))
                            }), []), c.a.useMemo((function() {
                                if (void 0 === i) return {
                                    upcoming: void 0,
                                    past: void 0
                                };
                                var e = [],
                                    t = [],
                                    a = new Date;
                                return i.forEach((function(i) {
                                    Object(f.a)(i.datetime, a) ? t.push(i) : e.push(i)
                                })), {
                                    upcoming: e,
                                    past: t
                                }
                            }), [i])
                        }(),
                        s = function() {
                            var e = c.a.useState(void 0),
                                t = Object(d.a)(e, 2),
                                i = t[0],
                                a = t[1];
                            return c.a.useEffect((function() {
                                Object(j.b)(Object(j.e)(Object(j.a)(O, "dvd"), Object(j.d)("year", "desc"))).then((function(e) {
                                    a(e.docs.map((function(e) {
                                        return {
                                            id: e.id,
                                            title: e.get("title"),
                                            titleIMDb: e.get("titleIMDb"),
                                            director: e.get("director"),
                                            directorIMDb: e.get("directorIMDb"),
                                            year: e.get("year")
                                        }
                                    })))
                                }))
                            }), []), i
                        }(),
                        r = c.a.useMemo((function() {
                            return void 0 === s ? {} : s.reduce((function(e, t) {
                                return Object(m.a)(Object(m.a)({}, e), {}, Object(o.a)({}, t.id, Object(m.a)({}, t)))
                            }), {})
                        }), [s]),
                        l = n.upcoming && n.upcoming.length > 0;
                    return c.a.useEffect((function() {
                        l && a("upcoming")
                    }), [l]), Object(x.jsxs)("div", {
                        className: b.a.container,
                        children: [Object(x.jsxs)("h1", {
                            className: Object(_.a)(b.a.title, l && b.a["title--active"]),
                            "data-shadow": "Part-time Theater",
                            children: ["Part-time", Object(x.jsx)("br", {}), "Theater"]
                        }), Object(x.jsx)("span", {
                            className: b.a.quote,
                            children: '"From the point of view of feeling, the actor\'s craft is the type."'
                        }), Object(x.jsxs)("div", {
                            className: b.a.main,
                            children: [Object(x.jsxs)("div", {
                                className: b.a.tabs,
                                children: [Object(x.jsx)("div", {
                                    className: Object(_.a)(b.a.tab, "upcoming" === i && b.a["tab--active"]),
                                    onClick: function() {
                                        a("upcoming")
                                    },
                                    children: "Upcoming"
                                }), Object(x.jsx)("div", {
                                    className: Object(_.a)(b.a.tab, "past" === i && b.a["tab--active"]),
                                    onClick: function() {
                                        a("past")
                                    },
                                    children: "Past"
                                }), Object(x.jsx)("div", {
                                    className: Object(_.a)(b.a.tab, "lib" === i && b.a["tab--active"]),
                                    onClick: function() {
                                        a("lib")
                                    },
                                    children: "Lib"
                                })]
                            }), Object(x.jsxs)("div", {
                                className: b.a.list,
                                children: ["upcoming" === i && (void 0 === n || void 0 === n.upcoming ? Object(x.jsx)("div", {
                                    className: b.a["list-items-container__item--empty"],
                                    children: "Loading..."
                                }) : 0 === n.upcoming.length ? Object(x.jsx)("div", {
                                    className: b.a["list__items-container__item--empty"],
                                    children: "Nothing yet."
                                }) : n.upcoming.map((function(e) {
                                    var t = r[e.dvd];
                                    return t ? Object(x.jsxs)("div", {
                                        className: b.a["list__items-container__showtime-item"],
                                        children: [Object(x.jsxs)("a", {
                                            href: t.titleIMDb,
                                            rel: "noreferrer",
                                            target: "_blank",
                                            children: [t.title, " (", t.year, ")"]
                                        }), Object(x.jsx)("div", {
                                            children: Object(g.a)(e.datetime, "HH:mm MMM do ''yy")
                                        })]
                                    }, e.id) : Object(x.jsx)("div", {
                                        className: b.a["list__items-container__item--empty"],
                                        children: "-"
                                    }, e.id)
                                }))), "past" === i && (void 0 === n || void 0 === n.past ? Object(x.jsx)("div", {
                                    className: b.a["list__items-container__item--empty"],
                                    children: "Loading..."
                                }) : 0 === n.past.length ? Object(x.jsx)("div", {
                                    className: b.a["list__items-container__item--empty"],
                                    children: "Nothing yet."
                                }) : n.past.map((function(e) {
                                    var t = r[e.dvd];
                                    return t ? Object(x.jsxs)("div", {
                                        className: b.a["list__items-container__showtime-item"],
                                        children: [Object(x.jsxs)("a", {
                                            href: t.titleIMDb,
                                            rel: "noreferrer",
                                            target: "_blank",
                                            children: [t.title, " (", t.year, ")"]
                                        }), Object(x.jsx)("div", {
                                            children: Object(g.a)(e.datetime, "HH:mm MMM do ''yy")
                                        })]
                                    }, e.id) : Object(x.jsx)("div", {
                                        className: b.a["list__items-container__item--empty"],
                                        children: "-"
                                    }, e.id)
                                }))), "lib" === i && (void 0 === s ? Object(x.jsx)("div", {
                                    className: b.a["list__items-container__item--empty"],
                                    children: "Loading..."
                                }) : 0 === s.length ? Object(x.jsx)("div", {
                                    className: b.a["list__items-container__item--empty"],
                                    children: "Nothing yet."
                                }) : s.map((function(e) {
                                    return Object(x.jsxs)("div", {
                                        className: b.a["list__items-container__item"],
                                        children: [Object(x.jsxs)("a", {
                                            href: e.titleIMDb,
                                            rel: "noreferrer",
                                            target: "_blank",
                                            children: [e.title, " (", e.year, ")"]
                                        }), Object(x.jsx)("a", {
                                            href: e.directorIMDb,
                                            rel: "noreferrer",
                                            target: "_blank",
                                            children: e.director
                                        })]
                                    }, e.id)
                                })))]
                            })]
                        })]
                    })
                };
            var N = function() {
                    return Object(x.jsx)("div", {
                        className: "app",
                        children: Object(x.jsx)(y, {})
                    })
                },
                H = function(e) {
                    e && e instanceof Function && i.e(3).then(i.bind(null, 53)).then((function(t) {
                        var i = t.getCLS,
                            a = t.getFID,
                            c = t.getFCP,
                            n = t.getLCP,
                            s = t.getTTFB;
                        i(e), a(e), c(e), n(e), s(e)
                    }))
                };
            s.a.render(Object(x.jsx)(c.a.StrictMode, {
                children: Object(x.jsx)(r.a, {
                    children: Object(x.jsx)(N, {})
                })
            }), document.getElementById("root")), H()
        }
    },
    [
        [50, 1, 2]
    ]
]);
//# sourceMappingURL=main.85703ad8.chunk.js.map
