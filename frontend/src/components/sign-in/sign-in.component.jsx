import React from 'react';
import './sign-in.styles.scss';
import { withRouter } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';

const CLIENTID="783973397-u25vj56haddfe7bsuvm82sf228torbq3.apps.googleusercontent.com"

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }
     
    handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3001/api/signin',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(this.state)
        })
        .then(res => {
            if(res.status === 401){
                alert("ERROR: Invalid Email and/or Password combination!");
                window.location.reload();
            }
            else if(res.status === 400){
                alert("ERROR: Please Fill all the required fields");
            }
            else{
                this.props.onAuthChange('true');
                this.props.history.push('/');
            }
        })
        .catch(err => console.log(err));
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({ [name]: value });
    }

    updateSuccess=(event)=>{
        this.props.onAuthChange('true');
        this.props.history.push('/');
    }

    updateFailure=(event)=>{
        alert("ERROR: Invalid Email and/or Password combination!");
        window.location.reload();
    }

    render() {
        return(
            <div className='sign-in-container'>
                <h2>Log in to Easy Ticket</h2>
                <hr />  
                <div className='form-container'>
                    <form>

                        <div className="form-group">
                        <input className='input form-control' name='username' type='email' label='email' placeholder='Email' value={this.state.username} onChange={this.handleChange} required />
                        </div>

                        <div className="form-group">
                        <input className='input form-control' name='password' type='password' label='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} required />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button className='button btn btn-primary btn-block' type='submit' onClick={this.handleSubmit}>Sign In with your email</button>
                        
                        <p className="forgot-password text-right">
                        
                        <a id="forget" href="#">Forgot password?</a>
                        </p>
                        <hr/>

                        <div className="g-b ">
                            <GoogleLogin
                            clientId="783973397-u25vj56haddfe7bsuvm82sf228torbq3.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={this.updateSuccess}
                            onFailure={this.updateFailure}
                            cookiePolicy={'single_host_origin'}
                            />
                        </div>
                        

                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(SignIn);