import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic and API calls here
    };

    return (
        <>
            <Header />
            <div className="bg-gray-100 min-h-screen py-12">
                <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                        <div className="p-6 sm:p-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Login</h2>
                            <form onSubmit={handleLogin}>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full py-2 px-4 rounded-lg border focus:outline-none focus:border-indigo-600"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full py-2 px-4 rounded-lg border focus:outline-none focus:border-indigo-600"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
                                >
                                    Log In
                                </button>
                            </form>
                            <p className="mt-4 text-sm text-gray-600">
                                Don't have an account? <Link to="/signup" className="text-indigo-600">Sign up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default LoginPage;
