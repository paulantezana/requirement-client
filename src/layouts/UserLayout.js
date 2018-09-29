import React, { Fragment } from 'react';
import { formatMessage } from 'umi/locale';
import Link from 'umi/link';
import { Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import SelectLang from '@/components/SelectLang';
import styles from './UserLayout.less';
import logo from '../assets/logo.svg';

const links = [
    {
        key: 'question',
        title: (
            <span>
                <Icon type="question-circle" theme="outlined" /> Ayuda{' '}
            </span>
        ),
        href: 'https://github.com/paulantezana/requirement-client',
        blankTarget: '_blank',
    },
    {
        key: 'facebook',
        title: (
            <span>
                <Icon type="facebook" theme="outlined" /> Facebook{' '}
            </span>
        ),
        href: 'https://www.facebook.com/Paulantezana-764145183607069/',
        blankTarget: '_blank',
    },
    {
        key: 'github',
        title: (
            <span>
                <Icon type="github" theme="outlined" /> GitHub{' '}
            </span>
        ),
        href: 'https://github.com/paulantezana',
        blankTarget: '_blank',
    },
];

const copyright = (
    <Fragment>
        Copyright <Icon type="copyright" /> 2018 paulantezana.com
    </Fragment>
);

class UserLayout extends React.PureComponent {
    // @TODO title
    // getPageTitle() {
    //   const { routerData, location } = this.props;
    //   const { pathname } = location;
    //   let title = 'Ant Design Pro';
    //   if (routerData[pathname] && routerData[pathname].name) {
    //     title = `${routerData[pathname].name} - Ant Design Pro`;
    //   }
    //   return title;
    // }

    render() {
        const { children } = this.props;
        return (
            // @TODO <DocumentTitle title={this.getPageTitle()}>
            <div className={styles.container}>
                <div className={styles.lang}>
                    <SelectLang />
                </div>
                <div className={styles.content}>
                    <div className={styles.top}>
                        <div className={styles.header}>
                            <Link to="/">
                                <img alt="logo" className={styles.logo} src={logo} />
                                <span className={styles.title}>Rqm WebApp</span>
                            </Link>
                        </div>
                        <div className={styles.desc}>Aqm Web App Sistema De Requerimiento Web</div>
                    </div>
                    {children}
                </div>
                <GlobalFooter links={links} copyright={copyright} />
            </div>
        );
    }
}

export default UserLayout;
