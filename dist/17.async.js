(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [17],
    {
        '6MXj': function(e, t, r) {
            'use strict';
            var a = r('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), r('miYZ');
            var n = a(r('tsqr')),
                u = a(r('o0o1'));
            r('2qtc');
            var c = a(r('kLXV')),
                l = a(r('MVZn')),
                s = r('UjrU'),
                o = {
                    namespace: 'provider',
                    state: {
                        list: [],
                        total: null,
                        current: null,
                        searchText: '',
                        modalVisible: !1,
                        currentItem: {},
                        modalType: 'create',
                        modalUploadVisible: !1,
                        modalExportVisible: !1,
                        searchResult: [],
                        validRuc: !0,
                    },
                    effects: {
                        all: u.default.mark(function e(t, r) {
                            var a, n, o, i, d, p;
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (a = t.payload),
                                                    (n = r.select),
                                                    (o = r.call),
                                                    (i = r.put),
                                                    (e.next = 4),
                                                    n(function(e) {
                                                        var t = e.global;
                                                        return t.setting;
                                                    })
                                                );
                                            case 4:
                                                return (
                                                    (d = e.sent),
                                                    (e.next = 7),
                                                    o(
                                                        s.providerAll,
                                                        (0, l.default)({}, a, { limit: d.item })
                                                    )
                                                );
                                            case 7:
                                                if (((p = e.sent), !p.success)) {
                                                    e.next = 13;
                                                    break;
                                                }
                                                return (
                                                    (e.next = 11),
                                                    i({
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
                                                    title: 'Error al consultar el proveedor',
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
                            var a, n, l, o;
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (a = t.payload),
                                                    (n = r.call),
                                                    (l = r.put),
                                                    (e.next = 4),
                                                    n(s.providerSearch, a)
                                                );
                                            case 4:
                                                if (((o = e.sent), !o.success)) {
                                                    e.next = 10;
                                                    break;
                                                }
                                                return (
                                                    (e.next = 8),
                                                    l({ type: 'searchSuccess', payload: o.data })
                                                );
                                            case 8:
                                                e.next = 11;
                                                break;
                                            case 10:
                                                c.default.error({
                                                    title: 'Error al consultar el proveedor',
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
                            var a, n, l, o;
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (a = t.payload),
                                                    (n = r.call),
                                                    (l = r.put),
                                                    (e.next = 4),
                                                    n(s.providerCreate, a)
                                                );
                                            case 4:
                                                if (((o = e.sent), !o.success)) {
                                                    e.next = 13;
                                                    break;
                                                }
                                                return (e.next = 8), l({ type: 'resetProvider' });
                                            case 8:
                                                return (
                                                    c.default.success({
                                                        title: 'Crear proveedor',
                                                        content: o.message,
                                                    }),
                                                    (e.next = 11),
                                                    l({ type: 'all' })
                                                );
                                            case 11:
                                                e.next = 14;
                                                break;
                                            case 13:
                                                c.default.error({
                                                    title: 'Error al crear proveedor',
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
                            var a, l, o, i;
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (a = t.payload),
                                                    (l = r.call),
                                                    (o = r.put),
                                                    (e.next = 4),
                                                    l(s.providerUpdate, a)
                                                );
                                            case 4:
                                                if (((i = e.sent), !i.success)) {
                                                    e.next = 13;
                                                    break;
                                                }
                                                return (
                                                    (e.next = 8),
                                                    o({ type: 'updateSuccess', payload: a })
                                                );
                                            case 8:
                                                return (e.next = 10), o({ type: 'resetProvider' });
                                            case 10:
                                                n.default.success(
                                                    'Se actualizo el proveedor con el id = ' + a.id
                                                ),
                                                    (e.next = 14);
                                                break;
                                            case 13:
                                                c.default.error({
                                                    title: 'Error al actualizar el proveedor',
                                                    content: i.message,
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
                            var a, l, o, i;
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (a = t.payload),
                                                    (l = r.call),
                                                    (o = r.put),
                                                    (e.next = 4),
                                                    l(s.providerDelete, a)
                                                );
                                            case 4:
                                                if (((i = e.sent), !i.success)) {
                                                    e.next = 13;
                                                    break;
                                                }
                                                return (e.next = 8), o({ type: 'resetProvider' });
                                            case 8:
                                                return (
                                                    n.default.success(
                                                        'Se elimino el proveedor con el id = ' +
                                                            a.id
                                                    ),
                                                    (e.next = 11),
                                                    o({ type: 'all' })
                                                );
                                            case 11:
                                                e.next = 14;
                                                break;
                                            case 13:
                                                c.default.error({
                                                    title: 'Error al actualizar el proveedor',
                                                    content: i.message,
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
                        validateRuc: u.default.mark(function e(t, r) {
                            var a, n, c, l;
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (a = t.payload),
                                                    (n = r.call),
                                                    (c = r.put),
                                                    (e.next = 4),
                                                    n(s.providerValidateRuc, { ruc: a })
                                                );
                                            case 4:
                                                return (
                                                    (l = e.sent),
                                                    (e.next = 7),
                                                    c({
                                                        type: 'validateRucSuccess',
                                                        payload: { validateRuc: l.success },
                                                    })
                                                );
                                            case 7:
                                            case 'end':
                                                return e.stop();
                                        }
                                },
                                e,
                                this
                            );
                        }),
                        uploadProviders: u.default.mark(function e(t, r) {
                            var a, n, l, o, i;
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    (a = t.payload),
                                                    (n = r.call),
                                                    (l = r.put),
                                                    (o = new FormData()),
                                                    o.append('file', a.file),
                                                    (e.next = 6),
                                                    n(s.providerUploadTemplate, o)
                                                );
                                            case 6:
                                                if (((i = e.sent), !i.success)) {
                                                    e.next = 15;
                                                    break;
                                                }
                                                return (e.next = 10), l({ type: 'resetProvider' });
                                            case 10:
                                                return (
                                                    c.default.success({
                                                        title: 'Importar proveedores',
                                                        content: i.message,
                                                    }),
                                                    (e.next = 13),
                                                    l({ type: 'all' })
                                                );
                                            case 13:
                                                e.next = 16;
                                                break;
                                            case 15:
                                                c.default.error({
                                                    title: 'Algo sali\xf3 mal',
                                                    content: i.message,
                                                });
                                            case 16:
                                            case 'end':
                                                return e.stop();
                                        }
                                },
                                e,
                                this
                            );
                        }),
                        downloadTemp: u.default.mark(function e(t, r) {
                            var a, n, l, o;
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return (
                                                    t.payload,
                                                    (a = r.call),
                                                    r.put,
                                                    (e.next = 4),
                                                    a(s.providerDowloandTemplate)
                                                );
                                            case 4:
                                                n = e.sent;
                                                try {
                                                    (l = window.URL.createObjectURL(n)),
                                                        (o = document.createElement('a')),
                                                        (o.href = l),
                                                        (o.download = 'templateProviders.xlsx'),
                                                        o.click();
                                                } catch (e) {
                                                    c.default.warning({
                                                        title: 'Algo sali\xf3 mal',
                                                        content: n.message,
                                                    });
                                                }
                                            case 6:
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
                            return (0, l.default)({}, e, r);
                        },
                        searchSuccess: function(e, t) {
                            var r = t.payload;
                            return (0, l.default)({}, e, { searchResult: r });
                        },
                        updateSuccess: function(e, t) {
                            var r = t.payload,
                                a = e.list.map(function(e) {
                                    return e.id == r.id ? (0, l.default)({}, e, r) : e;
                                });
                            return (0, l.default)({}, e, { list: a });
                        },
                        setSearchText: function(e, t) {
                            var r = t.payload;
                            return (0, l.default)({}, e, { searchText: r });
                        },
                        showModal: function(e, t) {
                            var r = t.payload;
                            return (0, l.default)({}, e, r, { modalVisible: !0 });
                        },
                        toggleModalUpload: function(e, t) {
                            var r = t.payload;
                            return (0, l.default)({}, e, { modalUploadVisible: r });
                        },
                        toggleModalExport: function(e, t) {
                            var r = t.payload;
                            return (0, l.default)({}, e, { modalExportVisible: r });
                        },
                        resetProvider: function(e, t) {
                            return (0, l.default)({}, e, {
                                currentItem: {},
                                modalVisible: !1,
                                modalType: 'create',
                            });
                        },
                        validateRucSuccess: function(e, t) {
                            var r = t.payload;
                            return (0, l.default)({}, e, r);
                        },
                    },
                };
            t.default = o;
        },
        UjrU: function(e, t, r) {
            'use strict';
            var a = r('284h'),
                n = r('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.providerAll = o),
                (t.providerById = d),
                (t.providerSearch = f),
                (t.providerCreate = v),
                (t.providerUpdate = m),
                (t.providerDelete = x),
                (t.providerDowloandTemplate = k),
                (t.providerUploadTemplate = g),
                (t.providerValidateRuc = P);
            var u = n(r('o0o1')),
                c = n(r('yXPU')),
                l = a(r('t3Un')),
                s = '/provider';
            function o(e) {
                return i.apply(this, arguments);
            }
            function i() {
                return (
                    (i = (0, c.default)(
                        u.default.mark(function e(t) {
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return e.abrupt(
                                                    'return',
                                                    (0, l.default)(''.concat(s, '/all'), {
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
            function d(e) {
                return p.apply(this, arguments);
            }
            function p() {
                return (
                    (p = (0, c.default)(
                        u.default.mark(function e(t) {
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return e.abrupt(
                                                    'return',
                                                    (0, l.default)(''.concat(s, '/byid'), {
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
                    p.apply(this, arguments)
                );
            }
            function f(e) {
                return h.apply(this, arguments);
            }
            function h() {
                return (
                    (h = (0, c.default)(
                        u.default.mark(function e(t) {
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return e.abrupt(
                                                    'return',
                                                    (0, l.default)(''.concat(s, '/search'), {
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
                    h.apply(this, arguments)
                );
            }
            function v(e) {
                return w.apply(this, arguments);
            }
            function w() {
                return (
                    (w = (0, c.default)(
                        u.default.mark(function e(t) {
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return e.abrupt(
                                                    'return',
                                                    (0, l.default)(s, { method: 'POST', body: t })
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
                    w.apply(this, arguments)
                );
            }
            function m(e) {
                return y.apply(this, arguments);
            }
            function y() {
                return (
                    (y = (0, c.default)(
                        u.default.mark(function e(t) {
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return e.abrupt(
                                                    'return',
                                                    (0, l.default)(s, { method: 'PUT', body: t })
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
            function x(e) {
                return b.apply(this, arguments);
            }
            function b() {
                return (
                    (b = (0, c.default)(
                        u.default.mark(function e(t) {
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return e.abrupt(
                                                    'return',
                                                    (0, l.default)(s, { method: 'DELETE', body: t })
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
            function k() {
                return T.apply(this, arguments);
            }
            function T() {
                return (
                    (T = (0, c.default)(
                        u.default.mark(function e() {
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return e.abrupt(
                                                    'return',
                                                    (0, l.dowloandFetch)(
                                                        ''.concat(s, '/download/template'),
                                                        { method: 'GET' }
                                                    )
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
                    T.apply(this, arguments)
                );
            }
            function g(e) {
                return S.apply(this, arguments);
            }
            function S() {
                return (
                    (S = (0, c.default)(
                        u.default.mark(function e(t) {
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return e.abrupt(
                                                    'return',
                                                    (0, l.default)(
                                                        ''.concat(s, '/upload/template'),
                                                        { method: 'POST', body: t }
                                                    )
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
                    S.apply(this, arguments)
                );
            }
            function P(e) {
                return U.apply(this, arguments);
            }
            function U() {
                return (
                    (U = (0, c.default)(
                        u.default.mark(function e(t) {
                            return u.default.wrap(
                                function(e) {
                                    while (1)
                                        switch ((e.prev = e.next)) {
                                            case 0:
                                                return e.abrupt(
                                                    'return',
                                                    (0, l.default)(''.concat(s, '/validate/ruc'), {
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
                    U.apply(this, arguments)
                );
            }
        },
    },
]);
