(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [15],
    {
        '6p3f': function(e, t, r) {
            'use strict';
            var a = r('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), r('miYZ');
            var n = a(r('tsqr')),
                u = a(r('o0o1'));
            r('2qtc');
            var c = a(r('kLXV')),
                s = a(r('MVZn')),
                l = r('HjVa'),
                o = {
                    namespace: 'product',
                    state: {
                        list: [],
                        total: 0,
                        current: 0,
                        searchText: '',
                        modalVisible: !1,
                        currentItem: {},
                        modalType: 'create',
                        searchResult: [],
                    },
                    effects: {
                        all: u.default.mark(function e(t, r) {
                            var a, n, o, d, i, p;
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (a = t.payload),
                                                    (n = r.select),
                                                    (o = r.call),
                                                    (d = r.put),
                                                    (e.next = 4),
                                                    n(function(e) {
                                                        var t = e.global;
                                                        return t.setting;
                                                    })
                                                );
                                            case 4:
                                                return (
                                                    (i = e.sent),
                                                    (e.next = 7),
                                                    o(
                                                        l.productAll,
                                                        (0, s.default)({}, a, { limit: i.item })
                                                    )
                                                );
                                            case 7:
                                                if (((p = e.sent), !p.success)) {
                                                    e.next = 13;
                                                    break;
                                                }
                                                return (
                                                    (e.next = 11),
                                                    d({
                                                        type: 'allSuccess',
                                                        payload: {
                                                            list: p.data,
                                                            total: p.total,
                                                            current: p.current_page,
                                                        },
                                                    })
                                                );
                                            case 11:
                                                e.next = 14;
                                                break;
                                            case 13:
                                                c.default.error({
                                                    title: 'Error al consultar el producto',
                                                    content: p.message,
                                                });
                                            case 14:
                                            case 'end':
                                                return e.stop();
                                        }
                                },
                                e,
                                this
                            );
                        }),
                        search: u.default.mark(function e(t, r) {
                            var a, n, s, o;
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (a = t.payload),
                                                    (n = r.call),
                                                    (s = r.put),
                                                    (e.next = 4),
                                                    n(l.productSearch, a)
                                                );
                                            case 4:
                                                if (((o = e.sent), !o.success)) {
                                                    e.next = 10;
                                                    break;
                                                }
                                                return (
                                                    (e.next = 8),
                                                    s({ type: 'searchSuccess', payload: o.data })
                                                );
                                            case 8:
                                                e.next = 11;
                                                break;
                                            case 10:
                                                c.default.error({
                                                    title: 'Error al consultar el producto',
                                                    content: o.message,
                                                });
                                            case 11:
                                            case 'end':
                                                return e.stop();
                                        }
                                },
                                e,
                                this
                            );
                        }),
                        create: u.default.mark(function e(t, r) {
                            var a, n, s, o;
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (a = t.payload),
                                                    (n = r.call),
                                                    (s = r.put),
                                                    (e.next = 4),
                                                    n(l.productCreate, a)
                                                );
                                            case 4:
                                                if (((o = e.sent), !o.success)) {
                                                    e.next = 13;
                                                    break;
                                                }
                                                return (e.next = 8), s({ type: 'resetProduct' });
                                            case 8:
                                                return (
                                                    c.default.success({
                                                        title: 'Crear producto',
                                                        content: o.message,
                                                    }),
                                                    (e.next = 11),
                                                    s({ type: 'all' })
                                                );
                                            case 11:
                                                e.next = 14;
                                                break;
                                            case 13:
                                                c.default.error({
                                                    title: 'Error al crear producto',
                                                    content: o.message,
                                                });
                                            case 14:
                                            case 'end':
                                                return e.stop();
                                        }
                                },
                                e,
                                this
                            );
                        }),
                        update: u.default.mark(function e(t, r) {
                            var a, s, o, d;
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (a = t.payload),
                                                    (s = r.call),
                                                    (o = r.put),
                                                    (e.next = 4),
                                                    s(l.productUpdate, a)
                                                );
                                            case 4:
                                                if (((d = e.sent), !d.success)) {
                                                    e.next = 13;
                                                    break;
                                                }
                                                return (
                                                    (e.next = 8),
                                                    o({ type: 'updateSuccess', payload: a })
                                                );
                                            case 8:
                                                return (e.next = 10), o({ type: 'resetProduct' });
                                            case 10:
                                                n.default.success(
                                                    'Se actualizo el producto con el id = ' + a.id
                                                ),
                                                    (e.next = 14);
                                                break;
                                            case 13:
                                                c.default.error({
                                                    title: 'Error al actualizar el producto',
                                                    content: d.message,
                                                });
                                            case 14:
                                            case 'end':
                                                return e.stop();
                                        }
                                },
                                e,
                                this
                            );
                        }),
                        delete: u.default.mark(function e(t, r) {
                            var a, s, o, d;
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (a = t.payload),
                                                    (s = r.call),
                                                    (o = r.put),
                                                    (e.next = 4),
                                                    s(l.productDelete, a)
                                                );
                                            case 4:
                                                if (((d = e.sent), !d.success)) {
                                                    e.next = 13;
                                                    break;
                                                }
                                                return (e.next = 8), o({ type: 'resetProduct' });
                                            case 8:
                                                return (
                                                    n.default.success(
                                                        'Se elimino el producto con el id = ' + a.id
                                                    ),
                                                    (e.next = 11),
                                                    o({ type: 'all' })
                                                );
                                            case 11:
                                                e.next = 14;
                                                break;
                                            case 13:
                                                c.default.error({
                                                    title: 'Error al actualizar el producto',
                                                    content: d.message,
                                                });
                                            case 14:
                                            case 'end':
                                                return e.stop();
                                        }
                                },
                                e,
                                this
                            );
                        }),
                    },
                    reducers: {
                        allSuccess: function(e, t) {
                            var r = t.payload;
                            return (0, s.default)({}, e, r);
                        },
                        searchSuccess: function(e, t) {
                            var r = t.payload;
                            return (0, s.default)({}, e, { searchResult: r });
                        },
                        updateSuccess: function(e, t) {
                            var r = t.payload,
                                a = e.list.map(function(e) {
                                    return e.id == r.id ? (0, s.default)({}, e, r) : e;
                                });
                            return (0, s.default)({}, e, { list: a });
                        },
                        setSearchText: function(e, t) {
                            var r = t.payload;
                            return (0, s.default)({}, e, { searchText: r });
                        },
                        showModal: function(e, t) {
                            var r = t.payload;
                            return (0, s.default)({}, e, r, { modalVisible: !0 });
                        },
                        resetProduct: function(e, t) {
                            return (0, s.default)({}, e, {
                                currentItem: {},
                                modalVisible: !1,
                                modalType: 'create',
                            });
                        },
                    },
                };
            t.default = o;
        },
        HjVa: function(e, t, r) {
            'use strict';
            var a = r('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.productAll = l),
                (t.productById = d),
                (t.productSearch = p),
                (t.productCreate = h),
                (t.productUpdate = w),
                (t.productDelete = m);
            var n = a(r('o0o1')),
                u = a(r('yXPU')),
                c = a(r('t3Un')),
                s = '/product';
            function l(e) {
                return o.apply(this, arguments);
            }
            function o() {
                return (
                    (o = (0, u.default)(
                        n.default.mark(function e(t) {
                            return n.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return e.abrupt(
                                                    'return',
                                                    (0, c.default)(''.concat(s, '/all'), {
                                                        method: 'POST',
                                                        body: t,
                                                    })
                                                );
                                            case 1:
                                            case 'end':
                                                return e.stop();
                                        }
                                },
                                e,
                                this
                            );
                        })
                    )),
                    o.apply(this, arguments)
                );
            }
            function d(e) {
                return i.apply(this, arguments);
            }
            function i() {
                return (
                    (i = (0, u.default)(
                        n.default.mark(function e(t) {
                            return n.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return e.abrupt(
                                                    'return',
                                                    (0, c.default)(''.concat(s, '/byid'), {
                                                        method: 'POST',
                                                        body: t,
                                                    })
                                                );
                                            case 1:
                                            case 'end':
                                                return e.stop();
                                        }
                                },
                                e,
                                this
                            );
                        })
                    )),
                    i.apply(this, arguments)
                );
            }
            function p(e) {
                return f.apply(this, arguments);
            }
            function f() {
                return (
                    (f = (0, u.default)(
                        n.default.mark(function e(t) {
                            return n.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return e.abrupt(
                                                    'return',
                                                    (0, c.default)(''.concat(s, '/search'), {
                                                        method: 'POST',
                                                        body: t,
                                                    })
                                                );
                                            case 1:
                                            case 'end':
                                                return e.stop();
                                        }
                                },
                                e,
                                this
                            );
                        })
                    )),
                    f.apply(this, arguments)
                );
            }
            function h(e) {
                return y.apply(this, arguments);
            }
            function y() {
                return (
                    (y = (0, u.default)(
                        n.default.mark(function e(t) {
                            return n.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return e.abrupt(
                                                    'return',
                                                    (0, c.default)(s, { method: 'POST', body: t })
                                                );
                                            case 1:
                                            case 'end':
                                                return e.stop();
                                        }
                                },
                                e,
                                this
                            );
                        })
                    )),
                    y.apply(this, arguments)
                );
            }
            function w(e) {
                return x.apply(this, arguments);
            }
            function x() {
                return (
                    (x = (0, u.default)(
                        n.default.mark(function e(t) {
                            return n.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return e.abrupt(
                                                    'return',
                                                    (0, c.default)(s, { method: 'PUT', body: t })
                                                );
                                            case 1:
                                            case 'end':
                                                return e.stop();
                                        }
                                },
                                e,
                                this
                            );
                        })
                    )),
                    x.apply(this, arguments)
                );
            }
            function m(e) {
                return b.apply(this, arguments);
            }
            function b() {
                return (
                    (b = (0, u.default)(
                        n.default.mark(function e(t) {
                            return n.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return e.abrupt(
                                                    'return',
                                                    (0, c.default)(s, { method: 'DELETE', body: t })
                                                );
                                            case 1:
                                            case 'end':
                                                return e.stop();
                                        }
                                },
                                e,
                                this
                            );
                        })
                    )),
                    b.apply(this, arguments)
                );
            }
        },
    },
]);
