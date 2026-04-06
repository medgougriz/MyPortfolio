import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FiGithub, FiX } from 'react-icons/fi';

import { projectsData } from '../data/projectsData';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // Disable background scrolling and hide navbar when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('hide-nav');
        } else {
            document.body.style.overflow = 'unset';
            document.body.classList.remove('hide-nav');
        }
        return () => { 
            document.body.style.overflow = 'unset'; 
            document.body.classList.remove('hide-nav');
        };
    }, [selectedProject]);

    const projects = projectsData;

    return (
        <section className="section" id="projects">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>
                        Selected <span className="text-gradient">Projects</span>
                    </h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="glass tool-card"
                                style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}
                                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
                            >
                                <div style={{ height: '220px', backgroundColor: 'rgba(255,255,255,0.02)', borderRadius: '12px', marginBottom: '20px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                                    <img 
                                        src={project.img} 
                                        alt={project.title} 
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                        className="project-image"
                                    />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '20px', flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{project.description}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} style={{ fontSize: '0.8rem', padding: '5px 10px', background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent-light)', borderRadius: '4px' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <button 
                                    onClick={() => setSelectedProject(project)} 
                                    className="btn btn-outline" 
                                    style={{ justifyContent: 'center', width: '100%', cursor: 'pointer', fontFamily: 'inherit' }}
                                >
                                    View Details
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Popup Modal Overlay */}
            {createPortal(
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: 'fixed',
                                top: 0, left: 0, right: 0, bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                backdropFilter: 'blur(8px)',
                                zIndex: 99999,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '20px'
                            }}
                            onClick={() => setSelectedProject(null)}
                        >
                            <motion.div 
                                initial={{ scale: 0.9, y: 30, opacity: 0 }}
                                animate={{ scale: 1, y: 0, opacity: 1 }}
                                exit={{ scale: 0.9, y: 30, opacity: 0 }}
                                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                                style={{
                                    width: '100%',
                                    maxWidth: '800px',
                                    background: 'var(--bg-darker)',
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.3)',
                                    border: '1px solid var(--glass-border)'
                                }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Button */}
                                <button 
                                    onClick={() => setSelectedProject(null)}
                                    style={{ position: 'absolute', top: '20px', right: '20px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-main)', fontSize: '20px', cursor: 'pointer', width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, transition: 'all 0.3s' }}
                                    onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)'; e.currentTarget.style.color = 'var(--accent)'; }}
                                    onMouseOut={(e) => { e.currentTarget.style.background = 'var(--glass-bg)'; e.currentTarget.style.color = 'var(--text-main)'; }}
                                >
                                    <FiX />
                                </button>

                                {/* Top Image Mockup Banner */}
                                <div style={{ 
                                    height: '280px', 
                                    background: 'linear-gradient(135deg, var(--bg-darker) 0%, rgba(139,92,246,0.1) 100%)', 
                                    position: 'relative', 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    borderBottom: '1px solid var(--glass-border)',
                                    overflow: 'hidden'
                                }}>
                                    {/* Blurred Background Image for depth */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        backgroundImage: `url(${selectedProject.img})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        filter: 'blur(20px) brightness(0.3)',
                                        opacity: 0.5,
                                        zIndex: 0
                                    }}></div>

                                    <h3 style={{ fontSize: '1rem', color: 'var(--text-main)', zPosition: 2, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '3px', opacity: 0.7, position: 'relative' }}>
                                        {selectedProject.title}
                                    </h3>

                                    {/* Stylized Laptop Mockup */}
                                    <div style={{ position: 'relative', zIndex: 2 }}>
                                        {/* Screen */}
                                        <div style={{ 
                                            width: '320px', 
                                            height: '180px', 
                                            background: '#111', 
                                            border: '8px solid #222', 
                                            borderRadius: '12px 12px 0 0', 
                                            overflow: 'hidden',
                                            boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                            position: 'relative'
                                        }}>
                                            <img 
                                                src={selectedProject.img} 
                                                alt={selectedProject.title} 
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                            />
                                        </div>
                                        {/* Base */}
                                        <div style={{ 
                                            width: '380px', 
                                            height: '12px', 
                                            background: '#333', 
                                            borderRadius: '0 0 10px 10px',
                                            marginLeft: '-30px',
                                            position: 'relative',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                                        }}>
                                            {/* Trackpad notch */}
                                            <div style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                width: '60px',
                                                height: '4px',
                                                background: '#222',
                                                borderRadius: '0 0 4px 4px'
                                            }}></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Content Area */}
                                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', gap: '20px', background: 'var(--bg-darker)' }}>
                                    <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)' }}>{selectedProject.title}</h3>
                                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '1rem' }}>
                                        {selectedProject.description}
                                    </p>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px' }}>
                                        {selectedProject.tags.map((tag, i) => (
                                            <span key={i} style={{ fontSize: '0.85rem', padding: '6px 12px', background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent)', borderRadius: '20px', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" style={{
                                        marginTop: '15px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '10px',
                                        background: 'var(--accent)',
                                        color: 'white',
                                        padding: '15px',
                                        borderRadius: '10px',
                                        textDecoration: 'none',
                                        fontWeight: 'bold',
                                        fontSize: '1.1rem',
                                        transition: 'opacity 0.3s, transform 0.2s',
                                        boxShadow: '0 5px 15px rgba(139, 92, 246, 0.2)'
                                    }}
                                    onMouseOver={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                                    onMouseOut={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
                                    onMouseDown={(e) => e.currentTarget.style.transform = 'translateY(1px)'}
                                    >
                                        <FiGithub style={{ fontSize: '1.3rem' }} />
                                        Source Code
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
};

export default Projects;
