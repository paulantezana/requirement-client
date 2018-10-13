(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [13],
    {
        '/X/g': function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('P2fV');
            var r = n(a('NJEC'));
            a('5Dmo');
            var u = n(a('3S7+'));
            a('Pwec');
            var i = n(a('CtXQ')),
                d = n(a('lwsE')),
                o = n(a('W8MJ')),
                c = n(a('a1gu')),
                s = n(a('Nsbk')),
                f = n(a('7W2i')),
                m = n(a('PJYZ')),
                p = l(a('q1tI')),
                h = (n(a('17x9')), n(a('CkN6'))),
                v = n(a('YorV')),
                g = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, d.default)(this, t),
                            (a = (0, c.default)(this, (0, s.default)(t).call(this, e))),
                            (a.state = { sortedInfo: null, filteredInfo: null }),
                            (a.onChange = a.onChange.bind((0, m.default)((0, m.default)(a)))),
                            (a.clearAllFilters = a.clearAllFilters.bind(
                                (0, m.default)((0, m.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, f.default)(t, e),
                        (0, o.default)(t, [
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
                                        n = l.onShowModalEdit,
                                        d = l.onDelete,
                                        o = l.dataSource,
                                        c = l.loading,
                                        s = l.disabled,
                                        f = [
                                            {
                                                title: 'N\xb0',
                                                key: 'n',
                                                render: function(e, t, a) {
                                                    return a + 1;
                                                },
                                            },
                                            {
                                                title: 'Cantidad',
                                                dataIndex: 'amount',
                                                key: 'amount',
                                                sorter: function(e, t) {
                                                    return e.amount - t.amount;
                                                },
                                                sortOrder: 'amount' === t.columnKey && t.order,
                                            },
                                            {
                                                title: 'Unidad de medida',
                                                dataIndex: 'unit_measure',
                                                key: 'unit_measure',
                                                sorter: function(e, t) {
                                                    return (
                                                        e.unit_measure.length -
                                                        t.unit_measure.length
                                                    );
                                                },
                                                sortOrder:
                                                    'unit_measure' === t.columnKey && t.order,
                                            },
                                            {
                                                title: 'Descripci\xf3n',
                                                dataIndex: 'product_name',
                                                key: 'product_name',
                                            },
                                            {
                                                title: 'Precio sugerido',
                                                dataIndex: 'suggested_price',
                                                key: 'suggested_price',
                                            },
                                            {
                                                title: 'Total',
                                                key: 'total',
                                                render: function(e, t) {
                                                    return e.amount && e.suggested_price
                                                        ? e.amount * e.suggested_price
                                                        : '';
                                                },
                                            },
                                            {
                                                title: 'Observaci\xf3n',
                                                dataIndex: 'observation',
                                                key: 'observation',
                                            },
                                            {
                                                title: 'Accion',
                                                key: 'accion',
                                                width: '110px',
                                                render: function(e, t) {
                                                    return p.default.createElement(
                                                        'div',
                                                        { className: v.default.actions },
                                                        !s &&
                                                            p.default.createElement(
                                                                u.default,
                                                                { title: 'Editar' },
                                                                p.default.createElement(i.default, {
                                                                    type: 'edit',
                                                                    className: v.default.update,
                                                                    onClick: function() {
                                                                        return n('update', e);
                                                                    },
                                                                })
                                                            ),
                                                        !s &&
                                                            p.default.createElement(
                                                                u.default,
                                                                { title: 'Eliminar' },
                                                                p.default.createElement(
                                                                    r.default,
                                                                    {
                                                                        title:
                                                                            '\xbfEst\xe1s seguro de eliminar este registro?',
                                                                        onConfirm: function() {
                                                                            return d(e);
                                                                        },
                                                                    },
                                                                    p.default.createElement(
                                                                        i.default,
                                                                        {
                                                                            type: 'delete',
                                                                            className:
                                                                                v.default.delete,
                                                                        }
                                                                    )
                                                                )
                                                            )
                                                    );
                                                },
                                            },
                                        ];
                                    return p.default.createElement(
                                        'div',
                                        null,
                                        p.default.createElement(h.default, {
                                            columns: f,
                                            dataSource: o,
                                            loading: c,
                                            pagination: !1,
                                            onChange: this.onChange,
                                            minWidth: 800,
                                            rowKey: function(e) {
                                                return e.product_id;
                                            },
                                        })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(p.Component),
                y = g;
            t.default = y;
        },
        '1tp+': function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('2qtc');
            var r = n(a('kLXV')),
                u = n(a('lwsE')),
                i = n(a('W8MJ')),
                d = n(a('a1gu')),
                o = n(a('Nsbk')),
                c = n(a('7W2i')),
                s = l(a('q1tI')),
                f = a('MuoO'),
                m = (function(e) {
                    function t(e) {
                        return (
                            (0, u.default)(this, t),
                            (0, d.default)(this, (0, o.default)(t).call(this, e))
                        );
                    }
                    return (
                        (0, c.default)(t, e),
                        (0, i.default)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props,
                                        t = e.requirement,
                                        a = e.dispatch,
                                        l = function() {
                                            a({ type: 'requirement/hidePrinterRQ' });
                                        };
                                    return s.default.createElement(
                                        r.default,
                                        {
                                            title: 'Cuadro Comparativo',
                                            onCancel: l,
                                            style: { top: 20 },
                                            width: '95vw',
                                            footer: null,
                                            bodyStyle: { padding: 0 },
                                            visible: t.rqVisible,
                                        },
                                        s.default.createElement('iframe', {
                                            src: t.docRQDataUrl,
                                            height: '600px',
                                            width: '100%',
                                        })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(s.Component),
                p = function(e) {
                    var t = e.requirement;
                    return { requirement: t };
                },
                h = (0, f.connect)(p)(m);
            t.default = h;
        },
        BY8K: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
            var r = n(a('MVZn')),
                u = n(a('PJYZ'));
            a('2qtc');
            var i = n(a('kLXV'));
            a('+L6B');
            var d = n(a('2/Rp'));
            a('14J3');
            var o = n(a('BMrR'));
            a('jCWc');
            var c = n(a('kPKH')),
                s = n(a('pVnL'));
            a('5NDa');
            var f = n(a('5rEg')),
                m = n(a('lwsE')),
                p = n(a('W8MJ')),
                h = n(a('a1gu')),
                v = n(a('Nsbk')),
                g = n(a('7W2i'));
            a('y8nQ');
            var y = n(a('Vl3Y')),
                E = l(a('q1tI')),
                q = n(a('KnKK')),
                b = a('MuoO'),
                k = n(a('/X/g')),
                C = n(a('gCjn')),
                x = n(a('oDxf')),
                I = { labelCol: { span: 6 }, wrapperCol: { span: 18 } },
                w = y.default.create()(
                    (function(e) {
                        function t(e) {
                            var a;
                            return (
                                (0, m.default)(this, t),
                                (a = (0, h.default)(this, (0, v.default)(t).call(this, e))),
                                (a.state = {}),
                                a
                            );
                        }
                        return (
                            (0, g.default)(t, e),
                            (0, p.default)(t, [
                                {
                                    key: 'render',
                                    value: function() {
                                        var e = this.props,
                                            t = e.visible,
                                            a = e.onCancel,
                                            l = e.onOk,
                                            n = e.form,
                                            r = (e.type, e.confirmLoading),
                                            u = e.data,
                                            m = n.getFieldDecorator,
                                            p = this.props,
                                            h = p.require,
                                            v = p.requirement,
                                            g = p.dispatch,
                                            b = p.loadingRequire,
                                            w = h.list,
                                            _ = 'detail' === v.modalType,
                                            R = function() {
                                                return _ ? { footer: null } : {};
                                            },
                                            N = {
                                                dataSource: w,
                                                loading: b,
                                                disabled: _,
                                                onUpdate: function(e) {},
                                                onDelete: function(e) {
                                                    g({
                                                        type: 'require/removeItem',
                                                        payload: { product_id: e.product_id },
                                                    }),
                                                        'update' === v.modalType &&
                                                            g({
                                                                type: 'require/delete',
                                                                payload: { id: e.id },
                                                            });
                                                },
                                                onShowModalEdit: function(e, t) {
                                                    S(e, t);
                                                },
                                            },
                                            S = function(e) {
                                                var t =
                                                    arguments.length > 1 && void 0 !== arguments[1]
                                                        ? arguments[1]
                                                        : {};
                                                g({
                                                    type: 'require/showModal',
                                                    payload: { currentItem: t, modalType: e },
                                                });
                                            },
                                            P = function() {
                                                g({ type: 'require/clearList' });
                                            };
                                        return E.default.createElement(
                                            i.default,
                                            (0, s.default)(
                                                {
                                                    title: 'Requerimiento',
                                                    okText: 'Guardar',
                                                    width: '90vw',
                                                    style: { top: 50 },
                                                    confirmLoading: r,
                                                    onCancel: a,
                                                    onOk: l,
                                                },
                                                R(),
                                                { visible: t }
                                            ),
                                            E.default.createElement(
                                                y.default,
                                                { layout: 'horizontal' },
                                                E.default.createElement(
                                                    o.default,
                                                    { gutter: 16 },
                                                    E.default.createElement(
                                                        c.default,
                                                        { xs: 24, sm: 16, md: 12, lg: 8 },
                                                        E.default.createElement(
                                                            y.default.Item,
                                                            (0, s.default)({ hasFeedback: !0 }, I, {
                                                                label: 'Nombre',
                                                            }),
                                                            m('name', {
                                                                initialValue: u.name,
                                                                rules: [
                                                                    {
                                                                        required: !0,
                                                                        message:
                                                                            '\xa1Por favor ingrese un nombre!',
                                                                    },
                                                                ],
                                                            })(
                                                                E.default.createElement(f.default, {
                                                                    placeholder: 'Nombre',
                                                                })
                                                            )
                                                        )
                                                    ),
                                                    E.default.createElement(
                                                        c.default,
                                                        { xs: 24, sm: 16, md: 12, lg: 8 },
                                                        E.default.createElement(
                                                            y.default.Item,
                                                            (0, s.default)({ hasFeedback: !0 }, I, {
                                                                label: 'Lugar',
                                                            }),
                                                            m('place', {
                                                                initialValue: u.place || 'Sicuani',
                                                            })(
                                                                E.default.createElement(f.default, {
                                                                    placeholder: 'Lugar',
                                                                    disabled: _,
                                                                })
                                                            )
                                                        )
                                                    ),
                                                    E.default.createElement(
                                                        c.default,
                                                        { xs: 24, sm: 16, md: 12, lg: 8 },
                                                        E.default.createElement(
                                                            y.default.Item,
                                                            (0, s.default)({ hasFeedback: !0 }, I, {
                                                                label: 'Destino',
                                                            }),
                                                            m('destination', {
                                                                initialValue: u.destination,
                                                                rules: [
                                                                    {
                                                                        required: !0,
                                                                        message:
                                                                            '\xa1Por favor ingrese un destino!',
                                                                    },
                                                                ],
                                                            })(
                                                                E.default.createElement(f.default, {
                                                                    placeholder: 'Destino',
                                                                    disabled: _,
                                                                })
                                                            )
                                                        )
                                                    ),
                                                    E.default.createElement(
                                                        c.default,
                                                        { xs: 24, sm: 16, md: 12, lg: 8 },
                                                        E.default.createElement(
                                                            y.default.Item,
                                                            (0, s.default)({ hasFeedback: !0 }, I, {
                                                                label: 'Solicitante',
                                                            }),
                                                            m('claimant', {
                                                                initialValue: u.claimant,
                                                                rules: [
                                                                    {
                                                                        required: !0,
                                                                        message:
                                                                            '\xa1Por favor ingrese un solicitante!',
                                                                    },
                                                                ],
                                                            })(
                                                                E.default.createElement(f.default, {
                                                                    placeholder: 'Solicitante',
                                                                    disabled: _,
                                                                })
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            E.default.createElement(
                                                'div',
                                                { className: q.default.operations },
                                                E.default.createElement(
                                                    d.default.Group,
                                                    null,
                                                    E.default.createElement(
                                                        d.default,
                                                        {
                                                            disabled: _,
                                                            type: 'primary',
                                                            icon: 'plus',
                                                            onClick: function() {
                                                                return S('create');
                                                            },
                                                        },
                                                        'Agregar'
                                                    ),
                                                    E.default.createElement(
                                                        d.default,
                                                        {
                                                            disabled: _,
                                                            type: 'danger',
                                                            icon: 'delete',
                                                            onClick: function() {
                                                                return P();
                                                            },
                                                        },
                                                        'Limpiar'
                                                    )
                                                ),
                                                E.default.createElement(C.default, null)
                                            ),
                                            E.default.createElement(x.default, null),
                                            E.default.createElement(k.default, N)
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(E.default.Component)
                ),
                _ = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, m.default)(this, t),
                            (a = (0, h.default)(this, (0, v.default)(t).call(this, e))),
                            (a.handleConfirm = a.handleConfirm.bind(
                                (0, u.default)((0, u.default)(a))
                            )),
                            (a.handleCancel = a.handleCancel.bind(
                                (0, u.default)((0, u.default)(a))
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
                                        l = t.requirement.currentItem,
                                        n = this.formRef.props.form;
                                    n.validateFields(function(t, u) {
                                        t ||
                                            (a({
                                                type: 'requirement/'.concat(e),
                                                payload: (0, r.default)({}, u, { id: l.id }),
                                            }),
                                            n.resetFields(),
                                            a({ type: 'requirement/resetRequirement' }),
                                            a({ type: 'require/clearList' }));
                                    });
                                },
                            },
                            {
                                key: 'handleCancel',
                                value: function() {
                                    var e = this.props.dispatch,
                                        t = this.formRef.props.form;
                                    e({ type: 'require/clearList' }), t.resetFields();
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.dispatch,
                                        l = t.requirement,
                                        n = t.require,
                                        r = t.loading,
                                        u = t.loadingRequire,
                                        i = l.currentItem,
                                        d = l.modalType,
                                        o = l.modalVisible,
                                        c = this.handleConfirm,
                                        f = this.handleCancel,
                                        m = {
                                            data: 'create' == d ? {} : i,
                                            disabled: 'detail' == d,
                                            type: d,
                                            visible: o,
                                            confirmLoading: r,
                                            onOk: function() {
                                                c(d);
                                            },
                                            onCancel: function() {
                                                a({ type: 'requirement/resetRequirement' }), f();
                                            },
                                        };
                                    return E.default.createElement(
                                        w,
                                        (0, s.default)({}, m, {
                                            dispatch: a,
                                            require: n,
                                            requirement: l,
                                            loadingRequire: u,
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
                })(E.Component),
                R = function(e) {
                    var t = e.requirement,
                        a = e.require,
                        l = e.loading;
                    return {
                        requirement: t,
                        require: a,
                        loadingRequire: l.effects['require/byRequirement'],
                        loading: l.effects['requirement/create'] || l.effects['requirement/update'],
                    };
                },
                N = (0, b.connect)(R)(_);
            t.default = N;
        },
        CDtB: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('DjyN');
            var r = n(a('NUBc'));
            a('fOrg');
            var u = n(a('+KLJ'));
            a('2qtc');
            var i = n(a('kLXV'));
            a('5Dmo');
            var d = n(a('3S7+'));
            a('Pwec');
            var o = n(a('CtXQ'));
            a('Awhp');
            var c = n(a('KrTs')),
                s = n(a('lwsE')),
                f = n(a('W8MJ')),
                m = n(a('a1gu')),
                p = n(a('Nsbk')),
                h = n(a('7W2i')),
                v = n(a('PJYZ')),
                g = l(a('q1tI')),
                y = a('7DNP'),
                E = (n(a('17x9')), n(a('CkN6'))),
                q = n(a('rk3I')),
                b = n(a('wd/R')),
                k = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, s.default)(this, t),
                            (a = (0, m.default)(this, (0, p.default)(t).call(this, e))),
                            (a.state = { sortedInfo: null, filteredInfo: null }),
                            (a.onChange = a.onChange.bind((0, v.default)((0, v.default)(a)))),
                            (a.clearAllFilters = a.clearAllFilters.bind(
                                (0, v.default)((0, v.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, h.default)(t, e),
                        (0, f.default)(t, [
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
                                        s = l.onShowModalEdit,
                                        f = l.onShowPrinter,
                                        m = l.onDelete,
                                        p = l.dataSource,
                                        h = l.loadingAll,
                                        v = l.total,
                                        k = l.pageSize,
                                        C = l.current,
                                        x = [
                                            {
                                                title: 'Nombre',
                                                dataIndex: 'name',
                                                key: 'name',
                                                sorter: function(e, t) {
                                                    return e.name.length - t.name.length;
                                                },
                                                sortOrder: 'name' === t.columnKey && t.order,
                                            },
                                            { title: 'Lugar', dataIndex: 'place', key: 'place' },
                                            {
                                                title: 'Destino',
                                                dataIndex: 'destination',
                                                key: 'destination',
                                            },
                                            {
                                                title: 'Solicitante',
                                                dataIndex: 'claimant',
                                                key: 'claimant',
                                            },
                                            {
                                                title: 'Fecha Emicion',
                                                key: 'emission_date',
                                                dataIndex: 'emission_date',
                                                render: function(e, t) {
                                                    return g.default.createElement(
                                                        'span',
                                                        null,
                                                        (0, b.default)(e.emission_date).format(
                                                            'DD MMMM YYYY'
                                                        )
                                                    );
                                                },
                                            },
                                            {
                                                title: 'Estado',
                                                key: 'state',
                                                filters: [
                                                    { text: 'Revisar', value: '0' },
                                                    { text: 'Proceso', value: '1' },
                                                    { text: 'Rechazado', value: '2' },
                                                    { text: 'Aceptado', value: '3' },
                                                    { text: 'Expirado', value: '4' },
                                                    { text: 'Cerrado', value: '5' },
                                                ],
                                                filteredValue: a.state || null,
                                                onFilter: function(e, t) {
                                                    return t.state.includes(e);
                                                },
                                                render: function(e, t) {
                                                    switch (e.state) {
                                                        case '0':
                                                            return g.default.createElement(
                                                                'span',
                                                                { className: q.default.check },
                                                                g.default.createElement(c.default, {
                                                                    status: 'warning',
                                                                }),
                                                                ' Revisar'
                                                            );
                                                        case '1':
                                                            return g.default.createElement(
                                                                'span',
                                                                { className: q.default.process },
                                                                g.default.createElement(c.default, {
                                                                    status: 'processing',
                                                                }),
                                                                ' Proceso'
                                                            );
                                                        case '2':
                                                            return g.default.createElement(
                                                                'span',
                                                                { className: q.default.rejected },
                                                                g.default.createElement(c.default, {
                                                                    status: 'error',
                                                                }),
                                                                ' Rechazado'
                                                            );
                                                        case '3':
                                                            return g.default.createElement(
                                                                'span',
                                                                { className: q.default.accepted },
                                                                g.default.createElement(c.default, {
                                                                    status: 'success',
                                                                }),
                                                                ' Aprobado'
                                                            );
                                                        case '4':
                                                            return g.default.createElement(
                                                                'span',
                                                                { className: q.default.close },
                                                                g.default.createElement(c.default, {
                                                                    status: 'default',
                                                                }),
                                                                ' Cerrado'
                                                            );
                                                        default:
                                                            break;
                                                    }
                                                },
                                            },
                                            {
                                                title: 'Accion',
                                                key: 'accion',
                                                width: '140px',
                                                render: function(e, t) {
                                                    return g.default.createElement(
                                                        'div',
                                                        { className: q.default.actions },
                                                        '0' === e.state &&
                                                            g.default.createElement(
                                                                d.default,
                                                                { title: 'Editar' },
                                                                g.default.createElement(o.default, {
                                                                    type: 'edit',
                                                                    className: q.default.update,
                                                                    onClick: function() {
                                                                        return s('update', e);
                                                                    },
                                                                })
                                                            ),
                                                        '0' !== e.state &&
                                                            g.default.createElement(
                                                                d.default,
                                                                { title: 'Ver' },
                                                                g.default.createElement(o.default, {
                                                                    type: 'eye-o',
                                                                    className: q.default.update,
                                                                    onClick: function() {
                                                                        return s('detail', e);
                                                                    },
                                                                })
                                                            ),
                                                        g.default.createElement(
                                                            d.default,
                                                            { title: 'Imprimir' },
                                                            g.default.createElement(o.default, {
                                                                type: 'printer',
                                                                className: q.default.printer,
                                                                onClick: function() {
                                                                    return f(e);
                                                                },
                                                            })
                                                        ),
                                                        g.default.createElement(
                                                            d.default,
                                                            { title: 'Cotizar' },
                                                            g.default.createElement(
                                                                y.Link,
                                                                { to: '/quotations/'.concat(e.id) },
                                                                g.default.createElement(o.default, {
                                                                    type: 'calculator',
                                                                    className: q.default.quote,
                                                                })
                                                            )
                                                        ),
                                                        g.default.createElement(
                                                            d.default,
                                                            { title: 'Eliminar' },
                                                            g.default.createElement(o.default, {
                                                                type: 'delete',
                                                                className: q.default.delete,
                                                                onClick: function() {
                                                                    i.default.confirm({
                                                                        title:
                                                                            '\xbfEst\xe1s seguro de eliminar este registro?',
                                                                        content: e.name,
                                                                        okText: 'SI',
                                                                        okType: 'danger',
                                                                        cancelText: 'NO',
                                                                        onOk: function() {
                                                                            m({ id: e.id });
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
                                            { className: q.default.table },
                                            g.default.createElement(
                                                'div',
                                                { className: q.default.tableAlert },
                                                g.default.createElement(u.default, {
                                                    message: g.default.createElement(
                                                        g.Fragment,
                                                        null,
                                                        g.default.createElement(
                                                            'span',
                                                            null,
                                                            ''.concat(v, ' Requerimientos')
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
                                            g.default.createElement(E.default, {
                                                columns: x,
                                                dataSource: p,
                                                loading: h,
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
                                            total: v,
                                            pageSize: k,
                                            defaultCurrent: 1,
                                            current: C,
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
                C = k;
            t.default = C;
        },
        KnKK: function(e, t, a) {},
        MiTS: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('IzEo');
            var r = n(a('bx4M'));
            a('+L6B');
            var u = n(a('2/Rp')),
                i = n(a('lwsE')),
                d = n(a('W8MJ')),
                o = n(a('a1gu')),
                c = n(a('Nsbk')),
                s = n(a('7W2i')),
                f = n(a('PJYZ'));
            a('5NDa');
            var m = n(a('5rEg')),
                p = l(a('q1tI')),
                h = a('MuoO'),
                v = n(a('zHco')),
                g = n(a('wIe2')),
                y = n(a('CDtB')),
                E = n(a('Ovt4')),
                q = n(a('wqf9')),
                b = n(a('BY8K')),
                k = n(a('1tp+')),
                C = m.default.Search,
                x = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, i.default)(this, t),
                            (a = (0, o.default)(this, (0, c.default)(t).call(this, e))),
                            (a.state = { visibleExport: !1 }),
                            (a.onQueryAll = a.onQueryAll.bind((0, f.default)((0, f.default)(a)))),
                            (a.handleToggleExport = a.handleToggleExport.bind(
                                (0, f.default)((0, f.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, s.default)(t, e),
                        (0, d.default)(t, [
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
                                        l = t.requirement.searchText;
                                    a({ type: 'requirement/all', payload: { search: e ? '' : l } });
                                },
                            },
                            {
                                key: 'handleToggleExport',
                                value: function(e) {
                                    this.setState({ visibleExport: e });
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.dispatch,
                                        l = t.setting,
                                        n = t.requirement,
                                        i = t.loadingAll,
                                        d = this.onQueryAll,
                                        o = n.list,
                                        c = n.total,
                                        s = n.current,
                                        f = n.searchText,
                                        m = {
                                            current: s,
                                            total: c,
                                            pageSize: l.item,
                                            dataSource: o,
                                            loadingAll: i,
                                            onPageChange: function(e) {
                                                a({
                                                    type: 'requirement/all',
                                                    payload: { current_page: e, search: f },
                                                });
                                            },
                                            onDelete: function(e) {
                                                a({ type: 'requirement/delete', payload: e });
                                            },
                                            onClear: function() {
                                                a({
                                                    type: 'requirement/setSearchText',
                                                    payload: '',
                                                }),
                                                    d(!0);
                                            },
                                            onUpdate: function(e) {
                                                a({ type: 'requirement/update', payload: e });
                                            },
                                            onShowModalEdit: function(e, t) {
                                                a({
                                                    type: 'require/byRequirement',
                                                    payload: { requirement_id: t.id },
                                                }),
                                                    h(e, t);
                                            },
                                            onShowPrinter: function(e) {
                                                a({
                                                    type: 'requirement/loadDataPrinter',
                                                    payload: e,
                                                }),
                                                    a({ type: 'requirement/showPrinterSC' });
                                            },
                                        },
                                        h = function(e) {
                                            var t =
                                                arguments.length > 1 && void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : {};
                                            a({
                                                type: 'requirement/showModal',
                                                payload: { currentItem: t, modalType: e },
                                            }),
                                                a({
                                                    type: 'require/all',
                                                    payload: { requirement_id: t.id },
                                                });
                                        },
                                        x = function(e) {
                                            a({ type: 'requirement/setSearchText', payload: e });
                                        },
                                        I = function() {
                                            a({ type: 'requirement/showPrinterRQ' }),
                                                a({ type: 'requirement/loadDataRQ' });
                                        };
                                    return p.default.createElement(
                                        v.default,
                                        { title: 'Requerimientos' },
                                        p.default.createElement(
                                            r.default,
                                            { bordered: !1 },
                                            p.default.createElement(
                                                'div',
                                                { className: g.default.header },
                                                p.default.createElement(
                                                    u.default,
                                                    {
                                                        icon: 'plus',
                                                        type: 'primary',
                                                        onClick: function() {
                                                            return h('create');
                                                        },
                                                    },
                                                    'Nuevo requerieminto'
                                                ),
                                                p.default.createElement(b.default, null),
                                                p.default.createElement(
                                                    u.default,
                                                    {
                                                        icon: 'export',
                                                        onClick: function() {
                                                            return e.handleToggleExport(!0);
                                                        },
                                                    },
                                                    'Exportar'
                                                ),
                                                p.default.createElement(E.default, {
                                                    visible: this.state.visibleExport,
                                                    onCancel: function() {
                                                        return e.handleToggleExport(!1);
                                                    },
                                                }),
                                                p.default.createElement(
                                                    u.default,
                                                    {
                                                        icon: 'printer',
                                                        onClick: function() {
                                                            return I();
                                                        },
                                                    },
                                                    'Imprimir plantilla'
                                                ),
                                                p.default.createElement(k.default, null),
                                                p.default.createElement(
                                                    u.default,
                                                    {
                                                        icon: 'reload',
                                                        onClick: function() {
                                                            return e.onQueryAll();
                                                        },
                                                    },
                                                    'Actualizar'
                                                ),
                                                p.default.createElement(C, {
                                                    placeholder: 'Buscar requerimiento',
                                                    value: f,
                                                    onChange: function(e) {
                                                        return x(e.target.value);
                                                    },
                                                    onSearch: function(t) {
                                                        return e.onQueryAll();
                                                    },
                                                    style: { width: 200 },
                                                }),
                                                p.default.createElement(q.default, null)
                                            ),
                                            p.default.createElement(y.default, m)
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(p.Component),
                I = function(e) {
                    var t = e.requirement,
                        a = e.global,
                        l = e.loading;
                    return {
                        requirement: t,
                        setting: a.setting,
                        loadingAll: l.effects['requirement/all'],
                    };
                },
                w = (0, h.connect)(I)(x);
            t.default = w;
        },
        Ovt4: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('2qtc');
            var r = n(a('kLXV')),
                u = n(a('lwsE')),
                i = n(a('W8MJ')),
                d = n(a('a1gu')),
                o = n(a('Nsbk')),
                c = n(a('7W2i')),
                s = n(a('PJYZ'));
            a('+L6B');
            var f = n(a('2/Rp')),
                m = l(a('q1tI')),
                p = n(a('oDxf')),
                h = n(a('iQbp')),
                v = a('MuoO'),
                g = function(e) {
                    var t = e.data;
                    return m.default.createElement(
                        h.default,
                        {
                            filename: 'requeriemiento.xlsx',
                            element: m.default.createElement(
                                f.default,
                                { type: 'primary' },
                                'Requerimientos'
                            ),
                        },
                        m.default.createElement(
                            h.default.Sheet,
                            { data: t, name: 'SRequerimiento' },
                            m.default.createElement(h.default.Column, {
                                label: 'Nombre',
                                value: 'name',
                            }),
                            m.default.createElement(h.default.Column, {
                                label: 'Lugar',
                                value: 'place',
                            }),
                            m.default.createElement(h.default.Column, {
                                label: 'Destino',
                                value: 'destination',
                            }),
                            m.default.createElement(h.default.Column, {
                                label: 'Fecha emici\xf3n',
                                value: 'emission_date',
                            }),
                            m.default.createElement(h.default.Column, {
                                label: 'Estado',
                                value: 'state',
                            })
                        )
                    );
                },
                y = function(e) {
                    var t = e.dispatch;
                    return m.default.createElement(
                        f.default,
                        {
                            type: 'primary',
                            onClick: function() {
                                t({ type: 'dowloand/requirementAll' });
                            },
                        },
                        'Todo Los Requerimientos'
                    );
                },
                E = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, u.default)(this, t),
                            (a = (0, d.default)(this, (0, o.default)(t).call(this, e))),
                            (a.state = { dataVisible: !1, dataAll: !1 }),
                            (a.handleDataVisible = a.handleDataVisible.bind(
                                (0, s.default)((0, s.default)(a))
                            )),
                            (a.handleDataAll = a.handleDataAll.bind(
                                (0, s.default)((0, s.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, c.default)(t, e),
                        (0, i.default)(t, [
                            {
                                key: 'handleDataVisible',
                                value: function(e) {
                                    this.setState({ dataVisible: e.target.checked });
                                },
                            },
                            {
                                key: 'handleDataAll',
                                value: function(e) {
                                    this.setState({ dataAll: e.target.checked });
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props,
                                        t = e.onCancel,
                                        a = e.visible,
                                        l = e.requirement,
                                        n = e.dispatch;
                                    return m.default.createElement(
                                        r.default,
                                        {
                                            title: 'Exportar requerimientos',
                                            onCancel: t,
                                            footer: null,
                                            visible: a,
                                        },
                                        m.default.createElement(g, { data: l.list }),
                                        m.default.createElement(p.default, null),
                                        m.default.createElement(y, { dispatch: n })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(m.Component),
                q = function(e) {
                    var t = e.dowloand,
                        a = e.requirement;
                    return { dowloand: t, requirement: a };
                },
                b = (0, v.connect)(q)(E);
            t.default = b;
        },
        YYmh: function(e, t, a) {
            e.exports = {
                search: 'sn-\\pages\\-requirement\\-form\\-form-add-product\\index-search',
                item: 'sn-\\pages\\-requirement\\-form\\-form-add-product\\index-item',
                hidden: 'sn-\\pages\\-requirement\\-form\\-form-add-product\\index-hidden',
            };
        },
        YorV: function(e, t, a) {
            e.exports = {
                table: 'sn-\\pages\\-requirement\\-form\\-list\\index-table',
                tableAlert: 'sn-\\pages\\-requirement\\-form\\-list\\index-tableAlert',
                actions: 'sn-\\pages\\-requirement\\-form\\-list\\index-actions',
                delete: 'sn-\\pages\\-requirement\\-form\\-list\\index-delete',
                update: 'sn-\\pages\\-requirement\\-form\\-list\\index-update',
            };
        },
        gCjn: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
            var r = n(a('MVZn')),
                u = n(a('PJYZ'));
            a('2qtc');
            var i = n(a('kLXV'));
            a('5NDa');
            var d = n(a('5rEg'));
            a('giR+');
            var o = n(a('fyUT')),
                c = n(a('pVnL'));
            a('+L6B');
            var s = n(a('2/Rp')),
                f = n(a('lwsE')),
                m = n(a('W8MJ')),
                p = n(a('a1gu')),
                h = n(a('Nsbk')),
                v = n(a('7W2i'));
            a('y8nQ');
            var g = n(a('Vl3Y'));
            a('O3gP');
            var y = n(a('lrIw')),
                E = l(a('q1tI')),
                q = a('MuoO'),
                b = n(a('lB8x')),
                k = n(a('YYmh')),
                C = { labelCol: { span: 8 }, wrapperCol: { span: 12 } },
                x = y.default.Option,
                I = g.default.create()(
                    (function(e) {
                        function t(e) {
                            return (
                                (0, f.default)(this, t),
                                (0, p.default)(this, (0, h.default)(t).call(this, e))
                            );
                        }
                        return (
                            (0, v.default)(t, e),
                            (0, m.default)(t, [
                                {
                                    key: 'handleChangeSelectProduct',
                                    value: function(e, t) {
                                        this.props.form.setFieldsValue({
                                            product_name: t,
                                            product_id: e,
                                        });
                                        var a = this.props.product.searchResult.find(function(t) {
                                            return t.id == e;
                                        });
                                        this.props.form.setFieldsValue({
                                            unit_measure: a.unit_measure,
                                        });
                                    },
                                },
                                {
                                    key: 'render',
                                    value: function() {
                                        var e = this,
                                            t = this.props,
                                            a = t.visible,
                                            l = t.onCancel,
                                            n = t.onOk,
                                            r = t.form,
                                            u = t.data,
                                            f = void 0 === u ? {} : u,
                                            m = r.getFieldDecorator,
                                            p = this.props,
                                            h = p.dispatch,
                                            v = p.product,
                                            q = (p.loading,
                                            function() {
                                                h({
                                                    type: 'product/showModal',
                                                    payload: { modalType: 'create' },
                                                });
                                            }),
                                            I = v.searchResult,
                                            w = function(e) {
                                                h({
                                                    type: 'product/search',
                                                    payload: { search: e },
                                                });
                                            },
                                            _ = function(t, a) {
                                                e.handleChangeSelectProduct(t, a.props.children);
                                            },
                                            R = I.map(function(e) {
                                                return E.default.createElement(
                                                    x,
                                                    { key: e.id },
                                                    e.name
                                                );
                                            });
                                        return E.default.createElement(
                                            i.default,
                                            {
                                                visible: a,
                                                title: 'Requerimeinto producto',
                                                okText: 'Guardar',
                                                cancelText: 'Cerrar',
                                                onCancel: l,
                                                onOk: n,
                                            },
                                            E.default.createElement(
                                                g.default,
                                                { layout: 'horizontal' },
                                                E.default.createElement(
                                                    g.default.Item,
                                                    (0, c.default)({ hasFeedback: !0 }, C, {
                                                        label: 'Producto',
                                                    }),
                                                    E.default.createElement(
                                                        'div',
                                                        { className: k.default.search },
                                                        E.default.createElement(
                                                            'div',
                                                            { className: k.default.item },
                                                            m('product_name_aux', {
                                                                initialValue: f.product_name,
                                                                rules: [
                                                                    {
                                                                        required: !0,
                                                                        message:
                                                                            '\xa1Por favor elija un producto!',
                                                                    },
                                                                ],
                                                            })(
                                                                E.default.createElement(y.default, {
                                                                    dataSource: R,
                                                                    onSelect: _,
                                                                    onSearch: w,
                                                                    placeholder: 'Buscar producto',
                                                                })
                                                            )
                                                        ),
                                                        E.default.createElement(
                                                            'div',
                                                            { className: k.default.more },
                                                            E.default.createElement(s.default, {
                                                                icon: 'plus',
                                                                onClick: function() {
                                                                    return q();
                                                                },
                                                            }),
                                                            E.default.createElement(b.default, null)
                                                        )
                                                    )
                                                ),
                                                E.default.createElement(
                                                    g.default.Item,
                                                    { className: k.default.hidden },
                                                    m('product_id', { initialValue: f.product_id })(
                                                        E.default.createElement(o.default, null)
                                                    )
                                                ),
                                                E.default.createElement(
                                                    g.default.Item,
                                                    { className: k.default.hidden },
                                                    m('product_name', {
                                                        initialValue: f.product_name,
                                                    })(E.default.createElement(d.default, null))
                                                ),
                                                E.default.createElement(
                                                    g.default.Item,
                                                    (0, c.default)({ hasFeedback: !0 }, C, {
                                                        label: 'Cantidad',
                                                    }),
                                                    m('amount', {
                                                        initialValue: f.amount,
                                                        rules: [
                                                            {
                                                                required: !0,
                                                                message:
                                                                    '\xa1Por favor ingrese una cantidad!',
                                                            },
                                                            {
                                                                pattern: /^([0-9]*|\d*\.\d{1}?\d*)$/,
                                                                message:
                                                                    '\xa1Ingrese un cantidad v\xe1lido!',
                                                            },
                                                        ],
                                                    })(E.default.createElement(o.default, null))
                                                ),
                                                E.default.createElement(
                                                    g.default.Item,
                                                    (0, c.default)({ hasFeedback: !0 }, C, {
                                                        label: 'Unidad de medida',
                                                    }),
                                                    m('unit_measure', {
                                                        initialValue: f.unit_measure,
                                                        rules: [
                                                            {
                                                                required: !0,
                                                                message:
                                                                    '\xa1Por favor ingrese un destino!',
                                                            },
                                                        ],
                                                    })(E.default.createElement(d.default, null))
                                                ),
                                                E.default.createElement(
                                                    g.default.Item,
                                                    (0, c.default)({ hasFeedback: !0 }, C, {
                                                        label: 'Precio sugerido',
                                                    }),
                                                    m('suggested_price', {
                                                        initialValue: f.suggested_price,
                                                        rules: [
                                                            {
                                                                pattern: /^([0-9]*|\d*\.\d{1}?\d*)$/,
                                                                message:
                                                                    '\xa1Ingrese un precio v\xe1lido!',
                                                            },
                                                        ],
                                                    })(E.default.createElement(o.default, null))
                                                ),
                                                E.default.createElement(
                                                    g.default.Item,
                                                    (0, c.default)({ hasFeedback: !0 }, C, {
                                                        label: 'Observaci\xf3n',
                                                    }),
                                                    m('observation', {
                                                        initialValue: f.observation,
                                                    })(
                                                        E.default.createElement(
                                                            d.default.TextArea,
                                                            null
                                                        )
                                                    )
                                                )
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(E.default.Component)
                ),
                w = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, f.default)(this, t),
                            (a = (0, p.default)(this, (0, h.default)(t).call(this, e))),
                            (a.state = {}),
                            (a.handleConfirm = a.handleConfirm.bind(
                                (0, u.default)((0, u.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, v.default)(t, e),
                        (0, m.default)(t, [
                            {
                                key: 'handleConfirm',
                                value: function(e) {
                                    var t = this.props,
                                        a = t.dispatch,
                                        l = t.require.currentItem,
                                        n = t.requirement,
                                        u = this.formRef.props.form;
                                    u.validateFields(function(t, i) {
                                        t ||
                                            ((i = (0, r.default)({}, i, {
                                                product_id: parseInt(i.product_id),
                                                product_name_aux: void 0,
                                            })),
                                            'create' == e
                                                ? a({
                                                      type: 'require/addList',
                                                      payload: (0, r.default)({}, i, { id: l.id }),
                                                  })
                                                : 'update' == e &&
                                                  ('update' === n.modalType &&
                                                      a({
                                                          type: 'require/updateItemByID',
                                                          payload: (0, r.default)({}, i, {
                                                              id: l.id,
                                                          }),
                                                      }),
                                                  'create' === n.modalType &&
                                                      a({
                                                          type: 'require/updateItemByProductID',
                                                          payload: (0, r.default)({}, i, {
                                                              product_id: l.product_id,
                                                          }),
                                                      }),
                                                  a({ type: 'require/resetRequire' })),
                                            u.resetFields());
                                    });
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.product,
                                        l = t.require,
                                        n = t.dispatch,
                                        r = l.currentItem,
                                        u = l.modalType,
                                        i = l.modalVisible,
                                        d = this.handleConfirm,
                                        o = {
                                            data: 'create' == u ? {} : r,
                                            type: u,
                                            visible: i,
                                            onOk: function() {
                                                d(u);
                                            },
                                            onCancel: function() {
                                                n({ type: 'require/resetRequire' });
                                            },
                                        };
                                    return E.default.createElement(
                                        'div',
                                        null,
                                        E.default.createElement(
                                            I,
                                            (0, c.default)(
                                                {
                                                    wrappedComponentRef: function(t) {
                                                        return (e.formRef = t);
                                                    },
                                                },
                                                o,
                                                { dispatch: n, product: a }
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(E.default.Component),
                _ = function(e) {
                    var t = e.product,
                        a = e.require,
                        l = e.requirement,
                        n = e.loading;
                    return { product: t, require: a, requirement: l, loading: n.effects };
                },
                R = (0, q.connect)(_)(w);
            t.default = R;
        },
        rk3I: function(e, t, a) {
            e.exports = {
                table: 'sn-\\pages\\-requirement\\-list\\index-table',
                tableAlert: 'sn-\\pages\\-requirement\\-list\\index-tableAlert',
                actions: 'sn-\\pages\\-requirement\\-list\\index-actions',
                delete: 'sn-\\pages\\-requirement\\-list\\index-delete',
                duplicate: 'sn-\\pages\\-requirement\\-list\\index-duplicate',
                printer: 'sn-\\pages\\-requirement\\-list\\index-printer',
                quote: 'sn-\\pages\\-requirement\\-list\\index-quote',
                update: 'sn-\\pages\\-requirement\\-list\\index-update',
                check: 'sn-\\pages\\-requirement\\-list\\index-check',
                process: 'sn-\\pages\\-requirement\\-list\\index-process',
                rejected: 'sn-\\pages\\-requirement\\-list\\index-rejected',
                accepted: 'sn-\\pages\\-requirement\\-list\\index-accepted',
                expired: 'sn-\\pages\\-requirement\\-list\\index-expired',
                close: 'sn-\\pages\\-requirement\\-list\\index-close',
            };
        },
        wIe2: function(e, t, a) {
            e.exports = { header: 'sn-\\pages\\-requirement\\index-header' };
        },
        wqf9: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('2qtc');
            var r = n(a('kLXV')),
                u = n(a('lwsE')),
                i = n(a('W8MJ')),
                d = n(a('a1gu')),
                o = n(a('Nsbk')),
                c = n(a('7W2i')),
                s = l(a('q1tI')),
                f = a('MuoO'),
                m = (function(e) {
                    function t(e) {
                        return (
                            (0, u.default)(this, t),
                            (0, d.default)(this, (0, o.default)(t).call(this, e))
                        );
                    }
                    return (
                        (0, c.default)(t, e),
                        (0, i.default)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props,
                                        t = e.requirement,
                                        a = e.dispatch,
                                        l = function() {
                                            a({ type: 'requirement/hidePrinterSC' });
                                        };
                                    return s.default.createElement(
                                        r.default,
                                        {
                                            title: 'Solicitud de cotizaci\xf3n',
                                            onCancel: l,
                                            style: { top: 20 },
                                            width: '95vw',
                                            footer: null,
                                            bodyStyle: { padding: 0 },
                                            visible: t.scVisible,
                                        },
                                        s.default.createElement('iframe', {
                                            src: t.docSCDataUrl,
                                            height: '600px',
                                            width: '100%',
                                        })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(s.Component),
                p = function(e) {
                    var t = e.requirement;
                    return { requirement: t };
                },
                h = (0, f.connect)(p)(m);
            t.default = h;
        },
    },
]);
