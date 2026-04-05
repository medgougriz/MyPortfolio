import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiMail, FiSun, FiMoon, FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';

const Navbar = ({ theme, toggleTheme }) => {

    const navStyle = {
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        padding: '12px 20px',
        background: 'var(--glass-bg)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid var(--glass-border)',
        borderRadius: '50px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
    };

    const iconStyle = {
        color: 'var(--text-main)',
        fontSize: '20px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        background: 'rgba(150, 150, 150, 0.1)',
        textDecoration: 'none'
    };

    const handleMouseOver = (e) => {
        e.currentTarget.style.background = 'rgba(150, 150, 150, 0.3)';
        e.currentTarget.style.color = 'var(--accent)';
    };

    const handleMouseOut = (e) => {
        e.currentTarget.style.background = 'rgba(150, 150, 150, 0.1)';
        e.currentTarget.style.color = 'var(--text-main)';
    };

    return (
        <motion.nav 
            initial={{ y: 50, opacity: 0, x: '-50%' }}
            animate={{ y: 0, opacity: 1, x: '-50%' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={navStyle}
        >
            <a href="#home" style={iconStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <FiHome />
            </a>
            <a href="#contact" style={iconStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <FiMail />
            </a>
            <div style={iconStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={toggleTheme}>
                {theme === 'dark' ? <FiMoon /> : <FiSun />}
            </div>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={iconStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <FiLinkedin />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={iconStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <FiGithub />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={iconStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <FiInstagram />
            </a>
        </motion.nav>
    );
};

export default Navbar;
