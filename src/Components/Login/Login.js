import React, {useState} from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';

export default function Login(){

    const navigate = useNavigate();
    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                navigate('/');
            }
        })
        .catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();

        auth.
        createUserWithEmailAndPassword(email,password).
        then((auth)=>{
            if(auth){
                navigate('/');
            }
            console.log(auth);
        }).
        catch(error=>alert(error.message))
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login">
            <Link to='/'>
                <img className="login_logo" src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png' />
            </Link>
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' className="login_signin_button" onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see out Privacy Notice, out Cookies Notice and out Interest-Based Ads.
                </p>
                <button className="login_register_button" onClick={register}>Create your Amazon Accoutn</button>
            </div>
        </div>
    );
}