import { motion } from 'framer-motion';
import { FiClock, FiBriefcase, FiBookOpen, FiBox, FiEye, FiDownload } from 'react-icons/fi';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiMongodb, SiTailwindcss, SiTypescript, SiMysql, SiDjango } from 'react-icons/si';

const About = () => {
    return (
        <section className="section" id="about" style={{ margin: '0 5%', padding: '80px 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    {/* Top Header */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem', textAlign: 'center' }}>
                        <div style={{ 
                            padding: '10px 24px', borderRadius: '50px', 
                            background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                            marginBottom: '20px', fontWeight: 600, fontSize: '1rem',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                            color: 'var(--text-main)',
                            display: 'inline-block'
                        }}>
                            About Me
                        </div>
                        
                        <h2 style={{ 
                            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                            fontWeight: 800, 
                            marginBottom: '20px', 
                            lineHeight: 1.1,
                            textShadow: '0 0 40px rgba(0, 0, 0, 0.4)',
                            color: 'var(--text-main)',
                            letterSpacing: '-1.5px'
                        }}>
                            My Journey & Expertise
                        </h2>
                        
                        <p style={{ 
                            fontSize: '1.2rem', 
                            color: 'var(--text-muted)', 
                            maxWidth: '700px', 
                            margin: '0 auto', 
                            lineHeight: 1.6 
                        }}>
                            A passionate developer creating exceptional digital experiences through design and code.
                        </p>
                    </div>

                    {/* Main Content Split */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                        
                        {/* Left Side: Modern Asymmetrical Skill Tiles */}
                        <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ position: 'relative', width: '100%', maxWidth: '400px', height: '400px' }}>
                                
                                {/* Central Large Card */}
                                <motion.div 
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ position: 'absolute', top: '20%', left: '25%', width: '160px', height: '160px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', zIndex: 3, backdropFilter: 'blur(10px)' }}
                                    whileHover={{ y: -10 }}
                                >
                                    <FaReact color="#61DAFB" style={{ fontSize: '4.5rem', marginBottom: '10px' }} />
                                    <span style={{ color: 'var(--text-main)', fontWeight: 'bold', fontSize: '1.1rem' }}>React JS</span>
                                </motion.div>

                                {/* Top Left Card */}
                                <motion.div 
                                    initial={{ x: -30, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    style={{ position: 'absolute', top: '5%', left: '5%', width: '110px', height: '110px', background: 'linear-gradient(135deg, rgba(51, 153, 51, 0.15) 0%, var(--glass-bg) 100%)', border: '1px solid var(--glass-border)', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', zIndex: 2 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <FaNodeJs color="#339933" style={{ fontSize: '2.5rem', marginBottom: '8px' }} />
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Node.js</span>
                                </motion.div>

                                {/* Top Right Card */}
                                <motion.div 
                                    initial={{ x: 30, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    style={{ position: 'absolute', top: '8%', right: '5%', width: '130px', height: '100px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', zIndex: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <FaPython color="#3776AB" style={{ fontSize: '2.5rem', marginBottom: '8px' }} />
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Python</span>
                                </motion.div>

                                {/* Bottom Left Card */}
                                <motion.div 
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    style={{ position: 'absolute', bottom: '15%', left: '10%', width: '120px', height: '120px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 15px 35px rgba(0,0,0,0.15)', zIndex: 4 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <SiTailwindcss color="#06B6D4" style={{ fontSize: '3rem', marginBottom: '8px' }} />
                                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>Tailwind</span>
                                </motion.div>

                                {/* Bottom Right Card */}
                                <motion.div 
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    style={{ position: 'absolute', bottom: '5%', right: '15%', width: '140px', height: '140px', background: 'linear-gradient(135deg, rgba(71, 162, 72, 0.15) 0%, var(--glass-bg) 100%)', border: '1px solid var(--glass-border)', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 15px 35px rgba(0,0,0,0.15)', zIndex: 2 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <SiMongodb color="#47A248" style={{ fontSize: '3.5rem', marginBottom: '10px' }} />
                                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>MongoDB</span>
                                </motion.div>

                                {/* Floating Decor Elements */}
                                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', top: '40%', right: '0%', width: '60px', height: '60px', background: 'var(--bg-darker)', borderRadius: '15px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}>
                                    <SiTypescript color="#3178C6" style={{ fontSize: '1.8rem' }} />
                                </motion.div>
                                
                                <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1, ease: 'easeInOut' }} style={{ position: 'absolute', bottom: '35%', left: '0%', width: '50px', height: '50px', background: 'var(--bg-darker)', borderRadius: '50%', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1, boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}>
                                    <SiDjango color="#2BA977" style={{ fontSize: '1.5rem' }} />
                                </motion.div>

                            </div>
                        </div>

                        {/* Right Side: Info & bio */}
                        <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <h3 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '20px' }}>I'm Mohamed GOUGRIZ</h3>
                            
                            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
                                I am an engineering student prioritizing Digital Development and Information Systems. With experience building web applications using React, Node.js, Express, MongoDB, Python, Django, MySQL, and REST API integration. I have completed several projects including AI/ML components, and I am accustomed to working with Git/GitHub, Jira, Docker, and modern architectures like MVC.
                            </p>
                            
                            <p style={{ fontSize: '1.15rem', color: 'var(--text-main)', lineHeight: '1.8', marginBottom: '35px', fontWeight: 500 }}>
                                I am looking for a PFA internship to contribute to real-world projects and grow within a technical team.
                            </p>

                            {/* Info Grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', width: '100%', marginBottom: '40px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500, fontSize: '0.95rem' }}><FiClock style={{ color: '#10B981', fontSize: '1.2rem' }}/> Available: 20hrs/week</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500, fontSize: '0.95rem' }}><FiBriefcase style={{ color: '#F59E0B', fontSize: '1.2rem' }}/> 2+ Years Experience</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500, fontSize: '0.95rem' }}><FiBookOpen style={{ color: '#EF4444', fontSize: '1.2rem' }}/> Continuous Learner</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-main)', fontWeight: 500, fontSize: '0.95rem' }}><FiBox style={{ color: '#3B82F6', fontSize: '1.2rem' }}/> 15+ Projects Completed</div>
                            </div>

                            {/* Buttons */}
                            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                                <a href="/Mohamed_Gougriz_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn" style={{ 
                                    padding: '12px 25px', borderRadius: '8px', 
                                    background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', 
                                    color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '8px',
                                    fontWeight: 600, transition: 'all 0.3s'
                                }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--text-main)' }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--glass-border)' }}>
                                    <FiEye /> View CV
                                </a>
                                <a href="/Mohamed_Gougriz_CV.pdf" download className="btn" style={{ 
                                    padding: '12px 25px', borderRadius: '8px', 
                                    background: 'var(--text-main)', color: 'var(--bg-darker)',
                                    display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600,
                                    border: '1px solid var(--text-main)'
                                }}>
                                    <FiDownload /> Download CV
                                </a>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
