import React from 'react';
import { ChevronRight, Globe, BarChart3 } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Blobs */}
            <div style={{
                position: 'absolute',
                top: '10%',
                right: '-5%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                zIndex: -1,
                borderRadius: '50%',
                filter: 'blur(40px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '-5%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
                zIndex: -1,
                borderRadius: '50%',
                filter: 'blur(40px)'
            }}></div>

            <div style={{ maxWidth: '800px' }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '8px 16px',
                    borderRadius: '100px',
                    background: 'var(--glass)',
                    border: '1px solid var(--glass-border)',
                    marginBottom: '24px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                }}>
                    <span style={{ color: 'var(--primary)' }}>●</span> Available for new projects
                </div>

                <h1 className="outfit" style={{
                    fontSize: 'clamp(3rem, 8vw, 5rem)',
                    lineHeight: '1.1',
                    fontWeight: '800',
                    marginBottom: '24px'
                }}>
                    Building Digital <span className="gradient-text">Masterpieces</span> That Drive Results.
                </h1>

                <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    color: 'var(--text-muted)',
                    marginBottom: '40px',
                    maxWidth: '600px'
                }}>
                    Elevate your brand with high-performance web development and strategic digital marketing. We turn your vision into a powerful online presence.
                </p>

                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                    <a href="#order" style={{
                        padding: '16px 32px',
                        background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                        borderRadius: '12px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)',
                        transition: 'var(--transition)'
                    }}
                        className="btn-primary"
                    >
                        Start Your Project <ChevronRight size={20} />
                    </a>

                    <a href="#portfolio" style={{
                        padding: '16px 32px',
                        background: 'var(--glass)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '12px',
                        fontWeight: '600',
                        transition: 'var(--transition)'
                    }}
                        className="btn-secondary"
                    >
                        View Work
                    </a>
                </div>
            </div>

            <style>{`
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px -5px rgba(99, 102, 241, 0.5);
        }
        .btn-secondary:hover {
          background: var(--surface-light);
          transform: translateY(-3px);
        }
      `}</style>
        </section>
    );
};

export default Hero;
