(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [19],
    {
        PRw2: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('DZo9');
            var i = n(a('8z0m'));
            a('+L6B');
            var u = n(a('2/Rp')),
                r = n(a('RIqP')),
                d = n(a('lwsE')),
                o = n(a('W8MJ')),
                s = n(a('a1gu')),
                f = n(a('Nsbk')),
                c = n(a('7W2i')),
                m = n(a('PJYZ')),
                p = l(a('q1tI')),
                g = a('LLXN'),
                v = a('MuoO'),
                h = a('Aeqt'),
                b = n(a('xr1I')),
                E = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, d.default)(this, t),
                            (a = (0, s.default)(this, (0, f.default)(t).call(this, e))),
                            (a.state = { fileList: [], uploading: !1 }),
                            (a.handleUpload = a.handleUpload.bind(
                                (0, m.default)((0, m.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, c.default)(t, e),
                        (0, o.default)(t, [
                            {
                                key: 'handleUpload',
                                value: function() {
                                    var e = this.state.fileList;
                                    this.props.dispatch({
                                        type: 'global/uploadLogo',
                                        payload: { id: this.props.setting.id, logo: e[0] },
                                    });
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = (this.state.uploading,
                                        {
                                            action: '//jsonplaceholder.typicode.com/posts/',
                                            onRemove: function(t) {
                                                e.setState(function(e) {
                                                    var a = e.fileList,
                                                        l = a.indexOf(t),
                                                        n = a.slice();
                                                    return n.splice(l, 1), { fileList: n };
                                                });
                                            },
                                            beforeUpload: function(t) {
                                                return (
                                                    e.setState(function(e) {
                                                        var a = e.fileList;
                                                        return {
                                                            fileList: (0, r.default)(a).concat([t]),
                                                        };
                                                    }),
                                                    !1
                                                );
                                            },
                                            fileList: this.state.fileList,
                                        }),
                                        a = this.props.setting;
                                    return p.default.createElement(
                                        p.Fragment,
                                        null,
                                        p.default.createElement(
                                            'div',
                                            { className: b.default.avatar_title },
                                            'Avatar'
                                        ),
                                        p.default.createElement(
                                            'div',
                                            { className: b.default.avatar },
                                            p.default.createElement('img', {
                                                src: ''.concat(h.service.path, '/').concat(a.logo),
                                                alt: 'avatar',
                                            })
                                        ),
                                        p.default.createElement(
                                            i.default,
                                            t,
                                            p.default.createElement(
                                                'div',
                                                { className: b.default.button_view },
                                                p.default.createElement(
                                                    u.default,
                                                    { icon: 'upload' },
                                                    p.default.createElement(g.FormattedMessage, {
                                                        id: 'app.settings.basic.avatar',
                                                        defaultMessage: 'Change avatar',
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
                })(p.default.Component),
                y = function(e) {
                    var t = e.global;
                    return { setting: t.setting };
                },
                I = (0, v.connect)(y)(E);
            t.default = I;
        },
        SV4x: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('IzEo');
            var i = n(a('bx4M'));
            a('14J3');
            var u = n(a('BMrR'));
            a('jCWc');
            var r = n(a('kPKH'));
            a('/zsF');
            var d = n(a('PArb')),
                o = n(a('lwsE')),
                s = n(a('W8MJ')),
                f = n(a('a1gu')),
                c = n(a('Nsbk')),
                m = n(a('7W2i')),
                p = l(a('q1tI')),
                g = a('MuoO'),
                v = n(a('zHco')),
                h = n(a('TTLn')),
                b = n(a('PRw2')),
                E = (function(e) {
                    function t() {
                        return (
                            (0, o.default)(this, t),
                            (0, f.default)(this, (0, c.default)(t).apply(this, arguments))
                        );
                    }
                    return (
                        (0, m.default)(t, e),
                        (0, s.default)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    return p.default.createElement(
                                        v.default,
                                        { title: 'Configuracion' },
                                        p.default.createElement(
                                            i.default,
                                            { bordered: !1 },
                                            p.default.createElement(
                                                u.default,
                                                { gutter: 24 },
                                                p.default.createElement(
                                                    r.default,
                                                    { xs: 24, md: 12, lg: 8, xl: 8 },
                                                    p.default.createElement(
                                                        d.default,
                                                        { orientation: 'left' },
                                                        'Configuraci\xf3n general'
                                                    ),
                                                    p.default.createElement(h.default, null)
                                                ),
                                                p.default.createElement(
                                                    r.default,
                                                    { xs: 24, md: 12, lg: 8, xl: 8 },
                                                    p.default.createElement(
                                                        d.default,
                                                        { orientation: 'left' },
                                                        'Logo'
                                                    ),
                                                    p.default.createElement(b.default, null)
                                                )
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(p.Component),
                y = function(e) {
                    var t = e.global;
                    return { global: t };
                },
                I = (0, g.connect)(y)(E);
            t.default = I;
        },
        TTLn: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('+L6B');
            var i = n(a('2/Rp'));
            a('giR+');
            var u = n(a('fyUT'));
            a('5NDa');
            var r = n(a('5rEg')),
                d = n(a('MVZn')),
                o = n(a('lwsE')),
                s = n(a('W8MJ')),
                f = n(a('a1gu')),
                c = n(a('Nsbk')),
                m = n(a('7W2i')),
                p = n(a('PJYZ'));
            a('y8nQ');
            var g = n(a('Vl3Y')),
                v = l(a('q1tI')),
                h = a('MuoO'),
                b = g.default.create()(
                    (function(e) {
                        function t(e) {
                            var a;
                            return (
                                (0, o.default)(this, t),
                                (a = (0, f.default)(this, (0, c.default)(t).call(this, e))),
                                (a.state = { loading: !1 }),
                                (a.handleSubmit = a.handleSubmit.bind(
                                    (0, p.default)((0, p.default)(a))
                                )),
                                a
                            );
                        }
                        return (
                            (0, m.default)(t, e),
                            (0, s.default)(t, [
                                {
                                    key: 'handleSubmit',
                                    value: function(e) {
                                        var t = this;
                                        e.preventDefault();
                                        var a = this.props.setting;
                                        this.props.form.validateFields(function(e, l) {
                                            e ||
                                                t.props.dispatch({
                                                    type: 'global/updateSetting',
                                                    payload: (0, d.default)({}, l, { id: a.id }),
                                                });
                                        });
                                    },
                                },
                                {
                                    key: 'render',
                                    value: function() {
                                        var e = this.props.form.getFieldDecorator,
                                            t = this.props.setting;
                                        return v.default.createElement(
                                            g.default,
                                            { onSubmit: this.handleSubmit },
                                            v.default.createElement(
                                                g.default.Item,
                                                {
                                                    hasFeedback: !0,
                                                    label: 'RUC',
                                                    help: 'RUC de la empresa',
                                                },
                                                e('identification', {
                                                    initialValue: t.identification,
                                                    rules: [
                                                        {
                                                            required: !0,
                                                            message:
                                                                '\xa1Por favor ingrese su identification!',
                                                        },
                                                        {
                                                            pattern: /^[0-9]{11}$/,
                                                            message:
                                                                '\xa1Ingrese una identification v\xe1lido!',
                                                        },
                                                    ],
                                                })(v.default.createElement(r.default, null))
                                            ),
                                            v.default.createElement(
                                                g.default.Item,
                                                {
                                                    hasFeedback: !0,
                                                    label: 'Email',
                                                    help: 'Email de la empresa',
                                                },
                                                e('email', {
                                                    initialValue: t.email,
                                                    rules: [
                                                        {
                                                            type: 'email',
                                                            message:
                                                                '\xa1Ingrese un correo valido!',
                                                        },
                                                        {
                                                            required: !0,
                                                            message:
                                                                '\xa1Por favor ingrese su correo!',
                                                        },
                                                    ],
                                                })(v.default.createElement(r.default, null))
                                            ),
                                            v.default.createElement(
                                                g.default.Item,
                                                {
                                                    hasFeedback: !0,
                                                    label: 'Nombre de la empresa',
                                                    help: 'Nombre de la empresa',
                                                },
                                                e('company', {
                                                    initialValue: t.company,
                                                    rules: [
                                                        {
                                                            required: !0,
                                                            message:
                                                                '\xa1Ingrese un nombre v\xe1lido!',
                                                        },
                                                    ],
                                                })(v.default.createElement(r.default, null))
                                            ),
                                            v.default.createElement(
                                                g.default.Item,
                                                {
                                                    hasFeedback: !0,
                                                    label: 'Ciudad',
                                                    help: 'Ubicacion geografica de la empresa',
                                                },
                                                e('city', { initialValue: t.city })(
                                                    v.default.createElement(r.default, null)
                                                )
                                            ),
                                            v.default.createElement(
                                                g.default.Item,
                                                {
                                                    label: 'Item',
                                                    help:
                                                        'N\xfamero de items a mostrar en cada p\xe1gina de una tabla',
                                                },
                                                e('item', {
                                                    initialValue: t.item,
                                                    rules: [
                                                        {
                                                            pattern: /^([3-9]|[1-8][0-9]|9[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/,
                                                            message:
                                                                '\xa1Solo se permiten valores num\xe9ricos de 3 a 255!',
                                                        },
                                                        {
                                                            required: !0,
                                                            message:
                                                                '\xa1Por favor ingrese un n\xfamero!',
                                                        },
                                                    ],
                                                })(
                                                    v.default.createElement(u.default, {
                                                        min: 3,
                                                        max: 255,
                                                        step: 1,
                                                    })
                                                )
                                            ),
                                            v.default.createElement(
                                                g.default.Item,
                                                {
                                                    label: 'Cotizaciones',
                                                    help:
                                                        'N\xfamero maximo cotizaciones que se pueden realizar en un requerimiento',
                                                },
                                                e('quotations', {
                                                    initialValue: t.quotations,
                                                    rules: [
                                                        {
                                                            pattern: /^([1-9]|1[0-5])$/,
                                                            message:
                                                                '\xa1Solo se permiten valores num\xe9ricos de 1 a 15!',
                                                        },
                                                        {
                                                            required: !0,
                                                            message:
                                                                '\xa1Por favor ingrese un n\xfamero!',
                                                        },
                                                    ],
                                                })(
                                                    v.default.createElement(u.default, {
                                                        min: 1,
                                                        max: 15,
                                                        step: 1,
                                                    })
                                                )
                                            ),
                                            v.default.createElement(
                                                g.default.Item,
                                                null,
                                                v.default.createElement(
                                                    i.default,
                                                    { type: 'primary', htmlType: 'submit' },
                                                    'Guardar cambios'
                                                )
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(v.default.Component)
                ),
                E = function(e) {
                    var t = e.global;
                    return { setting: t.setting };
                },
                y = (0, h.connect)(E)(b);
            t.default = y;
        },
        xr1I: function(e, t, a) {
            e.exports = {
                avatar_title: 'sn\\pages\\-setting\\-upload-logo\\index-avatar_title',
                avatar: 'sn\\pages\\-setting\\-upload-logo\\index-avatar',
                button_view: 'sn\\pages\\-setting\\-upload-logo\\index-button_view',
            };
        },
    },
]);
