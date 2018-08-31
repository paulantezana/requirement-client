import React from "react";
import { connect } from "dva";
import { Steps, Card } from 'antd';
import { Link } from 'dva/router';
import Spacing from 'components/Spacing';

import Search from './Search';
import Change from './Change';
import Validate from './Validate';

import styles from './index.scss';

const Step = Steps.Step;

const Forgout = ({user})=>(
    <div className={styles.container}>
        <Steps size="small" current={user.forgotStep}>
            <Step title="Buscar"/>
            <Step title="Validar"/>
            <Step title="Cambiar"/>
        </Steps>
        <Spacing size="large"/>
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

export default connect(mapStateToProps)(Forgout);