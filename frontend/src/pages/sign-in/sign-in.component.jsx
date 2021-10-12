import React from 'react';
import './sign-in.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInCont = (props) => {
    return (
        <div className='sign-in-page-container'>
                <SignIn onAuthChange={props.onAuthChange} />
        </div>
    )
}

export default SignInCont;