import React, { Fragment } from 'react';
import { Upload, Button } from 'antd';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { connect } from 'dva';
import { service } from '@/utils/config';
import styles from './index.less';

class UploadLogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileList: [],
            uploading: false,
        };
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleUpload() {
        const { fileList } = this.state;
        this.props.dispatch({
            type: 'global/uploadLogo',
            payload: {
                id: this.props.setting.id,
                logo: fileList[0],
            },
        });
    }

    render() {
        const { uploading } = this.state;
        const props = {
            action: '//jsonplaceholder.typicode.com/posts/',
            onRemove: file => {
                this.setState(({ fileList }) => {
                    const index = fileList.indexOf(file);
                    const newFileList = fileList.slice();
                    newFileList.splice(index, 1);
                    return {
                        fileList: newFileList,
                    };
                });
            },
            beforeUpload: file => {
                this.setState(({ fileList }) => ({
                    fileList: [...fileList, file],
                }));
                return false;
            },
            fileList: this.state.fileList,
        };

        const { setting } = this.props;

        return (
            <Fragment>
                <div className={styles.avatar_title}>Avatar</div>
                <div className={styles.avatar}>
                    <img src={`${service.path}/${setting.logo}`} alt="avatar" />
                </div>
                <Upload {...props}>
                    <div className={styles.button_view}>
                        <Button icon="upload">
                            <FormattedMessage
                                id="app.settings.basic.avatar"
                                defaultMessage="Change avatar"
                            />
                        </Button>
                    </div>
                </Upload>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ global }) => {
    return {
        setting: global.setting,
    };
};

export default connect(mapStateToProps)(UploadLogo);
