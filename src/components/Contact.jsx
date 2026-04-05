import { motion } from 'framer-motion';

const Contact = () => {

    return (
        <section className="section" id="contact">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>
                        Let's <span className="text-gradient">Connect</span>
                    </h2>
                    
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
            
            <footer style={{ marginTop: '80px', color: 'var(--text-muted)', textAlign: 'center', paddingBottom: '120px' }}>
                <p>&copy; 2026 Mohamed Gougriz. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
