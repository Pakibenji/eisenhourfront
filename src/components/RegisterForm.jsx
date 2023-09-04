import React from 'react';

const RegisterForm = ({handleRegister, setEmail, setDisplayName, setPassword, setConfirmPassword}) => {
    return (
        <form>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Display Name" onChange={(e) => setDisplayName(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
        </form>
    );
};

export default RegisterForm;