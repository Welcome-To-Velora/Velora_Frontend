import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

import "./SignUpPage.css";

const SignUpPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // Validation Functions
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        

        // Validation Checks
        if (formData.name.length < 3) {
            toast.error("Name must be at least 3 characters long.");
            return;
        }

        if (!isValidEmail(formData.email)) {
            toast.error("Please enter a valid email address.");
            return;
        }

        if (!isValidPassword(formData.password)) {
            toast.error("Password must be at least 8 characters, include an uppercase letter, a number, and a special character.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:1234/api/auth/signup",
                {
                    fullName: formData.name,
                    email: formData.email,
                    password: formData.password,
                }
            );

            console.log("Signup successful:", response.data);
            toast.success("Signup successful! Please log in.");
        } catch (error) {
            console.error("Signup failed:", error.response?.data || error.message);
            toast.error(error.response?.data?.message || "Signup failed. Please try again.");
        }
    };

    return (
        <div className="signup-container">
            <Toaster position="top-right" reverseOrder={false} />
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
    );
}

export default SignUpPage;
