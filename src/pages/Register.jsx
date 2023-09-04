import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";
import GridTitle from "../components/GridTitle";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const verificateBeforeRegister = () => {
    if (email === "") {
      alert("Please, write a email");
      return false;
    }
    if (displayName === "") {
      alert("Please, write a display name");
      return false;
    }
    if (password === "") {
      alert("Please, write a password");
      return false;
    }
    if (confirmPassword === "") {
      alert("Please, write a confirm password");
      return false;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (verificateBeforeRegister()) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
            updateProfile(auth.currentUser, {
                displayName: displayName
            })
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
      <GridTitle title='Register' />
      <RegisterForm
        handleRegister={handleRegister}
        setEmail={setEmail}
        setDisplayName={setDisplayName}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
      />
        <NavLink to="/login">Login</NavLink>
    </>
  );
};

export default Register;
