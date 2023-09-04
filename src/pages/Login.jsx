import React, { useState } from "react";
import Header from "../components/Header";
import GridTitle from "../components/GridTitle";
import LoginForm from "../components/LoginForm";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const verificateBeforeLogin = () => {
    if (email === "") {
      alert("Please, write a email");
      return false;
    }
    if (password === "") {
      alert("Please, write a password");
      return false;
    }
    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (verificateBeforeLogin()) {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  };

  return (
    <>
      <Header />
      <GridTitle title="Login" />
      <LoginForm
        setEmail={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
      <NavLink to="/register">Register</NavLink>
    </>
  );
};

export default Login;
