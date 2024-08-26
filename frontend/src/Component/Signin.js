import React, { useState } from 'react';
import axios from 'axios';
import "../App.css"; // Custom styles
import { Link, useNavigate } from 'react-router-dom';
import { useData } from '../Context/user.context'; // Ensure this path is correct
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import "./Signin.css"

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { setEmail: setContextEmail } = useData();
    const navigate = useNavigate();

    const sendData = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/User/signin', { email, password });
            console.log("Success", response.data);
            localStorage.setItem('userId', JSON.stringify(response.data.UserID));
            setContextEmail(email);
            navigate('/dashboard');
        } catch (error) {
            console.error("Error signing in", error);
            alert("Failed to sign in. Please check your credentials and try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="superDivSignup d-flex justify-content-center align-items-center vh-100">
            <div className="signin-container">
                <div className="card signin-card shadow-lg">
                    <div className="card-body p-5">
                        <h3 className="card-title text-center mb-4">Sign In</h3>
                        <form onSubmit={sendData}>
                            <div className="form-group mb-3">
                                <label htmlFor="email" className="form-label">
                                    <FaEnvelope className="input-icon" /> Email
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password" className="form-label">
                                    <FaLock className="input-icon" /> Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-block custom-btn mt-4"
                                disabled={loading}
                            >
                                {loading ? 'Signing In...' : 'Sign In'}
                            </button>
                        </form>
                        <p className="text-center mt-3">
                            Don't have an account? <Link to="/signup" className="signup-link"><small>Sign Up</small></Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;
