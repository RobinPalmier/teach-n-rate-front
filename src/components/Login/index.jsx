
import React from 'react';
import Header from '../Header';

const Login = () => <>
    <h2>Connexion</h2>
    <Header/>
    <div>
        <form>
            <input type="email" placeholder="Login" style={{display:'block', width:'20%', minWidth:'182px', maxWidth:'300px', margin: '0 auto', marginTop: '10px'}}/>
            <input type="password" placeholder="password" style={{display:'block', width:'20%', minWidth:'182px', maxWidth:'300px', margin: '0 auto', marginTop: '10px'}}/>
            <button style={{display:'block', width:'20%', minWidth:'182px', maxWidth:'300px', margin: '0 auto', marginTop: '10px'}}>Se connecter</button>
        </form>
    </div>
</>

export default Login;