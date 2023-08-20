import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Home = () => <div>Home Component</div>;
const About = () => <div>About Component</div>;
const Pricing = () => <div>Pricing Component</div>;
const Products = () => <div>Products Component</div>;


function Header() {

    return (
        <Router>
            <header className="bg-gray-200 p-4 flex items-center justify-between">
                <div className="flex items-center text-black">
                    TITANS
                    {/* Logo goes here */}
                </div>
                <div className="flex items-center space-x-4">
                    {/* Menu items go here */}
                    <nav className="flex sm:justify-center space-x-4">
                        {[
                            ['Home', '/home'],
                            ['About us', '/about'],
                            ['Pricing', '/pricing'],
                            ['Products', '/products'],
                        ].map(([title, url]) => (
                            <a href={url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
                        ))}
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                        Login
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                        Sign up
                    </button>
                </div>
            </header>
            <Routes>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/pricing" component={Pricing} />
                <Route path="/products" component={Products} />
            </Routes>
        </Router>
    )
}

export default Header