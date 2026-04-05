import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

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
            { title: 'Advanced React patterns', issuer: 'Frontend Masters', date: '2023' },
            { title: 'Full-Stack Web Development', issuer: 'Coursera', date: '2022' },
            { title: 'UX/UI Design Foundations', issuer: 'Google', date: '2023' }
        ]
    };

    return (
        <section className="section glass" id="certificates" style={{ margin: '0 20px', padding: '60px' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>
                        Professional <span className="text-gradient">Journey</span>
                    </h2>
                    
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
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto', minHeight: '300px' }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                            >
                                {data[activeTab].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        className="glass tool-card"
                                        style={{ padding: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div>
                                            <h3 style={{ fontSize: '1.3rem', marginBottom: '5px' }}>{item.title}</h3>
                                            <p style={{ color: 'var(--text-muted)' }}>{item.issuer}</p>
                                        </div>
                                        <div style={{ fontWeight: 'bold', color: 'var(--accent)' }}>
                                            {item.date}
                                        </div>
                                    </motion.div>
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
