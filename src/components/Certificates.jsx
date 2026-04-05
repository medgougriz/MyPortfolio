import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiAward, FiMaximize2, FiBriefcase, FiBookOpen, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import { certificatesData } from '../data/certificatesData';
import { educationData } from '../data/educationData';
import { experienceData } from '../data/experienceData';

const Certificates = () => {
    const [activeTab, setActiveTab] = useState('Experience');
    const [expandedExpIndex, setExpandedExpIndex] = useState(null);

    const tabs = ['Experience', 'Education', 'Certificates'];

    const data = {
        Experience: experienceData,
        Education: educationData,
        Certificates: certificatesData
    };

    const toggleExp = (index) => {
        setExpandedExpIndex(expandedExpIndex === index ? null : index);
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
                    <div style={{ maxWidth: activeTab === 'Certificates' ? '1000px' : '900px', margin: '0 auto', minHeight: '300px' }}>
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
                                            <a 
                                                href={item.pdf} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                style={{ 
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
                                    ) : activeTab === 'Education' ? (
                                        <motion.div
                                            key={index}
                                            className="glass tool-card"
                                            style={{ padding: '30px', display: 'flex', gap: '25px', alignItems: 'center', borderRadius: '16px' }}
                                            whileHover={{ scale: 1.01, x: 5 }}
                                        >
                                            {/* Purple Gradient Icon */}
                                            <div style={{ 
                                                width: '60px', height: '60px', 
                                                background: 'linear-gradient(135deg, #6366F1 0%, #A855F7 100%)', 
                                                borderRadius: '14px', 
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: 'white',
                                                fontSize: '1.8rem',
                                                boxShadow: '0 8px 16px rgba(168, 85, 247, 0.25)',
                                                flexShrink: 0
                                            }}>
                                                <FaGraduationCap />
                                            </div>

                                            <div style={{ flex: 1 }}>
                                                <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', color: 'var(--text-main)', fontWeight: 700, lineHeight: 1.3 }}>
                                                    {item.title}
                                                </h3>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '1rem' }}>
                                                    <FaUniversity style={{ opacity: 0.7 }} />
                                                    <span>{item.issuer} | {item.date}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        /* Experience Tab (Expandable) */
                                        <motion.div
                                            key={index}
                                            className="glass tool-card"
                                            style={{ padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px', borderRadius: '16px', overflow: 'hidden' }}
                                        >
                                            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                                {/* Company Avatar */}
                                                <div style={{ 
                                                    width: '55px', height: '55px', 
                                                    background: 'var(--glass-bg)', 
                                                    borderRadius: '50%', 
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    color: 'var(--text-main)',
                                                    fontSize: '1.4rem',
                                                    fontWeight: 800,
                                                    border: '1px solid var(--glass-border)',
                                                    flexShrink: 0
                                                }}>
                                                    {item.issuer.charAt(0)}
                                                </div>

                                                <div style={{ flex: 1 }}>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                                                        <h3 
                                                            onClick={() => toggleExp(index)}
                                                            style={{ fontSize: '1.25rem', color: 'var(--text-main)', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
                                                        >
                                                            {item.issuer} {expandedExpIndex === index ? <FiChevronUp /> : <FiChevronDown />}
                                                        </h3>
                                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.date}</span>
                                                    </div>
                                                    <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', margin: '4px 0 10px 0' }}>{item.title}</p>
                                                    <button 
                                                        onClick={() => toggleExp(index)}
                                                        style={{ background: 'none', border: 'none', padding: 0, color: 'var(--text-muted)', textDecoration: 'underline', fontSize: '0.9rem', cursor: 'pointer', opacity: 0.8 }}
                                                        onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                                                        onMouseOut={(e) => e.currentTarget.style.opacity = '0.8'}
                                                    >
                                                        Click to view details
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Expandable Content Area */}
                                            <AnimatePresence>
                                                {expandedExpIndex === index && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                                        style={{ overflow: 'hidden' }}
                                                    >
                                                        <div style={{ padding: '15px 0 0 75px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                                            {/* Tags */}
                                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                                                {item.tags.map((tag, i) => (
                                                                    <span key={i} style={{ background: 'rgba(255,255,255,0.05)', padding: '6px 14px', borderRadius: '50px', fontSize: '0.85rem', color: 'var(--text-main)', border: '1px solid var(--glass-border)' }}>{tag}</span>
                                                                ))}
                                                            </div>
                                                            {/* Summary */}
                                                            <p style={{ color: 'var(--text-main)', lineHeight: 1.6, fontSize: '1.05rem', opacity: 0.9 }}>{item.summary}</p>
                                                            {/* Details List */}
                                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                                                {item.details.map((detail, i) => (
                                                                    <li key={i} style={{ lineHeight: 1.5, fontSize: '1rem' }}>{detail}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
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
