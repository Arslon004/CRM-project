import React, { useState } from 'react';
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registered,setRegistered]=useState(true);

  const handleUser = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const userName = JSON.parse(localStorage.getItem('username')) || null;
  const userPassword = JSON.parse(localStorage.getItem('password')) || null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === userName && password === userPassword) {
      toast.success("Login success");
      navigate("/products");
    } else {
      toast.error("Invalid username or password");
    }
  }

  const handleRegister = (e) => {
    e.preventDefault();
    if(registered){
      toast.error("Already registered");
    }else{
      localStorage.setItem('username', JSON.stringify(username));
      localStorage.setItem('password', JSON.stringify(password));
      toast.success("User registered successfully");
      setRegistered(true);
      navigate("/products");
    }
  }

  const forgotPassword=()=>{
    setRegistered(false);
  }
  return (
    <div className={styles.loginPage}>
      <div className={styles.login__container}>
        <form className={styles.form}>
          <div>
            <div>Username</div>
            <input
              className={styles.input}
              value={username}
              onChange={handleUser}
              type="text"
              placeholder="username"
              required
            />
          </div>

          <div>
            <div>Password</div>
            <input
              className={styles.input}
              value={password}
              onChange={handlePassword}
              type="password"
              placeholder="password"
              required
            />
          </div>

          <div>
            <button onClick={handleSubmit} className="btn btn-primary me-4" type="submit">
              Login
            </button>
            <button
              className="btn btn-secondary"
              type="submit"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
          <div className="remember-forgot">
            <Link onClick={forgotPassword}  href="#">Forgot password?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
