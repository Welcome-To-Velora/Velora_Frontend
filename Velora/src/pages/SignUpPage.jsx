import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Mail, Lock, User, ArrowRight, Loader } from 'lucide-react';

import './SignUpPage.css';

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2 className="field-title">Sign Up</h2>

                {/* Name Input */}
                <div className="input-group">
                    <User size={20} />
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Email Input */}
                <div className="input-group">
                    <Mail size={20} />
                    <input 
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Password Input */}
                <div className="input-group">
                    <Lock size={20} />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Confirm Password Input */}
                <div className="input-group">
                    <Lock size={20} />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="signup-button-container">
                    <button type="submit" className="signup-button">
                        Sign Up
                    </button>
                </div>

                {/* Login Link */}
                <p className="signup-footer">
                    Already have an account? <Link to="/login">Log In</Link>
                </p>

            </form>
        </div>
    )
}

export default SignUpPage