import React from "react";

import { Steps } from 'antd';
import styles from './index.scss';

import Search from './Search';
import Change from './Change';
import Validate from './Validate';
import { connect } from "dva";

import { Link } from 'dva/router';

const Step = Steps.Step;

const Forgot = ({user})=>(
    <div className={styles.steps}>
        <Steps size="small" current={user.forgotStep}>
            <Step title="Buscar"/>
            <Step title="Validar"/>
            <Step title="Cambiar"/>
        </Steps>
        <div className={styles.content}>
            {
                user.forgotStep === 0 && <Search/>
            }
            {
                user.forgotStep === 1 && <Validate/>
            }
            {
                user.forgotStep === 2 && <Change/>
            }
        </div>
        <Link to="/user/login">Login</Link>
    </div>
)

const mapStateToProps = ({user}) => {
    return {
        user,
    }
}

export default connect(mapStateToProps)(Forgot);