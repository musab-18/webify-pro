import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass-nav shadow-2xl' : 'py-6 bg-transparent'}`} style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: '5%',
      paddingRight: '5%',
      transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
        <Rocket size={34} color="var(--primary)" />
        <span className="outfit" style={{ fontSize: '1.6rem', fontWeight: '900', letterSpacing: '-0.8px', textTransform: 'uppercase' }}>
          WEBIFY <span className="gradient-text">PRO</span>
        </span>
      </div>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} style={{
        display: 'flex',
        gap: '35px',
        fontWeight: '600',
        alignItems: 'center'
      }}>
        <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
        <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
        <li><a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a></li>
        <li><a href="#order" onClick={() => setIsMenuOpen(false)}>Order Now</a></li>
        <li>
          <a href="#contact"
            onClick={() => setIsMenuOpen(false)}
            style={{
              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
              padding: '12px 25px',
              borderRadius: '100px',
              color: 'white',
              boxShadow: '0 4px 15px rgba(99, 102, 241, 0.3)',
              transition: 'var(--transition)'
            }}
            className="nav-cta"
          >
            Contact Us
          </a>
        </li>
      </ul>

      <div className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ display: 'none', color: 'var(--text)' }}>
        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </div>

      <style>{`
        .glass-nav {
            background: rgba(3, 7, 18, 0.8) !important;
            backdrop-filter: blur(15px) !important;
            -webkit-backdrop-filter: blur(15px) !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
        }

        @media (max-width: 992px) {
          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 100%;
            height: 100vh;
            background: rgba(3, 7, 18, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 100;
            gap: 40px !important;
          }
          .nav-links.active {
            right: 0;
          }
          .mobile-menu-btn {
            display: block !important;
            z-index: 101;
            cursor: pointer;
          }
        }
        
        .nav-links li a {
          position: relative;
          color: var(--text-muted);
          transition: var(--transition);
          font-size: 0.95rem;
          letter-spacing: 0.3px;
        }
        
        .nav-links li a:not(.nav-cta):hover {
          color: var(--primary);
        }

        .nav-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(99, 102, 241, 0.45);
            filter: brightness(1.1);
        }
        
        .nav-links li a:not(.nav-cta)::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary);
          transition: var(--transition);
          border-radius: 2px;
        }
        
        .nav-links li a:not(.nav-cta):hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
