import React from 'react';
import { Code2, Megaphone, Cpu, Smartphone } from 'lucide-react';

const services = [
    {
        icon: <Code2 size={32} />,
        title: "Web Development",
        desc: "Custom high-performance websites built with Java, HTML, CSS, Node.js, React, and the full MERN stack."
    },
    {
        icon: <Megaphone size={32} />,
        title: "Digital Marketing",
        desc: "Specializing in Meta Ads, Facebook Page growth, and comprehensive digital strategies to boost your online presence."
    },
    {
        icon: <Smartphone size={32} />,
        title: "Mobile Application",
        desc: "Performance-driven cross-platform mobile apps built with Flutter for both iOS and Android."
    },
    {
        icon: <Cpu size={32} />,
        title: "Social Media Management",
        desc: "Building and managing your brand presence across all major social media platforms."
    }
];

const Services = () => {
    return (
        <section id="services">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 className="outfit" style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '16px' }}>
                    Our Professional <span className="gradient-text">Services</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    We provide a comprehensive range of digital solutions tailored to your business needs.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px'
            }}>
                {services.map((service, index) => (
                    <div key={index} className="glass" style={{
                        padding: '40px',
                        borderRadius: '24px',
                        transition: 'var(--transition)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            color: 'var(--primary)',
                            marginBottom: '20px',
                            display: 'inline-block',
                            padding: '12px',
                            background: 'rgba(99, 102, 241, 0.1)',
                            borderRadius: '12px'
                        }}>
                            {service.icon}
                        </div>
                        <h3 className="outfit" style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '12px' }}>
                            {service.title}
                        </h3>
                        <p style={{ color: 'var(--text-muted)' }}>
                            {service.desc}
                        </p>

                        <style>{`
              .glass:hover {
                transform: translateY(-10px);
                border-color: var(--primary);
                background: rgba(255, 255, 255, 0.05);
              }
            `}</style>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
