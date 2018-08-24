import { isUrl } from '../utilities/utils';

const menuData = [
    {
        name: 'dashboard',
        icon: 'dashboard',
        path: '',
    },
    {
        name: 'Requerimiento',
        icon: 'share-alt',
        path: 'requirements',
    },
    {
        name: 'Producto',
        icon: 'folder',
        path: 'products',
    },
    {
        name: 'Proveedor',
        icon: 'contacts',
        path: 'providers',
    },
    {
        name: 'Usuario',
        icon: 'user',
        path: 'users',
        authority: 'admin',
    },
    {
        name: 'Configuracion',
        icon: 'setting',
        path: 'setting',
        children: [
            {
                name: 'General',
                authority: 'admin',
                path: 'general',
            },
            {
                name: 'Perfil',
                path: 'profile',
            }
        ],
    },
];

function formatter(data, parentPath = '/', parentAuthority) {
    return data.map(item => {
        let { path } = item;
        if (!isUrl(path)) {
            path = parentPath + item.path;
        }
        const result = {
            ...item,
            path,
            authority: item.authority || parentAuthority,
        };
        if (item.children) {
            result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
        }
        return result;
    });
}

export const getMenuData = () => formatter(menuData);
