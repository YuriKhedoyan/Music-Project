import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { userAdded } from "../usersSlice";
import { TextField, Alert } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import "./Register.scss"

const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [isErrorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch()
  const usersEmail = useSelector((state) => state.users).map((obj) => obj.email);
  const users = useSelector((state) => state.users);

  const submitButton = () => {
    if (password1 !== password2) {
      {
        setErrorOpen(true);
        setTimeout(() => setErrorOpen(false), 5000);
        setErrorMessage("Please ensure your passwords match.");
        return;
      }
    }
    if (!username || !email || !password1 || !password2) {
      setErrorOpen(true);
      setTimeout(() => setErrorOpen(false), 5000);
      setErrorMessage("Please fill out all fields");
      return;
    }
    if (usersEmail.includes(email)) {
      setErrorOpen(true);
      setTimeout(() => setErrorOpen(false), 5000);
      setErrorMessage("This email is already used. Please try another one.");
      return;
    }
    dispatch(userAdded(username, password1, email));
    navigate('/home', { state: users[users.length - 1] })
    axios.post('http://localhost:3000/api/createUser', {
      name: username,
      email,
      password: password1,
    })
  }

  return (
    <>
      <div className='form'>
        <TextField id="standard-basic" label="Username" variant="standard" value={username} onChange={e => setUsername(e.target.value)} />
        <TextField id="standard-basic" label="Email" variant="standard" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <TextField id="standard-basic" label="Password" variant="standard" type="password" value={password1} onChange={e => setPassword1(e.target.value)} />
        <TextField id="standard-basic" label="Confirm Password" variant="standard" type="password" value={password2} onChange={e => setPassword2(e.target.value)} />
        <div>
          <button className='button' onClick={submitButton}>Register</button>
        </div>
        <Link to={"/login"}>Already have an account? Sign In</Link>
      </div>
      {isErrorOpen ? <div id="errorAlert"><Alert severity="warning">{errorMessage}</Alert></div> : <></>}
    </>
  )
}

export default RegisterPage;