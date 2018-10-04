(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [16],
    {
        Ao8M: function(e, t, a) {
            e.exports = {
                table: 'sn\\pages\\-provider\\-list\\index-table',
                tableAlert: 'sn\\pages\\-provider\\-list\\index-tableAlert',
                actions: 'sn\\pages\\-provider\\-list\\index-actions',
                delete: 'sn\\pages\\-provider\\-list\\index-delete',
                update: 'sn\\pages\\-provider\\-list\\index-update',
            };
        },
        H7iC: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
            var r = n(a('MVZn')),
                o = n(a('PJYZ'));
            a('2qtc');
            var d = n(a('kLXV'));
            a('sRBo');
            var i = n(a('kaz8')),
                u = n(a('pVnL'));
            a('5NDa');
            var c = n(a('5rEg')),
                f = n(a('lwsE')),
                s = n(a('W8MJ')),
                p = n(a('a1gu')),
                m = n(a('Nsbk')),
                v = n(a('7W2i'));
            a('y8nQ');
            var h = n(a('Vl3Y')),
                g = l(a('q1tI')),
                y = a('MuoO'),
                E = { labelCol: { span: 8 }, wrapperCol: { span: 12 } },
                b = h.default.create()(
                    (function(e) {
                        function t(e) {
                            var a;
                            return (
                                (0, f.default)(this, t),
                                (a = (0, p.default)(this, (0, m.default)(t).call(this, e))),
                                (a.state = {}),
                                a
                            );
                        }
                        return (
                            (0, v.default)(t, e),
                            (0, s.default)(t, [
                                {
                                    key: 'render',
                                    value: function() {
                                        var e = this.props,
                                            t = e.visible,
                                            a = e.onCancel,
                                            l = e.onOk,
                                            n = e.form,
                                            r = e.confirmLoading,
                                            o = e.data,
                                            f = n.getFieldDecorator;
                                        return g.default.createElement(
                                            d.default,
                                            {
                                                title: 'Proveedor',
                                                okText: 'Guardar',
                                                confirmLoading: r,
                                                onCancel: a,
                                                onOk: l,
                                                visible: t,
                                            },
                                            g.default.createElement(
                                                h.default,
                                                { layout: 'horizontal' },
                                                g.default.createElement(
                                                    h.default.Item,
                                                    (0, u.default)({ hasFeedback: !0 }, E, {
                                                        label: 'RUC',
                                                    }),
                                                    f('ruc', {
                                                        initialValue: o.ruc,
                                                        rules: [
                                                            {
                                                                required: !0,
                                                                message:
                                                                    '\xa1Por favor ingrese un RUC!',
                                                            },
                                                            {
                                                                pattern: /^[0-9]{11}$/,
                                                                message:
                                                                    '\xa1Ingrese un RUC v\xe1lido!',
                                                            },
                                                        ],
                                                    })(
                                                        g.default.createElement(c.default, {
                                                            placeholder: 'RUC',
                                                        })
                                                    )
                                                ),
                                                g.default.createElement(
                                                    h.default.Item,
                                                    (0, u.default)({ hasFeedback: !0 }, E, {
                                                        label: 'Nombre o raz\xf3n social',
                                                    }),
                                                    f('name', {
                                                        initialValue: o.name,
                                                        rules: [
                                                            {
                                                                required: !0,
                                                                message:
                                                                    '\xa1Por favor un Nombre o raz\xf3n social!',
                                                            },
                                                        ],
                                                    })(
                                                        g.default.createElement(c.default, {
                                                            placeholder: 'Nombre o raz\xf3n social',
                                                        })
                                                    )
                                                ),
                                                g.default.createElement(
                                                    h.default.Item,
                                                    (0, u.default)({ hasFeedback: !0 }, E, {
                                                        label: 'Representante',
                                                    }),
                                                    f('manager', { initialValue: o.manager })(
                                                        g.default.createElement(c.default, {
                                                            placeholder: 'Representante',
                                                        })
                                                    )
                                                ),
                                                g.default.createElement(
                                                    h.default.Item,
                                                    (0, u.default)({ hasFeedback: !0 }, E, {
                                                        label: 'Email',
                                                    }),
                                                    f('email', {
                                                        initialValue: o.email,
                                                        rules: [
                                                            {
                                                                type: 'email',
                                                                message:
                                                                    '\xa1Ingrese un correo valido!',
                                                            },
                                                        ],
                                                    })(
                                                        g.default.createElement(c.default, {
                                                            placeholder: 'Email',
                                                        })
                                                    )
                                                ),
                                                g.default.createElement(
                                                    h.default.Item,
                                                    (0, u.default)({ hasFeedback: !0 }, E, {
                                                        label: 'Telefono',
                                                    }),
                                                    f('phone', {
                                                        initialValue: o.phone,
                                                        rules: [
                                                            {
                                                                pattern: /^[0-9]{6,12}$/,
                                                                message:
                                                                    '\xa1Ingrese un telefono v\xe1lido!',
                                                            },
                                                        ],
                                                    })(
                                                        g.default.createElement(c.default, {
                                                            placeholder: 'Telefono',
                                                        })
                                                    )
                                                ),
                                                g.default.createElement(
                                                    h.default.Item,
                                                    (0, u.default)({ hasFeedback: !0 }, E, {
                                                        label: 'Direcci\xf3n',
                                                    }),
                                                    f('address', { initialValue: o.address })(
                                                        g.default.createElement(c.default, {
                                                            placeholder: 'Direcci\xf3n',
                                                        })
                                                    )
                                                ),
                                                g.default.createElement(
                                                    h.default.Item,
                                                    (0, u.default)({ hasFeedback: !0 }, E, {
                                                        label: 'Observaci\xf3n',
                                                    }),
                                                    f('observation', {
                                                        initialValue: o.observation,
                                                    })(
                                                        g.default.createElement(
                                                            c.default.TextArea,
                                                            { placeholder: 'Observaci\xf3n' }
                                                        )
                                                    )
                                                ),
                                                g.default.createElement(
                                                    h.default.Item,
                                                    (0, u.default)({}, E, { label: 'Estado' }),
                                                    f('state', {
                                                        valuePropName: 'checked',
                                                        initialValue: o.state,
                                                    })(g.default.createElement(i.default, null))
                                                )
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(g.default.Component)
                ),
                k = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, f.default)(this, t),
                            (a = (0, p.default)(this, (0, m.default)(t).call(this, e))),
                            (a.handleConfirm = a.handleConfirm.bind(
                                (0, o.default)((0, o.default)(a))
                            )),
                            (a.handleCancel = a.handleCancel.bind(
                                (0, o.default)((0, o.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, v.default)(t, e),
                        (0, s.default)(t, [
                            {
                                key: 'handleConfirm',
                                value: function(e) {
                                    var t = this.props,
                                        a = t.dispatch,
                                        l = t.provider.currentItem,
                                        n = this.formRef.props.form;
                                    n.validateFields(function(t, o) {
                                        t ||
                                            (a({
                                                type: 'provider/'.concat(e),
                                                payload: (0, r.default)({}, o, { id: l.id }),
                                            }),
                                            n.resetFields());
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
                                        n = l.dispatch,
                                        r = l.provider,
                                        o = l.loading,
                                        d = r.currentItem,
                                        i = r.modalType,
                                        c = r.modalVisible,
                                        f = r.validRuc,
                                        s = {
                                            validRuc: f,
                                            data: 'create' == i ? { state: !0 } : d,
                                            disabled: 'detail' == i,
                                            type: i,
                                            visible: c,
                                            confirmLoading: o,
                                            onOk: function() {
                                                t(i);
                                            },
                                            onCancel: function() {
                                                n({ type: 'provider/resetProvider' }), a();
                                            },
                                        };
                                    return g.default.createElement(
                                        b,
                                        (0, u.default)({}, s, {
                                            dispatch: n,
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
                })(g.Component),
                C = function(e) {
                    var t = e.provider,
                        a = e.loading;
                    return {
                        provider: t,
                        loading: a.effects['provider/create'] || a.effects['provider/update'],
                    };
                },
                I = (0, y.connect)(C)(k);
            t.default = I;
        },
        'M/rd': function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('IzEo');
            var r = n(a('bx4M'));
            a('+L6B');
            var o = n(a('2/Rp')),
                d = n(a('lwsE')),
                i = n(a('W8MJ')),
                u = n(a('a1gu')),
                c = n(a('Nsbk')),
                f = n(a('7W2i')),
                s = n(a('PJYZ'));
            a('5NDa');
            var p = n(a('5rEg')),
                m = l(a('q1tI')),
                v = a('MuoO'),
                h = n(a('zHco')),
                g = n(a('q4SD')),
                y = n(a('OGPf')),
                E = n(a('H7iC')),
                b = n(a('V5j7')),
                k = p.default.Search,
                C = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, d.default)(this, t),
                            (a = (0, u.default)(this, (0, c.default)(t).call(this, e))),
                            (a.onQueryAll = a.onQueryAll.bind((0, s.default)((0, s.default)(a)))),
                            a
                        );
                    }
                    return (
                        (0, f.default)(t, e),
                        (0, i.default)(t, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    this.onQueryAll();
                                },
                            },
                            {
                                key: 'onQueryAll',
                                value: function(e) {
                                    var t = this.props,
                                        a = t.dispatch,
                                        l = t.provider.searchText;
                                    a({ type: 'provider/all', payload: { search: e ? '' : l } });
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.dispatch,
                                        l = t.setting,
                                        n = t.provider,
                                        d = (t.loading, this.onQueryAll),
                                        i = n.list,
                                        u = n.total,
                                        c = n.current,
                                        f = n.searchText,
                                        s = (n.currentItem,
                                        {
                                            current: c,
                                            total: u,
                                            pageSize: l.item,
                                            dataSource: i,
                                            loading: !1,
                                            onPageChange: function(e) {
                                                a({
                                                    type: 'provider/all',
                                                    payload: { current_page: e, search: f },
                                                });
                                            },
                                            onClear: function() {
                                                a({ type: 'provider/setSearchText', payload: '' }),
                                                    d(!0);
                                            },
                                            onUpdate: function(e) {
                                                a({ type: 'provider/update', payload: e });
                                            },
                                            onShowModalEdit: function(e, t) {
                                                p(e, t);
                                            },
                                            onDelete: function(e) {
                                                a({ type: 'provider/delete', payload: e });
                                            },
                                        }),
                                        p = function(e) {
                                            var t =
                                                arguments.length > 1 && void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : {};
                                            a({
                                                type: 'provider/showModal',
                                                payload: { currentItem: t, modalType: e },
                                            });
                                        },
                                        v = function(e) {
                                            a({ type: 'provider/setSearchText', payload: e });
                                        },
                                        C = function() {
                                            a({ type: 'provider/toggleModalUpload', payload: !0 });
                                        };
                                    return m.default.createElement(
                                        h.default,
                                        { title: 'Proveedores' },
                                        m.default.createElement(
                                            r.default,
                                            { bordered: !1 },
                                            m.default.createElement(
                                                'div',
                                                { className: g.default.header },
                                                m.default.createElement(
                                                    o.default,
                                                    {
                                                        icon: 'plus',
                                                        type: 'primary',
                                                        onClick: function() {
                                                            return p('create');
                                                        },
                                                    },
                                                    'Nuevo proveedor'
                                                ),
                                                m.default.createElement(
                                                    o.default,
                                                    {
                                                        icon: 'upload',
                                                        onClick: function() {
                                                            return C();
                                                        },
                                                    },
                                                    'Importar'
                                                ),
                                                m.default.createElement(
                                                    o.default,
                                                    {
                                                        icon: 'reload',
                                                        onClick: function() {
                                                            return e.onQueryAll();
                                                        },
                                                    },
                                                    'Actualizar'
                                                ),
                                                m.default.createElement(k, {
                                                    placeholder: 'Buscar usuario',
                                                    value: f,
                                                    onChange: function(e) {
                                                        return v(e.target.value);
                                                    },
                                                    onSearch: function(t) {
                                                        return e.onQueryAll();
                                                    },
                                                    style: { width: 200 },
                                                }),
                                                m.default.createElement(E.default, null),
                                                m.default.createElement(b.default, null)
                                            ),
                                            m.default.createElement(y.default, s)
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(m.Component),
                I = function(e) {
                    var t = e.provider,
                        a = e.global,
                        l = e.loading;
                    return { provider: t, setting: a.setting, loading: l.effects };
                },
                x = (0, v.connect)(I)(C);
            t.default = x;
        },
        OGPf: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('DjyN');
            var r = n(a('NUBc'));
            a('fOrg');
            var o = n(a('+KLJ'));
            a('2qtc');
            var d = n(a('kLXV'));
            a('5Dmo');
            var i = n(a('3S7+'));
            a('Pwec');
            var u = n(a('CtXQ'));
            a('BoS7');
            var c = n(a('Sdc0')),
                f = n(a('lwsE')),
                s = n(a('W8MJ')),
                p = n(a('a1gu')),
                m = n(a('Nsbk')),
                v = n(a('7W2i')),
                h = n(a('PJYZ')),
                g = l(a('q1tI')),
                y = (n(a('17x9')), n(a('CkN6'))),
                E = n(a('Ao8M')),
                b = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, f.default)(this, t),
                            (a = (0, p.default)(this, (0, m.default)(t).call(this, e))),
                            (a.state = { sortedInfo: null, filteredInfo: null }),
                            (a.onChange = a.onChange.bind((0, h.default)((0, h.default)(a)))),
                            (a.clearAllFilters = a.clearAllFilters.bind(
                                (0, h.default)((0, h.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, v.default)(t, e),
                        (0, s.default)(t, [
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
                                        n = l.onPageChange,
                                        f = l.onUpdate,
                                        s = l.onShowModalEdit,
                                        p = l.onDelete,
                                        m = l.dataSource,
                                        v = l.loading,
                                        h = l.total,
                                        b = l.pageSize,
                                        k = l.current,
                                        C = [
                                            {
                                                title: 'RUC',
                                                dataIndex: 'ruc',
                                                key: 'ruc',
                                                width: '120px',
                                            },
                                            {
                                                title: 'Razon social',
                                                dataIndex: 'name',
                                                key: 'name',
                                                sorter: function(e, t) {
                                                    return e.name.length - t.name.length;
                                                },
                                                sortOrder: 'name' === t.columnKey && t.order,
                                            },
                                            {
                                                title: 'Representante',
                                                dataIndex: 'manager',
                                                key: 'manager',
                                                sorter: function(e, t) {
                                                    return e.manager.length - t.manager.length;
                                                },
                                                sortOrder: 'manager' === t.columnKey && t.order,
                                            },
                                            { title: 'Email', dataIndex: 'email', key: 'email' },
                                            { title: 'Telefono', dataIndex: 'phone', key: 'phone' },
                                            {
                                                title: 'Direcci\xf3n',
                                                dataIndex: 'address',
                                                key: 'address',
                                                sorter: function(e, t) {
                                                    return e.address.length - t.address.length;
                                                },
                                                sortOrder: 'address' === t.columnKey && t.order,
                                            },
                                            {
                                                title: 'Estado',
                                                key: 'state',
                                                width: '60px',
                                                render: function(e, t) {
                                                    return g.default.createElement(c.default, {
                                                        size: 'small',
                                                        checked: e.state,
                                                        onChange: function(t) {
                                                            return f({ id: e.id, state: t });
                                                        },
                                                    });
                                                },
                                            },
                                            {
                                                title: 'Accion',
                                                key: 'accion',
                                                width: '110px',
                                                render: function(e, t) {
                                                    return g.default.createElement(
                                                        'div',
                                                        { className: E.default.actions },
                                                        g.default.createElement(
                                                            i.default,
                                                            { title: 'Editar' },
                                                            g.default.createElement(u.default, {
                                                                type: 'edit',
                                                                className: E.default.update,
                                                                onClick: function() {
                                                                    return s('update', e);
                                                                },
                                                            })
                                                        ),
                                                        g.default.createElement(
                                                            i.default,
                                                            { title: 'Eliminar' },
                                                            g.default.createElement(u.default, {
                                                                type: 'delete',
                                                                className: E.default.delete,
                                                                onClick: function() {
                                                                    d.default.confirm({
                                                                        title:
                                                                            '\xbfEst\xe1s seguro de eliminar este registro?',
                                                                        content: e.name,
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
                                    return g.default.createElement(
                                        'div',
                                        null,
                                        g.default.createElement(
                                            'div',
                                            { className: E.default.table },
                                            g.default.createElement(
                                                'div',
                                                { className: E.default.tableAlert },
                                                g.default.createElement(o.default, {
                                                    message: g.default.createElement(
                                                        g.Fragment,
                                                        null,
                                                        g.default.createElement(
                                                            'span',
                                                            null,
                                                            ''.concat(h, ' Proveedores')
                                                        ),
                                                        g.default.createElement(
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
                                            g.default.createElement(y.default, {
                                                columns: C,
                                                dataSource: m,
                                                loading: v,
                                                pagination: !1,
                                                onChange: this.onChange,
                                                minWidth: 800,
                                                rowKey: function(e) {
                                                    return e.id;
                                                },
                                            })
                                        ),
                                        g.default.createElement(r.default, {
                                            showQuickJumper: !0,
                                            total: h,
                                            pageSize: b,
                                            defaultCurrent: 1,
                                            current: k,
                                            showTotal: function(e) {
                                                return 'Total '.concat(e, ' items');
                                            },
                                            onChange: n,
                                        })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(g.Component),
                k = b;
            t.default = k;
        },
        V5j7: function(e, t, a) {
            'use strict';
            var l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('2qtc');
            var n = l(a('kLXV'));
            a('+L6B');
            var r = l(a('2/Rp'));
            a('/zsF');
            var o = l(a('PArb'));
            a('fOrg');
            var d = l(a('+KLJ'));
            a('Pwec');
            var i = l(a('CtXQ')),
                u = l(a('lwsE')),
                c = l(a('W8MJ')),
                f = l(a('a1gu')),
                s = l(a('Nsbk')),
                p = l(a('7W2i'));
            a('DZo9');
            var m = l(a('8z0m')),
                v = l(a('q1tI')),
                h = a('MuoO'),
                g = m.default.Dragger,
                y = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, u.default)(this, t),
                            (a = (0, f.default)(this, (0, s.default)(t).call(this, e))),
                            (a.state = { file: null }),
                            a
                        );
                    }
                    return (
                        (0, p.default)(t, e),
                        (0, c.default)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.provider,
                                        l = t.dispatch,
                                        u = t.loading,
                                        c = a.modalUploadVisible,
                                        f = function() {
                                            l({ type: 'provider/toggleModalUpload', payload: !1 });
                                        },
                                        s = {
                                            name: 'filestidents',
                                            uploading: u,
                                            accept:
                                                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
                                            showUploadList: !1,
                                            beforeUpload: function(t) {
                                                return e.setState({ file: t }), !1;
                                            },
                                        },
                                        p = function() {
                                            l({
                                                type: 'provider/uploadProviders',
                                                payload: { file: e.state.file },
                                            });
                                        },
                                        m = function() {
                                            l({ type: 'provider/downloadTemp' });
                                        },
                                        h = function() {
                                            e.setState({ file: null });
                                        };
                                    return v.default.createElement(
                                        'div',
                                        null,
                                        v.default.createElement(
                                            n.default,
                                            {
                                                title: 'Basic Modal',
                                                visible: c,
                                                footer: null,
                                                onCancel: f,
                                            },
                                            v.default.createElement(
                                                'p',
                                                null,
                                                'Importa la informaci\xf3n de tus proveedores desde un archivo xlsx(Excel). El archivo xlsx se puede formatear con: dni, nombre o raz\xf3n social y otros campos opcionales.'
                                            ),
                                            v.default.createElement(
                                                'p',
                                                null,
                                                ' ',
                                                v.default.createElement(
                                                    'a',
                                                    {
                                                        onClick: function() {
                                                            return m();
                                                        },
                                                    },
                                                    ' ',
                                                    v.default.createElement(i.default, {
                                                        type: 'layout',
                                                    }),
                                                    ' Descarga la plantilla'
                                                ),
                                                ' ',
                                                'y abre en Excel para ver el formato con todos los campos aceptados.'
                                            ),
                                            this.state.file
                                                ? v.default.createElement(
                                                      'div',
                                                      null,
                                                      v.default.createElement(d.default, {
                                                          message: this.state.file.name,
                                                          type: 'info',
                                                          closable: !0,
                                                          onClose: function() {
                                                              return h();
                                                          },
                                                      }),
                                                      v.default.createElement(o.default, {
                                                          dashed: !0,
                                                      }),
                                                      v.default.createElement(
                                                          r.default,
                                                          {
                                                              type: 'primary',
                                                              loading: u,
                                                              icon: 'upload',
                                                              onClick: function() {
                                                                  return p();
                                                              },
                                                          },
                                                          ' ',
                                                          'Subir archivo'
                                                      )
                                                  )
                                                : v.default.createElement(
                                                      g,
                                                      s,
                                                      v.default.createElement(
                                                          'p',
                                                          { className: 'ant-upload-drag-icon' },
                                                          v.default.createElement(i.default, {
                                                              type: 'inbox',
                                                          })
                                                      ),
                                                      v.default.createElement(
                                                          'p',
                                                          { className: 'ant-upload-text' },
                                                          'Haga clic o arrastre el archivo a esta \xe1rea para cargar'
                                                      ),
                                                      v.default.createElement(
                                                          'p',
                                                          { className: 'ant-upload-hint' },
                                                          'Soporte para subir un solo archivo '
                                                      )
                                                  )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(v.default.Component),
                E = function(e) {
                    var t = e.provider,
                        a = (e.global, e.loading);
                    return { provider: t, loading: a.effects['provider/uploadProviders'] };
                },
                b = (0, h.connect)(E)(y);
            t.default = b;
        },
        q4SD: function(e, t, a) {
            e.exports = { header: 'sn\\pages\\-provider\\index-header' };
        },
    },
]);
