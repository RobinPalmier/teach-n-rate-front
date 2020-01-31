
import React from 'react';
import Header from '../Header';

const Login = () => <>
    <h2>Connexion</h2>
    <Header />
    <div style={{display:'block'}}>
        <form>
            <input type="email" placeholder="Login" />
            <input type="password" placeholdeer="password" />
            <button>Se connecter</button>
        </form>
    </div>
</>

export default Login;