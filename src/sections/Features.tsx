import { Shield, Phone, Eye } from 'lucide-react';
import './Features.css';

export default function Features() {
    const features = [
        {
            icon: <Shield size={24} />,
            title: "Trust Your Instincts",
            desc: "If something doesn't feel right, it probably isn't. Your feelings are valid and important.",
            color: "#F3E8FF" // Light purple bg for icon
        },
        {
            icon: <Phone size={24} />,
            title: "Keep Emergency Contacts",
            desc: "Save trusted contacts in your phone. Include local emergency services and support organizations.",
            color: "#F3E8FF"
        },
        {
            icon: <Eye size={24} />,
            title: "Stay Aware",
            desc: "Be mindful of your surroundings. Let trusted people know where you're going and when to expect you back.",
            color: "#F3E8FF"
        }
    ];

    return (
        <section className="features" id="features">
            <div className="container">
                <div className="section-header">
                    <h2>Safety Tips</h2>
                    <p>We prioritize your safety with built-in guides and resources.</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-card" key={index}>
                            <div className="feature-icon" style={{ backgroundColor: feature.color }}>
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
