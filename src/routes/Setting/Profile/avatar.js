import React from 'react';
import { Upload, Button, Icon, Row, Col, Avatar } from 'antd';
import { connect } from 'dva';
import { service } from 'config/app';

class Demo extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            fileList: [],
            uploading: false,
        };
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleUpload(){
        const { fileList } = this.state;
        this.props.dispatch({
            type: "user/uploadAvatar",
            payload: {
                id: this.props.user.id,
                picture: fileList[0],
            },
        })
    }

  render() {
    const { uploading } = this.state;
    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      onRemove: (file) => {
        this.setState(({ fileList }) => {
          const index = fileList.indexOf(file);
          const newFileList = fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: (file) => {
        this.setState(({ fileList }) => ({
          fileList: [...fileList, file],
        }));
        return false;
      },
      fileList: this.state.fileList,
    };

    const { user } = this.props;

    return (
        <Row>
            <Col xs={24} md={12} lg={8} xl={6}>
                <Avatar shape="square" size={200} src={`${service.path}/${user.avatar}`}/>
            </Col>
            <Col xs={24} md={12} lg={8} xl={6}>
                <Upload {...props}>
                    <Button>
                        <Icon type="upload" /> Select File
                    </Button>
                </Upload>
                <Button
                    className="upload-demo-start"
                    type="primary"
                    onClick={this.handleUpload}
                    disabled={this.state.fileList.length === 0}
                    loading={uploading}
                    >
                    {uploading ? 'Uploading' : 'Start Upload' }
                </Button>
            </Col>
        </Row>
    );
  }
}

const mapStateToProps = ({global}) => {
    return {
        user: global.user,
    }
}

export default connect(mapStateToProps)(Demo);