import { motion } from 'framer-motion';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack online store with payment integration, user authentication, and admin dashboard.',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            link: '#'
        },
        {
            title: 'AI Dashboard',
            description: 'Interactive analytics dashboard with real-time data visualization and AI insights.',
            tags: ['React', 'Chart.js', 'Python', 'Tailwind'],
            link: '#'
        },
        {
            title: 'Portfolio Generator',
            description: 'A dynamic tool to generate beautiful developer portfolios using Drag & Drop interface.',
            tags: ['React', 'Framer Motion', 'Firebase'],
            link: '#'
        }
    ];

    return (
        <section className="section">
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
                                className="glass"
                                style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}
                                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.4)', borderColor: 'var(--accent-light)' }}
                            >
                                <div style={{ height: '200px', backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '8px', marginBottom: '20px' }}>
                                    {/* Placeholder for project image */}
                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                                        Project Preview
                                    </div>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '20px', flexGrow: 1 }}>{project.description}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
                                    {project.tags.map((tag, i) => (
                                        <span key={i} style={{ fontSize: '0.8rem', padding: '5px 10px', background: 'rgba(139, 92, 246, 0.1)', color: 'var(--accent-light)', borderRadius: '4px' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a href={project.link} className="btn btn-outline" style={{ justifyContent: 'center', width: '100%' }}>View Details</a>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
