import React, { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [detail, setDetail] = useState({ username: '', password: '' });

  const login = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('username'));
    const storedPassword = JSON.parse(localStorage.getItem('password'));

    if (detail.username === storedUser && detail.password === storedPassword) {
      navigate('/products');
    } else {
      toast.error('Invalid username or password');
    }
  };

  const handleUser = (e) => {
    setDetail({ ...detail, username: e.target.value });
  };

  const handlePassword = (e) => {
    setDetail({ ...detail, password: e.target.value });
  };

  const handleRegister = () => {
    localStorage.setItem('username', JSON.stringify(detail.username));
    localStorage.setItem('password', JSON.stringify(detail.password));
    toast.success('User registered successfully');
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.login__container}>
        <form onSubmit={login} className={styles.form}>
          <div>
            <div>Username</div>
            <input
              className={styles.input}
              value={detail.username}
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
              value={detail.password}
              onChange={handlePassword}
              type="password"
              placeholder="password"
              required
            />
          </div>

          <div>
            <button className="btn btn-primary me-4" type="submit">
              Login
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
