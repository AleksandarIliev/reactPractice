import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('Your email');
    const [password, setPassword] = useState('Your password');

    const onLogin = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <form onSubmit={onLogin}>
            <br />
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" value={email} onChange={onEmailChange}/>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" value={password} onChange={onPasswordChange} />
            </div> <br />
            <input type="submit" value="Login" />
            <p>If you don't have account go to <a href="/form/register">register form.</a></p>
        </form>
    );
}

export default Login;