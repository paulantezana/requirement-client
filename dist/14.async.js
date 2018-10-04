(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [14],
    {
        '4OMY': function(e, t, a) {
            e.exports = {
                editing: 'sn\\pages\\-quotation\\-form\\-quotation-detail\\index-editing',
            };
        },
        BRgM: function(e, t, a) {},
        EBKi: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
            var r = l(a('MVZn')),
                i = l(a('PJYZ'));
            a('2qtc');
            var u = l(a('kLXV'));
            a('sRBo');
            var d = l(a('kaz8')),
                o = l(a('pVnL'));
            a('5NDa');
            var c = l(a('5rEg')),
                f = l(a('lwsE')),
                s = l(a('W8MJ')),
                m = l(a('a1gu')),
                p = l(a('Nsbk')),
                v = l(a('7W2i'));
            a('y8nQ');
            var h = l(a('Vl3Y')),
                E = n(a('q1tI')),
                g = a('MuoO'),
                y = { labelCol: { span: 8 }, wrapperCol: { span: 12 } },
                C = h.default.create()(
                    (function(e) {
                        function t(e) {
                            var a;
                            return (
                                (0, f.default)(this, t),
                                (a = (0, m.default)(this, (0, p.default)(t).call(this, e))),
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
                                            n = e.onOk,
                                            l = e.form,
                                            r = e.confirmLoading,
                                            i = e.data,
                                            f = l.getFieldDecorator;
                                        return E.default.createElement(
                                            u.default,
                                            {
                                                title: 'Proveedor',
                                                okText: 'Guardar',
                                                confirmLoading: r,
                                                onCancel: a,
                                                onOk: n,
                                                visible: t,
                                            },
                                            E.default.createElement(
                                                h.default,
                                                { layout: 'horizontal' },
                                                E.default.createElement(
                                                    h.default.Item,
                                                    (0, o.default)({ hasFeedback: !0 }, y, {
                                                        label: 'RUC',
                                                    }),
                                                    f('ruc', {
                                                        initialValue: i.ruc,
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
                                                        E.default.createElement(c.default, {
                                                            placeholder: 'RUC',
                                                        })
                                                    )
                                                ),
                                                E.default.createElement(
                                                    h.default.Item,
                                                    (0, o.default)({ hasFeedback: !0 }, y, {
                                                        label: 'Nombre o raz\xf3n social',
                                                    }),
                                                    f('name', {
                                                        initialValue: i.name,
                                                        rules: [
                                                            {
                                                                required: !0,
                                                                message:
                                                                    '\xa1Por favor un Nombre o raz\xf3n social!',
                                                            },
                                                        ],
                                                    })(
                                                        E.default.createElement(c.default, {
                                                            placeholder: 'Nombre o raz\xf3n social',
                                                        })
                                                    )
                                                ),
                                                E.default.createElement(
                                                    h.default.Item,
                                                    (0, o.default)({ hasFeedback: !0 }, y, {
                                                        label: 'Representante',
                                                    }),
                                                    f('manager', { initialValue: i.manager })(
                                                        E.default.createElement(c.default, {
                                                            placeholder: 'Representante',
                                                        })
                                                    )
                                                ),
                                                E.default.createElement(
                                                    h.default.Item,
                                                    (0, o.default)({ hasFeedback: !0 }, y, {
                                                        label: 'Email',
                                                    }),
                                                    f('email', {
                                                        initialValue: i.email,
                                                        rules: [
                                                            {
                                                                type: 'email',
                                                                message:
                                                                    '\xa1Ingrese un correo valido!',
                                                            },
                                                        ],
                                                    })(
                                                        E.default.createElement(c.default, {
                                                            placeholder: 'Email',
                                                        })
                                                    )
                                                ),
                                                E.default.createElement(
                                                    h.default.Item,
                                                    (0, o.default)({ hasFeedback: !0 }, y, {
                                                        label: 'Telefono',
                                                    }),
                                                    f('phone', {
                                                        initialValue: i.phone,
                                                        rules: [
                                                            {
                                                                pattern: /^[0-9]{6,12}$/,
                                                                message:
                                                                    '\xa1Ingrese un telefono v\xe1lido!',
                                                            },
                                                        ],
                                                    })(
                                                        E.default.createElement(c.default, {
                                                            placeholder: 'Telefono',
                                                        })
                                                    )
                                                ),
                                                E.default.createElement(
                                                    h.default.Item,
                                                    (0, o.default)({ hasFeedback: !0 }, y, {
                                                        label: 'Direcci\xf3n',
                                                    }),
                                                    f('address', { initialValue: i.address })(
                                                        E.default.createElement(c.default, {
                                                            placeholder: 'Direcci\xf3n',
                                                        })
                                                    )
                                                ),
                                                E.default.createElement(
                                                    h.default.Item,
                                                    (0, o.default)({ hasFeedback: !0 }, y, {
                                                        label: 'Observaci\xf3n',
                                                    }),
                                                    f('observation', {
                                                        initialValue: i.observation,
                                                    })(
                                                        E.default.createElement(
                                                            c.default.TextArea,
                                                            { placeholder: 'Observaci\xf3n' }
                                                        )
                                                    )
                                                ),
                                                E.default.createElement(
                                                    h.default.Item,
                                                    (0, o.default)({}, y, { label: 'Estado' }),
                                                    f('state', {
                                                        valuePropName: 'checked',
                                                        initialValue: i.state,
                                                    })(E.default.createElement(d.default, null))
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
                b = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, f.default)(this, t),
                            (a = (0, m.default)(this, (0, p.default)(t).call(this, e))),
                            (a.handleConfirm = a.handleConfirm.bind(
                                (0, i.default)((0, i.default)(a))
                            )),
                            (a.handleCancel = a.handleCancel.bind(
                                (0, i.default)((0, i.default)(a))
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
                                        n = t.provider.currentItem,
                                        l = this.formRef.props.form;
                                    l.validateFields(function(t, i) {
                                        t ||
                                            (a({
                                                type: 'provider/'.concat(e),
                                                payload: (0, r.default)({}, i, { id: n.id }),
                                            }),
                                            l.resetFields());
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
                                        n = this.props,
                                        l = n.dispatch,
                                        r = n.provider,
                                        i = n.loading,
                                        u = r.currentItem,
                                        d = r.modalType,
                                        c = r.modalVisible,
                                        f = r.validRuc,
                                        s = {
                                            validRuc: f,
                                            data: 'create' == d ? { state: !0 } : u,
                                            disabled: 'detail' == d,
                                            type: d,
                                            visible: c,
                                            confirmLoading: i,
                                            onOk: function() {
                                                t(d);
                                            },
                                            onCancel: function() {
                                                l({ type: 'provider/resetProvider' }), a();
                                            },
                                        };
                                    return E.default.createElement(
                                        C,
                                        (0, o.default)({}, s, {
                                            dispatch: l,
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
                k = function(e) {
                    var t = e.provider,
                        a = e.loading;
                    return {
                        provider: t,
                        loading: a.effects['provider/create'] || a.effects['provider/update'],
                    };
                },
                q = (0, g.connect)(k)(b);
            t.default = q;
        },
        HWB5: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('+BJd');
            var r = l(a('mr32')),
                i = l(a('lwsE')),
                u = l(a('W8MJ')),
                d = l(a('a1gu')),
                o = l(a('Nsbk')),
                c = l(a('7W2i')),
                f = l(a('PJYZ')),
                s = n(a('q1tI')),
                m = (l(a('17x9')), l(a('CkN6'))),
                p = l(a('BRgM')),
                v = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, i.default)(this, t),
                            (a = (0, d.default)(this, (0, o.default)(t).call(this, e))),
                            (a.state = { sortedInfo: null, filteredInfo: null }),
                            (a.onChange = a.onChange.bind((0, f.default)((0, f.default)(a)))),
                            (a.clearAllFilters = a.clearAllFilters.bind(
                                (0, f.default)((0, f.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, c.default)(t, e),
                        (0, u.default)(t, [
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
                                    var n = this.props,
                                        l = (n.onWinner,
                                        n.requirementItem,
                                        n.onShowModalEdit,
                                        n.onShowModalCTZ,
                                        n.onDelete,
                                        n.dataSource),
                                        i = n.loading,
                                        u = (n.total,
                                        [
                                            {
                                                title: s.default.createElement(
                                                    'div',
                                                    null,
                                                    ' ',
                                                    'ART\xcdCULO',
                                                    s.default.createElement(
                                                        r.default,
                                                        { color: 'blue' },
                                                        '1'
                                                    )
                                                ),
                                                children: [
                                                    {
                                                        title: s.default.createElement(
                                                            'div',
                                                            null,
                                                            'N\xb0',
                                                            s.default.createElement(
                                                                r.default,
                                                                { color: 'green' },
                                                                'A'
                                                            )
                                                        ),
                                                        dataIndex: 'num',
                                                        key: 'num',
                                                        width: '70px',
                                                    },
                                                    {
                                                        title: s.default.createElement(
                                                            'div',
                                                            null,
                                                            'Descripcion',
                                                            s.default.createElement(
                                                                r.default,
                                                                { color: 'green' },
                                                                'B'
                                                            )
                                                        ),
                                                        dataIndex: 'name',
                                                        key: 'name',
                                                    },
                                                    {
                                                        title: s.default.createElement(
                                                            'div',
                                                            null,
                                                            'Cantidad',
                                                            s.default.createElement(
                                                                r.default,
                                                                { color: 'green' },
                                                                'C'
                                                            )
                                                        ),
                                                        dataIndex: 'amount',
                                                        key: 'amount',
                                                    },
                                                    {
                                                        title: s.default.createElement(
                                                            'div',
                                                            null,
                                                            'Unidad de medida',
                                                            s.default.createElement(
                                                                r.default,
                                                                { color: 'green' },
                                                                'D'
                                                            )
                                                        ),
                                                        dataIndex: 'unit_measure',
                                                        key: 'unit_measure',
                                                    },
                                                ],
                                            },
                                            {
                                                title: s.default.createElement(
                                                    'div',
                                                    null,
                                                    'PRECIOS NETOS',
                                                    s.default.createElement(
                                                        r.default,
                                                        { color: 'blue' },
                                                        '2'
                                                    )
                                                ),
                                                children: [
                                                    {
                                                        title: s.default.createElement(
                                                            'div',
                                                            null,
                                                            'Unitario',
                                                            s.default.createElement(
                                                                r.default,
                                                                { color: 'cyan' },
                                                                'A'
                                                            )
                                                        ),
                                                        dataIndex: 'price1',
                                                        key: 'price1',
                                                    },
                                                    {
                                                        title: s.default.createElement(
                                                            'div',
                                                            null,
                                                            'Total ',
                                                            s.default.createElement(
                                                                r.default,
                                                                { color: 'cyan' },
                                                                'B'
                                                            )
                                                        ),
                                                        key: 'total1',
                                                        render: function(e, t) {
                                                            return e.price1
                                                                ? ''.concat(e.price1 * e.amount)
                                                                : '';
                                                        },
                                                    },
                                                    {
                                                        title: s.default.createElement(
                                                            'div',
                                                            null,
                                                            'Unitario',
                                                            s.default.createElement(
                                                                r.default,
                                                                { color: 'gold' },
                                                                'A'
                                                            )
                                                        ),
                                                        dataIndex: 'price2',
                                                        key: 'price2',
                                                    },
                                                    {
                                                        title: s.default.createElement(
                                                            'div',
                                                            null,
                                                            'Total ',
                                                            s.default.createElement(
                                                                r.default,
                                                                { color: 'gold' },
                                                                'B'
                                                            )
                                                        ),
                                                        key: 'total2',
                                                        render: function(e, t) {
                                                            return e.price2
                                                                ? ''.concat(e.price2 * e.amount)
                                                                : '';
                                                        },
                                                    },
                                                    {
                                                        title: s.default.createElement(
                                                            'div',
                                                            null,
                                                            'Unitario',
                                                            s.default.createElement(
                                                                r.default,
                                                                { color: 'red' },
                                                                'A'
                                                            )
                                                        ),
                                                        dataIndex: 'price3',
                                                        key: 'price3',
                                                    },
                                                    {
                                                        title: s.default.createElement(
                                                            'div',
                                                            null,
                                                            'Total ',
                                                            s.default.createElement(
                                                                r.default,
                                                                { color: 'red' },
                                                                'B'
                                                            )
                                                        ),
                                                        key: 'total3',
                                                        render: function(e, t) {
                                                            return e.price3
                                                                ? ''.concat(e.price3 * e.amount)
                                                                : '';
                                                        },
                                                    },
                                                ],
                                            },
                                        ]);
                                    return s.default.createElement(
                                        'div',
                                        { className: p.default.container },
                                        s.default.createElement(
                                            'div',
                                            { className: p.default.header },
                                            s.default.createElement(
                                                'h2',
                                                null,
                                                'CUADRO COMPARATIVO DE COTIZACIONES'
                                            )
                                        ),
                                        s.default.createElement(m.default, {
                                            columns: u,
                                            dataSource: l,
                                            loading: i,
                                            pagination: !1,
                                            onChange: this.onChange,
                                            minWidth: 800,
                                            rowKey: function(e) {
                                                return e.id;
                                            },
                                        })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(s.Component),
                h = v;
            t.default = h;
        },
        M8kI: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('+BJd');
            var r = l(a('mr32')),
                i = l(a('pVnL'));
            a('5Dmo');
            var u = l(a('3S7+'));
            a('Awhp');
            var d = l(a('KrTs'));
            a('giR+');
            var o = l(a('fyUT')),
                c = l(a('MVZn')),
                f = l(a('lwsE')),
                s = l(a('W8MJ')),
                m = l(a('a1gu')),
                p = l(a('Nsbk')),
                v = l(a('7W2i')),
                h = l(a('PJYZ')),
                E = l(a('QILm'));
            a('y8nQ');
            var g = l(a('Vl3Y')),
                y = n(a('q1tI')),
                C = l(a('oDxf')),
                b = l(a('CkN6')),
                k = l(a('4OMY')),
                q = a('MuoO'),
                I = (g.default.Item, y.default.createContext()),
                x = function(e) {
                    var t = e.form,
                        a = (e.index, (0, E.default)(e, ['form', 'index']));
                    return y.default.createElement(
                        I.Provider,
                        { value: t },
                        y.default.createElement('tr', a)
                    );
                },
                w = g.default.create()(x),
                P = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, f.default)(this, t),
                            (a = (0, m.default)(this, (0, p.default)(t).call(this, e))),
                            (a.handleClickOutside = a.handleClickOutside.bind(
                                (0, h.default)((0, h.default)(a))
                            )),
                            (a.save = a.save.bind((0, h.default)((0, h.default)(a)))),
                            a
                        );
                    }
                    return (
                        (0, v.default)(t, e),
                        (0, s.default)(t, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    this.props.editable &&
                                        document.addEventListener(
                                            'click',
                                            this.handleClickOutside,
                                            !0
                                        );
                                },
                            },
                            {
                                key: 'componentWillUnmount',
                                value: function() {
                                    this.props.editable &&
                                        document.removeEventListener(
                                            'click',
                                            this.handleClickOutside,
                                            !0
                                        );
                                },
                            },
                            {
                                key: 'handleClickOutside',
                                value: function(e) {
                                    this.cell === e.target ||
                                        this.cell.contains(e.target) ||
                                        this.save();
                                },
                            },
                            {
                                key: 'save',
                                value: function() {
                                    var e = this.props,
                                        t = e.record,
                                        a = e.handleSave;
                                    this.form.validateFields(function(e, n) {
                                        e || a((0, c.default)({}, t, n));
                                    });
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.editable,
                                        n = t.dataIndex,
                                        l = t.title,
                                        r = t.record,
                                        c = (t.index,
                                        t.handleSave,
                                        (0, E.default)(t, [
                                            'editable',
                                            'dataIndex',
                                            'title',
                                            'record',
                                            'index',
                                            'handleSave',
                                        ]));
                                    return y.default.createElement(
                                        'td',
                                        (0, i.default)(
                                            {
                                                ref: function(t) {
                                                    return (e.cell = t);
                                                },
                                            },
                                            c
                                        ),
                                        a
                                            ? y.default.createElement(I.Consumer, null, function(
                                                  t
                                              ) {
                                                  return (
                                                      (e.form = t),
                                                      y.default.createElement(
                                                          u.default,
                                                          {
                                                              placement: 'left',
                                                              title:
                                                                  'Ingrese el precio de la cotizaci\xf3n',
                                                          },
                                                          y.default.createElement(
                                                              'div',
                                                              { className: k.default.editing },
                                                              y.default.createElement(
                                                                  g.default.Item,
                                                                  { style: { margin: 0 } },
                                                                  t.getFieldDecorator(n, {
                                                                      initialValue: r[n],
                                                                      rules: [
                                                                          {
                                                                              required: !0,
                                                                              message: ''.concat(
                                                                                  l,
                                                                                  ' es requerido.'
                                                                              ),
                                                                          },
                                                                          {
                                                                              pattern: /^([0-9]*|\d*\.\d{1}?\d*)$/,
                                                                              message: '\xa1'.concat(
                                                                                  l,
                                                                                  ' inv\xe1lido!.'
                                                                              ),
                                                                          },
                                                                      ],
                                                                  })(
                                                                      y.default.createElement(
                                                                          o.default,
                                                                          {
                                                                              min: 0,
                                                                              ref: function(t) {
                                                                                  return (e.input = t);
                                                                              },
                                                                              onPressEnter: e.save,
                                                                              onBlur: e.save,
                                                                          }
                                                                      )
                                                                  )
                                                              ),
                                                              y.default.createElement(d.default, {
                                                                  status: 'processing',
                                                              })
                                                          )
                                                      )
                                                  );
                                              })
                                            : c.children
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(y.default.Component),
                M = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, f.default)(this, t),
                            (a = (0, m.default)(this, (0, p.default)(t).call(this, e))),
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
                                    var n = this.props,
                                        l = n.require,
                                        i = n.dispatch,
                                        u = (n.loading,
                                        n.disabled,
                                        [
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
                                                title: 'PS',
                                                dataIndex: 'suggested_price',
                                                key: 'suggested_price',
                                            },
                                            {
                                                title: 'Precio unitario',
                                                dataIndex: 'unit_price',
                                                key: 'unit_price',
                                                editable: !0,
                                            },
                                            {
                                                title: 'Total',
                                                key: 'total',
                                                render: function(e, t) {
                                                    return e.amount && e.unit_price
                                                        ? e.amount * e.unit_price
                                                        : '';
                                                },
                                            },
                                            {
                                                title: 'Observaci\xf3n',
                                                dataIndex: 'observation',
                                                key: 'observation',
                                            },
                                        ]);
                                    u = u.map(function(e) {
                                        return e.editable
                                            ? (0, c.default)({}, e, {
                                                  onCell: function(t) {
                                                      return {
                                                          record: t,
                                                          editable: e.editable,
                                                          dataIndex: e.dataIndex,
                                                          title: e.title,
                                                          handleSave: d,
                                                      };
                                                  },
                                              })
                                            : e;
                                    });
                                    var d = function(e) {
                                            i({ type: 'require/updateItemByID', payload: e });
                                        },
                                        o = { body: { row: w, cell: P } },
                                        f = 0;
                                    return (
                                        l.list.map(function(e) {
                                            if (e.amount && e.unit_price) {
                                                var t = e.amount * e.unit_price;
                                                f += t;
                                            }
                                        }),
                                        y.default.createElement(
                                            'div',
                                            null,
                                            y.default.createElement(C.default, null),
                                            y.default.createElement(b.default, {
                                                columns: u,
                                                dataSource: l.list,
                                                components: o,
                                                pagination: !1,
                                                onChange: this.onChange,
                                                minWidth: 800,
                                                rowClassName: function() {
                                                    return 'editable-row';
                                                },
                                                rowKey: function(e) {
                                                    return e.id;
                                                },
                                            }),
                                            y.default.createElement(C.default, { size: 'small' }),
                                            y.default.createElement(
                                                r.default,
                                                { color: '#108ee9' },
                                                'Total : ',
                                                f
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(y.Component),
                _ = function(e) {
                    var t = e.quotation,
                        a = e.require,
                        n = e.loading;
                    return { quotation: t, require: a, loading: n };
                },
                O = (0, q.connect)(_)(M);
            t.default = O;
        },
        Qjay: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('IzEo');
            var r = l(a('bx4M'));
            a('+L6B');
            var i = l(a('2/Rp')),
                u = l(a('lwsE')),
                d = l(a('W8MJ')),
                o = l(a('a1gu')),
                c = l(a('Nsbk')),
                f = l(a('7W2i')),
                s = n(a('q1tI')),
                m = a('MuoO'),
                p = l(a('SYP/')),
                v = l(a('zWWL')),
                h = l(a('R5ak')),
                E = l(a('u3Cz')),
                g = l(a('zfuF')),
                y = l(a('rATF')),
                C = l(a('HWB5')),
                b = (function(e) {
                    function t(e) {
                        return (
                            (0, u.default)(this, t),
                            (0, o.default)(this, (0, c.default)(t).call(this, e))
                        );
                    }
                    return (
                        (0, f.default)(t, e),
                        (0, d.default)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props,
                                        t = e.stateCard,
                                        a = e.dispatch,
                                        n = (e.setting, e.quotation),
                                        l = (e.loading, n.requirementItem),
                                        u = !('3' === l.state),
                                        d = '0' === l.state,
                                        o = function() {
                                            a({ type: 'print/showPrinterCC' }),
                                                a({ type: 'print/loadDataCC' });
                                        },
                                        c = function() {
                                            a({ type: 'print/showPrinterOC' }),
                                                a({ type: 'print/loadDataOC' });
                                        },
                                        f = function() {
                                            a({ type: 'print/showPrinterCP' }),
                                                a({ type: 'print/loadDataCP' });
                                        },
                                        m = function() {
                                            a({ type: 'print/showPrinterMemo' }),
                                                a({ type: 'print/loadDataMemo' });
                                        },
                                        b = function() {
                                            a({ type: 'print/showPrinterPecosa' }),
                                                a({ type: 'print/loadDataPecosa' });
                                        },
                                        k = {
                                            requirementItem: l,
                                            total: 100,
                                            dataSource: n.comparativeTable,
                                            loading: !1,
                                            onWinner: function(e) {
                                                a({ type: 'quotation/winner', payload: e });
                                            },
                                        };
                                    return s.default.createElement(
                                        r.default,
                                        { bordered: !1, className: t },
                                        s.default.createElement(
                                            'div',
                                            { className: p.default.header },
                                            s.default.createElement(
                                                i.default,
                                                {
                                                    disabled: d,
                                                    icon: 'printer',
                                                    onClick: function() {
                                                        return o();
                                                    },
                                                },
                                                'Cuadro Comparativo'
                                            ),
                                            s.default.createElement(v.default, null),
                                            s.default.createElement(
                                                i.default,
                                                {
                                                    disabled: u,
                                                    icon: 'printer',
                                                    onClick: function() {
                                                        return c();
                                                    },
                                                },
                                                'Orden De Compra'
                                            ),
                                            s.default.createElement(h.default, null),
                                            s.default.createElement(
                                                i.default,
                                                {
                                                    icon: 'printer',
                                                    onClick: function() {
                                                        return f();
                                                    },
                                                },
                                                'Comprobante De Pago'
                                            ),
                                            s.default.createElement(E.default, null),
                                            s.default.createElement(
                                                i.default,
                                                {
                                                    icon: 'printer',
                                                    onClick: function() {
                                                        return m();
                                                    },
                                                },
                                                'Memorandum'
                                            ),
                                            s.default.createElement(g.default, null),
                                            s.default.createElement(
                                                i.default,
                                                {
                                                    icon: 'printer',
                                                    onClick: function() {
                                                        return b();
                                                    },
                                                },
                                                'Pecosa'
                                            ),
                                            s.default.createElement(y.default, null)
                                        ),
                                        s.default.createElement(C.default, k)
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(s.Component),
                k = function(e) {
                    var t = e.quotation,
                        a = e.global,
                        n = e.loading;
                    return { quotation: t, setting: a.setting, loading: n.effects };
                },
                q = (0, m.connect)(k)(b);
            t.default = q;
        },
        R5ak: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('2qtc');
            var r = l(a('kLXV')),
                i = l(a('lwsE')),
                u = l(a('W8MJ')),
                d = l(a('a1gu')),
                o = l(a('Nsbk')),
                c = l(a('7W2i')),
                f = n(a('q1tI')),
                s = a('MuoO'),
                m = (function(e) {
                    function t(e) {
                        return (
                            (0, i.default)(this, t),
                            (0, d.default)(this, (0, o.default)(t).call(this, e))
                        );
                    }
                    return (
                        (0, c.default)(t, e),
                        (0, u.default)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props,
                                        t = e.print,
                                        a = e.dispatch,
                                        n = function() {
                                            a({ type: 'print/hidePrinterOC' });
                                        };
                                    return f.default.createElement(
                                        r.default,
                                        {
                                            title: 'Printer modal',
                                            onCancel: n,
                                            style: { top: 20 },
                                            width: '95vw',
                                            footer: null,
                                            bodyStyle: { padding: 0 },
                                            visible: t.ocVisible,
                                        },
                                        f.default.createElement('iframe', {
                                            src: t.docOCDataUrl,
                                            height: '600px',
                                            width: '100%',
                                        })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(f.Component),
                p = function(e) {
                    var t = e.print;
                    return { print: t };
                },
                v = (0, s.connect)(p)(m);
            t.default = v;
        },
        R7w7: function(e, t, a) {
            e.exports = {
                table: 'sn\\pages\\-quotation\\-list\\index-table',
                tableAlert: 'sn\\pages\\-quotation\\-list\\index-tableAlert',
                actions: 'sn\\pages\\-quotation\\-list\\index-actions',
                delete: 'sn\\pages\\-quotation\\-list\\index-delete',
                update: 'sn\\pages\\-quotation\\-list\\index-update',
                onWinner1: 'sn\\pages\\-quotation\\-list\\index-onWinner1',
                onWinner2: 'sn\\pages\\-quotation\\-list\\index-onWinner2',
                onWinner3: 'sn\\pages\\-quotation\\-list\\index-onWinner3',
            };
        },
        'SYP/': function(e, t, a) {
            e.exports = { header: 'sn\\pages\\-quotation\\-viwer-c-c\\index-header' };
        },
        'd5+N': function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('5Dmo');
            var r = l(a('3S7+'));
            a('2qtc');
            var i = l(a('kLXV'));
            a('+BJd');
            var u = l(a('mr32')),
                d = l(a('lwsE')),
                o = l(a('W8MJ')),
                c = l(a('a1gu')),
                f = l(a('Nsbk')),
                s = l(a('7W2i')),
                m = l(a('PJYZ'));
            a('Pwec');
            var p = l(a('CtXQ')),
                v = n(a('q1tI')),
                h = (l(a('17x9')), l(a('CkN6'))),
                E = l(a('R7w7')),
                g = function(e) {
                    var t = e.total,
                        a = e.level,
                        n = (e.state, e.onClick),
                        l = 3,
                        r = 3,
                        i = t < l ? Math.ceil(t / l) : Math.floor(t / l);
                    return (
                        (i = i > r ? r : i),
                        a <= i || 1 === t
                            ? v.default.createElement(p.default, {
                                  type: 'arrow-up',
                                  onClick: n,
                                  className: E.default.onWinner1,
                              })
                            : a > i && a <= 2 * i
                                ? v.default.createElement(p.default, {
                                      type: 'swap',
                                      onClick: n,
                                      className: E.default.onWinner2,
                                  })
                                : v.default.createElement(p.default, {
                                      type: 'arrow-down',
                                      className: E.default.onWinner3,
                                  })
                    );
                },
                y = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, d.default)(this, t),
                            (a = (0, c.default)(this, (0, f.default)(t).call(this, e))),
                            (a.state = { sortedInfo: null, filteredInfo: null }),
                            (a.onChange = a.onChange.bind((0, m.default)((0, m.default)(a)))),
                            (a.clearAllFilters = a.clearAllFilters.bind(
                                (0, m.default)((0, m.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, s.default)(t, e),
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
                                    var n = this.props,
                                        l = n.onWinner,
                                        d = n.requirementItem,
                                        o = n.onShowModalEdit,
                                        c = (n.onShowModalCTZ, n.onDelete),
                                        f = n.dataSource,
                                        s = n.loadingAll,
                                        m = n.total,
                                        y = [
                                            {
                                                title: 'Casting',
                                                key: 'winner',
                                                width: '100px',
                                                render: function(e, t) {
                                                    return e.winner
                                                        ? v.default.createElement(
                                                              u.default,
                                                              { color: '#108ee9' },
                                                              'Ganador'
                                                          )
                                                        : v.default.createElement(g, {
                                                              total: m,
                                                              state: d.state,
                                                              level: e.winner_level,
                                                              onClick: function() {
                                                                  i.default.confirm({
                                                                      title: '\xbfEst\xe1s seguro de establecer al proveedor '.concat(
                                                                          e.provider_name,
                                                                          ' como el ganador de este requerimiento?'
                                                                      ),
                                                                      okText: 'SI',
                                                                      okType: 'danger',
                                                                      cancelText: 'NO',
                                                                      onOk: function() {
                                                                          l(e);
                                                                      },
                                                                  });
                                                              },
                                                          });
                                                },
                                            },
                                            {
                                                title: 'Proveedor',
                                                dataIndex: 'provider_name',
                                                key: 'provider_name',
                                                sorter: function(e, t) {
                                                    return e.name.length - t.name.length;
                                                },
                                                sortOrder: 'name' === t.columnKey && t.order,
                                            },
                                            {
                                                title: 'Presupuesto',
                                                key: 'summation',
                                                render: function(e, t) {
                                                    return 'S/ '.concat(e.summation);
                                                },
                                            },
                                            {
                                                title: 'Cotizador',
                                                key: 'user_id',
                                                render: function(e, t) {
                                                    return ''
                                                        .concat(e.user_first_name, ' ')
                                                        .concat(e.user_last_name);
                                                },
                                            },
                                            {
                                                title: 'Accion',
                                                key: 'accion',
                                                width: '110px',
                                                render: function(e, t) {
                                                    return v.default.createElement(
                                                        'div',
                                                        { className: E.default.actions },
                                                        '1' === d.state &&
                                                            v.default.createElement(
                                                                r.default,
                                                                { title: 'Editar' },
                                                                v.default.createElement(p.default, {
                                                                    type: 'edit',
                                                                    className: E.default.update,
                                                                    onClick: function() {
                                                                        return o('update', e);
                                                                    },
                                                                })
                                                            ),
                                                        '1' !== d.state &&
                                                            v.default.createElement(
                                                                r.default,
                                                                { title: 'Ver' },
                                                                v.default.createElement(p.default, {
                                                                    type: 'eye-o',
                                                                    className: E.default.update,
                                                                    onClick: function() {
                                                                        return o('update', e);
                                                                    },
                                                                })
                                                            ),
                                                        '1' === d.state &&
                                                            v.default.createElement(
                                                                r.default,
                                                                { title: 'Eliminar' },
                                                                v.default.createElement(p.default, {
                                                                    type: 'delete',
                                                                    className: E.default.delete,
                                                                    onClick: function() {
                                                                        i.default.confirm({
                                                                            title:
                                                                                '\xbfEst\xe1s seguro de eliminar este registro?',
                                                                            content: e.name,
                                                                            okText: 'SI',
                                                                            okType: 'danger',
                                                                            cancelText: 'NO',
                                                                            onOk: function() {
                                                                                c({ id: e.id });
                                                                            },
                                                                        });
                                                                    },
                                                                })
                                                            )
                                                    );
                                                },
                                            },
                                        ];
                                    return v.default.createElement(
                                        'div',
                                        null,
                                        v.default.createElement(
                                            'div',
                                            { className: E.default.table },
                                            v.default.createElement(h.default, {
                                                columns: y,
                                                dataSource: f,
                                                loading: s,
                                                pagination: !1,
                                                onChange: this.onChange,
                                                minWidth: 800,
                                                rowKey: function(e) {
                                                    return e.id;
                                                },
                                            })
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(v.Component),
                C = y;
            t.default = C;
        },
        fTcV: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
            var r = l(a('MVZn')),
                i = l(a('PJYZ'));
            a('2qtc');
            var u = l(a('kLXV'));
            a('14J3');
            var d = l(a('BMrR'));
            a('sRBo');
            var o = l(a('kaz8'));
            a('5NDa');
            var c = l(a('5rEg'));
            a('iQDF');
            var f = l(a('+eQT'));
            a('jCWc');
            var s = l(a('kPKH'));
            a('giR+');
            var m = l(a('fyUT')),
                p = l(a('pVnL'));
            a('+L6B');
            var v = l(a('2/Rp'));
            a('O3gP');
            var h = l(a('lrIw')),
                E = l(a('lwsE')),
                g = l(a('W8MJ')),
                y = l(a('a1gu')),
                C = l(a('Nsbk')),
                b = l(a('7W2i'));
            a('y8nQ');
            var k = l(a('Vl3Y'));
            a('OaEy');
            var q = l(a('2fM7')),
                I = n(a('q1tI')),
                x = l(a('v/1x')),
                w = a('MuoO'),
                P = l(a('wd/R')),
                M = l(a('EBKi')),
                _ = l(a('M8kI')),
                O = { labelCol: { span: 6 }, wrapperCol: { span: 18 } },
                T = q.default.Option,
                N = k.default.create()(
                    (function(e) {
                        function t(e) {
                            var a;
                            return (
                                (0, E.default)(this, t),
                                (a = (0, y.default)(this, (0, C.default)(t).call(this, e))),
                                (a.state = { selectProviderID: 0 }),
                                a
                            );
                        }
                        return (
                            (0, b.default)(t, e),
                            (0, g.default)(t, [
                                {
                                    key: 'handleChangeSelectProvider',
                                    value: function(e) {
                                        this.setState({ selectProviderID: e });
                                    },
                                },
                                {
                                    key: 'render',
                                    value: function() {
                                        var e = this,
                                            t = this.props,
                                            a = t.visible,
                                            n = t.onCancel,
                                            l = t.onOk,
                                            r = t.form,
                                            i = (t.type, t.confirmLoading),
                                            E = t.data,
                                            g = r.getFieldDecorator,
                                            y = this.props,
                                            C = y.dispatch,
                                            b = y.provider,
                                            q = (y.loading,
                                            function() {
                                                C({
                                                    type: 'provider/showModal',
                                                    payload: { modalType: 'create' },
                                                });
                                            }),
                                            w = b.searchResult,
                                            N = function(e) {
                                                C({
                                                    type: 'provider/search',
                                                    payload: { search: e },
                                                });
                                            },
                                            D = function(t, a) {
                                                e.handleChangeSelectProvider(parseInt(t));
                                            },
                                            S = w.map(function(e) {
                                                return I.default.createElement(
                                                    T,
                                                    { key: e.id },
                                                    e.name
                                                );
                                            });
                                        return (
                                            console.log(E),
                                            I.default.createElement(
                                                u.default,
                                                {
                                                    title: 'Cotizacion',
                                                    okText: 'Guardar',
                                                    width: '90vw',
                                                    style: { top: 50 },
                                                    confirmLoading: i,
                                                    onCancel: n,
                                                    onOk: l,
                                                    visible: a,
                                                },
                                                I.default.createElement(
                                                    k.default,
                                                    { layout: 'horizontal' },
                                                    I.default.createElement(
                                                        d.default,
                                                        { gutter: 16 },
                                                        I.default.createElement(
                                                            s.default,
                                                            { xs: 24, sm: 16, md: 12, lg: 8 },
                                                            I.default.createElement(
                                                                k.default.Item,
                                                                (0, p.default)(
                                                                    { hasFeedback: !0 },
                                                                    O,
                                                                    { label: 'Proveedor' }
                                                                ),
                                                                I.default.createElement(
                                                                    'div',
                                                                    { className: x.default.search },
                                                                    I.default.createElement(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                x.default.item,
                                                                        },
                                                                        g('provider_name_aux', {
                                                                            initialValue:
                                                                                E.provider_name,
                                                                            rules: [
                                                                                {
                                                                                    required: !0,
                                                                                    message:
                                                                                        '\xa1Por favor elija un proveedor!',
                                                                                },
                                                                            ],
                                                                        })(
                                                                            I.default.createElement(
                                                                                h.default,
                                                                                {
                                                                                    dataSource: S,
                                                                                    onSelect: D,
                                                                                    onSearch: N,
                                                                                    placeholder:
                                                                                        'Buscar proveedor',
                                                                                }
                                                                            )
                                                                        )
                                                                    ),
                                                                    I.default.createElement(
                                                                        'div',
                                                                        {
                                                                            className:
                                                                                x.default.more,
                                                                        },
                                                                        I.default.createElement(
                                                                            v.default,
                                                                            {
                                                                                icon: 'plus',
                                                                                onClick: function() {
                                                                                    return q();
                                                                                },
                                                                            }
                                                                        ),
                                                                        I.default.createElement(
                                                                            M.default,
                                                                            null
                                                                        )
                                                                    )
                                                                )
                                                            ),
                                                            I.default.createElement(
                                                                k.default.Item,
                                                                {
                                                                    label: 'ID',
                                                                    className: x.default.hidden,
                                                                },
                                                                g('provider_id', {
                                                                    initialValue:
                                                                        E.provider_id ||
                                                                        this.state.selectProviderID,
                                                                })(
                                                                    I.default.createElement(
                                                                        m.default,
                                                                        null
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        I.default.createElement(
                                                            s.default,
                                                            { xs: 24, sm: 16, md: 12, lg: 8 },
                                                            I.default.createElement(
                                                                k.default.Item,
                                                                (0, p.default)({}, O, {
                                                                    label: 'Fecha entrega',
                                                                }),
                                                                g('deliver_date', {
                                                                    initialValue: E.deliver_date
                                                                        ? (0, P.default)(
                                                                              new Date(
                                                                                  E.deliver_date
                                                                              ),
                                                                              'DD/MM/YYYY'
                                                                          )
                                                                        : void 0,
                                                                })(
                                                                    I.default.createElement(
                                                                        f.default,
                                                                        { format: 'DD/MM/YYYY' }
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        I.default.createElement(
                                                            s.default,
                                                            { xs: 24, sm: 16, md: 12, lg: 8 },
                                                            I.default.createElement(
                                                                k.default.Item,
                                                                (0, p.default)({}, O, {
                                                                    hasFeedback: !0,
                                                                    label: 'Observaci\xf3n',
                                                                }),
                                                                g('observation', {
                                                                    initialValue: E.observation,
                                                                })(
                                                                    I.default.createElement(
                                                                        c.default.TextArea,
                                                                        { autosize: !0 }
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        I.default.createElement(
                                                            s.default,
                                                            { xs: 24, sm: 16, md: 12, lg: 8 },
                                                            I.default.createElement(
                                                                k.default.Item,
                                                                (0, p.default)({}, O, {
                                                                    label: 'Sugerir ganador',
                                                                }),
                                                                g('suggest_winner', {
                                                                    valuePropName: 'checked',
                                                                    initialValue: E.suggest_winner,
                                                                })(
                                                                    I.default.createElement(
                                                                        o.default,
                                                                        null
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    )
                                                ),
                                                I.default.createElement(_.default, null)
                                            )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(I.default.Component)
                ),
                D = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, E.default)(this, t),
                            (a = (0, y.default)(this, (0, C.default)(t).call(this, e))),
                            (a.handleConfirm = a.handleConfirm.bind(
                                (0, i.default)((0, i.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, b.default)(t, e),
                        (0, g.default)(t, [
                            {
                                key: 'handleConfirm',
                                value: function(e) {
                                    var t = this.props,
                                        a = t.dispatch,
                                        n = t.quotation.currentItem,
                                        l = this.formRef.props.form;
                                    l.validateFields(function(t, i) {
                                        t ||
                                            (a({
                                                type: 'quotation/'.concat(e),
                                                payload: (0, r.default)({}, i, { id: n.id }),
                                            }),
                                            l.resetFields(),
                                            a({ type: 'require/clearList' }));
                                    });
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.handleConfirm,
                                        a = this.props,
                                        n = a.dispatch,
                                        l = a.quotation,
                                        r = a.provider,
                                        i = a.require,
                                        u = (a.loading, l.modalType),
                                        d = l.modalVisible,
                                        o = (l.currentItem,
                                        {
                                            data: 'create' == u ? {} : i.currentQuotation,
                                            disabled: 'detail' == u,
                                            type: u,
                                            visible: d,
                                            onOk: function() {
                                                t(u);
                                            },
                                            onCancel: function() {
                                                n({ type: 'quotation/resetQuotation' });
                                            },
                                        });
                                    return I.default.createElement(
                                        N,
                                        (0, p.default)({}, o, {
                                            dispatch: n,
                                            provider: r,
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
                })(I.Component),
                S = function(e) {
                    var t = e.quotation,
                        a = e.provider,
                        n = e.require,
                        l = e.loading;
                    return { quotation: t, provider: a, require: n, loading: l.effects };
                },
                R = (0, w.connect)(S)(D);
            t.default = R;
        },
        g6Q8: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('2qtc');
            var r = l(a('kLXV')),
                i = l(a('lwsE')),
                u = l(a('W8MJ')),
                d = l(a('a1gu')),
                o = l(a('Nsbk')),
                c = l(a('7W2i')),
                f = l(a('PJYZ'));
            a('+L6B');
            var s = l(a('2/Rp')),
                m = n(a('q1tI')),
                p = l(a('oDxf')),
                v = l(a('iQbp')),
                h = a('MuoO'),
                E = function(e) {
                    var t = e.data;
                    return m.default.createElement(
                        v.default,
                        {
                            filename: 'cotizacion.xlsx',
                            element: m.default.createElement(
                                s.default,
                                { type: 'primary' },
                                'Cotizacion'
                            ),
                        },
                        m.default.createElement(
                            v.default.Sheet,
                            { data: t, name: 'Cotizacion' },
                            m.default.createElement(v.default.Column, {
                                label: 'Casting',
                                value: 'winner',
                            }),
                            m.default.createElement(v.default.Column, {
                                label: 'Proveedor',
                                value: 'provider_name',
                            }),
                            m.default.createElement(v.default.Column, {
                                label: 'Presupuesto',
                                value: 'summation',
                            }),
                            m.default.createElement(v.default.Column, {
                                label: 'Cotizador Nombre',
                                value: 'user_first_name',
                            }),
                            m.default.createElement(v.default.Column, {
                                label: 'Cotizador Apellidos',
                                value: 'user_last_name',
                            })
                        )
                    );
                },
                g = function(e) {
                    var t = e.dispatch;
                    return m.default.createElement(
                        s.default,
                        {
                            type: 'primary',
                            onClick: function() {
                                t({ type: 'dowloand/quotationAll' });
                            },
                        },
                        'Todo Las Cotizaciones'
                    );
                },
                y = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, i.default)(this, t),
                            (a = (0, d.default)(this, (0, o.default)(t).call(this, e))),
                            (a.state = { dataVisible: !1, dataAll: !1 }),
                            (a.handleDataVisible = a.handleDataVisible.bind(
                                (0, f.default)((0, f.default)(a))
                            )),
                            (a.handleDataAll = a.handleDataAll.bind(
                                (0, f.default)((0, f.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, c.default)(t, e),
                        (0, u.default)(t, [
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
                                        n = e.quotation,
                                        l = e.dispatch;
                                    return m.default.createElement(
                                        r.default,
                                        {
                                            title: 'Exportar requerimientos',
                                            onCancel: t,
                                            footer: null,
                                            visible: a,
                                        },
                                        m.default.createElement(E, { data: n.list }),
                                        m.default.createElement(p.default, null),
                                        m.default.createElement(g, { dispatch: l })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(m.Component),
                C = function(e) {
                    var t = e.dowloand,
                        a = e.quotation;
                    return { dowloand: t, quotation: a };
                },
                b = (0, h.connect)(C)(y);
            t.default = b;
        },
        gPi7: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('IzEo');
            var r = l(a('bx4M'));
            a('2qtc');
            var i = l(a('kLXV'));
            a('+L6B');
            var u = l(a('2/Rp')),
                d = l(a('lwsE')),
                o = l(a('W8MJ')),
                c = l(a('a1gu')),
                f = l(a('Nsbk')),
                s = l(a('7W2i')),
                m = l(a('PJYZ'));
            a('5NDa');
            var p = l(a('5rEg')),
                v = n(a('q1tI')),
                h = a('MuoO'),
                E = l(a('zHco')),
                g = l(a('xNcC')),
                y = l(a('d5+N')),
                C = l(a('fTcV')),
                b = l(a('Qjay')),
                k = l(a('g6Q8')),
                q = l(a('oDxf')),
                I = (p.default.Search,
                (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, d.default)(this, t),
                            (a = (0, c.default)(this, (0, f.default)(t).call(this, e))),
                            (a.state = { visibleExport: !1 }),
                            (a.onQueryAll = a.onQueryAll.bind((0, m.default)((0, m.default)(a)))),
                            (a.handleToggleExport = a.handleToggleExport.bind(
                                (0, m.default)((0, m.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, s.default)(t, e),
                        (0, o.default)(t, [
                            {
                                key: 'componentDidMount',
                                value: function() {
                                    this.onQueryAll();
                                },
                            },
                            {
                                key: 'onQueryAll',
                                value: function() {
                                    var e = this.props.dispatch;
                                    e({ type: 'quotation/all' }),
                                        e({ type: 'quotation/getComparativeTable' });
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
                                        n = (t.setting, t.quotation),
                                        l = t.loadingAll,
                                        d = n.list,
                                        o = n.total,
                                        c = n.requirementItem,
                                        f = {
                                            requirementItem: c,
                                            total: o,
                                            dataSource: d,
                                            loadingAll: l,
                                            onUpdate: function(e) {
                                                a({ type: 'quotation/update', payload: e });
                                            },
                                            onShowModalEdit: function(e, t) {
                                                s(e, t);
                                            },
                                            onWinner: function(e) {
                                                a({ type: 'quotation/winner', payload: e });
                                            },
                                            onDelete: function(e) {
                                                a({ type: 'quotation/delete', payload: e });
                                            },
                                        },
                                        s = function(e) {
                                            var t =
                                                arguments.length > 1 && void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : {};
                                            a({
                                                type: 'quotation/showModal',
                                                payload: { currentItem: t, modalType: e },
                                            }),
                                                a(
                                                    'create' === e
                                                        ? {
                                                              type: 'require/byRequirement',
                                                              payload: {
                                                                  requirement_id: n.requirementID,
                                                              },
                                                          }
                                                        : {
                                                              type: 'require/byQuotation',
                                                              payload: { id: t.id },
                                                          }
                                                );
                                        },
                                        m = function() {
                                            a({
                                                type: 'requirement/rejected',
                                                payload: { requirement_id: c.id },
                                            }),
                                                a({ type: 'quotation/requirement' });
                                        },
                                        p = c.state,
                                        h =
                                            '4' === p
                                                ? g.default.close
                                                : '3' === p
                                                    ? g.default.accepted
                                                    : '2' === p
                                                        ? g.default.rejected
                                                        : '1' === p
                                                            ? g.default.process
                                                            : g.default.check,
                                        I = !('1' === c.state || '0' === c.state),
                                        x = !(
                                            '1' === c.state ||
                                            '0' === c.state ||
                                            '3' === c.state
                                        );
                                    return v.default.createElement(
                                        E.default,
                                        { title: 'Cotizaciones' },
                                        v.default.createElement(
                                            r.default,
                                            { bordered: !1, className: h },
                                            v.default.createElement(
                                                'div',
                                                { className: g.default.header },
                                                v.default.createElement(
                                                    u.default,
                                                    {
                                                        icon: 'plus',
                                                        type: 'primary',
                                                        onClick: function() {
                                                            return s('create');
                                                        },
                                                        disabled: I,
                                                    },
                                                    'Insertar cotizacion'
                                                ),
                                                v.default.createElement(
                                                    u.default,
                                                    {
                                                        disabled: x,
                                                        icon: 'close',
                                                        onClick: function() {
                                                            i.default.confirm({
                                                                title:
                                                                    '\xbfEst\xe1s seguro de anular este requeriminto?',
                                                                content: '',
                                                                okText: 'SI',
                                                                okType: 'danger',
                                                                cancelText: 'NO',
                                                                onOk: function() {
                                                                    m();
                                                                },
                                                            });
                                                        },
                                                    },
                                                    'Anular'
                                                ),
                                                v.default.createElement(
                                                    u.default,
                                                    {
                                                        icon: 'export',
                                                        onClick: function() {
                                                            return e.handleToggleExport(!0);
                                                        },
                                                    },
                                                    'Exportar'
                                                ),
                                                v.default.createElement(k.default, {
                                                    visible: this.state.visibleExport,
                                                    onCancel: function() {
                                                        return e.handleToggleExport(!1);
                                                    },
                                                }),
                                                v.default.createElement(
                                                    u.default,
                                                    {
                                                        icon: 'reload',
                                                        onClick: function() {
                                                            return e.onQueryAll();
                                                        },
                                                    },
                                                    'Actualizar'
                                                ),
                                                v.default.createElement(C.default, null)
                                            ),
                                            v.default.createElement(y.default, f)
                                        ),
                                        v.default.createElement(q.default, { size: 'large' }),
                                        v.default.createElement(b.default, { stateCard: h })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(v.Component)),
                x = function(e) {
                    var t = e.quotation,
                        a = e.global,
                        n = e.loading;
                    return {
                        quotation: t,
                        setting: a.setting,
                        loadingAll: n.effects['quotation/all'],
                    };
                },
                w = (0, h.connect)(x)(I);
            t.default = w;
        },
        rATF: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('2qtc');
            var r = l(a('kLXV')),
                i = l(a('lwsE')),
                u = l(a('W8MJ')),
                d = l(a('a1gu')),
                o = l(a('Nsbk')),
                c = l(a('7W2i')),
                f = n(a('q1tI')),
                s = a('MuoO'),
                m = (function(e) {
                    function t(e) {
                        return (
                            (0, i.default)(this, t),
                            (0, d.default)(this, (0, o.default)(t).call(this, e))
                        );
                    }
                    return (
                        (0, c.default)(t, e),
                        (0, u.default)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props,
                                        t = e.print,
                                        a = e.dispatch,
                                        n = function() {
                                            a({ type: 'print/hidePrinterPecosa' });
                                        };
                                    return f.default.createElement(
                                        r.default,
                                        {
                                            title: 'Printer modal',
                                            onCancel: n,
                                            style: { top: 20 },
                                            width: '95vw',
                                            footer: null,
                                            bodyStyle: { padding: 0 },
                                            visible: t.pecosaVisible,
                                        },
                                        f.default.createElement('iframe', {
                                            src: t.docPecosaDataUrl,
                                            height: '600px',
                                            width: '100%',
                                        })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(f.Component),
                p = function(e) {
                    var t = e.print;
                    return { print: t };
                },
                v = (0, s.connect)(p)(m);
            t.default = v;
        },
        u3Cz: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('2qtc');
            var r = l(a('kLXV')),
                i = l(a('lwsE')),
                u = l(a('W8MJ')),
                d = l(a('a1gu')),
                o = l(a('Nsbk')),
                c = l(a('7W2i')),
                f = n(a('q1tI')),
                s = a('MuoO'),
                m = (function(e) {
                    function t(e) {
                        return (
                            (0, i.default)(this, t),
                            (0, d.default)(this, (0, o.default)(t).call(this, e))
                        );
                    }
                    return (
                        (0, c.default)(t, e),
                        (0, u.default)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props,
                                        t = e.print,
                                        a = e.dispatch,
                                        n = function() {
                                            a({ type: 'print/hidePrinterCP' });
                                        };
                                    return f.default.createElement(
                                        r.default,
                                        {
                                            title: 'Printer modal',
                                            onCancel: n,
                                            style: { top: 20 },
                                            width: '95vw',
                                            footer: null,
                                            bodyStyle: { padding: 0 },
                                            visible: t.cpVisible,
                                        },
                                        f.default.createElement('iframe', {
                                            src: t.docCPDataUrl,
                                            height: '600px',
                                            width: '100%',
                                        })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(f.Component),
                p = function(e) {
                    var t = e.print;
                    return { print: t };
                },
                v = (0, s.connect)(p)(m);
            t.default = v;
        },
        'v/1x': function(e, t, a) {
            e.exports = {
                search: 'sn\\pages\\-quotation\\-form\\index-search',
                item: 'sn\\pages\\-quotation\\-form\\index-item',
                hidden: 'sn\\pages\\-quotation\\-form\\index-hidden',
            };
        },
        xNcC: function(e, t, a) {
            e.exports = {
                header: 'sn\\pages\\-quotation\\index-header',
                check: 'sn\\pages\\-quotation\\index-check',
                process: 'sn\\pages\\-quotation\\index-process',
                rejected: 'sn\\pages\\-quotation\\index-rejected',
                accepted: 'sn\\pages\\-quotation\\index-accepted',
                expired: 'sn\\pages\\-quotation\\index-expired',
                close: 'sn\\pages\\-quotation\\index-close',
            };
        },
        zWWL: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('2qtc');
            var r = l(a('kLXV')),
                i = l(a('lwsE')),
                u = l(a('W8MJ')),
                d = l(a('a1gu')),
                o = l(a('Nsbk')),
                c = l(a('7W2i')),
                f = n(a('q1tI')),
                s = a('MuoO'),
                m = (function(e) {
                    function t(e) {
                        return (
                            (0, i.default)(this, t),
                            (0, d.default)(this, (0, o.default)(t).call(this, e))
                        );
                    }
                    return (
                        (0, c.default)(t, e),
                        (0, u.default)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props,
                                        t = e.print,
                                        a = e.dispatch,
                                        n = function() {
                                            a({ type: 'print/hidePrinterCC' });
                                        };
                                    return f.default.createElement(
                                        r.default,
                                        {
                                            title: 'Cuadro Comparativo',
                                            onCancel: n,
                                            style: { top: 20 },
                                            width: '95vw',
                                            footer: null,
                                            bodyStyle: { padding: 0 },
                                            visible: t.ccVisible,
                                        },
                                        f.default.createElement('iframe', {
                                            src: t.docCCDataUrl,
                                            height: '600px',
                                            width: '100%',
                                        })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(f.Component),
                p = function(e) {
                    var t = e.print;
                    return { print: t };
                },
                v = (0, s.connect)(p)(m);
            t.default = v;
        },
        zfuF: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('2qtc');
            var r = l(a('kLXV')),
                i = l(a('lwsE')),
                u = l(a('W8MJ')),
                d = l(a('a1gu')),
                o = l(a('Nsbk')),
                c = l(a('7W2i')),
                f = n(a('q1tI')),
                s = a('MuoO'),
                m = (function(e) {
                    function t(e) {
                        return (
                            (0, i.default)(this, t),
                            (0, d.default)(this, (0, o.default)(t).call(this, e))
                        );
                    }
                    return (
                        (0, c.default)(t, e),
                        (0, u.default)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props,
                                        t = e.print,
                                        a = e.dispatch,
                                        n = function() {
                                            a({ type: 'print/hidePrinterMemo' });
                                        };
                                    return f.default.createElement(
                                        r.default,
                                        {
                                            title: 'Printer modal',
                                            onCancel: n,
                                            style: { top: 20 },
                                            width: '95vw',
                                            footer: null,
                                            bodyStyle: { padding: 0 },
                                            visible: t.memoVisible,
                                        },
                                        f.default.createElement('iframe', {
                                            src: t.docMemoDataUrl,
                                            height: '600px',
                                            width: '100%',
                                        })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(f.Component),
                p = function(e) {
                    var t = e.print;
                    return { print: t };
                },
                v = (0, s.connect)(p)(m);
            t.default = v;
        },
    },
]);
