import { useState } from "react";

export default function Register() {
    const [email , setEmail] = useState('Your email');
    const [phone, setPhone] = useState('Your phone number');
    const [password , setPassword] = useState('Your password');
    
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(phone);
        console.log(password);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <br />
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" value={email} onChange={onEmailChange} />
            </div>
            <div>
                <label htmlFor="phone">Phone number: </label>
                <input type="phone" name="phone" id="phone" value={phone} onChange={onPhoneChange} />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" value={password} onChange={onPasswordChange} />
            </div> <br />
            <input type="submit" value="Register" />
            <p>If you have a registration go to <a href="/form/login">login form.</a></p>
        </form>
    );
}