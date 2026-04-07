import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiMail, FiSun, FiMoon, FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';

const Navbar = ({ theme, toggleTheme }) => {

    return (
        <motion.nav 
            initial={{ y: 50, opacity: 0, x: '-50%' }}
            animate={{ y: 0, opacity: 1, x: '-50%' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="navbar-container"
        >
            <a href="#home" className="nav-icon">
                <FiHome />
            </a>
            <a href="#contact" className="nav-icon">
                <FiMail />
            </a>
            <div className="nav-icon" onClick={toggleTheme}>
                {theme === 'dark' ? <FiMoon /> : <FiSun />}
            </div>
            <a href="https://www.linkedin.com/in/mohamed-gougriz/" target="_blank" rel="noopener noreferrer" className="nav-icon">
                <FiLinkedin />
            </a>
            <a href="https://github.com/medgougriz" target="_blank" rel="noopener noreferrer" className="nav-icon">
                <FiGithub />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="nav-icon">
                <FiInstagram />
            </a>
        </motion.nav>
    );
};

export default Navbar;
