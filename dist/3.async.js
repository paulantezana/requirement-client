(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [3],
    {
        BOD2: function(e, t, a) {
            e.exports = {
                container: 'sn\\layouts\\-user-layout-container',
                lang: 'sn\\layouts\\-user-layout-lang',
                content: 'sn\\layouts\\-user-layout-content',
                top: 'sn\\layouts\\-user-layout-top',
                header: 'sn\\layouts\\-user-layout-header',
                logo: 'sn\\layouts\\-user-layout-logo',
                title: 'sn\\layouts\\-user-layout-title',
                desc: 'sn\\layouts\\-user-layout-desc',
            };
        },
        jH8a: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                u = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
            var n = u(a('lwsE')),
                o = u(a('W8MJ')),
                s = u(a('a1gu')),
                r = u(a('Nsbk')),
                d = u(a('7W2i'));
            a('Pwec');
            var c = u(a('CtXQ')),
                f = l(a('q1tI')),
                i = (a('LLXN'), u(a('mOP9'))),
                m = u(a('ggcP')),
                p = u(a('bfXr')),
                y = u(a('BOD2')),
                h = u(a('mxmt')),
                b = [
                    {
                        key: 'question',
                        title: f.default.createElement(
                            'span',
                            null,
                            f.default.createElement(c.default, {
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
                        title: f.default.createElement(
                            'span',
                            null,
                            f.default.createElement(c.default, {
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
                        title: f.default.createElement(
                            'span',
                            null,
                            f.default.createElement(c.default, {
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
                g = f.default.createElement(
                    f.Fragment,
                    null,
                    'Copyright ',
                    f.default.createElement(c.default, { type: 'copyright' }),
                    ' 2018 paulantezana.com'
                ),
                E = (function(e) {
                    function t() {
                        return (
                            (0, n.default)(this, t),
                            (0, s.default)(this, (0, r.default)(t).apply(this, arguments))
                        );
                    }
                    return (
                        (0, d.default)(t, e),
                        (0, o.default)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props.children;
                                    return f.default.createElement(
                                        'div',
                                        { className: y.default.container },
                                        f.default.createElement(
                                            'div',
                                            { className: y.default.lang },
                                            f.default.createElement(p.default, null)
                                        ),
                                        f.default.createElement(
                                            'div',
                                            { className: y.default.content },
                                            f.default.createElement(
                                                'div',
                                                { className: y.default.top },
                                                f.default.createElement(
                                                    'div',
                                                    { className: y.default.header },
                                                    f.default.createElement(
                                                        i.default,
                                                        { to: '/' },
                                                        f.default.createElement('img', {
                                                            alt: 'logo',
                                                            className: y.default.logo,
                                                            src: h.default,
                                                        }),
                                                        f.default.createElement(
                                                            'span',
                                                            { className: y.default.title },
                                                            'Rqm WebApp'
                                                        )
                                                    )
                                                ),
                                                f.default.createElement(
                                                    'div',
                                                    { className: y.default.desc },
                                                    'Aqm Web App Sistema De Requerimiento Web'
                                                )
                                            ),
                                            e
                                        ),
                                        f.default.createElement(m.default, {
                                            links: b,
                                            copyright: g,
                                        })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(f.default.PureComponent),
                k = E;
            t.default = k;
        },
    },
]);
