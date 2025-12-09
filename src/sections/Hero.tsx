import { Shield, Heart, Eye, ArrowRight, Check } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import './Hero.css';

export default function Hero() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            // Here you would typically send the email to your backend
        }
    };

    return (
        <section className="hero">
            <div className="hero-bg-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text">
                    <div className="badge-pill">
                        <Shield size={16} />
                        <span>100% Anonymous & Secure</span>
                    </div>

                    <h1>Speak your truth, <br /> <span className="highlight">anonymously.</span></h1>

                    <p className="hero-sub">
                        Wahal is a safe space for strength and healing.
                        <strong> Coming soon to iOS & Android.</strong> <br />
                        Join the waitlist to get early access and community updates.
                    </p>

                    <div className="hero-cta" id="waitlist-form">
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="waitlist-form">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit" className="btn-waitlist">
                                    Join Waitlist <ArrowRight size={18} />
                                </button>
                            </form>
                        ) : (
                            <div className="success-message">
                                <div className="success-icon">
                                    <Check size={24} />
                                </div>
                                <div>
                                    <h4>You're on the list! 💜</h4>
                                    <p>We'll notify you when Wahal is ready.</p>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="trust-badges">
                        <div className="trust-item">
                            <Heart size={20} className="trust-icon" />
                            <span>Community Support</span>
                        </div>
                        <div className="trust-item">
                            <Eye size={20} className="trust-icon" />
                            <span>Zero Tracking</span>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    {/* CSS Phone Mockup */}
                    <div className="phone-mockup">
                        <div className="phone-frame">
                            <div className="phone-notch"></div>
                            <div className="phone-screen">
                                {/* Mock UI Header */}
                                <div className="mock-header">
                                    <div className="mock-brand">wah<span>❤️</span>l</div>
                                </div>

                                {/* Mock UI Content */}
                                <div className="mock-content">
                                    <div className="mock-card">
                                        <h3>Report Incident</h3>
                                        <p>Share as much or as little as you feel comfortable with.</p>
                                        <div className="mock-input"></div>
                                        <div className="mock-btn">Submit Report</div>
                                    </div>

                                    <div className="mock-toast-bw">
                                        <span>💜 You are brave for speaking up.</span>
                                    </div>
                                </div>

                                {/* Mock UI Tab Bar */}
                                <div className="mock-tabbar">
                                    <div className="tab active"></div>
                                    <div className="tab"></div>
                                    <div className="tab"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
