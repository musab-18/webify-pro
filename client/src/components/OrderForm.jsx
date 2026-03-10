import React, { useState } from 'react';
import axios from 'axios';
import { Send, CheckCircle } from 'lucide-react';

const OrderForm = () => {
    const [formData, setFormData] = useState({
        service: 'Web Development',
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        details: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';
            await axios.post(`${API_URL}/api/orders`, formData);

            setStatus('success');
            setFormData({ service: 'Web Development', customerName: '', customerEmail: '', customerPhone: '', details: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <section id="order">
            <div style={{
                maxWidth: '1000px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '1fr 1.2fr',
                gap: '60px',
                alignItems: 'center'
            }} className="order-container">
                <div>
                    <h2 className="outfit" style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '24px' }}>
                        Ready to <span className="gradient-text">Start?</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
                        Fill out the form to place your order or request a quote. We'll get back to you within 24 hours to discuss the details.
                    </p>

                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <CheckCircle size={24} color="var(--primary)" />
                            <span>Full custom design & development</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <CheckCircle size={24} color="var(--primary)" />
                            <span>Modern & High Performance Stack</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <CheckCircle size={24} color="var(--primary)" />
                            <span>24/7 Dedicated support</span>
                        </li>
                    </ul>
                </div>

                <form onSubmit={handleSubmit} className="glass" style={{
                    padding: '40px',
                    borderRadius: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px'
                }}>
                    <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Service</label>
                        <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                background: 'var(--surface-light)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '10px',
                                color: 'var(--text)',
                                outline: 'none'
                            }}
                        >
                            <option>Web Development</option>
                            <option>Digital Marketing</option>
                            <option>Mobile Application</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Your Name</label>
                        <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.customerName}
                            onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                background: 'var(--surface-light)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '10px',
                                color: 'var(--text)',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Your Email</label>
                        <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={formData.customerEmail}
                            onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                background: 'var(--surface-light)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '10px',
                                color: 'var(--text)',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Your Phone</label>
                        <input
                            type="tel"
                            required
                            placeholder="+1 234 567 890"
                            value={formData.customerPhone}
                            onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                background: 'var(--surface-light)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '10px',
                                color: 'var(--text)',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div className="form-group">
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Project Details</label>
                        <textarea
                            rows="4"
                            required
                            placeholder="Tell us about your project..."
                            value={formData.details}
                            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                background: 'var(--surface-light)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '10px',
                                color: 'var(--text)',
                                outline: 'none',
                                resize: 'none'
                            }}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        style={{
                            padding: '16px',
                            background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                            borderRadius: '10px',
                            fontWeight: '700',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            marginTop: '10px'
                        }}
                    >
                        {status === 'loading' ? 'Processing...' : status === 'success' ? 'Order Placed!' : 'Place Order'}
                        {status !== 'success' && <Send size={20} />}
                    </button>

                    {status === 'error' && <p style={{ color: '#ef4444', textAlign: 'center', fontSize: '0.9rem' }}>Something went wrong. Please try again.</p>}
                </form>
            </div>

            <style>{`
        @media (max-width: 992px) {
          .order-container {
            grid-template_columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
};

export default OrderForm;
