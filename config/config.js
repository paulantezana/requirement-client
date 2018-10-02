// https://umijs.org/config/
import os from 'os';
import pageRoutes from './router.config';
import webpackplugin from './plugin.config';
import defaultSettings from '../src/defaultSettings';

export default {
    // add for transfer to umi
    plugins: [
        [
            'umi-plugin-react',
            {
                antd: true,
                dva: {
                    hmr: true,
                },
                targets: {
                    ie: 9,
                },
                locale: {
                    enable: true, // default false
                    default: 'en-US', // default zh-CN
                    baseNavigator: true, // default true, when it is true, will use `navigator.language` overwrite default
                },
                dynamicImport: {
                    loadingComponent: './components/PageLoading/index',
                },
                ...(!process.env.TEST && os.platform() === 'darwin'
                    ? {
                          dll: {
                              include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
                              exclude: ['@babel/runtime'],
                          },
                          hardSource: true,
                      }
                    : {}),
            },
        ],
    ],
    targets: {
        ie: 11,
    },
    define: {
        APP_TYPE: process.env.APP_TYPE || '',
    },
    // 路由配置
    routes: pageRoutes,
    // Theme for antd
    // https://ant.design/docs/react/customize-theme-cn
    theme: {
        'primary-color': defaultSettings.primaryColor,

        'layout-header-height': '50px',
        'menu-collapsed-width': '60px',

        'layout-header-background': '#1D2B36',
        'layout-sider-background': '#1D2B36',
        'layout-trigger-background': '#08141d',

        'menu-dark-submenu-bg': '#08141d',
    },
    externals: {
        '@antv/data-set': 'DataSet',
    },
    ignoreMomentLocale: true,
    lessLoaderOptions: {
        javascriptEnabled: true,
    },
    cssLoaderOptions: {
        modules: true,
        getLocalIdent: (context, localIdentName, localName) => {
            if (
                context.resourcePath.includes('node_modules') ||
                context.resourcePath.includes('ant.design.pro.less') ||
                context.resourcePath.includes('global.less')
            ) {
                return localName;
            }
            const match = context.resourcePath.match(/src(.*)/);
            if (match && match[1]) {
                const antdProPath = match[1].replace('.less', '');
                const arr = antdProPath
                    .split('/')
                    .map(a => a.replace(/([A-Z])/g, '-$1'))
                    .map(a => a.toLowerCase());
                return `sn${arr.join('-')}-${localName}`.replace(/--/g, '-');
            }
            return localName;
        },
    },
    manifest: {
        name: 'Requirement Web',
        background_color: '#FFF',
        description: 'Sistema de requerimiento.',
        display: 'standalone',
        start_url: '/index.html',
        icons: [
            {
                src: '/favicon.png',
                sizes: '48x48',
                type: 'image/png',
            },
        ],
    },

    chainWebpack: webpackplugin,
    cssnano: {
        mergeRules: false,
    },
};
