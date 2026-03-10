import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';
            await axios.post(`${API_URL}/api/contact`, formData);

            setStatus('success');
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <section id="contact">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h2 className="outfit" style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '16px' }}>
                    Get In <span className="gradient-text">Touch</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                    Have a question or want to work together? Send us a message!
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px'
            }}>
                {/* Contact Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <h3 className="outfit" style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '10px' }}>Contact Information</h3>

                    <div className="glass" style={{ padding: '25px', borderRadius: '24px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '12px', borderRadius: '15px', color: 'var(--primary)' }}>
                            <Mail size={22} />
                        </div>
                        <div>
                            <h4 className="outfit" style={{ fontWeight: '700', fontSize: '1rem' }}>Email Us</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>WEBIFYPRO9@GMAIL.COM</p>
                        </div>
                    </div>

                    <div className="glass" style={{ padding: '25px', borderRadius: '24px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '12px', borderRadius: '15px', color: 'var(--primary)' }}>
                            <Phone size={22} />
                        </div>
                        <div>
                            <h4 className="outfit" style={{ fontWeight: '700', fontSize: '1rem' }}>Call Us</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>+923708316591</p>
                        </div>
                    </div>

                    <div className="glass" style={{ padding: '25px', borderRadius: '24px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '12px', borderRadius: '15px', color: 'var(--primary)' }}>
                            <MapPin size={22} />
                        </div>
                        <div>
                            <h4 className="outfit" style={{ fontWeight: '700', fontSize: '1rem' }}>Location</h4>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>SIALKOT PAKISTAN</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px'
                }}>
                    <input
                        type="text"
                        placeholder="Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{ padding: '15px', background: 'var(--surface-light)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'white', outline: 'none' }}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ padding: '15px', background: 'var(--surface-light)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'white', outline: 'none' }}
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ padding: '15px', background: 'var(--surface-light)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'white', outline: 'none' }}
                    />
                    <input
                        type="text"
                        placeholder="Subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        style={{ padding: '15px', background: 'var(--surface-light)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'white', outline: 'none' }}
                    />
                    <textarea
                        placeholder="Message"
                        required
                        rows="5"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{ gridColumn: 'span 2', padding: '15px', background: 'var(--surface-light)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'white', outline: 'none', resize: 'none' }}
                    ></textarea>
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        style={{
                            gridColumn: 'span 2',
                            padding: '16px',
                            background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                            borderRadius: '12px',
                            fontWeight: '700',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px'
                        }}
                    >
                        {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                        <Send size={20} />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
