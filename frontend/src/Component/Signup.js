import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css";
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import './Signup.css'
function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const sendData = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post('http://localhost:3000/User/signup', {
                username,
                email,
                password
            });
            console.log("Success", response.data);
            Toastify({
                text: "Signup successful!",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#4CAF50",
                stopOnFocus: true
            }).showToast();
            navigate('/dashboard');
        } catch (error) {
            console.error("Error during signup", error);
            const errorMessage = error.response?.data?.message || 'Signup failed. Please check your inputs and try again.';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='superDivSignup d-flex justify-content-center align-items-center vh-100'>
            <div className="signup-container">
                <div className="card signup-card shadow-lg">
                    <div className="card-body p-5">
                        <h3 className="card-title text-center mb-4">Sign Up</h3>
                        <form onSubmit={sendData}>
                            <div className="form-group mb-3">
                                <label htmlFor="username" className="form-label">
                                    <FaUser className="input-icon" /> Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    placeholder="Enter your username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
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
                            {error && <div className="alert alert-danger mt-2">{error}</div>}
                            <button
                                type="submit"
                                className="btn btn-primary btn-block custom-btn mt-4"
                                disabled={loading}
                            >
                                {loading ? 'Signing Up...' : 'Sign Up'}
                            </button>
                        </form>
                        <p className="text-center mt-3">
                            Already have an account? <Link to="/signin" className="signin-link"><small>Sign In</small></Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
