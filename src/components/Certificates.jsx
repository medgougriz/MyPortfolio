import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiAward, FiMaximize2, FiBriefcase, FiBookOpen } from 'react-icons/fi';

const Certificates = () => {
    const [activeTab, setActiveTab] = useState('Experience');

    const tabs = ['Experience', 'Education', 'Certificates'];

    const data = {
        Experience: [
            { title: 'Frontend Developer', issuer: 'Tech Company', date: '2023 - Present' },
            { title: 'Web Developer Intern', issuer: 'Web Agency', date: '2022 - 2023' }
        ],
        Education: [
            { title: 'Bachelor in Computer Science', issuer: 'University Name', date: '2019 - 2023' },
            { title: 'Web Development Bootcamp', issuer: 'Coding Academy', date: '2022' }
        ],
        Certificates: [
            { title: 'React Native', issuer: 'Meta', date: 'Jan 2026' },
            { title: 'React Basics', issuer: 'Meta', date: 'Jan 2026' },
            { title: 'UX/UI Design Foundations', issuer: 'Google', date: '2023' }
        ]
    };

    return (
        <section className="section" id="certificates" style={{ margin: '0 5%', padding: '80px 0' }}>
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
                            Timeline
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
                            Professional Journey
                        </h2>
                        
                        {/* Subtitle */}
                        <p style={{ 
                            fontSize: '1.2rem', 
                            color: 'var(--text-muted)', 
                            maxWidth: '650px', 
                            margin: '0 auto', 
                            lineHeight: 1.6 
                        }}>
                            Explore my academic path and professional experience, detailing how I've built my foundation in software development.
                        </p>
                    </div>
                    
                    {/* Tabs Navigation */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    fontSize: '1.2rem',
                                    fontWeight: '600',
                                    color: activeTab === tab ? 'var(--text-main)' : 'var(--text-muted)',
                                    cursor: 'pointer',
                                    position: 'relative',
                                    padding: '10px 20px',
                                    transition: 'color 0.3s ease'
                                }}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="tab-indicator"
                                        style={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            height: '3px',
                                            background: 'var(--accent)',
                                            borderRadius: '3px'
                                        }}
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div style={{ maxWidth: activeTab === 'Certificates' ? '1000px' : '800px', margin: '0 auto', minHeight: '300px' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                style={activeTab === 'Certificates' ? { 
                                    display: 'grid', 
                                    gridTemplateColumns: 'repeat(2, 1fr)', 
                                    gap: '20px',
                                    maxWidth: '900px',
                                    margin: '0 auto'
                                } : { 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    gap: '20px' 
                                }}
                            >
                                {data[activeTab].map((item, index) => (
                                    activeTab === 'Certificates' ? (
                                        <motion.div
                                            key={index}
                                            className="glass tool-card"
                                            style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', borderRadius: '16px' }}
                                            whileHover={{ scale: 1.02, y: -5 }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                                <div style={{ 
                                                    width: '55px', height: '55px', 
                                                    background: 'rgba(139, 92, 246, 0.1)', 
                                                    borderRadius: '12px', 
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    color: 'var(--accent)',
                                                    fontSize: '1.6rem'
                                                }}>
                                                    <FiAward />
                                                </div>
                                                <div>
                                                    <h3 style={{ fontSize: '1.15rem', marginBottom: '4px', color: 'var(--text-main)', fontWeight: 700 }}>{item.title}</h3>
                                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.issuer} &bull; {item.date}</p>
                                                </div>
                                            </div>
                                            <a href="#" style={{ 
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                                width: '100%', padding: '12px', 
                                                background: 'transparent',
                                                border: '1px solid var(--glass-border)',
                                                borderRadius: '8px', color: 'var(--text-main)',
                                                textDecoration: 'none', fontWeight: 600, fontSize: '0.95rem',
                                                transition: 'all 0.3s'
                                            }}
                                            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
                                            onMouseOut={(e) => { e.currentTarget.style.background = 'transparent' }}
                                            >
                                                <FiMaximize2 style={{ color: '#3B82F6' }}/> 
                                                View Certificate
                                            </a>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key={index}
                                            className="glass tool-card"
                                            style={{ padding: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                                <div style={{ 
                                                    width: '45px', height: '45px', 
                                                    background: 'rgba(139, 92, 246, 0.1)', 
                                                    borderRadius: '10px', 
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    color: 'var(--accent)',
                                                    fontSize: '1.2rem'
                                                }}>
                                                    {activeTab === 'Experience' ? <FiBriefcase /> : <FiBookOpen />}
                                                </div>
                                                <div>
                                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{item.title}</h3>
                                                    <p style={{ color: 'var(--text-muted)' }}>{item.issuer}</p>
                                                </div>
                                            </div>
                                            <div style={{ fontWeight: 'bold', color: 'var(--accent)', fontSize: '1rem' }}>
                                                {item.date}
                                            </div>
                                        </motion.div>
                                    )
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certificates;
