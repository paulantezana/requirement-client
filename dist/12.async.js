(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [12],
    {
        '0Ld4': function(e, t, a) {
            'use strict';
            var n = a('284h'),
                r = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('5Dmo');
            var l = r(a('3S7+'));
            a('Pwec');
            var o = r(a('CtXQ')),
                d = r(a('lwsE')),
                u = r(a('W8MJ')),
                c = r(a('a1gu')),
                i = r(a('Nsbk')),
                f = r(a('7W2i')),
                s = n(a('q1tI')),
                m = a('MuoO'),
                h = a('yP6+'),
                p = r(a('qyk8')),
                v = r(a('ZjCj')),
                E = [
                    'first_name*top',
                    function(e, t) {
                        return { name: e, value: t };
                    },
                ],
                y = (function(e) {
                    function t(e) {
                        return (
                            (0, d.default)(this, t),
                            (0, c.default)(this, (0, i.default)(t).call(this, e))
                        );
                    }
                    return (
                        (0, f.default)(t, e),
                        (0, u.default)(t, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    var e = this.props.dispatch;
                                    e({ type: 'chart/topUsers' });
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props.chart.topUsers;
                                    return s.default.createElement(
                                        p.default,
                                        {
                                            bordered: !1,
                                            title: 'Usuarios cotizadores',
                                            action: s.default.createElement(
                                                l.default,
                                                {
                                                    title:
                                                        'Top 15 usuarios que realizaron mas cotizaciones',
                                                },
                                                s.default.createElement(o.default, {
                                                    type: 'info-circle-o',
                                                })
                                            ),
                                            total: e.total,
                                            contentHeight: 80,
                                        },
                                        s.default.createElement(
                                            'div',
                                            { className: v.default.miniChart },
                                            s.default.createElement(
                                                'div',
                                                { className: v.default.chartContent },
                                                s.default.createElement(
                                                    h.Chart,
                                                    {
                                                        forceFit: !0,
                                                        height: 92,
                                                        data: e.data,
                                                        padding: [0, 15, 30, 0],
                                                    },
                                                    s.default.createElement(h.Tooltip, {
                                                        showTitle: !1,
                                                        crosshairs: !1,
                                                    }),
                                                    s.default.createElement(h.Geom, {
                                                        type: 'interval',
                                                        position: 'first_name*top',
                                                        tooltip: E,
                                                        color: '#FF8441',
                                                    })
                                                )
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(s.Component),
                g = function(e) {
                    var t = e.chart;
                    return { chart: t };
                },
                x = (0, m.connect)(g)(y);
            t.default = x;
        },
        '6Mli': function(e, t, a) {
            'use strict';
            var n = a('284h'),
                r = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('5Dmo');
            var l = r(a('3S7+'));
            a('Pwec');
            var o = r(a('CtXQ')),
                d = r(a('lwsE')),
                u = r(a('W8MJ')),
                c = r(a('a1gu')),
                i = r(a('Nsbk')),
                f = r(a('7W2i')),
                s = n(a('q1tI')),
                m = a('MuoO'),
                h = a('yP6+'),
                p = r(a('qyk8')),
                v = r(a('ZjCj')),
                E = [
                    'state*top',
                    function(e, t) {
                        return { name: e, value: t };
                    },
                ],
                y = (function(e) {
                    function t(e) {
                        return (
                            (0, d.default)(this, t),
                            (0, c.default)(this, (0, i.default)(t).call(this, e))
                        );
                    }
                    return (
                        (0, f.default)(t, e),
                        (0, u.default)(t, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    var e = this.props.dispatch;
                                    e({ type: 'chart/topRequirememnts' });
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props.chart.topRequirememnts;
                                    return s.default.createElement(
                                        p.default,
                                        {
                                            bordered: !1,
                                            title: 'Requerimiento por estado',
                                            action: s.default.createElement(
                                                l.default,
                                                { title: 'Cantidad de requerimeentos por estado' },
                                                s.default.createElement(o.default, {
                                                    type: 'info-circle-o',
                                                })
                                            ),
                                            total: e.total,
                                            contentHeight: 80,
                                        },
                                        s.default.createElement(
                                            'div',
                                            { className: v.default.miniChart },
                                            s.default.createElement(
                                                'div',
                                                { className: v.default.chartContent },
                                                s.default.createElement(
                                                    h.Chart,
                                                    {
                                                        forceFit: !0,
                                                        height: 92,
                                                        data: e.data,
                                                        padding: [0, 15, 30, 0],
                                                    },
                                                    s.default.createElement(h.Tooltip, {
                                                        showTitle: !1,
                                                        crosshairs: !1,
                                                    }),
                                                    s.default.createElement(h.Geom, {
                                                        type: 'interval',
                                                        position: 'state*top',
                                                        tooltip: E,
                                                        color: 'state',
                                                    })
                                                )
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(s.Component),
                g = function(e) {
                    var t = e.chart;
                    return { chart: t };
                },
                x = (0, m.connect)(g)(y);
            t.default = x;
        },
        '7Uhz': function(e, t, a) {
            'use strict';
            var n = a('284h'),
                r = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('5Dmo');
            var l = r(a('3S7+'));
            a('Pwec');
            var o = r(a('CtXQ')),
                d = r(a('lwsE')),
                u = r(a('W8MJ')),
                c = r(a('a1gu')),
                i = r(a('Nsbk')),
                f = r(a('7W2i')),
                s = n(a('q1tI')),
                m = a('MuoO'),
                h = a('yP6+'),
                p = r(a('qyk8')),
                v = r(a('ZjCj')),
                E = [
                    'name*top',
                    function(e, t) {
                        return { name: e, value: t };
                    },
                ],
                y = (function(e) {
                    function t(e) {
                        return (
                            (0, d.default)(this, t),
                            (0, c.default)(this, (0, i.default)(t).call(this, e))
                        );
                    }
                    return (
                        (0, f.default)(t, e),
                        (0, u.default)(t, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    var e = this.props.dispatch;
                                    e({ type: 'chart/topWinners' });
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props.chart.topWinners;
                                    return s.default.createElement(
                                        p.default,
                                        {
                                            bordered: !1,
                                            title: 'Proveedores cotizaciones ganadas',
                                            action: s.default.createElement(
                                                l.default,
                                                {
                                                    title:
                                                        'Top 15 de los proveedores con mas cantidad de cotizaciones ganadas',
                                                },
                                                s.default.createElement(o.default, {
                                                    type: 'info-circle-o',
                                                })
                                            ),
                                            total: e.total,
                                            contentHeight: 80,
                                        },
                                        s.default.createElement(
                                            'div',
                                            { className: v.default.miniChart },
                                            s.default.createElement(
                                                'div',
                                                { className: v.default.chartContent },
                                                s.default.createElement(
                                                    h.Chart,
                                                    {
                                                        forceFit: !0,
                                                        height: 92,
                                                        data: e.data,
                                                        padding: [0, 15, 30, 0],
                                                    },
                                                    s.default.createElement(h.Tooltip, {
                                                        showTitle: !1,
                                                        crosshairs: !1,
                                                    }),
                                                    s.default.createElement(h.Geom, {
                                                        type: 'interval',
                                                        position: 'name*top',
                                                        tooltip: E,
                                                        color: '#EE3B61',
                                                    })
                                                )
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(s.Component),
                g = function(e) {
                    var t = e.chart;
                    return { chart: t };
                },
                x = (0, m.connect)(g)(y);
            t.default = x;
        },
        GMaL: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                r = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('IzEo');
            var l = r(a('bx4M')),
                o = r(a('lwsE')),
                d = r(a('W8MJ')),
                u = r(a('a1gu')),
                c = r(a('Nsbk')),
                i = r(a('7W2i')),
                f = n(a('q1tI')),
                s = a('MuoO'),
                m = a('yP6+'),
                h = [
                    { x: 'Enero', y: [76, 100] },
                    { x: 'Febrero', y: [56, 108] },
                    { x: 'Marso', y: [38, 129] },
                    { x: 'Abril', y: [58, 155] },
                    { x: 'Mayo', y: [45, 120] },
                    { x: 'Junio', y: [23, 99] },
                    { x: 'Julio', y: [18, 56] },
                    { x: 'Agosto', y: [18, 34] },
                ],
                p = (function(e) {
                    function t(e) {
                        return (
                            (0, o.default)(this, t),
                            (0, u.default)(this, (0, c.default)(t).call(this, e))
                        );
                    }
                    return (
                        (0, i.default)(t, e),
                        (0, d.default)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    this.props.global.topProducts;
                                    return f.default.createElement(
                                        l.default,
                                        { bordered: !1 },
                                        f.default.createElement(
                                            'div',
                                            null,
                                            f.default.createElement(
                                                m.Chart,
                                                { height: 400, data: h, forceFit: !0 },
                                                f.default.createElement(m.Axis, { name: 'x' }),
                                                f.default.createElement(m.Axis, { name: 'y' }),
                                                f.default.createElement(m.Tooltip, null),
                                                f.default.createElement(m.Geom, {
                                                    type: 'line',
                                                    position: 'x*y',
                                                }),
                                                f.default.createElement(m.Geom, {
                                                    type: 'point',
                                                    position: 'x*y',
                                                    size: 4,
                                                    shape: 'circle',
                                                    style: { stroke: '#fff', lineWidth: 1 },
                                                })
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(f.Component),
                v = function(e) {
                    var t = e.global;
                    return { global: t };
                },
                E = (0, s.connect)(v)(p);
            t.default = E;
        },
        NNoc: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                r = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('5Dmo');
            var l = r(a('3S7+'));
            a('Pwec');
            var o = r(a('CtXQ')),
                d = r(a('lwsE')),
                u = r(a('W8MJ')),
                c = r(a('a1gu')),
                i = r(a('Nsbk')),
                f = r(a('7W2i')),
                s = n(a('q1tI')),
                m = a('MuoO'),
                h = a('yP6+'),
                p = r(a('qyk8')),
                v = r(a('ZjCj')),
                E = [
                    'name*top',
                    function(e, t) {
                        return { name: e, value: t };
                    },
                ],
                y = (function(e) {
                    function t(e) {
                        return (
                            (0, d.default)(this, t),
                            (0, c.default)(this, (0, i.default)(t).call(this, e))
                        );
                    }
                    return (
                        (0, f.default)(t, e),
                        (0, u.default)(t, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    var e = this.props.dispatch;
                                    e({ type: 'chart/topProducts' });
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props.chart.topProducts;
                                    return s.default.createElement(
                                        p.default,
                                        {
                                            bordered: !1,
                                            title: 'Productos mas requeridos',
                                            action: s.default.createElement(
                                                l.default,
                                                {
                                                    title:
                                                        'Top 15 de los productos mas cotizados o requeridos',
                                                },
                                                s.default.createElement(o.default, {
                                                    type: 'info-circle-o',
                                                })
                                            ),
                                            total: e.total,
                                            contentHeight: 80,
                                        },
                                        s.default.createElement(
                                            'div',
                                            { className: v.default.miniChart },
                                            s.default.createElement(
                                                'div',
                                                { className: v.default.chartContent },
                                                s.default.createElement(
                                                    h.Chart,
                                                    {
                                                        forceFit: !0,
                                                        height: 92,
                                                        data: e.data,
                                                        padding: [0, 15, 30, 0],
                                                    },
                                                    s.default.createElement(h.Tooltip, {
                                                        showTitle: !1,
                                                        crosshairs: !1,
                                                    }),
                                                    s.default.createElement(h.Geom, {
                                                        type: 'interval',
                                                        position: 'name*top',
                                                        tooltip: E,
                                                    })
                                                )
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(s.Component),
                g = function(e) {
                    var t = e.chart;
                    return { chart: t };
                },
                x = (0, m.connect)(g)(y);
            t.default = x;
        },
        TnSg: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                r = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('IzEo');
            var l = r(a('bx4M'));
            a('14J3');
            var o = r(a('BMrR'));
            a('jCWc');
            var d = r(a('kPKH')),
                u = r(a('lwsE')),
                c = r(a('W8MJ')),
                i = r(a('a1gu')),
                f = r(a('Nsbk')),
                s = r(a('7W2i')),
                m = n(a('q1tI')),
                h = a('MuoO'),
                p = r(a('oDxf')),
                v = r(a('NNoc')),
                E = r(a('7Uhz')),
                y = r(a('0Ld4')),
                g = r(a('6Mli')),
                x = r(a('GMaL')),
                M = { xs: 24, sm: 12, md: 12, lg: 12, xl: 6, style: { marginBottom: 24 } },
                C = (function(e) {
                    function t(e) {
                        return (
                            (0, u.default)(this, t),
                            (0, i.default)(this, (0, f.default)(t).call(this, e))
                        );
                    }
                    return (
                        (0, s.default)(t, e),
                        (0, c.default)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    return m.default.createElement(
                                        'div',
                                        null,
                                        m.default.createElement(
                                            o.default,
                                            { gutter: 24 },
                                            m.default.createElement(
                                                d.default,
                                                M,
                                                m.default.createElement(v.default, null)
                                            ),
                                            m.default.createElement(
                                                d.default,
                                                M,
                                                m.default.createElement(E.default, null)
                                            ),
                                            m.default.createElement(
                                                d.default,
                                                M,
                                                m.default.createElement(g.default, null)
                                            ),
                                            m.default.createElement(
                                                d.default,
                                                M,
                                                m.default.createElement(y.default, null)
                                            )
                                        ),
                                        m.default.createElement(x.default, null),
                                        m.default.createElement(p.default, null),
                                        m.default.createElement(
                                            o.default,
                                            { gutter: 16 },
                                            m.default.createElement(
                                                d.default,
                                                { xs: 24, lg: 12 },
                                                m.default.createElement(l.default, {
                                                    bordered: !1,
                                                    loading: !0,
                                                })
                                            ),
                                            m.default.createElement(
                                                d.default,
                                                { xs: 24, lg: 12 },
                                                m.default.createElement(l.default, {
                                                    bordered: !1,
                                                    loading: !0,
                                                })
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(m.Component),
                b = function(e) {
                    var t = e.chart;
                    return { chart: t };
                },
                N = (0, h.connect)(b)(C);
            t.default = N;
        },
        WDld: function(e, t, a) {
            e.exports = {
                chartCard: 'sn\\components\\-charts\\-chart-card\\index-chartCard',
                chartTop: 'sn\\components\\-charts\\-chart-card\\index-chartTop',
                chartTopMargin: 'sn\\components\\-charts\\-chart-card\\index-chartTopMargin',
                chartTopHasMargin: 'sn\\components\\-charts\\-chart-card\\index-chartTopHasMargin',
                metaWrap: 'sn\\components\\-charts\\-chart-card\\index-metaWrap',
                avatar: 'sn\\components\\-charts\\-chart-card\\index-avatar',
                meta: 'sn\\components\\-charts\\-chart-card\\index-meta',
                action: 'sn\\components\\-charts\\-chart-card\\index-action',
                total: 'sn\\components\\-charts\\-chart-card\\index-total',
                content: 'sn\\components\\-charts\\-chart-card\\index-content',
                contentFixed: 'sn\\components\\-charts\\-chart-card\\index-contentFixed',
                footer: 'sn\\components\\-charts\\-chart-card\\index-footer',
                footerMargin: 'sn\\components\\-charts\\-chart-card\\index-footerMargin',
            };
        },
        ZjCj: function(e, t, a) {
            e.exports = {
                miniChart: 'sn\\pages\\-dashboard\\-top\\index-miniChart',
                chartContent: 'sn\\pages\\-dashboard\\-top\\index-chartContent',
                chartLoading: 'sn\\pages\\-dashboard\\-top\\index-chartLoading',
            };
        },
        qyk8: function(e, t, a) {
            'use strict';
            var n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('IzEo');
            var r = n(a('bx4M')),
                l = n(a('pVnL')),
                o = n(a('QILm')),
                d = n(a('lSNA')),
                u = n(a('lwsE')),
                c = n(a('W8MJ')),
                i = n(a('a1gu')),
                f = n(a('Nsbk')),
                s = n(a('7W2i')),
                m = n(a('q1tI')),
                h = n(a('TSYQ')),
                p = n(a('WDld')),
                v = function(e) {
                    var t;
                    switch (typeof e) {
                        case 'undefined':
                            t = null;
                            break;
                        case 'function':
                            t = m.default.createElement('div', { className: p.default.total }, e());
                            break;
                        default:
                            t = m.default.createElement('div', { className: p.default.total }, e);
                    }
                    return t;
                },
                E = (function(e) {
                    function t() {
                        var e, a;
                        (0, u.default)(this, t);
                        for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++)
                            r[l] = arguments[l];
                        return (
                            (a = (0, i.default)(
                                this,
                                (e = (0, f.default)(t)).call.apply(e, [this].concat(r))
                            )),
                            (a.renderConnet = function() {
                                var e = a.props,
                                    t = e.contentHeight,
                                    n = e.title,
                                    r = e.avatar,
                                    l = e.action,
                                    o = e.total,
                                    u = e.footer,
                                    c = e.children,
                                    i = e.loading;
                                return (
                                    !i &&
                                    m.default.createElement(
                                        'div',
                                        { className: p.default.chartCard },
                                        m.default.createElement(
                                            'div',
                                            {
                                                className: (0, h.default)(
                                                    p.default.chartTop,
                                                    (0, d.default)(
                                                        {},
                                                        p.default.chartTopMargin,
                                                        !c && !u
                                                    )
                                                ),
                                            },
                                            m.default.createElement(
                                                'div',
                                                { className: p.default.avatar },
                                                r
                                            ),
                                            m.default.createElement(
                                                'div',
                                                { className: p.default.metaWrap },
                                                m.default.createElement(
                                                    'div',
                                                    { className: p.default.meta },
                                                    m.default.createElement(
                                                        'span',
                                                        { className: p.default.title },
                                                        n
                                                    ),
                                                    m.default.createElement(
                                                        'span',
                                                        { className: p.default.action },
                                                        l
                                                    )
                                                ),
                                                v(o)
                                            )
                                        ),
                                        c &&
                                            m.default.createElement(
                                                'div',
                                                {
                                                    className: p.default.content,
                                                    style: { height: t || 'auto' },
                                                },
                                                m.default.createElement(
                                                    'div',
                                                    { className: t && p.default.contentFixed },
                                                    c
                                                )
                                            ),
                                        u &&
                                            m.default.createElement(
                                                'div',
                                                {
                                                    className: (0, h.default)(
                                                        p.default.footer,
                                                        (0, d.default)(
                                                            {},
                                                            p.default.footerMargin,
                                                            !c
                                                        )
                                                    ),
                                                },
                                                u
                                            )
                                    )
                                );
                            }),
                            a
                        );
                    }
                    return (
                        (0, s.default)(t, e),
                        (0, c.default)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props,
                                        t = e.loading,
                                        a = void 0 !== t && t,
                                        n = (e.contentHeight,
                                        e.title,
                                        e.avatar,
                                        e.action,
                                        e.total,
                                        e.footer,
                                        e.children,
                                        (0, o.default)(e, [
                                            'loading',
                                            'contentHeight',
                                            'title',
                                            'avatar',
                                            'action',
                                            'total',
                                            'footer',
                                            'children',
                                        ]));
                                    return m.default.createElement(
                                        r.default,
                                        (0, l.default)(
                                            {
                                                loading: a,
                                                bodyStyle: { padding: '20px 24px 8px 24px' },
                                            },
                                            n
                                        ),
                                        this.renderConnet()
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(m.default.PureComponent),
                y = E;
            t.default = y;
        },
    },
]);
