(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [19],
    {
        PRw2: function(e, t, a) {
            'use strict';
            var l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('14J3');
            var n = l(a('BMrR'));
            a('DZo9');
            var u = l(a('8z0m'));
            a('+L6B');
            var i = l(a('2/Rp'));
            a('Pwec');
            var r = l(a('CtXQ'));
            a('jCWc');
            var d = l(a('kPKH'));
            a('Telt');
            var o = l(a('Tckk')),
                s = l(a('RIqP')),
                f = l(a('lwsE')),
                c = l(a('W8MJ')),
                m = l(a('a1gu')),
                p = l(a('Nsbk')),
                g = l(a('7W2i')),
                v = l(a('PJYZ')),
                h = l(a('q1tI')),
                b = a('MuoO'),
                E = a('Aeqt'),
                y = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, f.default)(this, t),
                            (a = (0, m.default)(this, (0, p.default)(t).call(this, e))),
                            (a.state = { fileList: [], uploading: !1 }),
                            (a.handleUpload = a.handleUpload.bind(
                                (0, v.default)((0, v.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, g.default)(t, e),
                        (0, c.default)(t, [
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
                                        t = this.state.uploading,
                                        a = {
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
                                                            fileList: (0, s.default)(a).concat([t]),
                                                        };
                                                    }),
                                                    !1
                                                );
                                            },
                                            fileList: this.state.fileList,
                                        },
                                        l = this.props.setting;
                                    return h.default.createElement(
                                        n.default,
                                        null,
                                        h.default.createElement(
                                            d.default,
                                            { xs: 24, md: 12, lg: 8, xl: 6 },
                                            h.default.createElement(o.default, {
                                                shape: 'square',
                                                size: 200,
                                                src: ''.concat(E.service.path, '/').concat(l.logo),
                                            })
                                        ),
                                        h.default.createElement(
                                            d.default,
                                            { xs: 24, md: 12, lg: 8, xl: 6 },
                                            h.default.createElement(
                                                u.default,
                                                a,
                                                h.default.createElement(
                                                    i.default,
                                                    null,
                                                    h.default.createElement(r.default, {
                                                        type: 'upload',
                                                    }),
                                                    ' Select File'
                                                )
                                            ),
                                            h.default.createElement(
                                                i.default,
                                                {
                                                    className: 'upload-demo-start',
                                                    type: 'primary',
                                                    onClick: this.handleUpload,
                                                    disabled: 0 === this.state.fileList.length,
                                                    loading: t,
                                                },
                                                t ? 'Uploading' : 'Start Upload'
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(h.default.Component),
                k = function(e) {
                    var t = e.global;
                    return { setting: t.setting };
                },
                q = (0, b.connect)(k)(y);
            t.default = q;
        },
        SV4x: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('IzEo');
            var u = n(a('bx4M'));
            a('14J3');
            var i = n(a('BMrR'));
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
                                            u.default,
                                            { bordered: !1 },
                                            p.default.createElement(
                                                i.default,
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
                k = (0, g.connect)(y)(E);
            t.default = k;
        },
        TTLn: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('+L6B');
            var u = n(a('2/Rp'));
            a('giR+');
            var i = n(a('fyUT'));
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
                                                    v.default.createElement(i.default, {
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
                                                    v.default.createElement(i.default, {
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
                                                    u.default,
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
    },
]);
