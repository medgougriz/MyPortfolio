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
        { icon: <FaReact color="#61DAFB" />, top: '8%', left: '12%', size: 45, delay: 0 },
        { icon: <SiJavascript color="#F7DF1E" />, top: '22%', left: '70%', size: 50, delay: 0.3 },
        { icon: <FaNodeJs color="#339933" />, top: '52%', left: '15%', size: 40, delay: 0.6 },
        { icon: <SiTailwindcss color="#06B6D4" />, top: '72%', left: '64%', size: 35, delay: 0.9 },
        { icon: <FaPython color="#3776AB" />, top: '36%', left: '43%', size: 55, delay: 1.2 },
        { icon: <SiMongodb color="#47A248" />, top: '8%', left: '54%', size: 30, delay: 1.5 },
        { icon: <SiTypescript color="#3178C6" />, top: '78%', left: '22%', size: 40, delay: 1.8 },
    ];

    return (
        <section className="section" id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', position: 'relative' }}>
            <div className="container hero-layout">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Pill Badge */}
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '12px',
                        padding: '10px 22px', borderRadius: '50px',
                        background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                        marginBottom: '24px', fontWeight: 600, fontSize: '1rem',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                        color: 'var(--text-main)'
                    }}>
                        <span>Hello, You, I'm</span>
                        <div style={{ position: 'relative', width: '100px', height: '24px', overflow: 'hidden' }}>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={titleIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
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
                        fontSize: 'clamp(2.6rem, 7vw, 5.2rem)',
                        fontWeight: 900,
                        marginBottom: '16px',
                        lineHeight: 1,
                        textShadow: '0 0 60px rgba(139, 92, 246, 0.4)',
                        color: 'var(--text-main)',
                        letterSpacing: '-1px',
                        textTransform: 'uppercase'
                    }}>
                        Mohamed <br /> GOUGRIZ
                    </h1>

                    {/* Subtitle */}
                    <h2 style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                        color: 'var(--text-muted)',
                        marginBottom: '34px',
                        fontWeight: 500,
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase'
                    }}>
                        Software Engineer
                    </h2>

                    {/* Action Buttons & Socials */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
                        <a href="#projects" className="btn" style={{
                            padding: '14px 30px',
                            borderRadius: '50px',
                            fontSize: '1.05rem',
                            background: 'var(--text-main)',
                            color: 'var(--bg-darker)',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'all 0.3s'
                        }}>
                            View Projects <FiArrowRight />
                        </a>

                        <div style={{ display: 'flex', gap: '18px' }}>
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

                <motion.div
                    className="hero-icons-panel"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    {floatingIcons.map((item, index) => (
                        <motion.div
                            key={index}
                            className="hero-tech-icon"
                            style={{
                                top: item.top,
                                left: item.left,
                                fontSize: item.size
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
                        >
                            {item.icon}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
