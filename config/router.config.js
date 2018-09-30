export default [
    // user
    {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
            { path: '/user', redirect: '/user/login' },
            { path: '/user/login', component: './User/Login' },
            { path: '/user/forgot', component: './User/Forgot' },
            { component: '404' },
        ],
    },
    // exception
    {
        path: '/exception',
        component: '../layouts/UserLayout',
        routes: [
            // exception
            {
                path: '/exception/403',
                component: './Exception/403',
            },
            {
                path: '/exception/404',
                component: './Exception/404',
            },
            {
                path: '/exception/500',
                component: './Exception/500',
            },
            { component: '404' },
        ],
    },
    // app
    {
        path: '/',
        component: '../layouts/BasicLayout',
        Routes: ['src/pages/Authorized'],
        authority: ['admin', 'user'],
        routes: [
            // dashboard
            { path: '/', redirect: '/dashboard' },
            {
                path: '/dashboard',
                name: 'dashboard',
                icon: 'dashboard',
                component: './Dashboard',
            },
            {
                path: '/requirements',
                name: 'requirement',
                icon: 'share-alt',
                component: './Requirement',
            },
            {
                path: '/quotations/:id',
                name: 'quotation',
                hideInMenu: true,
                component: './Quotation',
            },
            {
                path: '/products',
                name: 'product',
                icon: 'inbox',
                component: './Product',
            },
            {
                path: '/providers',
                name: 'provider',
                icon: 'contacts',
                component: './Provider',
            },
            {
                path: '/account',
                name: 'account',
                icon: 'user',
                routes: [
                    {
                        path: '/account/users',
                        name: 'users',
                        component: './User/Users',
                        authority: ['admin'],
                    },
                    {
                        path: '/account/profile',
                        name: 'profile',
                        component: './User/Profile',
                    },
                ],
            },
            {
                path: '/settings',
                name: 'setting',
                icon: 'setting',
                component: './Setting',
            },
            {
                component: '404',
            },
        ],
    },
];
