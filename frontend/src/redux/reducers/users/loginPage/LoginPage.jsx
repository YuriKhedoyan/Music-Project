import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { TextField, Alert } from '@mui/material';
import axios from 'axios';

const RegisterPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isErrorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3000/api/getAllUsers");
      setUsers(result.data);
    };
    fetchData();
  }, []);

  const submitButton = () => {
    if (!email || !password) {
      setErrorOpen(true);
      setTimeout(() => setErrorOpen(false), 5000);
      setErrorMessage("Please fill out all fields");
      return;
    }
    const arrayOfEmail = users.map((obj) => obj.email);
    const arrayOfPassword= users.map((obj) => obj.password);
    const indexOfEmail = arrayOfEmail.indexOf(email);
    const indexOfPassword = arrayOfPassword.indexOf(password);
    if (arrayOfEmail.includes(email) && arrayOfPassword.includes(password) && indexOfEmail === indexOfPassword) {
      navigate('/home', { state: users[indexOfEmail] })
    }
  }

  return (
    <>
      <div className='form'>
        <TextField id="standard-basic" label="Email" variant="standard" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <TextField id="standard-basic" label="Password" variant="standard" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <div>
          <button className='button' onClick={submitButton}>Login</button>
        </div>
        <Link to={"/"}>Dont have an account yet ? Sign up</Link>
      </div>
      {isErrorOpen ? <div id="errorAlert"><Alert severity="warning">{errorMessage}</Alert></div> : <></>}
    </>
  )
}

export default RegisterPage;