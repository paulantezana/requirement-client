(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [17],
    {
        '2Q2d': function(e, t, a) {
            e.exports = {
                hidden: 'sn\\pages\\-user\\-users\\-form\\index.scss-hidden',
                reset: 'sn\\pages\\-user\\-users\\-form\\index.scss-reset',
            };
        },
        '5fP3': function(e, t, a) {
            'use strict';
            var l = a('284h'),
                r = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
            var n = r(a('MVZn'));
            a('+L6B');
            var u = r(a('2/Rp'));
            a('2qtc');
            var s = r(a('kLXV'));
            a('/zsF');
            var d = r(a('PArb'));
            a('sRBo');
            var o = r(a('kaz8'));
            a('7Kak');
            var i = r(a('9yH6')),
                f = r(a('pVnL'));
            a('5NDa');
            var c = r(a('5rEg')),
                m = r(a('lwsE')),
                p = r(a('W8MJ')),
                h = r(a('a1gu')),
                v = r(a('Nsbk')),
                g = r(a('7W2i')),
                E = r(a('PJYZ'));
            a('y8nQ');
            var y = r(a('Vl3Y'));
            a('OaEy');
            var b = r(a('2fM7')),
                k = l(a('q1tI')),
                C = r(a('2Q2d')),
                I = a('MuoO'),
                w = { labelCol: { span: 8 }, wrapperCol: { span: 12 } },
                N = b.default.Option,
                x = y.default.create()(
                    (function(e) {
                        function t(e) {
                            var a;
                            return (
                                (0, m.default)(this, t),
                                (a = (0, h.default)(this, (0, v.default)(t).call(this, e))),
                                (a.state = {}),
                                (a.compareToFirstPassword = a.compareToFirstPassword.bind(
                                    (0, E.default)((0, E.default)(a))
                                )),
                                (a.validateToNextPassword = a.validateToNextPassword.bind(
                                    (0, E.default)((0, E.default)(a))
                                )),
                                a
                            );
                        }
                        return (
                            (0, g.default)(t, e),
                            (0, p.default)(t, [
                                {
                                    key: 'compareToFirstPassword',
                                    value: function(e, t, a) {
                                        var l = this.props.form;
                                        t && t !== l.getFieldValue('password')
                                            ? a('\xa1Las contrase\xf1as no noinciden!')
                                            : a();
                                    },
                                },
                                {
                                    key: 'validateToNextPassword',
                                    value: function(e, t, a) {
                                        var l = this.props.form;
                                        t &&
                                            this.state.confirmDirty &&
                                            l.validateFields(['confirm'], { force: !0 }),
                                            a();
                                    },
                                },
                                {
                                    key: 'render',
                                    value: function() {
                                        var e = this.props,
                                            t = e.visible,
                                            a = e.onCancel,
                                            l = e.onOk,
                                            r = e.onResetPassword,
                                            n = e.form,
                                            m = e.type,
                                            p = e.confirmLoading,
                                            h = e.data,
                                            v = n.getFieldDecorator,
                                            g = 'update' !== m;
                                        return k.default.createElement(
                                            s.default,
                                            {
                                                title: 'Usuario',
                                                okText: 'Guardar',
                                                confirmLoading: p,
                                                onCancel: a,
                                                onOk: l,
                                                visible: t,
                                            },
                                            k.default.createElement(
                                                y.default,
                                                { layout: 'horizontal' },
                                                k.default.createElement(
                                                    y.default.Item,
                                                    (0, f.default)({ hasFeedback: !0 }, w, {
                                                        label: 'DNI',
                                                    }),
                                                    v('dni', {
                                                        initialValue: h.dni,
                                                        rules: [
                                                            {
                                                                required: !0,
                                                                message:
                                                                    '\xa1Por favor ingrese su DNI!',
                                                            },
                                                            {
                                                                pattern: /^[0-9]{8}$/,
                                                                message:
                                                                    '\xa1Ingrese un DNI v\xe1lido!',
                                                            },
                                                        ],
                                                    })(
                                                        k.default.createElement(c.default, {
                                                            placeholder: 'DNI',
                                                        })
                                                    )
                                                ),
                                                k.default.createElement(
                                                    y.default.Item,
                                                    (0, f.default)({ hasFeedback: !0 }, w, {
                                                        label: 'Nombres',
                                                    }),
                                                    v('first_name', {
                                                        initialValue: h.first_name,
                                                        rules: [
                                                            {
                                                                required: !0,
                                                                message:
                                                                    '\xa1Por favor ingrese su nombre!',
                                                            },
                                                            {
                                                                pattern: /^[a-zA-Z \xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1]{2,50}$/,
                                                                message:
                                                                    '\xa1Ingrese un nombre v\xe1lido!',
                                                            },
                                                        ],
                                                    })(
                                                        k.default.createElement(c.default, {
                                                            placeholder: 'Nombres',
                                                        })
                                                    )
                                                ),
                                                k.default.createElement(
                                                    y.default.Item,
                                                    (0, f.default)({ hasFeedback: !0 }, w, {
                                                        label: 'Apellidos',
                                                    }),
                                                    v('last_name', {
                                                        initialValue: h.last_name,
                                                        rules: [
                                                            {
                                                                pattern: /^[a-zA-Z \xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1]{2,50}$/,
                                                                message:
                                                                    '\xa1Ingrese un apellido v\xe1lido!',
                                                            },
                                                        ],
                                                    })(
                                                        k.default.createElement(c.default, {
                                                            placeholder: 'Apellidos',
                                                        })
                                                    )
                                                ),
                                                k.default.createElement(
                                                    y.default.Item,
                                                    (0, f.default)({ hasFeedback: !0 }, w, {
                                                        label: 'Email',
                                                    }),
                                                    v('email', {
                                                        initialValue: h.email,
                                                        rules: [
                                                            {
                                                                type: 'email',
                                                                message:
                                                                    '\xa1Ingrese un correo valido!',
                                                            },
                                                        ],
                                                    })(
                                                        k.default.createElement(c.default, {
                                                            placeholder: 'Email',
                                                        })
                                                    )
                                                ),
                                                k.default.createElement(
                                                    y.default.Item,
                                                    (0, f.default)({}, w, { label: 'Sexo' }),
                                                    v('gender', { initialValue: h.gender })(
                                                        k.default.createElement(
                                                            i.default.Group,
                                                            null,
                                                            k.default.createElement(
                                                                i.default,
                                                                { value: '0' },
                                                                'Femenino'
                                                            ),
                                                            k.default.createElement(
                                                                i.default,
                                                                { value: '1' },
                                                                'Masculino'
                                                            )
                                                        )
                                                    )
                                                ),
                                                k.default.createElement(
                                                    y.default.Item,
                                                    (0, f.default)({ hasFeedback: !0 }, w, {
                                                        label: 'Perfil',
                                                    }),
                                                    v('profile', {
                                                        initialValue: h.profile,
                                                        rules: [
                                                            {
                                                                required: !0,
                                                                message:
                                                                    '\xa1Por favor elija un perfil!',
                                                            },
                                                        ],
                                                    })(
                                                        k.default.createElement(
                                                            b.default,
                                                            { placeholder: 'Seleccionar' },
                                                            k.default.createElement(
                                                                N,
                                                                { value: 'user' },
                                                                'Usuario'
                                                            ),
                                                            k.default.createElement(
                                                                N,
                                                                { value: 'admin' },
                                                                'Admin'
                                                            )
                                                        )
                                                    )
                                                ),
                                                k.default.createElement(
                                                    y.default.Item,
                                                    (0, f.default)({ hasFeedback: !0 }, w, {
                                                        label: 'Nombre de usuario',
                                                    }),
                                                    v('user_name', {
                                                        rules: [
                                                            {
                                                                required: g,
                                                                message:
                                                                    '\xa1Por favor ingrese su nombre de usuario!',
                                                            },
                                                        ],
                                                    })(
                                                        k.default.createElement(c.default, {
                                                            placeholder: 'Nombre de usuario',
                                                        })
                                                    )
                                                ),
                                                k.default.createElement(
                                                    y.default.Item,
                                                    (0, f.default)({ hasFeedback: !0 }, w, {
                                                        label: 'Contrase\xf1a',
                                                        className: g
                                                            ? C.default.visible
                                                            : C.default.hidden,
                                                    }),
                                                    v('password', {
                                                        rules: [
                                                            {
                                                                required: g,
                                                                message:
                                                                    'Por favor ingrese su contrase\xf1a!',
                                                            },
                                                            {
                                                                pattern: /^[a-zA-Z0-9 \xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda\xf1\xd1$@$!%*?&]{6,30}$/,
                                                                message:
                                                                    '\xa1La contrase\xf1a debe contener entre 6 a 30 caracteres!',
                                                            },
                                                            {
                                                                validator: this
                                                                    .validateToNextPassword,
                                                            },
                                                        ],
                                                    })(
                                                        k.default.createElement(c.default, {
                                                            type: 'password',
                                                            placeholder: 'Contrase\xf1a',
                                                        })
                                                    )
                                                ),
                                                k.default.createElement(
                                                    y.default.Item,
                                                    (0, f.default)({ hasFeedback: !0 }, w, {
                                                        label: 'Confirmar contrase\xf1a',
                                                        className: g
                                                            ? C.default.visible
                                                            : C.default.hidden,
                                                    }),
                                                    v('confirm', {
                                                        rules: [
                                                            {
                                                                required: g,
                                                                message:
                                                                    '\xa1Por favor, confirme su contrase\xf1a!',
                                                            },
                                                            {
                                                                validator: this
                                                                    .compareToFirstPassword,
                                                            },
                                                        ],
                                                    })(
                                                        k.default.createElement(c.default, {
                                                            type: 'password',
                                                            placeholder: 'Confirmar Contrase\xf1a',
                                                        })
                                                    )
                                                ),
                                                k.default.createElement(
                                                    y.default.Item,
                                                    (0, f.default)({}, w, { label: 'Estado' }),
                                                    v('state', {
                                                        valuePropName: 'checked',
                                                        initialValue: h.state,
                                                    })(k.default.createElement(o.default, null))
                                                )
                                            ),
                                            !g &&
                                                k.default.createElement(
                                                    'div',
                                                    { className: C.default.reset },
                                                    k.default.createElement(d.default, null),
                                                    k.default.createElement(
                                                        u.default,
                                                        {
                                                            type: 'danger',
                                                            onClick: function() {
                                                                s.default.confirm({
                                                                    title:
                                                                        '\xbfEst\xe1s seguro de resetear la contrase\xf1a del usuario?',
                                                                    content: h.user_name,
                                                                    okText: 'SI',
                                                                    okType: 'danger',
                                                                    cancelText: 'NO',
                                                                    onOk: function() {
                                                                        r({ id: h.id });
                                                                    },
                                                                });
                                                            },
                                                        },
                                                        'Reset password'
                                                    ),
                                                    k.default.createElement(
                                                        'span',
                                                        null,
                                                        'Al resetear la contrase\xf1a se establesera la contrase\xf1a por defecto que es DNI + usuario = nuevacontrase\xf1a'
                                                    )
                                                )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(k.default.Component)
                ),
                P = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, m.default)(this, t),
                            (a = (0, h.default)(this, (0, v.default)(t).call(this, e))),
                            (a.handleConfirm = a.handleConfirm.bind(
                                (0, E.default)((0, E.default)(a))
                            )),
                            (a.handleCancel = a.handleCancel.bind(
                                (0, E.default)((0, E.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, g.default)(t, e),
                        (0, p.default)(t, [
                            {
                                key: 'handleConfirm',
                                value: function(e) {
                                    var t = this.props,
                                        a = t.dispatch,
                                        l = t.user.currentItem,
                                        r = this.formRef.props.form;
                                    r.validateFields(function(t, u) {
                                        t ||
                                            (a({
                                                type: 'user/'.concat(e),
                                                payload: (0, n.default)({}, u, { id: l.id }),
                                            }),
                                            r.resetFields());
                                    });
                                },
                            },
                            {
                                key: 'handleCancel',
                                value: function() {
                                    var e = this.formRef.props.form;
                                    e.resetFields();
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.handleConfirm,
                                        a = this.handleCancel,
                                        l = this.props,
                                        r = l.dispatch,
                                        n = l.user,
                                        u = l.loading,
                                        s = n.currentItem,
                                        d = n.modalType,
                                        o = n.modalVisible,
                                        i = {
                                            data: 'create' == d ? { state: !0 } : s,
                                            disabled: 'detail' == d,
                                            type: d,
                                            visible: o,
                                            confirmLoading: u,
                                            onOk: function() {
                                                t(d);
                                            },
                                            onCancel: function() {
                                                r({ type: 'user/resetUser' }), a();
                                            },
                                            onResetPassword: function(e) {
                                                r({ type: 'user/resetPassword', payload: e });
                                            },
                                        };
                                    return k.default.createElement(
                                        x,
                                        (0, f.default)({}, i, {
                                            wrappedComponentRef: function(t) {
                                                return (e.formRef = t);
                                            },
                                        })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(k.Component),
                F = function(e) {
                    var t = e.user,
                        a = e.loading;
                    return {
                        user: t,
                        loading: a.effects['user/create'] || a.effects['user/update'],
                    };
                },
                T = (0, I.connect)(F)(P);
            t.default = T;
        },
        '79Y7': function(e, t, a) {
            'use strict';
            var l = a('284h'),
                r = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('DjyN');
            var n = r(a('NUBc'));
            a('fOrg');
            var u = r(a('+KLJ'));
            a('2qtc');
            var s = r(a('kLXV'));
            a('Pwec');
            var d = r(a('CtXQ'));
            a('5Dmo');
            var o = r(a('3S7+'));
            a('BoS7');
            var i = r(a('Sdc0'));
            a('Telt');
            var f = r(a('Tckk')),
                c = r(a('lwsE')),
                m = r(a('W8MJ')),
                p = r(a('a1gu')),
                h = r(a('Nsbk')),
                v = r(a('7W2i')),
                g = r(a('PJYZ')),
                E = l(a('q1tI')),
                y = (r(a('17x9')), r(a('CkN6'))),
                b = r(a('mCnb')),
                k = a('Aeqt'),
                C = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, c.default)(this, t),
                            (a = (0, p.default)(this, (0, h.default)(t).call(this, e))),
                            (a.state = { sortedInfo: null, filteredInfo: null }),
                            (a.onChange = a.onChange.bind((0, g.default)((0, g.default)(a)))),
                            (a.clearAllFilters = a.clearAllFilters.bind(
                                (0, g.default)((0, g.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, v.default)(t, e),
                        (0, m.default)(t, [
                            {
                                key: 'onChange',
                                value: function(e, t, a) {
                                    this.setState({ sortedInfo: a, filteredInfo: t });
                                },
                            },
                            {
                                key: 'clearAllFilters',
                                value: function() {
                                    this.setState({ sortedInfo: null, filteredInfo: null }),
                                        this.props.onClear();
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.state,
                                        t = e.sortedInfo,
                                        a = e.filteredInfo;
                                    (t = t || {}), (a = a || {});
                                    var l = this.props,
                                        r = l.onPageChange,
                                        c = l.onUpdate,
                                        m = l.onShowModalEdit,
                                        p = l.onDelete,
                                        h = l.dataSource,
                                        v = l.loading,
                                        g = l.total,
                                        C = l.pageSize,
                                        I = l.current,
                                        w = l.setting,
                                        N = [
                                            {
                                                title: 'Foto',
                                                key: 'avatar',
                                                width: '57px',
                                                render: function(e, t) {
                                                    return '' != e.avatar
                                                        ? E.default.createElement(f.default, {
                                                              src: ''
                                                                  .concat(k.service.path, '/')
                                                                  .concat(e.avatar),
                                                          })
                                                        : E.default.createElement(f.default, {
                                                              src: ''
                                                                  .concat(k.service.path, '/')
                                                                  .concat(w.logo),
                                                          });
                                                },
                                            },
                                            { title: 'DNI', dataIndex: 'dni', key: 'dni' },
                                            {
                                                title: 'Nombres',
                                                dataIndex: 'first_name',
                                                key: 'first_name',
                                                sorter: function(e, t) {
                                                    return (
                                                        e.first_name.length - t.first_name.length
                                                    );
                                                },
                                                sortOrder: 'first_name' === t.columnKey && t.order,
                                            },
                                            {
                                                title: 'Apellidos',
                                                dataIndex: 'last_name',
                                                key: 'last_name',
                                                sorter: function(e, t) {
                                                    return e.last_name.length - t.last_name.length;
                                                },
                                                sortOrder: 'last_name' === t.columnKey && t.order,
                                            },
                                            { title: 'Email', dataIndex: 'email', key: 'email' },
                                            {
                                                title: 'Perfil',
                                                dataIndex: 'profile',
                                                key: 'profile',
                                                filters: [
                                                    { text: 'Admin', value: 'admin' },
                                                    { text: 'Usuario', value: 'user' },
                                                ],
                                                filteredValue: a.profile || null,
                                                onFilter: function(e, t) {
                                                    return t.profile.includes(e);
                                                },
                                            },
                                            {
                                                title: 'Accion',
                                                key: 'accion',
                                                width: '150px',
                                                render: function(e, t) {
                                                    return E.default.createElement(
                                                        'div',
                                                        { className: b.default.actions },
                                                        E.default.createElement(
                                                            o.default,
                                                            { title: 'Estado' },
                                                            E.default.createElement(i.default, {
                                                                size: 'small',
                                                                checked: e.state,
                                                                onChange: function(t) {
                                                                    return c({
                                                                        id: e.id,
                                                                        state: t,
                                                                    });
                                                                },
                                                            })
                                                        ),
                                                        E.default.createElement(
                                                            o.default,
                                                            { title: 'Editar' },
                                                            E.default.createElement(d.default, {
                                                                type: 'edit',
                                                                className: b.default.update,
                                                                onClick: function() {
                                                                    return m('update', e);
                                                                },
                                                            })
                                                        ),
                                                        E.default.createElement(
                                                            o.default,
                                                            { title: 'Eliminar' },
                                                            E.default.createElement(d.default, {
                                                                type: 'delete',
                                                                className: b.default.delete,
                                                                onClick: function() {
                                                                    s.default.confirm({
                                                                        title:
                                                                            '\xbfEst\xe1s seguro de eliminar este registro?',
                                                                        content: e.nombre,
                                                                        okText: 'SI',
                                                                        okType: 'danger',
                                                                        cancelText: 'NO',
                                                                        onOk: function() {
                                                                            p({ id: e.id });
                                                                        },
                                                                    });
                                                                },
                                                            })
                                                        )
                                                    );
                                                },
                                            },
                                        ];
                                    return E.default.createElement(
                                        'div',
                                        null,
                                        E.default.createElement(
                                            'div',
                                            { className: b.default.table },
                                            E.default.createElement(
                                                'div',
                                                { className: b.default.tableAlert },
                                                E.default.createElement(u.default, {
                                                    message: E.default.createElement(
                                                        E.Fragment,
                                                        null,
                                                        E.default.createElement(
                                                            'span',
                                                            null,
                                                            ''.concat(g, ' Usuarios')
                                                        ),
                                                        E.default.createElement(
                                                            'a',
                                                            {
                                                                onClick: this.clearAllFilters,
                                                                style: { marginLeft: 24 },
                                                            },
                                                            ' ',
                                                            'Borrar filtros y actualizar',
                                                            ' '
                                                        )
                                                    ),
                                                    type: 'info',
                                                    showIcon: !0,
                                                })
                                            ),
                                            E.default.createElement(y.default, {
                                                columns: N,
                                                dataSource: h,
                                                loading: v,
                                                pagination: !1,
                                                onChange: this.onChange,
                                                minWidth: 800,
                                                rowKey: function(e) {
                                                    return e.id;
                                                },
                                            })
                                        ),
                                        E.default.createElement(n.default, {
                                            showQuickJumper: !0,
                                            total: g,
                                            pageSize: C,
                                            defaultCurrent: 1,
                                            current: I,
                                            showTotal: function(e) {
                                                return 'Total '.concat(e, ' items');
                                            },
                                            onChange: r,
                                        })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(E.Component),
                I = C;
            t.default = I;
        },
        a9Yj: function(e, t, a) {
            e.exports = {
                row: 'sn\\pages\\-user\\-users\\index-row',
                header: 'sn\\pages\\-user\\-users\\index-header',
                actions: 'sn\\pages\\-user\\-users\\index-actions',
                group: 'sn\\pages\\-user\\-users\\index-group',
            };
        },
        mCnb: function(e, t, a) {
            e.exports = {
                table: 'sn\\pages\\-user\\-users\\-list\\index-table',
                tableAlert: 'sn\\pages\\-user\\-users\\-list\\index-tableAlert',
                actions: 'sn\\pages\\-user\\-users\\-list\\index-actions',
                delete: 'sn\\pages\\-user\\-users\\-list\\index-delete',
                update: 'sn\\pages\\-user\\-users\\-list\\index-update',
            };
        },
        oAXN: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                r = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
            var n = r(a('lwsE')),
                u = r(a('W8MJ')),
                s = r(a('a1gu')),
                d = r(a('Nsbk')),
                o = r(a('7W2i'));
            a('IzEo');
            var i = r(a('bx4M'));
            a('+L6B');
            var f = r(a('2/Rp'));
            a('5NDa');
            var c = r(a('5rEg')),
                m = l(a('q1tI')),
                p = a('MuoO'),
                h = r(a('zHco')),
                v = r(a('a9Yj')),
                g = r(a('79Y7')),
                E = r(a('5fP3')),
                y = c.default.Search,
                b = function(e) {
                    var t = e.dispatch,
                        a = e.setting,
                        l = e.user,
                        r = (e.loading, l.list),
                        n = l.total,
                        u = l.current,
                        s = l.searchText,
                        d = (l.currentItem,
                        l.modalVisible,
                        l.modalType,
                        {
                            current: u,
                            total: n,
                            setting: a,
                            pageSize: a.item,
                            dataSource: r,
                            loading: !1,
                            onPageChange: function(e) {
                                t({ type: 'user/all', payload: { current_page: e, search: s } });
                            },
                            onClear: function() {
                                t({ type: 'user/search', payload: '' }), o(!0);
                            },
                            onUpdate: function(e) {
                                t({ type: 'user/update', payload: e });
                            },
                            onShowModalEdit: function(e, t) {
                                c(e, t);
                            },
                            onDelete: function(e) {
                                t({ type: 'user/delete', payload: e });
                            },
                        }),
                        o = function(e) {
                            t({ type: 'user/all', payload: { search: e ? '' : s } });
                        },
                        c = function(e) {
                            var a =
                                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            t({
                                type: 'user/showModal',
                                payload: { currentItem: a, modalType: e },
                            });
                        },
                        p = function(e) {
                            t({ type: 'user/search', payload: e });
                        };
                    return m.default.createElement(
                        h.default,
                        { title: 'Usuarios' },
                        m.default.createElement(
                            i.default,
                            { bordered: !1 },
                            m.default.createElement(
                                'div',
                                { className: v.default.header },
                                m.default.createElement(
                                    'div',
                                    { className: v.default.group },
                                    m.default.createElement(
                                        f.default,
                                        {
                                            icon: 'plus',
                                            type: 'primary',
                                            onClick: function() {
                                                return c('create');
                                            },
                                        },
                                        'Nuevo usuario'
                                    ),
                                    m.default.createElement(
                                        f.default,
                                        {
                                            icon: 'reload',
                                            onClick: function() {
                                                return o();
                                            },
                                        },
                                        'Actualizar'
                                    ),
                                    m.default.createElement(y, {
                                        placeholder: 'Buscar usuario',
                                        value: s,
                                        onChange: function(e) {
                                            return p(e.target.value);
                                        },
                                        onSearch: function(e) {
                                            return o();
                                        },
                                        style: { width: 200 },
                                    })
                                ),
                                m.default.createElement(E.default, null)
                            ),
                            m.default.createElement(g.default, d)
                        )
                    );
                },
                k = (function(e) {
                    function t() {
                        return (
                            (0, n.default)(this, t),
                            (0, s.default)(this, (0, d.default)(t).apply(this, arguments))
                        );
                    }
                    return (
                        (0, o.default)(t, e),
                        (0, u.default)(t, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    var e = this.props,
                                        t = e.dispatch;
                                    e.setting;
                                    t({ type: 'user/all' });
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    return b(this.props);
                                },
                            },
                        ]),
                        t
                    );
                })(m.Component),
                C = function(e) {
                    var t = e.user,
                        a = e.global,
                        l = e.loading;
                    return { user: t, setting: a.setting, loading: l.effects };
                },
                I = (0, p.connect)(C)(k);
            t.default = I;
        },
    },
]);
