import React, { Fragment } from 'react';
import { formatMessage, FormattedMessage } from 'umi/locale';
import { Upload, Button, Icon, Row, Col, Avatar } from 'antd';
import { connect } from 'dva';
import { service } from '@/utils/config';
import styles from './avatar.less';

class Demo extends React.Component {
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
            type: 'user/uploadAvatar',
            payload: {
                id: this.props.user.id,
                picture: fileList[0],
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

        const { user } = this.props;
        return (
            <Fragment>
                <div className={styles.avatar_title}>Avatar</div>
                <div className={styles.avatar}>
                    <img src={`${service.path}/${user.avatar}`} alt="avatar" />
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
        user: global.user,
    };
};

export default connect(mapStateToProps)(Demo);
