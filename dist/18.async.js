(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
    [18],
    {
        H2Iy: function(e, t, a) {
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
            var u = l(a('CtXQ')),
                i = l(a('lwsE')),
                c = l(a('W8MJ')),
                f = l(a('a1gu')),
                s = l(a('Nsbk')),
                p = l(a('7W2i'));
            a('DZo9');
            var m = l(a('8z0m')),
                v = l(a('q1tI')),
                h = a('MuoO'),
                y = m.default.Dragger,
                g = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, i.default)(this, t),
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
                                        i = t.loading,
                                        c = a.modalUploadVisible,
                                        f = function() {
                                            l({ type: 'provider/toggleModalUpload', payload: !1 });
                                        },
                                        s = {
                                            name: 'filestidents',
                                            uploading: i,
                                            accept:
                                                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel',
                                            showUploadList: !1,
                                            beforeUpload: function(t) {
                                                return e.setState({ file: t }), !1;
                                            },
                                        },
                                        p = function() {
                                            l({
                                                type: 'provider/ProviderUploads',
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
                                                    v.default.createElement(u.default, {
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
                                                              loading: i,
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
                                                      y,
                                                      s,
                                                      v.default.createElement(
                                                          'p',
                                                          { className: 'ant-upload-drag-icon' },
                                                          v.default.createElement(u.default, {
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
                    return { provider: t, loading: a.effects['provider/ProviderUploads'] };
                },
                k = (0, h.connect)(E)(g);
            t.default = k;
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
                u = n(a('W8MJ')),
                i = n(a('a1gu')),
                c = n(a('Nsbk')),
                f = n(a('7W2i')),
                s = n(a('PJYZ'));
            a('5NDa');
            var p = n(a('5rEg')),
                m = l(a('q1tI')),
                v = a('MuoO'),
                h = n(a('zHco')),
                y = n(a('q4SD')),
                g = n(a('N7xc')),
                E = n(a('Ioab')),
                k = n(a('H2Iy')),
                x = p.default.Search,
                C = (function(e) {
                    function t(e) {
                        var a;
                        return (
                            (0, d.default)(this, t),
                            (a = (0, i.default)(this, (0, c.default)(t).call(this, e))),
                            (a.onQueryAll = a.onQueryAll.bind((0, s.default)((0, s.default)(a)))),
                            a
                        );
                    }
                    return (
                        (0, f.default)(t, e),
                        (0, u.default)(t, [
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
                                        u = n.list,
                                        i = n.total,
                                        c = n.current,
                                        f = n.searchText,
                                        s = (n.currentItem,
                                        {
                                            current: c,
                                            total: i,
                                            pageSize: l.item,
                                            dataSource: u,
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
                                                { className: y.default.header },
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
                                                m.default.createElement(x, {
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
                                                m.default.createElement(k.default, null)
                                            ),
                                            m.default.createElement(g.default, s)
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(m.Component),
                b = function(e) {
                    var t = e.provider,
                        a = e.global,
                        l = e.loading;
                    return { provider: t, setting: a.setting, loading: l.effects };
                },
                I = (0, v.connect)(b)(C);
            t.default = I;
        },
        N7xc: function(e, t, a) {
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
            var u = n(a('3S7+'));
            a('Pwec');
            var i = n(a('CtXQ'));
            a('BoS7');
            var c = n(a('Sdc0')),
                f = n(a('lwsE')),
                s = n(a('W8MJ')),
                p = n(a('a1gu')),
                m = n(a('Nsbk')),
                v = n(a('7W2i')),
                h = n(a('PJYZ')),
                y = l(a('q1tI')),
                g = (n(a('17x9')), n(a('CkN6'))),
                E = n(a('q4SD')),
                k = (function(e) {
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
                                        k = l.pageSize,
                                        x = l.current,
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
                                                    return y.default.createElement(c.default, {
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
                                                    return y.default.createElement(
                                                        'div',
                                                        { className: E.default.actions },
                                                        y.default.createElement(
                                                            u.default,
                                                            { title: 'Editar' },
                                                            y.default.createElement(i.default, {
                                                                type: 'edit',
                                                                className: E.default.update,
                                                                onClick: function() {
                                                                    return s('update', e);
                                                                },
                                                            })
                                                        ),
                                                        y.default.createElement(
                                                            u.default,
                                                            { title: 'Eliminar' },
                                                            y.default.createElement(i.default, {
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
                                    return y.default.createElement(
                                        'div',
                                        null,
                                        y.default.createElement(
                                            'div',
                                            { className: E.default.table },
                                            y.default.createElement(
                                                'div',
                                                { className: E.default.tableAlert },
                                                y.default.createElement(o.default, {
                                                    message: y.default.createElement(
                                                        y.Fragment,
                                                        null,
                                                        y.default.createElement(
                                                            'span',
                                                            null,
                                                            ''.concat(h, ' Proveedores')
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
                                            y.default.createElement(g.default, {
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
                                        y.default.createElement(r.default, {
                                            showQuickJumper: !0,
                                            total: h,
                                            pageSize: k,
                                            defaultCurrent: 1,
                                            current: x,
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
        q4SD: function(e, t, a) {
            e.exports = { header: 'sn-\\pages\\-provider\\index-header' };
        },
    },
]);
