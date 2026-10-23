import { useState } from 'react';
import logo from '../assets/logo-text.png'
import hamburger from '../assets/hamburger.png'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img src={hamburger} alt="Menu" />
                    </button>
                </div>
                <div><img src={logo} alt="Logo" /></div>
                <ul className={`${isMenuOpen ? 'flex' : 'hidden'
                    } absolute left-0 top-full z-40 w-full flex-col gap-4 border-b border-gray-200 bg-white p-4 md:static md:flex md:w-auto md:flex-row md:gap-4 md:border-0 md:bg-transparent md:p-0`}>
                    <li className='text-[#db2777]'><a href="/">Home</a></li>
                    <li><a href="/technologies">Technologies</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <div className="flex space-x-5">
                    <button>Sign In</button>
                    <button className="btn bg-[#d91b7e] text-white rounded-full">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;