import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import logo from './logo_black.png' 
const Header = (props) => {
    function handleLogout() {
        fetch('http://localhost:3001/api/logout', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
        .then(res => {
            alert("You have logged out of your account!");
            window.location.replace("http://localhost:3000");
        })
        .catch(err => console.log(err));
    }

    function ShowLogUp(props){
        if(props.isLoggedIn){
            return <Link to='/signup' claassName='sign-up'>Register</Link>;
        }
    }

    return (
        <div className='header'>
            <div className='container logo-container'>
                <Link to='/' className='logo'><img id="logo" src={logo}/></Link>
            </div>
            <div className='container options'>
                <Link to='/nowshowing' className='option'>New Releases</Link>
                <Link to='/upcoming' className='option'>Coming Soon</Link>
                <Link to='/popular' className='option'>Trending</Link>
            </div>
            <div className='container sign-in-up-container'>
                {
                    (props.isLoggedIn==='true') ? 
                    (<Link className='log-out' onClick={handleLogout}>Logout</Link>)
                    :
                    (<Link to='/signin' className='sign-in-up'> Sign In</Link>)
                }
                {
                    (props.isLoggedIn==='true') ? 
                    ""
                    :
                    (<Link to='/signup' className='sign-in-up'> Register</Link>)
                }
            </div>
            
        </div>
    );
}

export default Header;