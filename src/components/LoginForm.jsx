import React from "react";

const LoginForm = ({ handleLogin, setEmail, setPassword }) => {
  return (
    <form>
        <label htmlFor="">EMAIL</label>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="">PASSWORD</label>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </form>
  );
};

export default LoginForm;
