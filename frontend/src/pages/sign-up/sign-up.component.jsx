import React from 'react';
import './sign-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignUpCont = (props) => {
    return (
        <div className='sign-up-page-container'>
                <SignUp onAuthChange={props.onAuthChange} />
        </div>
    )
}

export default SignUpCont;