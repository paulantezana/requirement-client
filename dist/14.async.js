(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [14],
    {
        '15XU': function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('2qtc');
            var r = l(a('kLXV')),
                i = l(a('lwsE')),
                u = l(a('W8MJ')),
                o = l(a('a1gu')),
                d = l(a('Nsbk')),
                c = l(a('7W2i')),
                f = n(a('q1tI')),
                s = a('MuoO'),
                p = (function(e) {
                    function t(e) {
                        return (
                            (0, i.default)(this, t),
                            (0, o.default)(this, (0, d.default)(t).call(this, e))
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
                m = function(e) {
                    var t = e.print;
                    return { print: t };
                },
                v = (0, s.connect)(m)(p);
            t.default = v;
        },
        '4OMY': function(e, t, a) {
            e.exports = {
                editing: 'sn\\pages\\-quotation\\-form\\-quotation-detail\\index-editing',
            };
        },
        BRgM: function(e, t, a) {},
        HWB5: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('+BJd');
            var r = l(a('mr32')),
                i = l(a('lwsE')),
                u = l(a('W8MJ')),
                o = l(a('a1gu')),
                d = l(a('Nsbk')),
                c = l(a('7W2i')),
                f = l(a('PJYZ')),
                s = n(a('q1tI')),
                p = (l(a('17x9')), l(a('CkN6'))),
                m = l(a('BRgM')),
                v = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, i.default)(this, t),
                            (a = (0, o.default)(this, (0, d.default)(t).call(this, e))),
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
                                        { className: m.default.container },
                                        s.default.createElement(
                                            'div',
                                            { className: m.default.header },
                                            s.default.createElement(
                                                'h2',
                                                null,
                                                'CUADRO COMPARATIVO DE COTIZACIONES'
                                            )
                                        ),
                                        s.default.createElement(p.default, {
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
            var o = l(a('KrTs'));
            a('giR+');
            var d = l(a('fyUT')),
                c = l(a('MVZn')),
                f = l(a('lwsE')),
                s = l(a('W8MJ')),
                p = l(a('a1gu')),
                m = l(a('Nsbk')),
                v = l(a('7W2i')),
                h = l(a('PJYZ')),
                y = l(a('QILm'));
            a('y8nQ');
            var E = l(a('Vl3Y')),
                g = n(a('q1tI')),
                C = l(a('oDxf')),
                k = l(a('CkN6')),
                b = l(a('4OMY')),
                q = a('MuoO'),
                x = (E.default.Item, g.default.createContext()),
                I = function(e) {
                    var t = e.form,
                        a = (e.index, (0, y.default)(e, ['form', 'index']));
                    return g.default.createElement(
                        x.Provider,
                        { value: t },
                        g.default.createElement('tr', a)
                    );
                },
                w = E.default.create()(I),
                M = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, f.default)(this, t),
                            (a = (0, p.default)(this, (0, m.default)(t).call(this, e))),
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
                                        (0, y.default)(t, [
                                            'editable',
                                            'dataIndex',
                                            'title',
                                            'record',
                                            'index',
                                            'handleSave',
                                        ]));
                                    return g.default.createElement(
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
                                            ? g.default.createElement(x.Consumer, null, function(
                                                  t
                                              ) {
                                                  return (
                                                      (e.form = t),
                                                      g.default.createElement(
                                                          u.default,
                                                          {
                                                              placement: 'left',
                                                              title:
                                                                  'Ingrese el precio de la cotizaci\xf3n',
                                                          },
                                                          g.default.createElement(
                                                              'div',
                                                              { className: b.default.editing },
                                                              g.default.createElement(
                                                                  E.default.Item,
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
                                                                      g.default.createElement(
                                                                          d.default,
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
                                                              g.default.createElement(o.default, {
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
                })(g.default.Component),
                _ = (function(e) {
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
                                                          handleSave: o,
                                                      };
                                                  },
                                              })
                                            : e;
                                    });
                                    var o = function(e) {
                                            i({ type: 'require/updateItemByID', payload: e });
                                        },
                                        d = { body: { row: w, cell: M } },
                                        f = 0;
                                    return (
                                        l.list.map(function(e) {
                                            if (e.amount && e.unit_price) {
                                                var t = e.amount * e.unit_price;
                                                f += t;
                                            }
                                        }),
                                        g.default.createElement(
                                            'div',
                                            null,
                                            g.default.createElement(C.default, null),
                                            g.default.createElement(k.default, {
                                                columns: u,
                                                dataSource: l.list,
                                                components: d,
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
                                            g.default.createElement(C.default, { size: 'small' }),
                                            g.default.createElement(
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
                })(g.Component),
                P = function(e) {
                    var t = e.quotation,
                        a = e.require,
                        n = e.loading;
                    return { quotation: t, require: a, loading: n };
                },
                O = (0, q.connect)(P)(_);
            t.default = O;
        },
        NEcx: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('2qtc');
            var r = l(a('kLXV')),
                i = l(a('lwsE')),
                u = l(a('W8MJ')),
                o = l(a('a1gu')),
                d = l(a('Nsbk')),
                c = l(a('7W2i')),
                f = n(a('q1tI')),
                s = a('MuoO'),
                p = (function(e) {
                    function t(e) {
                        return (
                            (0, i.default)(this, t),
                            (0, o.default)(this, (0, d.default)(t).call(this, e))
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
                m = function(e) {
                    var t = e.print;
                    return { print: t };
                },
                v = (0, s.connect)(m)(p);
            t.default = v;
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
                o = l(a('W8MJ')),
                d = l(a('a1gu')),
                c = l(a('Nsbk')),
                f = l(a('7W2i')),
                s = n(a('q1tI')),
                p = a('MuoO'),
                m = l(a('SYP/')),
                v = l(a('NEcx')),
                h = l(a('15XU')),
                y = l(a('jUjp')),
                E = l(a('s7Js')),
                g = l(a('sKQO')),
                C = l(a('HWB5')),
                k = (function(e) {
                    function t(e) {
                        return (
                            (0, u.default)(this, t),
                            (0, d.default)(this, (0, c.default)(t).call(this, e))
                        );
                    }
                    return (
                        (0, f.default)(t, e),
                        (0, o.default)(t, [
                            {
                                key: 'render',
                                value: function() {
                                    var e = this.props,
                                        t = e.stateCard,
                                        a = e.dispatch,
                                        n = (e.setting, e.quotation),
                                        l = (e.loading, n.requirementItem),
                                        u = !('3' === l.state),
                                        o = '0' === l.state,
                                        d = function() {
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
                                        p = function() {
                                            a({ type: 'print/showPrinterMemo' }),
                                                a({ type: 'print/loadDataMemo' });
                                        },
                                        k = function() {
                                            a({ type: 'print/showPrinterPecosa' }),
                                                a({ type: 'print/loadDataPecosa' });
                                        },
                                        b = {
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
                                            { className: m.default.header },
                                            s.default.createElement(
                                                i.default,
                                                {
                                                    disabled: o,
                                                    icon: 'printer',
                                                    onClick: function() {
                                                        return d();
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
                                            s.default.createElement(y.default, null),
                                            s.default.createElement(
                                                i.default,
                                                {
                                                    icon: 'printer',
                                                    onClick: function() {
                                                        return p();
                                                    },
                                                },
                                                'Memorandum'
                                            ),
                                            s.default.createElement(E.default, null),
                                            s.default.createElement(
                                                i.default,
                                                {
                                                    icon: 'printer',
                                                    onClick: function() {
                                                        return k();
                                                    },
                                                },
                                                'Pecosa'
                                            ),
                                            s.default.createElement(g.default, null)
                                        ),
                                        s.default.createElement(C.default, b)
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(s.Component),
                b = function(e) {
                    var t = e.quotation,
                        a = e.global,
                        n = e.loading;
                    return { quotation: t, setting: a.setting, loading: n.effects };
                },
                q = (0, p.connect)(b)(k);
            t.default = q;
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
                o = l(a('lwsE')),
                d = l(a('W8MJ')),
                c = l(a('a1gu')),
                f = l(a('Nsbk')),
                s = l(a('7W2i')),
                p = l(a('PJYZ'));
            a('Pwec');
            var m = l(a('CtXQ')),
                v = n(a('q1tI')),
                h = (l(a('17x9')), l(a('CkN6'))),
                y = l(a('R7w7')),
                E = function(e) {
                    var t = e.total,
                        a = e.level,
                        n = (e.state, e.onClick),
                        l = 3,
                        r = 3,
                        i = t < l ? Math.ceil(t / l) : Math.floor(t / l);
                    return (
                        (i = i > r ? r : i),
                        a <= i || 1 === t
                            ? v.default.createElement(m.default, {
                                  type: 'arrow-up',
                                  onClick: n,
                                  className: y.default.onWinner1,
                              })
                            : a > i && a <= 2 * i
                                ? v.default.createElement(m.default, {
                                      type: 'swap',
                                      onClick: n,
                                      className: y.default.onWinner2,
                                  })
                                : v.default.createElement(m.default, {
                                      type: 'arrow-down',
                                      className: y.default.onWinner3,
                                  })
                    );
                },
                g = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, o.default)(this, t),
                            (a = (0, c.default)(this, (0, f.default)(t).call(this, e))),
                            (a.state = { sortedInfo: null, filteredInfo: null }),
                            (a.onChange = a.onChange.bind((0, p.default)((0, p.default)(a)))),
                            (a.clearAllFilters = a.clearAllFilters.bind(
                                (0, p.default)((0, p.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, s.default)(t, e),
                        (0, d.default)(t, [
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
                                        o = n.requirementItem,
                                        d = n.onShowModalEdit,
                                        c = (n.onShowModalCTZ, n.onDelete),
                                        f = n.dataSource,
                                        s = n.loadingAll,
                                        p = n.total,
                                        g = [
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
                                                        : v.default.createElement(E, {
                                                              total: p,
                                                              state: o.state,
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
                                                        { className: y.default.actions },
                                                        '1' === o.state &&
                                                            v.default.createElement(
                                                                r.default,
                                                                { title: 'Editar' },
                                                                v.default.createElement(m.default, {
                                                                    type: 'edit',
                                                                    className: y.default.update,
                                                                    onClick: function() {
                                                                        return d('update', e);
                                                                    },
                                                                })
                                                            ),
                                                        '1' !== o.state &&
                                                            v.default.createElement(
                                                                r.default,
                                                                { title: 'Ver' },
                                                                v.default.createElement(m.default, {
                                                                    type: 'eye-o',
                                                                    className: y.default.update,
                                                                    onClick: function() {
                                                                        return d('update', e);
                                                                    },
                                                                })
                                                            ),
                                                        '1' === o.state &&
                                                            v.default.createElement(
                                                                r.default,
                                                                { title: 'Eliminar' },
                                                                v.default.createElement(m.default, {
                                                                    type: 'delete',
                                                                    className: y.default.delete,
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
                                            { className: y.default.table },
                                            v.default.createElement(h.default, {
                                                columns: g,
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
                C = g;
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
            var o = l(a('BMrR'));
            a('sRBo');
            var d = l(a('kaz8'));
            a('5NDa');
            var c = l(a('5rEg'));
            a('iQDF');
            var f = l(a('+eQT'));
            a('jCWc');
            var s = l(a('kPKH'));
            a('giR+');
            var p = l(a('fyUT')),
                m = l(a('pVnL'));
            a('+L6B');
            var v = l(a('2/Rp'));
            a('O3gP');
            var h = l(a('lrIw')),
                y = l(a('lwsE')),
                E = l(a('W8MJ')),
                g = l(a('a1gu')),
                C = l(a('Nsbk')),
                k = l(a('7W2i'));
            a('y8nQ');
            var b = l(a('Vl3Y'));
            a('OaEy');
            var q = l(a('2fM7')),
                x = n(a('q1tI')),
                I = l(a('v/1x')),
                w = a('MuoO'),
                M = l(a('wd/R')),
                _ = l(a('Ioab')),
                P = l(a('M8kI')),
                O = { labelCol: { span: 6 }, wrapperCol: { span: 18 } },
                N = q.default.Option,
                S = b.default.create()(
                    (function(e) {
                        function t(e) {
                            var a;
                            return (
                                (0, y.default)(this, t),
                                (a = (0, g.default)(this, (0, C.default)(t).call(this, e))),
                                (a.state = { selectProviderID: 0 }),
                                a
                            );
                        }
                        return (
                            (0, k.default)(t, e),
                            (0, E.default)(t, [
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
                                            y = t.data,
                                            E = r.getFieldDecorator,
                                            g = this.props,
                                            C = g.dispatch,
                                            k = g.provider,
                                            q = (g.loading,
                                            function() {
                                                C({
                                                    type: 'provider/showModal',
                                                    payload: { modalType: 'create' },
                                                });
                                            }),
                                            w = k.searchResult,
                                            S = function(e) {
                                                C({
                                                    type: 'provider/search',
                                                    payload: { search: e },
                                                });
                                            },
                                            T = function(t, a) {
                                                e.handleChangeSelectProvider(parseInt(t));
                                            },
                                            D = w.map(function(e) {
                                                return x.default.createElement(
                                                    N,
                                                    { key: e.id },
                                                    e.name
                                                );
                                            });
                                        return x.default.createElement(
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
                                            x.default.createElement(
                                                b.default,
                                                { layout: 'horizontal' },
                                                x.default.createElement(
                                                    o.default,
                                                    { gutter: 16 },
                                                    x.default.createElement(
                                                        s.default,
                                                        { xs: 24, sm: 16, md: 12, lg: 8 },
                                                        x.default.createElement(
                                                            b.default.Item,
                                                            (0, m.default)({ hasFeedback: !0 }, O, {
                                                                label: 'Proveedor',
                                                            }),
                                                            x.default.createElement(
                                                                'div',
                                                                { className: I.default.search },
                                                                x.default.createElement(
                                                                    'div',
                                                                    { className: I.default.item },
                                                                    E('provider_name_aux', {
                                                                        initialValue:
                                                                            y.provider_name,
                                                                        rules: [
                                                                            {
                                                                                required: !0,
                                                                                message:
                                                                                    '\xa1Por favor elija un proveedor!',
                                                                            },
                                                                        ],
                                                                    })(
                                                                        x.default.createElement(
                                                                            h.default,
                                                                            {
                                                                                dataSource: D,
                                                                                onSelect: T,
                                                                                onSearch: S,
                                                                                placeholder:
                                                                                    'Buscar proveedor',
                                                                            }
                                                                        )
                                                                    )
                                                                ),
                                                                x.default.createElement(
                                                                    'div',
                                                                    { className: I.default.more },
                                                                    x.default.createElement(
                                                                        v.default,
                                                                        {
                                                                            icon: 'plus',
                                                                            onClick: function() {
                                                                                return q();
                                                                            },
                                                                        }
                                                                    ),
                                                                    x.default.createElement(
                                                                        _.default,
                                                                        null
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        x.default.createElement(
                                                            b.default.Item,
                                                            {
                                                                label: 'ID',
                                                                className: I.default.hidden,
                                                            },
                                                            E('provider_id', {
                                                                initialValue:
                                                                    y.provider_id ||
                                                                    this.state.selectProviderID,
                                                            })(
                                                                x.default.createElement(
                                                                    p.default,
                                                                    null
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    x.default.createElement(
                                                        s.default,
                                                        { xs: 24, sm: 16, md: 12, lg: 8 },
                                                        x.default.createElement(
                                                            b.default.Item,
                                                            (0, m.default)({}, O, {
                                                                label: 'Fecha entrega',
                                                            }),
                                                            E('deliver_date', {
                                                                initialValue: y.deliver_date
                                                                    ? (0, M.default)(
                                                                          new Date(y.deliver_date),
                                                                          'DD/MM/YYYY'
                                                                      )
                                                                    : void 0,
                                                            })(
                                                                x.default.createElement(f.default, {
                                                                    format: 'DD/MM/YYYY',
                                                                })
                                                            )
                                                        )
                                                    ),
                                                    x.default.createElement(
                                                        s.default,
                                                        { xs: 24, sm: 16, md: 12, lg: 8 },
                                                        x.default.createElement(
                                                            b.default.Item,
                                                            (0, m.default)({}, O, {
                                                                hasFeedback: !0,
                                                                label: 'Observaci\xf3n',
                                                            }),
                                                            E('observation', {
                                                                initialValue: y.observation,
                                                            })(
                                                                x.default.createElement(
                                                                    c.default.TextArea,
                                                                    { autosize: !0 }
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    x.default.createElement(
                                                        s.default,
                                                        { xs: 24, sm: 16, md: 12, lg: 8 },
                                                        x.default.createElement(
                                                            b.default.Item,
                                                            (0, m.default)({}, O, {
                                                                label: 'Sugerir ganador',
                                                            }),
                                                            E('suggest_winner', {
                                                                valuePropName: 'checked',
                                                                initialValue: y.suggest_winner,
                                                            })(
                                                                x.default.createElement(
                                                                    d.default,
                                                                    null
                                                                )
                                                            )
                                                        )
                                                    )
                                                )
                                            ),
                                            x.default.createElement(P.default, null)
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(x.default.Component)
                ),
                T = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, y.default)(this, t),
                            (a = (0, g.default)(this, (0, C.default)(t).call(this, e))),
                            (a.handleConfirm = a.handleConfirm.bind(
                                (0, i.default)((0, i.default)(a))
                            )),
                            a
                        );
                    }
                    return (
                        (0, k.default)(t, e),
                        (0, E.default)(t, [
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
                                        o = l.modalVisible,
                                        d = (l.currentItem,
                                        {
                                            data: 'create' == u ? {} : i.currentQuotation,
                                            disabled: 'detail' == u,
                                            type: u,
                                            visible: o,
                                            onOk: function() {
                                                t(u);
                                            },
                                            onCancel: function() {
                                                n({ type: 'quotation/resetQuotation' });
                                            },
                                        });
                                    return x.default.createElement(
                                        S,
                                        (0, m.default)({}, d, {
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
                })(x.Component),
                D = function(e) {
                    var t = e.quotation,
                        a = e.provider,
                        n = e.require,
                        l = e.loading;
                    return { quotation: t, provider: a, require: n, loading: l.effects };
                },
                W = (0, w.connect)(D)(T);
            t.default = W;
        },
        g6Q8: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('2qtc');
            var r = l(a('kLXV')),
                i = l(a('lwsE')),
                u = l(a('W8MJ')),
                o = l(a('a1gu')),
                d = l(a('Nsbk')),
                c = l(a('7W2i')),
                f = l(a('PJYZ'));
            a('+L6B');
            var s = l(a('2/Rp')),
                p = n(a('q1tI')),
                m = l(a('oDxf')),
                v = l(a('iQbp')),
                h = a('MuoO'),
                y = function(e) {
                    var t = e.data;
                    return p.default.createElement(
                        v.default,
                        {
                            filename: 'cotizacion.xlsx',
                            element: p.default.createElement(
                                s.default,
                                { type: 'primary' },
                                'Cotizacion'
                            ),
                        },
                        p.default.createElement(
                            v.default.Sheet,
                            { data: t, name: 'Cotizacion' },
                            p.default.createElement(v.default.Column, {
                                label: 'Casting',
                                value: 'winner',
                            }),
                            p.default.createElement(v.default.Column, {
                                label: 'Proveedor',
                                value: 'provider_name',
                            }),
                            p.default.createElement(v.default.Column, {
                                label: 'Presupuesto',
                                value: 'summation',
                            }),
                            p.default.createElement(v.default.Column, {
                                label: 'Cotizador Nombre',
                                value: 'user_first_name',
                            }),
                            p.default.createElement(v.default.Column, {
                                label: 'Cotizador Apellidos',
                                value: 'user_last_name',
                            })
                        )
                    );
                },
                E = function(e) {
                    var t = e.dispatch;
                    return p.default.createElement(
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
                g = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, i.default)(this, t),
                            (a = (0, o.default)(this, (0, d.default)(t).call(this, e))),
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
                                    return p.default.createElement(
                                        r.default,
                                        {
                                            title: 'Exportar requerimientos',
                                            onCancel: t,
                                            footer: null,
                                            visible: a,
                                        },
                                        p.default.createElement(y, { data: n.list }),
                                        p.default.createElement(m.default, null),
                                        p.default.createElement(E, { dispatch: l })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(p.Component),
                C = function(e) {
                    var t = e.dowloand,
                        a = e.quotation;
                    return { dowloand: t, quotation: a };
                },
                k = (0, h.connect)(C)(g);
            t.default = k;
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
                o = l(a('lwsE')),
                d = l(a('W8MJ')),
                c = l(a('a1gu')),
                f = l(a('Nsbk')),
                s = l(a('7W2i')),
                p = l(a('PJYZ'));
            a('5NDa');
            var m = l(a('5rEg')),
                v = n(a('q1tI')),
                h = a('MuoO'),
                y = l(a('zHco')),
                E = l(a('xNcC')),
                g = l(a('d5+N')),
                C = l(a('fTcV')),
                k = l(a('Qjay')),
                b = l(a('g6Q8')),
                q = l(a('oDxf')),
                x = (m.default.Search,
                (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, o.default)(this, t),
                            (a = (0, c.default)(this, (0, f.default)(t).call(this, e))),
                            (a.state = { visibleExport: !1 }),
                            (a.onQueryAll = a.onQueryAll.bind((0, p.default)((0, p.default)(a)))),
                            (a.handleToggleExport = a.handleToggleExport.bind(
                                (0, p.default)((0, p.default)(a))
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
                                        o = n.list,
                                        d = n.total,
                                        c = n.requirementItem,
                                        f = {
                                            requirementItem: c,
                                            total: d,
                                            dataSource: o,
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
                                        p = function() {
                                            a({
                                                type: 'requirement/rejected',
                                                payload: { requirement_id: c.id },
                                            }),
                                                a({ type: 'quotation/requirement' });
                                        },
                                        m = c.state,
                                        h =
                                            '4' === m
                                                ? E.default.close
                                                : '3' === m
                                                    ? E.default.accepted
                                                    : '2' === m
                                                        ? E.default.rejected
                                                        : '1' === m
                                                            ? E.default.process
                                                            : E.default.check,
                                        x = !('1' === c.state || '0' === c.state),
                                        I = !(
                                            '1' === c.state ||
                                            '0' === c.state ||
                                            '3' === c.state
                                        );
                                    return v.default.createElement(
                                        y.default,
                                        { title: 'Cotizaciones' },
                                        v.default.createElement(
                                            r.default,
                                            { bordered: !1, className: h },
                                            v.default.createElement(
                                                'div',
                                                { className: E.default.header },
                                                v.default.createElement(
                                                    u.default,
                                                    {
                                                        icon: 'plus',
                                                        type: 'primary',
                                                        onClick: function() {
                                                            return s('create');
                                                        },
                                                        disabled: x,
                                                    },
                                                    'Insertar cotizacion'
                                                ),
                                                v.default.createElement(
                                                    u.default,
                                                    {
                                                        disabled: I,
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
                                                                    p();
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
                                                v.default.createElement(b.default, {
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
                                            v.default.createElement(g.default, f)
                                        ),
                                        v.default.createElement(q.default, { size: 'large' }),
                                        v.default.createElement(k.default, { stateCard: h })
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(v.Component)),
                I = function(e) {
                    var t = e.quotation,
                        a = e.global,
                        n = e.loading;
                    return {
                        quotation: t,
                        setting: a.setting,
                        loadingAll: n.effects['quotation/all'],
                    };
                },
                w = (0, h.connect)(I)(x);
            t.default = w;
        },
        jUjp: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('2qtc');
            var r = l(a('kLXV')),
                i = l(a('lwsE')),
                u = l(a('W8MJ')),
                o = l(a('a1gu')),
                d = l(a('Nsbk')),
                c = l(a('7W2i')),
                f = n(a('q1tI')),
                s = a('MuoO'),
                p = (function(e) {
                    function t(e) {
                        return (
                            (0, i.default)(this, t),
                            (0, o.default)(this, (0, d.default)(t).call(this, e))
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
                m = function(e) {
                    var t = e.print;
                    return { print: t };
                },
                v = (0, s.connect)(m)(p);
            t.default = v;
        },
        s7Js: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('2qtc');
            var r = l(a('kLXV')),
                i = l(a('lwsE')),
                u = l(a('W8MJ')),
                o = l(a('a1gu')),
                d = l(a('Nsbk')),
                c = l(a('7W2i')),
                f = n(a('q1tI')),
                s = a('MuoO'),
                p = (function(e) {
                    function t(e) {
                        return (
                            (0, i.default)(this, t),
                            (0, o.default)(this, (0, d.default)(t).call(this, e))
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
                m = function(e) {
                    var t = e.print;
                    return { print: t };
                },
                v = (0, s.connect)(m)(p);
            t.default = v;
        },
        sKQO: function(e, t, a) {
            'use strict';
            var n = a('284h'),
                l = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('2qtc');
            var r = l(a('kLXV')),
                i = l(a('lwsE')),
                u = l(a('W8MJ')),
                o = l(a('a1gu')),
                d = l(a('Nsbk')),
                c = l(a('7W2i')),
                f = n(a('q1tI')),
                s = a('MuoO'),
                p = (function(e) {
                    function t(e) {
                        return (
                            (0, i.default)(this, t),
                            (0, o.default)(this, (0, d.default)(t).call(this, e))
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
                m = function(e) {
                    var t = e.print;
                    return { print: t };
                },
                v = (0, s.connect)(m)(p);
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
    },
]);
