import { motion } from 'framer-motion';

const About = () => {
    const stats = [
        { label: 'Hours of Practice', value: '1,200+' },
        { label: 'Projects Done', value: '15+' },
        { label: 'GPA', value: '3.8/4.0' },
    ];

    return (
        <section className="section glass" id="about" style={{ margin: '0 5%', padding: '60px' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
                        <div>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)' }}>
                                I am a passionate web developer dedicated to building high-quality, responsive, and visually appealing web applications. My journey started with a fascination for how things work on the internet, which quickly turned into a career crafting seamless digital experiences.
                                <br/><br/>
                                Constantly learning and adapting to new technologies, I strive to write clean, efficient code and create interactive designs that leave a lasting impression.
                            </p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                            {stats.map((stat, index) => (
                                <motion.div 
                                    key={index}
                                    className="glass"
                                    style={{ padding: '30px', textAlign: 'center' }}
                                    whileHover={{ y: -10, borderColor: 'var(--accent)' }}
                                >
                                    <h3 style={{ fontSize: '2.5rem', color: 'var(--accent-light)', marginBottom: '10px' }}>{stat.value}</h3>
                                    <p style={{ color: 'var(--text-main)', fontWeight: 500 }}>{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
