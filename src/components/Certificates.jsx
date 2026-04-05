import { motion } from 'framer-motion';

const Certificates = () => {
    const certs = [
        { title: 'Advanced React patterns', issuer: 'Frontend Masters', date: '2023' },
        { title: 'Full-Stack Web Development', issuer: 'Coursera', date: '2022' },
        { title: 'UX/UI Design Foundations', issuer: 'Google', date: '2023' }
    ];

    return (
        <section className="section glass" style={{ margin: '0 20px', padding: '60px' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>
                        Professional <span className="text-gradient">Certificates</span>
                    </h2>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
                        {certs.map((cert, index) => (
                            <motion.div
                                key={index}
                                className="glass"
                                style={{ padding: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                                whileHover={{ scale: 1.02, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
                            >
                                <div>
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '5px' }}>{cert.title}</h3>
                                    <p style={{ color: 'var(--text-muted)' }}>{cert.issuer}</p>
                                </div>
                                <div style={{ fontWeight: 'bold', color: 'var(--accent)' }}>
                                    {cert.date}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certificates;
