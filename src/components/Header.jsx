import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return (

            <header className="bg-gray-200 p-4 flex items-center justify-between">
                <div className="flex items-center text-black">
                    cattrack
                    {/* Logo goes here */}
                </div>
                <div className="flex items-center space-x-4">
                    {/* Menu items go here */}
                    <nav className="flex sm:justify-center space-x-4">
                        <ul className='grid md:grid-cols-2'>
                            <li className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'><Link to="/">Home</Link></li>
                            <li className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'><Link to="/search">Track orders</Link></li>
                            <li className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'><Link to="/submit">Submit new order</Link></li>
                            <li className='rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900'><Link to="/about">About</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center space-x-4">
                    <Link to="/login">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                        Login
                    </button></Link>
                    <Link to="/signup">
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                        Sign up
                    </button></Link>
                </div>
            </header>
    )
}

export default Header