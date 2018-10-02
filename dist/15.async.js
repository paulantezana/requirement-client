(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [15],
    {
        AjVR: function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('DjyN');
            var r = n(a('NUBc'));
            a('fOrg');
            var u = n(a('+KLJ'));
            a('2qtc');
            var o = n(a('kLXV'));
            a('5Dmo');
            var d = n(a('3S7+'));
            a('Pwec');
            var i = n(a('CtXQ'));
            a('BoS7');
            var c = n(a('Sdc0')),
                s = n(a('lwsE')),
                f = n(a('W8MJ')),
                p = n(a('a1gu')),
                h = n(a('Nsbk')),
                m = n(a('7W2i')),
                g = n(a('PJYZ')),
                y = l(a('q1tI')),
                v = (n(a('17x9')), n(a('CkN6'))),
                E = n(a('NkuH')),
                k = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, s.default)(this, t),
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
                        (0, m.default)(t, e),
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
                                        s = l.onUpdate,
                                        f = l.onShowModalEdit,
                                        p = l.onDelete,
                                        h = l.dataSource,
                                        m = l.loadingAll,
                                        g = l.loadingUpdate,
                                        k = l.total,
                                        x = l.pageSize,
                                        C = l.current,
                                        A = [
                                            {
                                                title: 'Nombre',
                                                dataIndex: 'name',
                                                key: 'name',
                                                sorter: function(e, t) {
                                                    return e.name.length - t.name.length;
                                                },
                                                sortOrder: 'name' === t.columnKey && t.order,
                                            },
                                            {
                                                title: 'Unidad de medida',
                                                dataIndex: 'unit_measure',
                                                key: 'unit_measure',
                                            },
                                            {
                                                title: 'Tipo',
                                                dataIndex: 'type',
                                                key: 'type',
                                                width: '100px',
                                                filters: [
                                                    { text: 'Producto', value: 'producto' },
                                                    { text: 'Servicio', value: 'servicio' },
                                                ],
                                                filteredValue: a.type || null,
                                                onFilter: function(e, t) {
                                                    return t.type.includes(e);
                                                },
                                            },
                                            {
                                                title: 'Estado',
                                                key: 'state',
                                                width: '60px',
                                                render: function(e, t) {
                                                    return y.default.createElement(c.default, {
                                                        size: 'small',
                                                        loading: g,
                                                        checked: e.state,
                                                        onChange: function(t) {
                                                            return s({ id: e.id, state: t });
                                                        },
                                                    });
                                                },
                                            },
                                            {
                                                title: 'Accion',
                                                key: 'accion',
                                                width: '110px',
                                                render: function(e, t) {
                                                    return y.default.createElement(
                                                        'div',
                                                        { className: E.default.actions },
                                                        y.default.createElement(
                                                            d.default,
                                                            { title: 'Editar' },
                                                            y.default.createElement(i.default, {
                                                                type: 'edit',
                                                                className: E.default.update,
                                                                onClick: function() {
                                                                    return f('update', e);
                                                                },
                                                            })
                                                        ),
                                                        y.default.createElement(
                                                            d.default,
                                                            { title: 'Eliminar' },
                                                            y.default.createElement(i.default, {
                                                                type: 'delete',
                                                                className: E.default.delete,
                                                                onClick: function() {
                                                                    o.default.confirm({
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
                                    return y.default.createElement(
                                        'div',
                                        null,
                                        y.default.createElement(
                                            'div',
                                            { className: E.default.table },
                                            y.default.createElement(
                                                'div',
                                                { className: E.default.tableAlert },
                                                y.default.createElement(u.default, {
                                                    message: y.default.createElement(
                                                        y.Fragment,
                                                        null,
                                                        y.default.createElement(
                                                            'span',
                                                            null,
                                                            ''.concat(k, ' Productos')
                                                        ),
                                                        y.default.createElement(
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
                                            y.default.createElement(v.default, {
                                                columns: A,
                                                dataSource: h,
                                                loading: m,
                                                pagination: !1,
                                                onChange: this.onChange,
                                                minWidth: 800,
                                                rowKey: function(e) {
                                                    return e.id;
                                                },
                                            })
                                        ),
                                        y.default.createElement(r.default, {
                                            showQuickJumper: !0,
                                            total: k,
                                            pageSize: x,
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
                })(y.Component),
                x = k;
            t.default = x;
        },
        NkuH: function(e, t, a) {
            e.exports = {
                table: 'sn\\pages\\-product\\-list\\index-table',
                tableAlert: 'sn\\pages\\-product\\-list\\index-tableAlert',
                actions: 'sn\\pages\\-product\\-list\\index-actions',
                delete: 'sn\\pages\\-product\\-list\\index-delete',
                update: 'sn\\pages\\-product\\-list\\index-update',
            };
        },
        'i/zu': function(e, t, a) {
            'use strict';
            var l = a('284h'),
                n = a('TqRt');
            Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0), a('IzEo');
            var r = n(a('bx4M'));
            a('+L6B');
            var u = n(a('2/Rp')),
                o = n(a('lwsE')),
                d = n(a('W8MJ')),
                i = n(a('a1gu')),
                c = n(a('Nsbk')),
                s = n(a('7W2i')),
                f = n(a('PJYZ'));
            a('5NDa');
            var p = n(a('5rEg')),
                h = l(a('q1tI')),
                m = a('MuoO'),
                g = n(a('zHco')),
                y = n(a('s863')),
                v = n(a('AjVR')),
                E = n(a('lB8x')),
                k = p.default.Search,
                x = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, o.default)(this, t),
                            (a = (0, i.default)(this, (0, c.default)(t).call(this, e))),
                            (a.onQueryAll = a.onQueryAll.bind((0, f.default)((0, f.default)(a)))),
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
                                        l = t.product.searchText;
                                    a({ type: 'product/all', payload: { search: e ? '' : l } });
                                },
                            },
                            {
                                key: 'render',
                                value: function() {
                                    var e = this,
                                        t = this.props,
                                        a = t.dispatch,
                                        l = t.setting,
                                        n = t.product,
                                        o = t.loadingAll,
                                        d = t.loadingUpdate,
                                        i = this.onQueryAll,
                                        c = n.list,
                                        s = n.total,
                                        f = n.current,
                                        p = n.searchText,
                                        m = (n.currentItem,
                                        {
                                            current: f,
                                            total: s,
                                            pageSize: l.item,
                                            dataSource: c,
                                            loadingAll: o,
                                            loadingUpdate: d,
                                            onPageChange: function(e) {
                                                a({
                                                    type: 'product/all',
                                                    payload: { current_page: e, search: p },
                                                });
                                            },
                                            onClear: function() {
                                                a({ type: 'product/setSearchText', payload: '' }),
                                                    i(!0);
                                            },
                                            onUpdate: function(e) {
                                                a({ type: 'product/update', payload: e });
                                            },
                                            onShowModalEdit: function(e, t) {
                                                x(e, t);
                                            },
                                            onDelete: function(e) {
                                                a({ type: 'product/delete', payload: e });
                                            },
                                        }),
                                        x = function(e) {
                                            var t =
                                                arguments.length > 1 && void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : {};
                                            a({
                                                type: 'product/showModal',
                                                payload: { currentItem: t, modalType: e },
                                            });
                                        },
                                        C = function(e) {
                                            a({ type: 'product/setSearchText', payload: e });
                                        };
                                    return h.default.createElement(
                                        g.default,
                                        { title: 'Productos' },
                                        h.default.createElement(
                                            r.default,
                                            { bordered: !1 },
                                            h.default.createElement(
                                                'div',
                                                { className: y.default.header },
                                                h.default.createElement(
                                                    u.default,
                                                    {
                                                        icon: 'plus',
                                                        type: 'primary',
                                                        onClick: function() {
                                                            return x('create');
                                                        },
                                                    },
                                                    'Nuevo producto'
                                                ),
                                                h.default.createElement(u.default, {
                                                    icon: 'reload',
                                                    onClick: function() {
                                                        return e.onQueryAll();
                                                    },
                                                }),
                                                h.default.createElement(k, {
                                                    placeholder: 'Buscar producto',
                                                    value: p,
                                                    onChange: function(e) {
                                                        return C(e.target.value);
                                                    },
                                                    onSearch: function(t) {
                                                        return e.onQueryAll();
                                                    },
                                                    style: { width: 200 },
                                                }),
                                                h.default.createElement(E.default, null)
                                            ),
                                            h.default.createElement(v.default, m)
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(h.Component),
                C = function(e) {
                    var t = e.product,
                        a = e.global,
                        l = e.loading;
                    return {
                        product: t,
                        setting: a.setting,
                        loadingAll: l.effects['product/all'],
                        loadingUpdate: l.effects['product/update'],
                    };
                },
                A = (0, m.connect)(C)(x);
            t.default = A;
        },
        s863: function(e, t, a) {
            e.exports = { header: 'sn\\pages\\-product\\index-header' };
        },
    },
]);
