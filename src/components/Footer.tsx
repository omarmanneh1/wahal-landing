import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <span className="brand-text white">wah<span className="heart-icon">❤️</span>l</span>
                    <p>Speak your truth. Share your story. Heal together.</p>
                </div>

                <div className="footer-links">
                    <div className="link-group">
                        <h4>App</h4>
                        <Link to="/">Home</Link>
                        <a href="/#features">Features</a>
                        <a href="/#safety">Safety</a>
                    </div>

                    <div className="link-group">
                        <h4>Legal</h4>
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                        <Link to="/guidelines">Community Guidelines</Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Wahal. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
