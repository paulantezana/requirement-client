import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
    <Footer style={{ padding: 0 }}>
        <GlobalFooter
            links={[
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
            ]}
            copyright={
                <Fragment>
                    Copyright <Icon type="copyright" /> 2018 paulantezana.com
                </Fragment>
            }
        />
    </Footer>
);
export default FooterView;
