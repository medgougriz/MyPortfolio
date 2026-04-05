import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaPython } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb, SiFramer, SiTailwindcss, SiVite, SiJira, SiDjango, SiMysql } from 'react-icons/si';

const Tools = () => {
    const skills = [
        { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
        { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
        { name: 'React.js', icon: <FaReact color="#61DAFB" /> },
        { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
        { name: 'Express', icon: <SiExpress color="var(--text-main)" /> },
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        { name: 'Python', icon: <FaPython color="#3776AB" /> },
        { name: 'Django', icon: <SiDjango color="#2BA977" /> },
        { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
        { name: 'Git & GitHub', icon: <FaGithub color="var(--text-main)" /> },
        { name: 'Jira', icon: <SiJira color="#0052CC" /> },
        { name: 'Framer Motion', icon: <SiFramer color="#0055FF" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
        { name: 'Vite', icon: <SiVite color="#646CFF" /> }
    ];

    return (
        <section className="section" id="tools">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>
                        Tools & <span className="text-gradient">Technologies</span>
                    </h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                className="glass tool-card"
                                style={{ padding: '15px 25px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', fontWeight: 500 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <span style={{ fontSize: '1.4rem', display: 'flex' }}>
                                    {skill.icon}
                                </span>
                                {skill.name}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Tools;
