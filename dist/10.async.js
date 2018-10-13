(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [10],
    {
        '4Ofr': function(e, t, a) {
            e.exports = {
                themeColor: 'sn-\\components\\-setting-drawer\\-theme-color-themeColor',
                title: 'sn-\\components\\-setting-drawer\\-theme-color-title',
                colorBlock: 'sn-\\components\\-setting-drawer\\-theme-color-colorBlock',
            };
        },
        '8TWP': function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('Q9mQ');
            var o = l(a('diRs'));
            a('Awhp');
            var r = l(a('KrTs'));
            a('Pwec');
            var i = l(a('CtXQ'));
            a('T2oS');
            var u = l(a('W9HT')),
                c = l(a('pVnL')),
                s = l(a('lwsE')),
                d = l(a('W8MJ')),
                f = l(a('a1gu')),
                m = l(a('Nsbk')),
                p = l(a('7W2i'));
            a('Znn+');
            var h = l(a('ZTPi')),
                g = n(a('q1tI')),
                v = l(a('TSYQ')),
                y = l(a('SlZz')),
                b = l(a('btmg')),
                E = h.default.TabPane,
                k = (function(e) {
                    function t() {
                        var e, a;
                        (0, s.default)(this, t);
                        for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++)
                            l[o] = arguments[o];
                        return (
                            (a = (0, f.default)(
                                this,
                                (e = (0, m.default)(t)).call.apply(e, [this].concat(l))
                            )),
                            (a.onItemClick = function(e, t) {
                                var n = a.props.onItemClick;
                                n(e, t);
                            }),
                            (a.onTabChange = function(e) {
                                var t = a.props.onTabChange;
                                t(e);
                            }),
                            a
                        );
                    }
                    return (
                        (0, p.default)(t, e),
                        (0, d.default)(t, [
                            {
                                key: 'getNotificationBox',
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.children,
                                        n = t.loading,
                                        l = t.locale,
                                        o = t.onClear;
                                    if (!a) return null;
                                    var r = g.default.Children.map(a, function(t) {
                                        var a =
                                            t.props.list && t.props.list.length > 0
                                                ? ''
                                                      .concat(t.props.title, ' (')
                                                      .concat(t.props.list.length, ')')
                                                : t.props.title;
                                        return g.default.createElement(
                                            E,
                                            { tab: a, key: t.props.name },
                                            g.default.createElement(
                                                y.default,
                                                (0, c.default)({}, t.props, {
                                                    data: t.props.list,
                                                    onClick: function(a) {
                                                        return e.onItemClick(a, t.props);
                                                    },
                                                    onClear: function() {
                                                        return o(t.props.name);
                                                    },
                                                    title: t.props.title,
                                                    locale: l,
                                                })
                                            )
                                        );
                                    });
                                    return g.default.createElement(
                                        u.default,
                                        { spinning: n, delay: 0 },
                                        g.default.createElement(
                                            h.default,
                                            {
                                                className: b.default.tabs,
                                                onChange: this.onTabChange,
                                            },
                                            r
                                        )
                                    );
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props,
                                        t = e.className,
                                        a = e.count,
                                        n = e.popupAlign,
                                        l = e.popupVisible,
                                        u = e.onPopupVisibleChange,
                                        s = e.bell,
                                        d = (0, v.default)(t, b.default.noticeButton),
                                        f = this.getNotificationBox(),
                                        m =
                                            s ||
                                            g.default.createElement(i.default, {
                                                type: 'bell',
                                                className: b.default.icon,
                                            }),
                                        p = g.default.createElement(
                                            'span',
                                            { className: d },
                                            g.default.createElement(
                                                r.default,
                                                {
                                                    count: a,
                                                    style: { boxShadow: 'none' },
                                                    className: b.default.badge,
                                                },
                                                m
                                            )
                                        );
                                    if (!f) return p;
                                    var h = {};
                                    return (
                                        'popupVisible' in this.props && (h.visible = l),
                                        g.default.createElement(
                                            o.default,
                                            (0, c.default)(
                                                {
                                                    placement: 'bottomRight',
                                                    content: f,
                                                    popupClassName: b.default.popover,
                                                    trigger: 'click',
                                                    arrowPointAtCenter: !0,
                                                    popupAlign: n,
                                                    onVisibleChange: u,
                                                },
                                                h
                                            ),
                                            p
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(g.PureComponent);
            (t.default = k),
                (k.Tab = E),
                (k.defaultProps = {
                    onItemClick: function() {},
                    onPopupVisibleChange: function() {},
                    onTabChange: function() {},
                    onClear: function() {},
                    loading: !1,
                    locale: { emptyText: 'No notifications', clear: 'Clear' },
                    emptyImage:
                        'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
                });
        },
        AcjU: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = t.getMenuMatchKeys = t.getFlatMenuKeys = void 0);
            var o = l(a('pVnL')),
                r = l(a('lSNA')),
                i = l(a('RIqP')),
                u = l(a('lwsE')),
                c = l(a('W8MJ')),
                s = l(a('a1gu')),
                d = l(a('Nsbk')),
                f = l(a('7W2i'));
            a('B9cy');
            var m = l(a('Ol7k')),
                p = n(a('q1tI')),
                h = l(a('bALw')),
                g = l(a('TSYQ')),
                v = l(a('mOP9')),
                y = l(a('mR0u')),
                b = n(a('oFg3')),
                E = a('S/9j'),
                k = m.default.Sider,
                M = function(e) {
                    var t = e.location.pathname,
                        a = e.flatMenuKeys;
                    return (0, E.urlToList)(t)
                        .map(function(e) {
                            return (0, b.getMenuMatches)(a, e)[0];
                        })
                        .filter(function(e) {
                            return e;
                        });
                },
                C = function e(t) {
                    return t.reduce(function(t, a) {
                        return t.push(a.path), a.children ? t.concat(e(a.children)) : t;
                    }, []);
                };
            t.getFlatMenuKeys = C;
            var x = function(e, t) {
                return t.reduce(function(t, a) {
                    return t.concat(
                        e.filter(function(e) {
                            return (0, h.default)(e).test(a);
                        })
                    );
                }, []);
            };
            t.getMenuMatchKeys = x;
            var N = (function(e) {
                function t(e) {
                    var a;
                    return (
                        (0, u.default)(this, t),
                        (a = (0, s.default)(this, (0, d.default)(t).call(this, e))),
                        (a.isMainMenu = function(e) {
                            var t = a.props.menuData;
                            return t.some(function(t) {
                                return !!e && (t.key === e || t.path === e);
                            });
                        }),
                        (a.handleOpenChange = function(e) {
                            var t =
                                e.filter(function(e) {
                                    return a.isMainMenu(e);
                                }).length > 1;
                            a.setState({ openKeys: t ? [e.pop()] : (0, i.default)(e) });
                        }),
                        (a.flatMenuKeys = C(e.menuData)),
                        (a.state = { openKeys: M(e) }),
                        a
                    );
                }
                return (
                    (0, f.default)(t, e),
                    (0, c.default)(
                        t,
                        [
                            {
                                key: 'render',
                                value: function() {
                                    var e,
                                        t = this.props,
                                        a = t.logo,
                                        n = t.collapsed,
                                        l = t.onCollapse,
                                        i = t.fixSiderbar,
                                        u = t.theme,
                                        c = this.state.openKeys,
                                        s = n ? {} : { openKeys: c },
                                        d = (0, g.default)(
                                            y.default.sider,
                                            ((e = {}),
                                            (0, r.default)(e, y.default.fixSiderbar, i),
                                            (0, r.default)(e, y.default.light, 'light' === u),
                                            e)
                                        );
                                    return p.default.createElement(
                                        k,
                                        {
                                            trigger: null,
                                            collapsible: !0,
                                            collapsed: n,
                                            breakpoint: 'xxl',
                                            onCollapse: l,
                                            width: 220,
                                            collapsedWidth: 60,
                                            theme: u,
                                            className: d,
                                        },
                                        p.default.createElement(
                                            'div',
                                            { className: y.default.logo, id: 'logo' },
                                            p.default.createElement(
                                                v.default,
                                                { to: '/' },
                                                p.default.createElement('img', {
                                                    src: a,
                                                    alt: 'logo',
                                                }),
                                                p.default.createElement('h1', null, 'RQM System')
                                            )
                                        ),
                                        p.default.createElement(
                                            b.default,
                                            (0, o.default)(
                                                {},
                                                this.props,
                                                {
                                                    mode: 'inline',
                                                    handleOpenChange: this.handleOpenChange,
                                                    onOpenChange: this.handleOpenChange,
                                                    style: {
                                                        padding: '16px 0',
                                                        width: '100%',
                                                        overflowX: 'hidden',
                                                    },
                                                },
                                                s
                                            )
                                        )
                                    );
                                },
                            },
                        ],
                        [
                            {
                                key: 'getDerivedStateFromProps',
                                value: function(e, t) {
                                    var a = t.pathname;
                                    return e.location.pathname !== a
                                        ? { pathname: e.location.pathname, openKeys: M(e) }
                                        : null;
                                },
                            },
                        ]
                    ),
                    t
                );
            })(p.PureComponent);
            t.default = N;
        },
        BFsb: function(e, t, a) {
            e.exports = {
                content: 'sn-\\components\\-setting-drawer\\index-content',
                blockChecbox: 'sn-\\components\\-setting-drawer\\index-blockChecbox',
                item: 'sn-\\components\\-setting-drawer\\index-item',
                selectIcon: 'sn-\\components\\-setting-drawer\\index-selectIcon',
                color_block: 'sn-\\components\\-setting-drawer\\index-color_block',
                title: 'sn-\\components\\-setting-drawer\\index-title',
                handle: 'sn-\\components\\-setting-drawer\\index-handle',
                productionHint: 'sn-\\components\\-setting-drawer\\index-productionHint',
            };
        },
        BsfW: function(e, t, a) {
            e.exports = {
                list: 'sn-\\components\\-notice-icon\\-notice-list-list',
                item: 'sn-\\components\\-notice-icon\\-notice-list-item',
                meta: 'sn-\\components\\-notice-icon\\-notice-list-meta',
                avatar: 'sn-\\components\\-notice-icon\\-notice-list-avatar',
                iconElement: 'sn-\\components\\-notice-icon\\-notice-list-iconElement',
                read: 'sn-\\components\\-notice-icon\\-notice-list-read',
                title: 'sn-\\components\\-notice-icon\\-notice-list-title',
                description: 'sn-\\components\\-notice-icon\\-notice-list-description',
                datetime: 'sn-\\components\\-notice-icon\\-notice-list-datetime',
                extra: 'sn-\\components\\-notice-icon\\-notice-list-extra',
                notFound: 'sn-\\components\\-notice-icon\\-notice-list-notFound',
                clear: 'sn-\\components\\-notice-icon\\-notice-list-clear',
            };
        },
        IGtV: function(e, t, a) {
            e.exports = { fixedHeader: 'sn-\\layouts\\-header-fixedHeader' };
        },
        IamK: function(e, t, a) {
            'use strict';
            var n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('bbsP');
            var l = n(a('/wGt')),
                o = n(a('pVnL')),
                r = n(a('q1tI')),
                i = n(a('AcjU')),
                u = function e(t) {
                    var a = [];
                    return (
                        t.forEach(function(t) {
                            t.children && (a = a.concat(e(t.children))), a.push(t.path);
                        }),
                        a
                    );
                },
                c = function(e) {
                    var t = e.isMobile,
                        a = e.menuData,
                        n = e.collapsed,
                        c = e.onCollapse;
                    return t
                        ? r.default.createElement(
                              l.default,
                              {
                                  visible: !n,
                                  placement: 'left',
                                  onClose: function() {
                                      return c(!0);
                                  },
                                  width: 220,
                                  style: { padding: 0, height: '100vh' },
                              },
                              r.default.createElement(
                                  i.default,
                                  (0, o.default)({}, e, { flatMenuKeys: u(a), collapsed: !t && n })
                              )
                          )
                        : r.default.createElement(
                              i.default,
                              (0, o.default)({}, e, { flatMenuKeys: u(a) })
                          );
                },
                s = c;
            t.default = s;
        },
        JwhZ: function(e, t, a) {
            e.exports = {
                head: 'sn-\\components\\-top-nav-header\\index-head',
                light: 'sn-\\components\\-top-nav-header\\index-light',
                main: 'sn-\\components\\-top-nav-header\\index-main',
                wide: 'sn-\\components\\-top-nav-header\\index-wide',
                left: 'sn-\\components\\-top-nav-header\\index-left',
                right: 'sn-\\components\\-top-nav-header\\index-right',
                logo: 'sn-\\components\\-top-nav-header\\index-logo',
            };
        },
        NtFa: function(e, t, a) {
            'use strict';
            var n = a('TqRt'),
                l = a('284h');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('Pwec');
            var o,
                r,
                i = n(a('CtXQ')),
                u = n(a('lwsE')),
                c = n(a('W8MJ')),
                s = n(a('a1gu')),
                d = n(a('Nsbk')),
                f = n(a('7W2i')),
                m = n(a('U+yc')),
                p = l(a('q1tI')),
                h = n(a('mOP9')),
                g = n(a('fqkP')),
                v = n(a('h3zL')),
                y = n(a('X5mu')),
                b = ((o = (0, g.default)(600)),
                (r = (function(e) {
                    function t() {
                        var e, a;
                        (0, u.default)(this, t);
                        for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++)
                            l[o] = arguments[o];
                        return (
                            (a = (0, s.default)(
                                this,
                                (e = (0, d.default)(t)).call.apply(e, [this].concat(l))
                            )),
                            (a.toggle = function() {
                                var e = a.props,
                                    t = e.collapsed,
                                    n = e.onCollapse;
                                n(!t), a.triggerResizeEvent();
                            }),
                            a
                        );
                    }
                    return (
                        (0, f.default)(t, e),
                        (0, c.default)(t, [
                            {
                                key: 'componentWillUnmount',
                                value: function() {
                                    this.triggerResizeEvent.cancel();
                                },
                            },
                            {
                                key: 'triggerResizeEvent',
                                value: function() {
                                    var e = document.createEvent('HTMLEvents');
                                    e.initEvent('resize', !0, !1), window.dispatchEvent(e);
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props,
                                        t = e.collapsed,
                                        a = e.isMobile,
                                        n = e.logo;
                                    return p.default.createElement(
                                        'div',
                                        { className: v.default.header },
                                        a &&
                                            p.default.createElement(
                                                h.default,
                                                { to: '/', className: v.default.logo, key: 'logo' },
                                                p.default.createElement('img', {
                                                    src: n,
                                                    alt: 'logo',
                                                    width: '24',
                                                })
                                            ),
                                        p.default.createElement(i.default, {
                                            className: v.default.trigger,
                                            type: t ? 'menu-unfold' : 'menu-fold',
                                            onClick: this.toggle,
                                        }),
                                        p.default.createElement(y.default, this.props)
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(p.PureComponent)),
                (0, m.default)(
                    r.prototype,
                    'triggerResizeEvent',
                    [o],
                    Object.getOwnPropertyDescriptor(r.prototype, 'triggerResizeEvent'),
                    r.prototype
                ),
                r);
            t.default = b;
        },
        PceP: function(e, t, a) {
            'use strict';
            var n = a('TqRt'),
                l = a('284h');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('bbsP');
            var o = n(a('/wGt'));
            a('/zsF');
            var r = n(a('PArb'));
            a('Pwec');
            var i = n(a('CtXQ'));
            a('5Dmo');
            var u = n(a('3S7+'));
            a('Mwp2');
            var c = n(a('VXEj'));
            a('BoS7');
            var s = n(a('Sdc0')),
                d = n(a('lwsE')),
                f = n(a('W8MJ')),
                m = n(a('a1gu')),
                p = n(a('Nsbk')),
                h = n(a('7W2i')),
                g = n(a('MVZn'));
            a('OaEy');
            var v,
                y,
                b = n(a('2fM7')),
                E = l(a('q1tI')),
                k = a('LLXN'),
                M = (a('P5Jw'), a('MuoO')),
                C = (n(a('BGR+')), n(a('BFsb'))),
                x = n(a('WJM/')),
                N = n(a('Pjk0')),
                w = b.default.Option,
                P = function(e) {
                    var t = e.children,
                        a = e.title,
                        n = e.style;
                    return E.default.createElement(
                        'div',
                        { style: (0, g.default)({}, n, { marginBottom: 24 }) },
                        E.default.createElement('h3', { className: C.default.title }, a),
                        t
                    );
                },
                S = ((v = (0, M.connect)(function(e) {
                    var t = e.setting;
                    return { setting: t };
                })),
                v(
                    (y = (function(e) {
                        function t() {
                            var e, a;
                            (0, d.default)(this, t);
                            for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++)
                                l[o] = arguments[o];
                            return (
                                (a = (0, m.default)(
                                    this,
                                    (e = (0, p.default)(t)).call.apply(e, [this].concat(l))
                                )),
                                (a.state = { collapse: !1 }),
                                (a.getLayoutSetting = function() {
                                    var e = a.props.setting,
                                        t = e.contentWidth,
                                        n = e.fixedHeader,
                                        l = e.layout,
                                        o = e.autoHideHeader,
                                        r = e.fixSiderbar;
                                    return [
                                        {
                                            title: (0, k.formatMessage)({
                                                id: 'app.setting.content-width',
                                            }),
                                            action: E.default.createElement(
                                                b.default,
                                                {
                                                    value: t,
                                                    size: 'small',
                                                    onSelect: function(e) {
                                                        return a.changeSetting('contentWidth', e);
                                                    },
                                                    style: { width: 80 },
                                                },
                                                'sidemenu' === l
                                                    ? null
                                                    : E.default.createElement(
                                                          w,
                                                          { value: 'Fixed' },
                                                          (0, k.formatMessage)({
                                                              id: 'app.setting.content-width.fixed',
                                                          })
                                                      ),
                                                E.default.createElement(
                                                    w,
                                                    { value: 'Fluid' },
                                                    (0, k.formatMessage)({
                                                        id: 'app.setting.content-width.fluid',
                                                    })
                                                )
                                            ),
                                        },
                                        {
                                            title: (0, k.formatMessage)({
                                                id: 'app.setting.fixedheader',
                                            }),
                                            action: E.default.createElement(s.default, {
                                                size: 'small',
                                                checked: !!n,
                                                onChange: function(e) {
                                                    return a.changeSetting('fixedHeader', e);
                                                },
                                            }),
                                        },
                                        {
                                            title: (0, k.formatMessage)({
                                                id: 'app.setting.hideheader',
                                            }),
                                            disabled: !n,
                                            disabledReason: (0, k.formatMessage)({
                                                id: 'app.setting.hideheader.hint',
                                            }),
                                            action: E.default.createElement(s.default, {
                                                size: 'small',
                                                checked: !!o,
                                                onChange: function(e) {
                                                    return a.changeSetting('autoHideHeader', e);
                                                },
                                            }),
                                        },
                                        {
                                            title: (0, k.formatMessage)({
                                                id: 'app.setting.fixedsidebar',
                                            }),
                                            disabled: 'topmenu' === l,
                                            disabledReason: (0, k.formatMessage)({
                                                id: 'app.setting.fixedsidebar.hint',
                                            }),
                                            action: E.default.createElement(s.default, {
                                                size: 'small',
                                                checked: !!r,
                                                onChange: function(e) {
                                                    return a.changeSetting('fixSiderbar', e);
                                                },
                                            }),
                                        },
                                    ];
                                }),
                                (a.changeSetting = function(e, t) {
                                    var n = a.props.setting,
                                        l = (0, g.default)({}, n);
                                    (l[e] = t),
                                        'layout' === e
                                            ? (l.contentWidth = 'topmenu' === t ? 'Fixed' : 'Fluid')
                                            : 'fixedHeader' !== e || t || (l.autoHideHeader = !1),
                                        a.setState(l, function() {
                                            var e = a.props.dispatch;
                                            e({ type: 'setting/changeSetting', payload: a.state });
                                        });
                                }),
                                (a.togglerContent = function() {
                                    var e = a.state.collapse;
                                    a.setState({ collapse: !e });
                                }),
                                (a.renderLayoutSettingItem = function(e) {
                                    var t = E.default.cloneElement(e.action, {
                                        disabled: e.disabled,
                                    });
                                    return E.default.createElement(
                                        u.default,
                                        {
                                            title: e.disabled ? e.disabledReason : '',
                                            placement: 'left',
                                        },
                                        E.default.createElement(
                                            c.default.Item,
                                            { actions: [t] },
                                            E.default.createElement(
                                                'span',
                                                { style: { opacity: e.disabled ? '0.5' : '' } },
                                                e.title
                                            )
                                        )
                                    );
                                }),
                                a
                            );
                        }
                        return (
                            (0, h.default)(t, e),
                            (0, f.default)(t, [
                                {
                                    key: 'render',
                                    value: function() {
                                        var e = this,
                                            t = this.props.setting,
                                            a = t.navTheme,
                                            n = t.primaryColor,
                                            l = t.layout,
                                            u = t.colorWeak,
                                            d = this.state.collapse;
                                        return E.default.createElement(
                                            o.default,
                                            {
                                                visible: d,
                                                width: 300,
                                                onClose: this.togglerContent,
                                                placement: 'right',
                                                handler: E.default.createElement(
                                                    'div',
                                                    { className: C.default.handle },
                                                    E.default.createElement(i.default, {
                                                        type: d ? 'close' : 'setting',
                                                        style: { color: '#fff', fontSize: 20 },
                                                    })
                                                ),
                                                onHandleClick: this.togglerContent,
                                                style: { zIndex: 999 },
                                            },
                                            E.default.createElement(
                                                'div',
                                                { className: C.default.content },
                                                E.default.createElement(
                                                    P,
                                                    {
                                                        title: (0, k.formatMessage)({
                                                            id: 'app.setting.pagestyle',
                                                        }),
                                                    },
                                                    E.default.createElement(N.default, {
                                                        list: [
                                                            {
                                                                key: 'dark',
                                                                url:
                                                                    'https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg',
                                                                title: (0, k.formatMessage)({
                                                                    id:
                                                                        'app.setting.pagestyle.dark',
                                                                }),
                                                            },
                                                            {
                                                                key: 'light',
                                                                url:
                                                                    'https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg',
                                                                title: (0, k.formatMessage)({
                                                                    id:
                                                                        'app.setting.pagestyle.light',
                                                                }),
                                                            },
                                                        ],
                                                        value: a,
                                                        onChange: function(t) {
                                                            return e.changeSetting('navTheme', t);
                                                        },
                                                    })
                                                ),
                                                E.default.createElement(x.default, {
                                                    title: (0, k.formatMessage)({
                                                        id: 'app.setting.themecolor',
                                                    }),
                                                    value: n,
                                                    onChange: function(t) {
                                                        return e.changeSetting('primaryColor', t);
                                                    },
                                                }),
                                                E.default.createElement(r.default, null),
                                                E.default.createElement(
                                                    P,
                                                    {
                                                        title: (0, k.formatMessage)({
                                                            id: 'app.setting.navigationmode',
                                                        }),
                                                    },
                                                    E.default.createElement(N.default, {
                                                        list: [
                                                            {
                                                                key: 'sidemenu',
                                                                url:
                                                                    'https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg',
                                                                title: (0, k.formatMessage)({
                                                                    id: 'app.setting.sidemenu',
                                                                }),
                                                            },
                                                            {
                                                                key: 'topmenu',
                                                                url:
                                                                    'https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg',
                                                                title: (0, k.formatMessage)({
                                                                    id: 'app.setting.topmenu',
                                                                }),
                                                            },
                                                        ],
                                                        value: l,
                                                        onChange: function(t) {
                                                            return e.changeSetting('layout', t);
                                                        },
                                                    })
                                                ),
                                                E.default.createElement(c.default, {
                                                    split: !1,
                                                    dataSource: this.getLayoutSetting(),
                                                    renderItem: this.renderLayoutSettingItem,
                                                }),
                                                E.default.createElement(r.default, null),
                                                E.default.createElement(
                                                    P,
                                                    {
                                                        title: (0, k.formatMessage)({
                                                            id: 'app.setting.othersettings',
                                                        }),
                                                    },
                                                    E.default.createElement(
                                                        c.default.Item,
                                                        {
                                                            actions: [
                                                                E.default.createElement(s.default, {
                                                                    size: 'small',
                                                                    checked: !!u,
                                                                    onChange: function(t) {
                                                                        return e.changeSetting(
                                                                            'colorWeak',
                                                                            t
                                                                        );
                                                                    },
                                                                }),
                                                            ],
                                                        },
                                                        (0, k.formatMessage)({
                                                            id: 'app.setting.weakmode',
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
                    })(E.PureComponent))
                ) || y),
                T = S;
            t.default = T;
        },
        Pjk0: function(e, t, a) {
            'use strict';
            var n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('5Dmo');
            var l = n(a('3S7+'));
            a('Pwec');
            var o = n(a('CtXQ')),
                r = n(a('q1tI')),
                i = n(a('BFsb')),
                u = function(e) {
                    var t = e.value,
                        a = e.onChange,
                        n = e.list;
                    return r.default.createElement(
                        'div',
                        { className: i.default.blockChecbox, key: t },
                        n.map(function(e) {
                            return r.default.createElement(
                                l.default,
                                { title: e.title, key: e.key },
                                r.default.createElement(
                                    'div',
                                    {
                                        className: i.default.item,
                                        onClick: function() {
                                            return a(e.key);
                                        },
                                    },
                                    r.default.createElement('img', { src: e.url, alt: e.key }),
                                    r.default.createElement(
                                        'div',
                                        {
                                            className: i.default.selectIcon,
                                            style: { display: t === e.key ? 'block' : 'none' },
                                        },
                                        r.default.createElement(o.default, { type: 'check' })
                                    )
                                )
                            );
                        })
                    );
                },
                c = u;
            t.default = c;
        },
        SlZz: function(e, t, a) {
            'use strict';
            var n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = s), a('Mwp2');
            var l = n(a('VXEj'));
            a('Telt');
            var o = n(a('Tckk')),
                r = n(a('lSNA')),
                i = n(a('q1tI')),
                u = n(a('TSYQ')),
                c = n(a('BsfW'));
            function s(e) {
                var t = e.data,
                    a = void 0 === t ? [] : t,
                    n = e.onClick,
                    s = e.onClear,
                    d = e.title,
                    f = e.locale,
                    m = e.emptyText,
                    p = e.emptyImage,
                    h = e.showClear,
                    g = void 0 === h || h;
                return 0 === a.length
                    ? i.default.createElement(
                          'div',
                          { className: c.default.notFound },
                          p ? i.default.createElement('img', { src: p, alt: 'not found' }) : null,
                          i.default.createElement('div', null, m || f.emptyText)
                      )
                    : i.default.createElement(
                          'div',
                          null,
                          i.default.createElement(
                              l.default,
                              { className: c.default.list },
                              a.map(function(e, t) {
                                  var a = (0, u.default)(
                                          c.default.item,
                                          (0, r.default)({}, c.default.read, e.read)
                                      ),
                                      s = e.avatar
                                          ? 'string' === typeof e.avatar
                                              ? i.default.createElement(o.default, {
                                                    className: c.default.avatar,
                                                    src: e.avatar,
                                                })
                                              : e.avatar
                                          : null;
                                  return i.default.createElement(
                                      l.default.Item,
                                      {
                                          className: a,
                                          key: e.key || t,
                                          onClick: function() {
                                              return n(e);
                                          },
                                      },
                                      i.default.createElement(l.default.Item.Meta, {
                                          className: c.default.meta,
                                          avatar: i.default.createElement(
                                              'span',
                                              { className: c.default.iconElement },
                                              s
                                          ),
                                          title: i.default.createElement(
                                              'div',
                                              { className: c.default.title },
                                              e.title,
                                              i.default.createElement(
                                                  'div',
                                                  { className: c.default.extra },
                                                  e.extra
                                              )
                                          ),
                                          description: i.default.createElement(
                                              'div',
                                              null,
                                              i.default.createElement(
                                                  'div',
                                                  {
                                                      className: c.default.description,
                                                      title: e.description,
                                                  },
                                                  e.description
                                              ),
                                              i.default.createElement(
                                                  'div',
                                                  { className: c.default.datetime },
                                                  e.datetime
                                              )
                                          ),
                                      })
                                  );
                              })
                          ),
                          g
                              ? i.default.createElement(
                                    'div',
                                    { className: c.default.clear, onClick: s },
                                    f.clear,
                                    ' ',
                                    d
                                )
                              : null
                      );
            }
        },
        'WJM/': function(e, t, a) {
            'use strict';
            var n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('5Dmo');
            var l = n(a('3S7+')),
                o = n(a('pVnL'));
            a('Pwec');
            var r = n(a('CtXQ')),
                i = n(a('QILm')),
                u = n(a('q1tI')),
                c = a('LLXN'),
                s = n(a('4Ofr')),
                d = function(e) {
                    var t = e.color,
                        a = e.check,
                        n = (0, i.default)(e, ['color', 'check']);
                    return u.default.createElement(
                        'div',
                        (0, o.default)({}, n, { style: { backgroundColor: t } }),
                        a ? u.default.createElement(r.default, { type: 'check' }) : ''
                    );
                },
                f = function(e) {
                    var t = e.colors,
                        a = e.title,
                        n = e.value,
                        o = e.onChange,
                        r = t;
                    return (
                        t ||
                            (r = [
                                { key: 'dust', color: '#F5222D' },
                                { key: 'volcano', color: '#FA541C' },
                                { key: 'sunset', color: '#FAAD14' },
                                { key: 'cyan', color: '#13C2C2' },
                                { key: 'green', color: '#52C41A' },
                                { key: 'daybreak', color: '#1890FF' },
                                { key: 'geekblue', color: '#2F54EB' },
                                { key: 'purple', color: '#722ED1' },
                            ]),
                        u.default.createElement(
                            'div',
                            { className: s.default.themeColor },
                            u.default.createElement('h3', { className: s.default.title }, a),
                            u.default.createElement(
                                'div',
                                { className: s.default.content },
                                r.map(function(e) {
                                    var t = e.key,
                                        a = e.color;
                                    return u.default.createElement(
                                        l.default,
                                        {
                                            key: a,
                                            title: (0, c.formatMessage)({
                                                id: 'app.setting.themecolor.'.concat(t),
                                            }),
                                        },
                                        u.default.createElement(d, {
                                            className: s.default.colorBlock,
                                            color: a,
                                            check: n === a,
                                            onClick: function() {
                                                return o && o(a);
                                            },
                                        })
                                    );
                                })
                            )
                        )
                    );
                },
                m = f;
            t.default = m;
        },
        X5mu: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('T2oS');
            var o = l(a('W9HT'));
            a('qVdP');
            var r = l(a('jsC+'));
            a('Telt');
            var i = l(a('Tckk'));
            a('5Dmo');
            var u = l(a('3S7+'));
            a('lUTK');
            var c = l(a('BvKs'));
            a('Pwec');
            var s = l(a('CtXQ'));
            a('+BJd');
            var d = l(a('mr32')),
                f = l(a('MVZn')),
                m = l(a('lwsE')),
                p = l(a('W8MJ')),
                h = l(a('a1gu')),
                g = l(a('Nsbk')),
                v = l(a('7W2i')),
                y = n(a('q1tI')),
                b = a('LLXN'),
                E = l(a('wd/R')),
                k = l(a('bt/X')),
                M = l(a('8TWP')),
                C = l(a('bfXr')),
                x = l(a('h3zL')),
                N = (function(e) {
                    function t() {
                        return (
                            (0, m.default)(this, t),
                            (0, h.default)(this, (0, g.default)(t).apply(this, arguments))
                        );
                    }
                    return (
                        (0, v.default)(t, e),
                        (0, p.default)(t, [
                            {
                                key: 'getNoticeData',
                                value: function() {
                                    var e = this.props.notices,
                                        t = void 0 === e ? [] : e;
                                    if (0 === t.length) return {};
                                    var a = t.map(function(e) {
                                        var t = (0, f.default)({}, e);
                                        if (
                                            (t.datetime &&
                                                (t.datetime = (0, E.default)(e.datetime).fromNow()),
                                            t.id && (t.key = t.id),
                                            t.extra && t.status)
                                        ) {
                                            var a = {
                                                todo: '',
                                                processing: 'blue',
                                                urgent: 'red',
                                                doing: 'gold',
                                            }[t.status];
                                            t.extra = y.default.createElement(
                                                d.default,
                                                { color: a, style: { marginRight: 0 } },
                                                t.extra
                                            );
                                        }
                                        return t;
                                    });
                                    return (0, k.default)(a, 'type');
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props,
                                        t = e.currentUser,
                                        a = e.fetchingNotices,
                                        n = e.onNoticeVisibleChange,
                                        l = e.onMenuClick,
                                        d = e.onNoticeClear,
                                        f = e.theme,
                                        m = y.default.createElement(
                                            c.default,
                                            {
                                                className: x.default.menu,
                                                selectedKeys: [],
                                                onClick: l,
                                            },
                                            y.default.createElement(
                                                c.default.Item,
                                                { key: 'userCenter' },
                                                y.default.createElement(s.default, {
                                                    type: 'user',
                                                }),
                                                y.default.createElement(b.FormattedMessage, {
                                                    id: 'menu.account.profile',
                                                    defaultMessage: 'profile',
                                                })
                                            ),
                                            y.default.createElement(c.default.Divider, null),
                                            y.default.createElement(
                                                c.default.Item,
                                                { key: 'logout' },
                                                y.default.createElement(s.default, {
                                                    type: 'logout',
                                                }),
                                                y.default.createElement(b.FormattedMessage, {
                                                    id: 'menu.account.logout',
                                                    defaultMessage: 'logout',
                                                })
                                            )
                                        ),
                                        p = this.getNoticeData(),
                                        h = x.default.right;
                                    return (
                                        'dark' === f &&
                                            (h = ''
                                                .concat(x.default.right, '  ')
                                                .concat(x.default.dark)),
                                        y.default.createElement(
                                            'div',
                                            { className: h },
                                            y.default.createElement(
                                                u.default,
                                                {
                                                    title: (0, b.formatMessage)({
                                                        id: 'component.globalHeader.help',
                                                    }),
                                                },
                                                y.default.createElement(
                                                    'a',
                                                    {
                                                        target: '_blank',
                                                        href: 'https://paulantezana.com',
                                                        rel: 'noopener noreferrer',
                                                        className: x.default.action,
                                                    },
                                                    y.default.createElement(s.default, {
                                                        type: 'question-circle-o',
                                                    })
                                                )
                                            ),
                                            y.default.createElement(
                                                M.default,
                                                {
                                                    className: x.default.action,
                                                    count: t.notifyCount,
                                                    onItemClick: function(e, t) {
                                                        console.log(e, t);
                                                    },
                                                    locale: {
                                                        emptyText: (0, b.formatMessage)({
                                                            id: 'component.noticeIcon.empty',
                                                        }),
                                                        clear: (0, b.formatMessage)({
                                                            id: 'component.noticeIcon.clear',
                                                        }),
                                                    },
                                                    onClear: d,
                                                    onPopupVisibleChange: n,
                                                    loading: a,
                                                    popupAlign: { offset: [20, -16] },
                                                },
                                                y.default.createElement(M.default.Tab, {
                                                    list: p.notification,
                                                    title: (0, b.formatMessage)({
                                                        id: 'component.globalHeader.notification',
                                                    }),
                                                    name: 'notification',
                                                    emptyText: (0, b.formatMessage)({
                                                        id:
                                                            'component.globalHeader.notification.empty',
                                                    }),
                                                    emptyImage:
                                                        'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
                                                })
                                            ),
                                            t.user_name
                                                ? y.default.createElement(
                                                      r.default,
                                                      { overlay: m },
                                                      y.default.createElement(
                                                          'span',
                                                          {
                                                              className: ''
                                                                  .concat(x.default.action, ' ')
                                                                  .concat(x.default.account),
                                                          },
                                                          y.default.createElement(i.default, {
                                                              size: 'small',
                                                              className: x.default.avatar,
                                                              src: t.avatar,
                                                              alt: 'avatar',
                                                          }),
                                                          y.default.createElement(
                                                              'span',
                                                              { className: x.default.name },
                                                              t.user_name
                                                          )
                                                      )
                                                  )
                                                : y.default.createElement(o.default, {
                                                      size: 'small',
                                                      style: { marginLeft: 8, marginRight: 8 },
                                                  }),
                                            y.default.createElement(C.default, {
                                                className: x.default.action,
                                            })
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(y.PureComponent);
            t.default = N;
        },
        btmg: function(e, t, a) {
            e.exports = {
                popover: 'sn-\\components\\-notice-icon\\index-popover',
                noticeButton: 'sn-\\components\\-notice-icon\\index-noticeButton',
                icon: 'sn-\\components\\-notice-icon\\index-icon',
                tabs: 'sn-\\components\\-notice-icon\\index-tabs',
            };
        },
        ctiy: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
            var o = l(a('pVnL'));
            a('miYZ');
            var r = l(a('tsqr')),
                i = l(a('lwsE')),
                u = l(a('W8MJ')),
                c = l(a('a1gu')),
                s = l(a('Nsbk')),
                d = l(a('7W2i'));
            a('B9cy');
            var f = l(a('Ol7k')),
                m = n(a('q1tI')),
                p = a('LLXN'),
                h = l(a('MFj2')),
                g = a('MuoO'),
                v = l(a('usdK')),
                y = l(a('NtFa')),
                b = l(a('wWO0')),
                E = l(a('IGtV')),
                k = l(a('HZnN')),
                M = f.default.Header,
                C = (function(e) {
                    function t() {
                        var e, a;
                        (0, i.default)(this, t);
                        for (var n = arguments.length, l = new Array(n), o = 0; o < n; o++)
                            l[o] = arguments[o];
                        return (
                            (a = (0, c.default)(
                                this,
                                (e = (0, s.default)(t)).call.apply(e, [this].concat(l))
                            )),
                            (a.state = { visible: !0 }),
                            (a.getHeadWidth = function() {
                                var e = a.props,
                                    t = e.isMobile,
                                    n = e.collapsed,
                                    l = e.setting,
                                    o = l.fixedHeader,
                                    r = l.layout;
                                return t || !o || 'topmenu' === r
                                    ? '100%'
                                    : n
                                        ? 'calc(100% - 60px)'
                                        : 'calc(100% - 220px)';
                            }),
                            (a.handleNoticeClear = function(e) {
                                r.default.success(
                                    ''
                                        .concat(
                                            (0, p.formatMessage)({
                                                id: 'component.noticeIcon.cleared',
                                            }),
                                            ' '
                                        )
                                        .concat(e)
                                );
                                var t = a.props.dispatch;
                                t({ type: 'global/clearNotices', payload: e });
                            }),
                            (a.handleMenuClick = function(e) {
                                var t = e.key,
                                    n = a.props.dispatch;
                                'profile' !== t
                                    ? 'logout' === t && n({ type: 'user/logout' })
                                    : v.default.push('/account/profile');
                            }),
                            (a.handleNoticeVisibleChange = function(e) {
                                if (e) {
                                    var t = a.props.dispatch;
                                    t({ type: 'global/fetchNotices' });
                                }
                            }),
                            (a.handScroll = function() {
                                var e = a.props.autoHideHeader,
                                    t = a.state.visible;
                                if (e) {
                                    var n =
                                        document.body.scrollTop +
                                        document.documentElement.scrollTop;
                                    a.ticking ||
                                        requestAnimationFrame(function() {
                                            if (a.oldScrollTop > n)
                                                return (
                                                    a.setState({ visible: !0 }),
                                                    void (a.scrollTop = n)
                                                );
                                            n > 300 && t && a.setState({ visible: !1 }),
                                                n < 300 && !t && a.setState({ visible: !0 }),
                                                (a.oldScrollTop = n),
                                                (a.ticking = !1);
                                        }),
                                        (a.ticking = !1);
                                }
                            }),
                            a
                        );
                    }
                    return (
                        (0, d.default)(t, e),
                        (0, u.default)(
                            t,
                            [
                                {
                                    key: 'componentDidMount',
                                    value: function() {
                                        document.addEventListener('scroll', this.handScroll, {
                                            passive: !0,
                                        });
                                    },
                                },
                                {
                                    key: 'componentWillUnmount',
                                    value: function() {
                                        document.removeEventListener('scroll', this.handScroll);
                                    },
                                },
                                {
                                    key: 'render',
                                    value: function() {
                                        var e = this.props,
                                            t = e.isMobile,
                                            a = e.handleMenuCollapse,
                                            n = e.setting,
                                            l = n.navTheme,
                                            r = n.layout,
                                            i = n.fixedHeader,
                                            u = this.state.visible,
                                            c = 'topmenu' === r,
                                            s = this.getHeadWidth(),
                                            d = u
                                                ? m.default.createElement(
                                                      M,
                                                      {
                                                          style: { padding: 0, width: s },
                                                          className: i ? E.default.fixedHeader : '',
                                                      },
                                                      c && !t
                                                          ? m.default.createElement(
                                                                b.default,
                                                                (0, o.default)(
                                                                    {
                                                                        theme: l,
                                                                        mode: 'horizontal',
                                                                        Authorized: k.default,
                                                                        onCollapse: a,
                                                                        onNoticeClear: this
                                                                            .handleNoticeClear,
                                                                        onMenuClick: this
                                                                            .handleMenuClick,
                                                                        onNoticeVisibleChange: this
                                                                            .handleNoticeVisibleChange,
                                                                    },
                                                                    this.props
                                                                )
                                                            )
                                                          : m.default.createElement(
                                                                y.default,
                                                                (0, o.default)(
                                                                    {
                                                                        onCollapse: a,
                                                                        onNoticeClear: this
                                                                            .handleNoticeClear,
                                                                        onMenuClick: this
                                                                            .handleMenuClick,
                                                                        onNoticeVisibleChange: this
                                                                            .handleNoticeVisibleChange,
                                                                    },
                                                                    this.props
                                                                )
                                                            )
                                                  )
                                                : null;
                                        return m.default.createElement(
                                            h.default,
                                            { component: '', transitionName: 'fade' },
                                            d
                                        );
                                    },
                                },
                            ],
                            [
                                {
                                    key: 'getDerivedStateFromProps',
                                    value: function(e, t) {
                                        return e.autoHideHeader || t.visible
                                            ? null
                                            : { visible: !0 };
                                    },
                                },
                            ]
                        ),
                        t
                    );
                })(m.PureComponent),
                x = (0, g.connect)(function(e) {
                    var t = e.global,
                        a = e.setting,
                        n = e.loading;
                    return {
                        currentUser: t.user,
                        collapsed: t.collapsed,
                        fetchingNotices: n.effects['global/fetchNotices'],
                        notices: t.notices,
                        setting: a,
                    };
                })(C);
            t.default = x;
        },
        gJ0l: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('Pwec');
            var o = l(a('CtXQ'));
            a('B9cy');
            var r = l(a('Ol7k')),
                i = n(a('q1tI')),
                u = l(a('ggcP')),
                c = r.default.Footer,
                s = function() {
                    return i.default.createElement(
                        c,
                        { style: { padding: 0 } },
                        i.default.createElement(u.default, {
                            links: [
                                {
                                    key: 'question',
                                    title: i.default.createElement(
                                        'span',
                                        null,
                                        i.default.createElement(o.default, {
                                            type: 'question-circle',
                                            theme: 'outlined',
                                        }),
                                        ' Ayuda',
                                        ' '
                                    ),
                                    href: 'https://github.com/paulantezana/requirement-client',
                                    blankTarget: '_blank',
                                },
                                {
                                    key: 'facebook',
                                    title: i.default.createElement(
                                        'span',
                                        null,
                                        i.default.createElement(o.default, {
                                            type: 'facebook',
                                            theme: 'outlined',
                                        }),
                                        ' Facebook',
                                        ' '
                                    ),
                                    href: 'https://www.facebook.com/Paulantezana-764145183607069/',
                                    blankTarget: '_blank',
                                },
                                {
                                    key: 'github',
                                    title: i.default.createElement(
                                        'span',
                                        null,
                                        i.default.createElement(o.default, {
                                            type: 'github',
                                            theme: 'outlined',
                                        }),
                                        ' GitHub',
                                        ' '
                                    ),
                                    href: 'https://github.com/paulantezana',
                                    blankTarget: '_blank',
                                },
                            ],
                            copyright: i.default.createElement(
                                i.Fragment,
                                null,
                                'Copyright ',
                                i.default.createElement(o.default, { type: 'copyright' }),
                                ' 2018 paulantezana.com'
                            ),
                        })
                    );
                },
                d = s;
            t.default = d;
        },
        h3zL: function(e, t, a) {
            e.exports = {
                header: 'sn-\\components\\-global-header\\index-header',
                logo: 'sn-\\components\\-global-header\\index-logo',
                menu: 'sn-\\components\\-global-header\\index-menu',
                trigger: 'sn-\\components\\-global-header\\index-trigger',
                right: 'sn-\\components\\-global-header\\index-right',
                action: 'sn-\\components\\-global-header\\index-action',
                search: 'sn-\\components\\-global-header\\index-search',
                account: 'sn-\\components\\-global-header\\index-account',
                avatar: 'sn-\\components\\-global-header\\index-avatar',
                dark: 'sn-\\components\\-global-header\\index-dark',
                name: 'sn-\\components\\-global-header\\index-name',
            };
        },
        m8Tn: function(e, t, a) {
            'use strict';
            var n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
            var l = n(a('pVnL')),
                o = n(a('lwsE')),
                r = n(a('W8MJ')),
                i = n(a('a1gu')),
                u = n(a('Nsbk')),
                c = n(a('7W2i')),
                s = n(a('MVZn'));
            a('B9cy');
            var d = n(a('Ol7k')),
                f = n(a('q1tI')),
                m = n(a('ZFw/')),
                p = n(a('Y+p1')),
                h = n(a('Wwog')),
                g = a('MuoO'),
                v = a('E6Dt'),
                y = n(a('TSYQ')),
                b = n(a('bALw')),
                E = a('4zCG'),
                k = a('LLXN'),
                M = n(a('IamK')),
                C = n(a('HZnN')),
                x = (n(a('PceP')), n(a('mxmt'))),
                N = n(a('gJ0l')),
                w = n(a('ctiy')),
                P = n(a('R1Dz')),
                S = n(a('wOmh')),
                T = (a('PENG'), n(a('xqX8'))),
                I = d.default.Content;
            function W(e, t, a) {
                return e
                    .map(function(e) {
                        var n = 'menu';
                        if (
                            (a && e.name
                                ? (n = ''.concat(a, '.').concat(e.name))
                                : e.name
                                    ? (n = 'menu.'.concat(e.name))
                                    : a && (n = a),
                            e.path)
                        ) {
                            var l = (0, s.default)({}, e, {
                                locale: n,
                                authority: e.authority || t,
                            });
                            if (e.routes) {
                                var o = W(e.routes, e.authority, n);
                                l.children = o;
                            }
                            return delete l.routes, l;
                        }
                        return null;
                    })
                    .filter(function(e) {
                        return e;
                    });
            }
            var O = (0, h.default)(W, p.default),
                q = {
                    'screen-xs': { maxWidth: 575 },
                    'screen-sm': { minWidth: 576, maxWidth: 767 },
                    'screen-md': { minWidth: 768, maxWidth: 991 },
                    'screen-lg': { minWidth: 992, maxWidth: 1199 },
                    'screen-xl': { minWidth: 1200, maxWidth: 1599 },
                    'screen-xxl': { minWidth: 1600 },
                },
                F = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, o.default)(this, t),
                            (a = (0, i.default)(this, (0, u.default)(t).call(this, e))),
                            (a.state = { rendering: !0, isMobile: !1, menuData: a.getMenuData() }),
                            (a.matchParamsPath = function(e) {
                                var t = Object.keys(a.breadcrumbNameMap).find(function(t) {
                                    return (0, b.default)(t).test(e);
                                });
                                return a.breadcrumbNameMap[t];
                            }),
                            (a.getPageTitle = function(e) {
                                var t = a.matchParamsPath(e);
                                if (!t) return 'RQM System';
                                var n = (0, k.formatMessage)({
                                    id: t.locale || t.name,
                                    defaultMessage: t.name,
                                });
                                return ''.concat(n, ' - RQM System');
                            }),
                            (a.getLayoutStyle = function() {
                                var e = a.state.isMobile,
                                    t = a.props,
                                    n = t.fixSiderbar,
                                    l = t.collapsed,
                                    o = t.layout;
                                return n && 'topmenu' !== o && !e
                                    ? { paddingLeft: l ? '60px' : '220px' }
                                    : null;
                            }),
                            (a.getContentStyle = function() {
                                var e = a.props.fixedHeader;
                                return { margin: '24px 24px 0', paddingTop: e ? 50 : 0 };
                            }),
                            (a.handleMenuCollapse = function(e) {
                                var t = a.props.dispatch;
                                t({ type: 'global/changeLayoutCollapsed', payload: e });
                            }),
                            (a.getPageTitle = (0, h.default)(a.getPageTitle)),
                            (a.getBreadcrumbNameMap = (0, h.default)(
                                a.getBreadcrumbNameMap,
                                p.default
                            )),
                            (a.breadcrumbNameMap = a.getBreadcrumbNameMap()),
                            (a.matchParamsPath = (0, h.default)(a.matchParamsPath, p.default)),
                            a
                        );
                    }
                    return (
                        (0, c.default)(t, e),
                        (0, r.default)(t, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    var e = this,
                                        t = this.props.dispatch;
                                    t({ type: 'global/globalSetting' }),
                                        t({ type: 'setting/getSetting' }),
                                        (this.renderRef = requestAnimationFrame(function() {
                                            e.setState({ rendering: !1 });
                                        })),
                                        (this.enquireHandler = (0, E.enquireScreen)(function(t) {
                                            var a = e.state.isMobile;
                                            a !== t && e.setState({ isMobile: t });
                                        }));
                                },
                            },
                            {
                                key: 'componentDidUpdate',
                                value: function(e) {
                                    this.breadcrumbNameMap = this.getBreadcrumbNameMap();
                                    var t = this.state.isMobile,
                                        a = this.props.collapsed;
                                    !t || e.isMobile || a || this.handleMenuCollapse(!1);
                                },
                            },
                            {
                                key: 'componentWillUnmount',
                                value: function() {
                                    cancelAnimationFrame(this.renderRef),
                                        (0, E.unenquireScreen)(this.enquireHandler);
                                },
                            },
                            {
                                key: 'getContext',
                                value: function() {
                                    var e = this.props.location;
                                    return {
                                        location: e,
                                        breadcrumbNameMap: this.breadcrumbNameMap,
                                    };
                                },
                            },
                            {
                                key: 'getMenuData',
                                value: function() {
                                    var e = this.props.route.routes;
                                    return O(e);
                                },
                            },
                            {
                                key: 'getBreadcrumbNameMap',
                                value: function() {
                                    var e = {},
                                        t = function t(a) {
                                            a.forEach(function(a) {
                                                a.children && t(a.children), (e[a.path] = a);
                                            });
                                        };
                                    return t(this.getMenuData()), e;
                                },
                            },
                            {
                                key: 'renderSettingDrawer',
                                value: function() {
                                    this.state.rendering;
                                    return null;
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.navTheme,
                                        n = t.layout,
                                        o = t.children,
                                        r = t.completed,
                                        i = t.location.pathname,
                                        u = this.state,
                                        c = u.isMobile,
                                        p = u.menuData,
                                        h = 'topmenu' === n,
                                        g = this.matchParamsPath(i),
                                        b = r
                                            ? f.default.createElement(
                                                  d.default,
                                                  null,
                                                  h && !c
                                                      ? null
                                                      : f.default.createElement(
                                                            M.default,
                                                            (0, l.default)(
                                                                {
                                                                    logo: x.default,
                                                                    Authorized: C.default,
                                                                    theme: a,
                                                                    onCollapse: this
                                                                        .handleMenuCollapse,
                                                                    menuData: p,
                                                                    isMobile: c,
                                                                },
                                                                this.props
                                                            )
                                                        ),
                                                  f.default.createElement(
                                                      d.default,
                                                      {
                                                          style: (0, s.default)(
                                                              {},
                                                              this.getLayoutStyle(),
                                                              { minHeight: '100vh' }
                                                          ),
                                                      },
                                                      f.default.createElement(
                                                          w.default,
                                                          (0, l.default)(
                                                              {
                                                                  menuData: p,
                                                                  handleMenuCollapse: this
                                                                      .handleMenuCollapse,
                                                                  logo: x.default,
                                                                  isMobile: c,
                                                              },
                                                              this.props
                                                          )
                                                      ),
                                                      f.default.createElement(
                                                          I,
                                                          { style: this.getContentStyle() },
                                                          f.default.createElement(
                                                              C.default,
                                                              {
                                                                  authority: g && g.authority,
                                                                  noMatch: f.default.createElement(
                                                                      S.default,
                                                                      null
                                                                  ),
                                                              },
                                                              o
                                                          )
                                                      ),
                                                      f.default.createElement(N.default, null)
                                                  )
                                              )
                                            : f.default.createElement(T.default, null);
                                    return f.default.createElement(
                                        f.default.Fragment,
                                        null,
                                        f.default.createElement(
                                            m.default,
                                            { title: this.getPageTitle(i) },
                                            f.default.createElement(
                                                v.ContainerQuery,
                                                { query: q },
                                                function(t) {
                                                    return f.default.createElement(
                                                        P.default.Provider,
                                                        { value: e.getContext() },
                                                        f.default.createElement(
                                                            'div',
                                                            { className: (0, y.default)(t) },
                                                            b
                                                        )
                                                    );
                                                }
                                            )
                                        ),
                                        this.renderSettingDrawer()
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(f.default.PureComponent),
                L = (0, g.connect)(function(e) {
                    var t = e.global,
                        a = e.setting;
                    return (0,
                    s.default)({ collapsed: t.collapsed, completed: t.success, layout: a.layout }, a);
                })(F);
            t.default = L;
        },
        mR0u: function(e, t, a) {
            e.exports = {
                logo: 'sn-\\components\\-sider-menu\\index-logo',
                sider: 'sn-\\components\\-sider-menu\\index-sider',
                fixSiderbar: 'sn-\\components\\-sider-menu\\index-fixSiderbar',
                light: 'sn-\\components\\-sider-menu\\index-light',
                icon: 'sn-\\components\\-sider-menu\\index-icon',
            };
        },
        oFg3: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.default = t.getMenuMatches = void 0);
            var o = l(a('pVnL')),
                r = l(a('lwsE')),
                i = l(a('W8MJ')),
                u = l(a('a1gu')),
                c = l(a('Nsbk')),
                s = l(a('7W2i'));
            a('Pwec');
            var d = l(a('CtXQ'));
            a('lUTK');
            var f = l(a('BvKs')),
                m = n(a('q1tI')),
                p = l(a('mOP9')),
                h = l(a('Y+p1')),
                g = l(a('Wwog')),
                v = a('LLXN'),
                y = l(a('bALw')),
                b = a('S/9j'),
                E = l(a('mR0u')),
                k = f.default.SubMenu,
                M = function(e) {
                    return 'string' === typeof e && 0 === e.indexOf('http')
                        ? m.default.createElement('img', {
                              src: e,
                              alt: 'icon',
                              className: E.default.icon,
                          })
                        : 'string' === typeof e
                            ? m.default.createElement(d.default, { type: e })
                            : e;
                },
                C = (0, g.default)(function(e, t) {
                    return e.filter(function(e) {
                        return e && (0, y.default)(e).test(t);
                    });
                }, h.default);
            t.getMenuMatches = C;
            var x = (function(e) {
                function t(e) {
                    var a;
                    return (
                        (0, r.default)(this, t),
                        (a = (0, u.default)(this, (0, c.default)(t).call(this, e))),
                        (a.getNavMenuItems = function(e, t) {
                            return e
                                ? e
                                      .filter(function(e) {
                                          return e.name && !e.hideInMenu;
                                      })
                                      .map(function(e) {
                                          var n = a.getSubMenuOrItem(e, t);
                                          return a.checkPermissionItem(e.authority, n);
                                      })
                                      .filter(function(e) {
                                          return e;
                                      })
                                : [];
                        }),
                        (a.getSelectedMenuKeys = function(e) {
                            return (0, b.urlToList)(e).map(function(e) {
                                return C(a.flatMenuKeys, e).pop();
                            });
                        }),
                        (a.getSubMenuOrItem = function(e) {
                            if (
                                e.children &&
                                !e.hideChildrenInMenu &&
                                e.children.some(function(e) {
                                    return e.name;
                                })
                            ) {
                                var t = e.locale ? (0, v.formatMessage)({ id: e.locale }) : e.name;
                                return m.default.createElement(
                                    k,
                                    {
                                        title: e.icon
                                            ? m.default.createElement(
                                                  'span',
                                                  null,
                                                  M(e.icon),
                                                  m.default.createElement('span', null, t)
                                              )
                                            : t,
                                        key: e.path,
                                    },
                                    a.getNavMenuItems(e.children)
                                );
                            }
                            return m.default.createElement(
                                f.default.Item,
                                { key: e.path },
                                a.getMenuItemPath(e)
                            );
                        }),
                        (a.getMenuItemPath = function(e) {
                            var t = e.locale ? (0, v.formatMessage)({ id: e.locale }) : e.name,
                                n = a.conversionPath(e.path),
                                l = M(e.icon),
                                o = e.target;
                            if (/^https?:\/\//.test(n))
                                return m.default.createElement(
                                    'a',
                                    { href: n, target: o },
                                    l,
                                    m.default.createElement('span', null, t)
                                );
                            var r = a.props,
                                i = r.location,
                                u = r.isMobile,
                                c = r.onCollapse;
                            return m.default.createElement(
                                p.default,
                                {
                                    to: n,
                                    target: o,
                                    replace: n === i.pathname,
                                    onClick: u
                                        ? function() {
                                              c(!0);
                                          }
                                        : void 0,
                                },
                                l,
                                m.default.createElement('span', null, t)
                            );
                        }),
                        (a.checkPermissionItem = function(e, t) {
                            var n = a.props.Authorized;
                            if (n && n.check) {
                                var l = n.check;
                                return l(e, t);
                            }
                            return t;
                        }),
                        (a.conversionPath = function(e) {
                            return e && 0 === e.indexOf('http')
                                ? e
                                : '/'.concat(e || '').replace(/\/+/g, '/');
                        }),
                        (a.getSelectedMenuKeys = (0, g.default)(a.getSelectedMenuKeys, h.default)),
                        (a.flatMenuKeys = a.getFlatMenuKeys(e.menuData)),
                        a
                    );
                }
                return (
                    (0, s.default)(t, e),
                    (0, i.default)(t, [
                        {
                            key: 'getFlatMenuKeys',
                            value: function(e) {
                                var t = this,
                                    a = [];
                                return (
                                    e.forEach(function(e) {
                                        e.children && (a = a.concat(t.getFlatMenuKeys(e.children))),
                                            a.push(e.path);
                                    }),
                                    a
                                );
                            },
                        },
                        {
                            key: 'render',
                            value: function() {
                                var e = this.props,
                                    t = e.openKeys,
                                    a = e.theme,
                                    n = e.mode,
                                    l = e.location.pathname,
                                    r = this.getSelectedMenuKeys(l);
                                !r.length && t && (r = [t[t.length - 1]]);
                                var i = {};
                                t && (i = { openKeys: t });
                                var u = this.props,
                                    c = u.handleOpenChange,
                                    s = u.style,
                                    d = u.menuData;
                                return m.default.createElement(
                                    f.default,
                                    (0, o.default)(
                                        {
                                            key: 'Menu',
                                            mode: n,
                                            theme: a,
                                            onOpenChange: c,
                                            selectedKeys: r,
                                            style: s,
                                            className: 'horizontal' === n ? 'top-nav-menu' : '',
                                        },
                                        i
                                    ),
                                    this.getNavMenuItems(d)
                                );
                            },
                        },
                    ]),
                    t
                );
            })(m.PureComponent);
            t.default = x;
        },
        wWO0: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
            var o = l(a('pVnL')),
                r = l(a('lwsE')),
                i = l(a('W8MJ')),
                u = l(a('a1gu')),
                c = l(a('Nsbk')),
                s = l(a('7W2i')),
                d = n(a('q1tI')),
                f = l(a('mOP9')),
                m = l(a('X5mu')),
                p = l(a('oFg3')),
                h = l(a('JwhZ')),
                g = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, r.default)(this, t),
                            (a = (0, u.default)(this, (0, c.default)(t).call(this, e))),
                            (a.state = {
                                maxWidth:
                                    ('Fixed' === e.contentWidth ? 1200 : window.innerWidth) -
                                    330 -
                                    165 -
                                    4 -
                                    36,
                            }),
                            a
                        );
                    }
                    return (
                        (0, s.default)(t, e),
                        (0, i.default)(
                            t,
                            [
                                {
                                    key: 'render',
                                    value: function() {
                                        var e = this,
                                            t = this.props,
                                            a = t.theme,
                                            n = t.contentWidth,
                                            l = t.logo,
                                            r = this.state.maxWidth;
                                        return d.default.createElement(
                                            'div',
                                            {
                                                className: ''
                                                    .concat(h.default.head, ' ')
                                                    .concat('light' === a ? h.default.light : ''),
                                            },
                                            d.default.createElement(
                                                'div',
                                                {
                                                    ref: function(t) {
                                                        e.maim = t;
                                                    },
                                                    className: ''
                                                        .concat(h.default.main, ' ')
                                                        .concat(
                                                            'Fixed' === n ? h.default.wide : ''
                                                        ),
                                                },
                                                d.default.createElement(
                                                    'div',
                                                    { className: h.default.left },
                                                    d.default.createElement(
                                                        'div',
                                                        {
                                                            className: h.default.logo,
                                                            key: 'logo',
                                                            id: 'logo',
                                                        },
                                                        d.default.createElement(
                                                            f.default,
                                                            { to: '/' },
                                                            d.default.createElement('img', {
                                                                src: l,
                                                                alt: 'logo',
                                                            }),
                                                            d.default.createElement(
                                                                'h1',
                                                                null,
                                                                'Ant Design Pro'
                                                            )
                                                        )
                                                    ),
                                                    d.default.createElement(
                                                        'div',
                                                        { style: { maxWidth: r } },
                                                        d.default.createElement(
                                                            p.default,
                                                            (0, o.default)({}, this.props, {
                                                                style: {
                                                                    border: 'none',
                                                                    height: 50,
                                                                },
                                                            })
                                                        )
                                                    )
                                                ),
                                                d.default.createElement(m.default, this.props)
                                            )
                                        );
                                    },
                                },
                            ],
                            [
                                {
                                    key: 'getDerivedStateFromProps',
                                    value: function(e) {
                                        return {
                                            maxWidth:
                                                ('Fixed' === e.contentWidth
                                                    ? 1200
                                                    : window.innerWidth) -
                                                330 -
                                                165 -
                                                4 -
                                                36,
                                        };
                                    },
                                },
                            ]
                        ),
                        t
                    );
                })(d.PureComponent);
            t.default = g;
        },
    },
]);
