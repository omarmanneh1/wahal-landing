import { Shield, Heart, Eye, ArrowRight, Check, Home as HomeIcon } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useState, type FormEvent } from 'react';
import './Hero.css';

export default function Hero() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isDuplicate, setIsDuplicate] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setIsLoading(true);
        setErrorMsg('');
        setIsDuplicate(false);

        try {
            const { error } = await supabase
                .from('waitlist')
                .insert({ email });

            if (error) {
                if (error.code === '23505') { // Unique violation
                    setIsSubmitted(true);
                    setIsDuplicate(true);
                } else {
                    throw error;
                }
            } else {
                setIsSubmitted(true);
            }
        } catch (err: any) {
            console.error('Error submitting:', err);
            setErrorMsg('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
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
                            <>
                                <form onSubmit={handleSubmit} className="waitlist-form">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={isLoading}
                                        required
                                    />
                                    <button type="submit" className="btn-waitlist" disabled={isLoading}>
                                        {isLoading ? 'Joining...' : <>Join Waitlist <ArrowRight size={18} /></>}
                                    </button>
                                </form>
                                {errorMsg && <p className="error-text" style={{ color: 'red', fontSize: '0.8rem', marginTop: '8px' }}>{errorMsg}</p>}
                            </>
                        ) : (
                            <div className="success-message">
                                <div className="success-icon">
                                    <Check size={24} />
                                </div>
                                <div>
                                    <h4>{isDuplicate ? "You're already on the list! 💜" : "You're on the list! 💜"}</h4>
                                    <p>{isDuplicate ? "We'll let you know when we launch." : "We'll notify you when Wahal is ready."}</p>
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

                <div className="hero-visual-3d">
                    <div className="carousel-scene">
                        <div className="carousel-slat">

                            {/* Phone 1: Report Incident (Center Start) */}
                            <div className="phone-3d phone-1">
                                <div className="phone-frame">
                                    <div className="phone-notch"></div>
                                    <div className="phone-screen">
                                        <div className="mock-nav">
                                            <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
                                            <span>Report Incident</span>
                                        </div>
                                        <div className="mock-content p-4">
                                            <div className="mock-card lg">
                                                <h3>Please describe the incident</h3>
                                                <p className="sm-text">Share as much or as little as you feel comfortable with...</p>
                                                <div className="mock-input-lg"></div>
                                                <div className="mock-btn-lg">Submit Report</div>
                                            </div>
                                            <div className="mock-toast-lilac">
                                                <span>💜 You remember you are brave.</span>
                                            </div>
                                        </div>
                                        <MockTabbar active="report" />
                                    </div>
                                </div>
                            </div>

                            {/* Phone 2: Safety Tips (Right) */}
                            <div className="phone-3d phone-2">
                                <div className="phone-frame">
                                    <div className="phone-notch"></div>
                                    <div className="phone-screen bg-white">
                                        <div className="mock-nav">
                                            <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
                                            <span>Safety Tips</span>
                                        </div>
                                        <div className="mock-list-cards">
                                            <div className="mock-card-row">
                                                <div className="icon-sq">🛡️</div>
                                                <div className="col">
                                                    <h4>Trust Instincts</h4>
                                                    <div className="line l1"></div>
                                                    <div className="line l2"></div>
                                                </div>
                                            </div>
                                            <div className="mock-card-row">
                                                <div className="icon-sq">📞</div>
                                                <div className="col">
                                                    <h4>Emergency Contacts</h4>
                                                    <div className="line l1"></div>
                                                    <div className="line l2"></div>
                                                </div>
                                            </div>
                                            <div className="mock-card-row">
                                                <div className="icon-sq">👁️</div>
                                                <div className="col">
                                                    <h4>Stay Aware</h4>
                                                    <div className="line l1"></div>
                                                    <div className="line l2"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <MockTabbar active="safety" />
                                    </div>
                                </div>
                            </div>

                            {/* Phone 3: Stories/Home (Left / Back) */}
                            <div className="phone-3d phone-3">
                                <div className="phone-frame">
                                    <div className="phone-notch"></div>
                                    <div className="phone-screen bg-dots">
                                        <div className="mock-header-home">
                                            <h3>Stories Feed</h3>
                                            <span className="link">Help</span>
                                        </div>
                                        <div className="mock-feed">
                                            <div className="mock-story-card">
                                                <div className="dots">...</div>
                                                <p>"To anyone reading this: you are not alone..."</p>
                                                <div className="mock-interactions">
                                                    <span>💜 8</span> <span>💬 0</span>
                                                </div>
                                            </div>
                                            <div className="mock-story-card">
                                                <div className="dots">...</div>
                                                <p>"I found strength in speaking up..."</p>
                                                <div className="mock-interactions">
                                                    <span>💜 6</span> <span>💬 1</span>
                                                </div>
                                            </div>
                                        </div>
                                        <MockTabbar active="home" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function MockTabbar({ active }: { active: string }) {
    return (
        <div className="mock-tabbar">
            <div className={`tab-item ${active === 'home' ? 'active' : ''}`}>
                <HomeIcon size={20} />
                <span>Home</span>
            </div>
            <div className={`tab-item ${active === 'safety' ? 'active' : ''}`}>
                <Shield size={20} />
                <span>Safety</span>
            </div>
            <div className={`tab-item ${active === 'report' ? 'active' : ''}`}>
                <div className="alert-icon"><ArrowRight size={16} style={{ transform: 'rotate(-90deg)' }} /></div>
                <span>Report</span>
            </div>
        </div>
    )
}
