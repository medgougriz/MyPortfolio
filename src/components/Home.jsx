import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiArrowRight } from 'react-icons/fi';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';

const Home = () => {
    const [titleIndex, setTitleIndex] = useState(0);
    const titles = ['Developer', 'Engineer'];

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const floatingIcons = [
        { icon: <FaReact color="#61DAFB" />, top: '10%', left: '25%', size: 45, delay: 0 },
        { icon: <SiJavascript color="#F7DF1E" />, top: '25%', left: '75%', size: 50, delay: 0.3 },
        { icon: <FaNodeJs color="#339933" />, top: '55%', left: '15%', size: 40, delay: 0.6 },
        { icon: <SiTailwindcss color="#06B6D4" />, top: '75%', left: '60%', size: 35, delay: 0.9 },
        { icon: <FaPython color="#3776AB" />, top: '40%', left: '45%', size: 55, delay: 1.2 },
        { icon: <SiMongodb color="#47A248" />, top: '15%', left: '60%', size: 30, delay: 1.5 },
        { icon: <SiTypescript color="#3178C6" />, top: '80%', left: '25%', size: 40, delay: 1.8 },
    ];

    return (
        <section className="section" id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '50px' }}>

                {/* Left Side: Text Details */}
                <div style={{ flex: '1 1 500px', zIndex: 2 }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                    >
                        {/* Pill Badge */}
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            padding: '16px 32px', borderRadius: '50px',
                            background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                            marginBottom: '30px', fontWeight: 600, fontSize: '1.3rem',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                            color: 'var(--text-main)'
                        }}>
                            <span>Hello, You, I'm</span>
                            <div style={{ position: 'relative', width: '110px', height: '30px', overflow: 'hidden' }}>
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={titleIndex}
                                        initial={{ y: 25, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -25, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ position: 'absolute', top: 0, left: 0, color: 'var(--accent)', whiteSpace: 'nowrap' }}
                                    >
                                        {titles[titleIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Main Title */}
                        <h1 style={{
                            fontSize: 'clamp(3.5rem, 7vw, 5.5rem)',
                            fontWeight: 800,
                            marginBottom: '10px',
                            lineHeight: 1.1,
                            textShadow: '0 0 50px rgba(139, 92, 246, 0.4)',
                            color: 'var(--text-main)',
                            letterSpacing: '-1.5px',
                            textTransform: 'capitalize'
                        }}>
                            Mohamed <br /> GOUGRIZ
                        </h1>

                        {/* Subtitle */}
                        <h2 style={{
                            fontSize: '1.4rem',
                            color: 'var(--text-muted)',
                            marginBottom: '40px',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            Software Engineer
                        </h2>

                        {/* Action Buttons & Socials */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap' }}>
                            <a href="#projects" className="btn" style={{
                                padding: '16px 32px',
                                borderRadius: '30px',
                                fontSize: '1.1rem',
                                background: 'var(--text-main)',
                                color: 'var(--bg-darker)',
                                fontWeight: 'bold'
                            }}>
                                View Projects <FiArrowRight />
                            </a>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <a href="https://github.com/medgougriz" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontSize: '1.6rem', transition: 'all 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-3px)' }} onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                                    <FiGithub />
                                </a>
                                <a href="https://www.linkedin.com/in/mohamed-gougriz/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontSize: '1.6rem', transition: 'all 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-3px)' }} onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                                    <FiLinkedin />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', fontSize: '1.6rem', transition: 'all 0.3s' }} onMouseOver={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-3px)' }} onMouseOut={(e) => { e.currentTarget.style.color = 'var(--text-main)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                                    <FiInstagram />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Floating Tech Icons */}
                <div style={{ flex: '1 1 400px', height: '550px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        style={{ width: '100%', height: '100%', position: 'absolute' }}
                    >
                        {floatingIcons.map((item, index) => (
                            <motion.div
                                key={index}
                                style={{
                                    position: 'absolute',
                                    top: item.top,
                                    left: item.left,
                                    fontSize: item.size,
                                    background: 'var(--glass-bg)',
                                    padding: '20px',
                                    borderRadius: '20px',
                                    boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                                    border: '1px solid var(--glass-border)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backdropFilter: 'blur(10px)'
                                }}
                                animate={{
                                    y: [0, -30, 0],
                                    rotate: [0, 10, -10, 0]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    delay: item.delay,
                                    ease: "easeInOut"
                                }}
                                whileHover={{ scale: 1.15, rotate: 0 }}
                            >
                                {item.icon}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Home;
