import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
    const [messages, setMessages] = useState([
        { text: "Hi! I'm interested in your work.", sender: 'user' },
        { text: "Hello! Thank you. How can I help you today?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = (e) => {
        e.preventDefault();
        if(!input.trim()) return;
        setMessages([...messages, { text: input, sender: 'user' }]);
        setInput('');
        setTimeout(() => {
            setMessages(prev => [...prev, { text: "Thanks for reaching out! I'll get back to you soon.", sender: 'bot' }]);
        }, 1000);
    };

    return (
        <section className="section">
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
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '50px' }}>
                        {/* Email Form */}
                        <div className="glass" style={{ padding: '40px' }}>
                            <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Send a Message</h3>
                            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    style={{ padding: '15px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', fontFamily: 'inherit' }}
                                />
                                <input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    style={{ padding: '15px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', fontFamily: 'inherit' }}
                                />
                                <textarea 
                                    placeholder="Your Message..." 
                                    rows="5"
                                    style={{ padding: '15px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', fontFamily: 'inherit', resize: 'vertical' }}
                                ></textarea>
                                <button type="button" className="btn btn-primary" style={{ justifyContent: 'center' }}>Send Email</button>
                            </form>
                        </div>

                        {/* Live Chat Mockup */}
                        <div className="glass" style={{ padding: '30px', display: 'flex', flexDirection: 'column', height: '500px' }}>
                            <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '15px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></div>
                                <h3 style={{ fontSize: '1.2rem' }}>Live Chat</h3>
                            </div>
                            
                            <div style={{ flexGrow: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '15px', paddingRight: '10px' }}>
                                {messages.map((msg, i) => (
                                    <div key={i} style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', background: msg.sender === 'user' ? 'var(--accent)' : 'rgba(255,255,255,0.1)', padding: '10px 15px', borderRadius: '15px', maxWidth: '80%' }}>
                                        {msg.text}
                                    </div>
                                ))}
                            </div>

                            <form onSubmit={handleSend} style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                                <input 
                                    type="text" 
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type a message..." 
                                    style={{ flexGrow: 1, padding: '10px 15px', borderRadius: '20px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', fontFamily: 'inherit' }}
                                />
                                <button type="submit" className="btn btn-primary" style={{ borderRadius: '20px', padding: '10px 20px' }}>
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
            
            <footer style={{ marginTop: '80px', color: 'var(--text-muted)', textAlign: 'center', paddingBottom: '20px' }}>
                <p>&copy; 2026 Mohamed Gougriz. All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
