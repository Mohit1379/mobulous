import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { login } from '../../reduxStore/authSlice';
import style from '../../styles/login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); 
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }));
        setEmail('');
        setPassword('');
    };
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/dashboard'); // Redirect to dashboard if authenticated
        }
    }, [isAuthenticated, navigate]);
    
    

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev); 
    };

    return (
        <div className='d-flex justify-content-center h-100 flex-column p-md-5 p-4 pt-md-0 pt-5'>
            <div>
                <h4>Welcome to Materio!👋🏻</h4>
                <p>Please sign-in to your account and start the adventure</p>
            </div>
            
            <div className={`${style.box} mt-4`}>
                <form onSubmit={handleSubmit}>
                    <div className={style.inputBox}>
                        <input
                            type="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Email</label>
                    </div>
                    <div className={style.inputBox}>
                        <input
                            type={showPassword ? "text" : "password"} 
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label>Password</label>
                        <span onClick={handleTogglePassword} style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '12px' }}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />} 
                        </span>
                    </div>
                    <div>
                        <input type="submit" className='w-100' value="Sign In" />
                    </div>
                </form>
                <p>New on our platform? <Link to="/signup" className='text-decoration-none' style={{ color: "#8c57ff", cursor: "pointer" }}>Create an account</Link></p>
            </div>
        </div>
    );
}

export default Login;
