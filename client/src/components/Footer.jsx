import { Rocket, Github, Linkedin, Facebook, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="glass" style={{ padding: '60px 5% 30px', marginTop: '100px', borderLeft: 'none', borderRight: 'none', borderBottom: 'none' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '40px',
                marginBottom: '60px'
            }}>
                <div style={{ gridColumn: 'span 2' }}>
                    <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                        <Rocket size={32} color="var(--primary)" />
                        <span className="outfit" style={{ fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.5px' }}>
                            WEBIFY <span className="gradient-text">PRO</span>
                        </span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '400px' }}>
                        Empowering businesses with cutting-edge digital solutions. From Pakistan to the world, we build the future of the web.
                    </p>
                </div>

                <div>
                    <h4 className="outfit" style={{ fontWeight: '700', marginBottom: '20px' }}>Quick Links</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-muted)' }}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#order">Order</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="outfit" style={{ fontWeight: '700', marginBottom: '20px' }}>Connect</h4>
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                        <a href="https://www.linkedin.com/in/musab-iftikhar-94668a330" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--surface-light)', padding: '10px', borderRadius: '10px', color: 'var(--text-muted)', transition: 'var(--transition)' }} className="social-link"><Linkedin size={20} /></a>
                        <a href="https://www.facebook.com/webify.pro/" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--surface-light)', padding: '10px', borderRadius: '10px', color: 'var(--text-muted)', transition: 'var(--transition)' }} className="social-link"><Facebook size={20} /></a>
                        <a href="https://github.com/musab-18" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--surface-light)', padding: '10px', borderRadius: '10px', color: 'var(--text-muted)', transition: 'var(--transition)' }} className="social-link"><Github size={20} /></a>
                        <a href="https://wa.me/923708316591" target="_blank" rel="noopener noreferrer" style={{ background: 'var(--surface-light)', padding: '10px', borderRadius: '10px', color: 'var(--text-muted)', transition: 'var(--transition)' }} className="social-link"><MessageCircle size={20} /></a>
                        <a href="mailto:WEBIFYPRO9@GMAIL.COM" style={{ background: 'var(--surface-light)', padding: '10px', borderRadius: '10px', color: 'var(--text-muted)', transition: 'var(--transition)' }} className="social-link"><Mail size={20} /></a>
                    </div>
                    <style>{`
                        .social-link:hover {
                            color: var(--primary) !important;
                            transform: translateY(-3px);
                            background: rgba(99, 102, 241, 0.1) !important;
                        }
                    `}</style>
                </div>
            </div>

            <div style={{
                borderTop: '1px solid var(--glass-border)',
                paddingTop: '30px',
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.9rem'
            }}>
                <p>&copy; {new Date().getFullYear()} Webify Pro. All rights reserved.</p>
                <p style={{ marginTop: '5px' }}>Designed & Developed by <span style={{ color: 'var(--primary)' }}>Musab Iftikhar</span></p>
            </div>
        </footer>
    );
};

export default Footer;
