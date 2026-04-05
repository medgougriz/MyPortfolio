import { motion } from 'framer-motion';

const Home = () => {
    return (
        <section className="section" style={{ textAlign: 'center' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 style={{ color: 'var(--accent-light)', fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 500 }}>
                        Hello there,
                    </h3>
                    <h1 style={{ fontSize: '4.5rem', fontWeight: 700, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        I'm <span className="text-gradient">Mohamed Gougriz</span>
                    </h1>
                    <h2 style={{ fontSize: '2rem', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: 400 }}>
                        Crafting intuitive & vibrant web experiences.
                    </h2>
                    
                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px' }}>
                        <a href="#contact" className="btn btn-primary">
                            Explore Projects
                        </a>
                        <a href="/cv.pdf" className="btn btn-outline" download>
                            Download CV
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Home;
