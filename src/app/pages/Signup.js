import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../reduxStore/signupSlice';
import style from '../../styles/login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 

function Signup({ isMobile }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        password: '',
        termsAccepted: false,
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleTogglePassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setUserData(formData));
        setFormData({
            userName: '',
            email: '',
            password: '',
            termsAccepted: false,
        });
        alert("Successfully signed up");
        navigate('/login');
    };

    return (
        <div className='d-flex justify-content-center h-100 flex-column p-md-5 p-4 pt-md-0 pt-5' style={{ width: isMobile ? 'auto' : '489px' }}>
            <div>
                <h4>Adventure starts here 🚀</h4>
                <p>Make your app management easy and fun!</p>
            </div>

            <div className={`${style.box} mt-4`}>
                <form onSubmit={handleSubmit}>
                    <div className={style.inputBox}>
                        <input
                            type="text"
                            name="userName"
                            required
                            value={formData.userName}
                            onChange={handleChange}
                        />
                        <label>Username</label>
                    </div>
                    <div className={style.inputBox}>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label>Email</label>
                    </div>
                    <div className={style.inputBox}>
                        <input
                            type={showPassword ? "text" : "password"} 
                            name="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <label>Password</label>
                        <span onClick={handleTogglePassword} style={{ cursor: 'pointer', position: 'absolute', right: '10px', top: '12px' }}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />} 
                        </span>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                        />
                        <label htmlFor="termsAccepted" className='ms-2'> I agree to privacy policy & terms</label>
                    </div>
                    <div>
                        <input
                            type="submit"
                            className='w-100 mt-4'
                            name="sign-in"
                            value="Sign Up"
                            disabled={!formData.termsAccepted}
                        />
                    </div>
                </form>
                <p>Already have an account? <Link to="/login" className='text-decoration-none' style={{ color: "#8c57ff", cursor: "pointer" }}>Sign in instead</Link></p>
            </div>
        </div>
    );
}

export default Signup;
