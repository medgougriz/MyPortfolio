import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Contact = () => {

    const iconStyle = {
        color: 'var(--text-main)',
        fontSize: '26px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '55px',
        height: '55px',
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
        <section className="section" id="contact">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4rem', textAlign: 'center' }}>
                        {/* Pill Badge */}
                        <div style={{ 
                            padding: '10px 24px', borderRadius: '50px', 
                            background: 'var(--glass-bg)', border: '1px solid var(--glass-border)',
                            marginBottom: '20px', fontWeight: 600, fontSize: '1rem',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                            color: 'var(--text-main)',
                            display: 'inline-block'
                        }}>
                            Get In Touch
                        </div>
                        
                        {/* Main Title */}
                        <h2 style={{ 
                            fontSize: 'clamp(3rem, 6vw, 4.5rem)', 
                            fontWeight: 800, 
                            marginBottom: '20px', 
                            lineHeight: 1.1,
                            textShadow: '0 0 40px rgba(0, 0, 0, 0.4)',
                            color: 'var(--text-main)',
                            letterSpacing: '-1.5px'
                        }}>
                            Let's Work Together
                        </h2>
                        
                        {/* Subtitle */}
                        <p style={{ 
                            fontSize: '1.2rem', 
                            color: 'var(--text-muted)', 
                            maxWidth: '650px', 
                            margin: '0 auto', 
                            lineHeight: 1.6 
                        }}>
                            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
                        </p>
                    </div>
                    
                    <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
                        {/* Email Form */}
                        <div className="glass" style={{ padding: '40px' }}>
                            <h3 style={{ marginBottom: '30px', fontSize: '1.8rem', textAlign: 'center' }}>Send a Message</h3>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                                    <input 
                                        type="text" 
                                        placeholder="Your Name" 
                                        style={{ padding: '15px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', color: 'var(--text-main)', fontFamily: 'inherit', width: '100%' }}
                                    />
                                    <input 
                                        type="email" 
                                        placeholder="Your Email" 
                                        style={{ padding: '15px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', color: 'var(--text-main)', fontFamily: 'inherit', width: '100%' }}
                                    />
                                </div>
                                <input 
                                    type="text" 
                                    placeholder="Subject" 
                                    style={{ padding: '15px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', color: 'var(--text-main)', fontFamily: 'inherit' }}
                                />
                                <textarea 
                                    placeholder="Your Message..." 
                                    rows="6"
                                    style={{ padding: '15px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', color: 'var(--text-main)', fontFamily: 'inherit', resize: 'vertical' }}
                                ></textarea>
                                <button type="button" className="btn btn-primary" style={{ justifyContent: 'center', padding: '15px', fontSize: '1.1rem', marginTop: '10px' }}>Send Email</button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            <footer style={{ marginTop: '80px', color: 'var(--text-muted)', textAlign: 'center', paddingBottom: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '20px', marginBottom: '25px' }}>
                    <a href="https://github.com/medgougriz" target="_blank" rel="noopener noreferrer" style={iconStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <FiGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/mohamed-gougriz/" target="_blank" rel="noopener noreferrer" style={iconStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <FiLinkedin />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={iconStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <FiInstagram />
                    </a>
                </div>
                <p>&copy; 2026 Mohamed Gougriz. All rights reserved.</p>
                <p style={{ marginTop: '10px', fontSize: '0.9rem', color: 'var(--accent)' }}>Designed and built with passion.</p>
            </footer>
        </section>
    );
};

export default Contact;
