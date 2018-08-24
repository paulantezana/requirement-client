import React from "react";

import { Steps } from 'antd';
import styles from './index.scss';

import Search from './Search';
import Change from './Change';
import Validate from './Validate';
import { connect } from "dva";

import { Link } from 'dva/router';

const Step = Steps.Step;

const Forgout = ({user})=>(
    <div className={styles.steps}>
        <Steps size="small" current={user.forgoutStep}>
            <Step title="Buscar"/>
            <Step title="Validar"/>
            <Step title="Cambiar"/>
        </Steps>
        <div className={styles.content}>
            {
                user.forgoutStep === 0 && <Search/>
            }
            {
                user.forgoutStep === 1 && <Validate/>
            }
            {
                user.forgoutStep === 2 && <Change/>
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

export default connect(mapStateToProps)(Forgout);