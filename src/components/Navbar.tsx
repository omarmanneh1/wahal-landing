import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container nav-content">
                <Link to="/" className="brand" style={{ textDecoration: 'none' }}>
                    <span className="brand-text">wah<span className="heart-icon">❤️</span>l</span>
                </Link>

                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    <a href="/#features">Features</a>
                    <a href="/#stories">Stories</a>
                    <a href="/#safety">Safety</a>
                    <button className="btn-primary" onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}>
                        Join Waitlist
                    </button>
                </div>

                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
}
