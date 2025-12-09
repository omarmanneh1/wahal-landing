import { Heart } from 'lucide-react';
import './Stories.css';

const SAMPLE_STORIES = [
    {
        text: "To anyone reading this: you are not alone. There are people who care and want to help.",
        date: "4d ago", hearts: 8, comments: 0, color: "#E6D5F8"
    },
    {
        text: "I found strength in speaking up. It wasn't easy, but I'm healing one day at a time.",
        date: "4d ago", hearts: 6, comments: 1, color: "#F3E8FF"
    },
    {
        text: "I'm learning to trust again. It's scary but I'm finding my voice.",
        date: "2d ago", hearts: 12, comments: 3, color: "#E6D5F8"
    },
    {
        text: "Thank you to this community for being my safe haven when I had nowhere else to turn.",
        date: "5h ago", hearts: 24, comments: 5, color: "#FFF0F0"
    },
    {
        text: "Reporting was the first step to taking my power back.",
        date: "1d ago", hearts: 15, comments: 2, color: "#F0F8FF"
    }
];

export default function Stories() {
    // Duplicate stories to create infinite scroll effect
    const marqueeStories = [...SAMPLE_STORIES, ...SAMPLE_STORIES, ...SAMPLE_STORIES];

    return (
        <section className="stories" id="stories">
            <div className="container">
                <div className="section-header">
                    <h2>Stories Feed</h2>
                    <p>Real stories. Real strength. Zero identity revealed.</p>
                </div>

                <div className="marquee-container">
                    {/* Column 1 - Slow */}
                    <div className="marquee-column">
                        <div className="marquee-track slow">
                            {marqueeStories.map((story, i) => (
                                <StoryPhoneCard key={`c1-${i}`} story={story} />
                            ))}
                        </div>
                    </div>

                    {/* Column 2 - Fast (Reverse direction visually or speed offset) */}
                    <div className="marquee-column offset-top">
                        <div className="marquee-track fast">
                            {marqueeStories.map((story, i) => (
                                <StoryPhoneCard key={`c2-${i}`} story={story} />
                            ))}
                        </div>
                    </div>

                    {/* Column 3 - Medium */}
                    <div className="marquee-column mobile-hide">
                        <div className="marquee-track medium">
                            {marqueeStories.map((story, i) => (
                                <StoryPhoneCard key={`c3-${i}`} story={story} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="stories-overlay"></div>
            </div>
        </section>
    );
}

function StoryPhoneCard({ story }: { story: any }) {
    return (
        <div className="phone-card">
            <div className="phone-card-notch"></div>
            <div className="phone-card-content">
                <div className="pc-header">
                    <div className="pc-avatar"></div>
                    <div className="pc-user-line"></div>
                </div>
                <div className="pc-body">
                    <p>"{story.text}"</p>
                </div>
                <div className="pc-footer">
                    <div className="pc-pill" style={{ background: story.color }}>
                        <Heart size={12} fill="#9B6BC2" stroke="#9B6BC2" /> <span>{story.hearts}</span>
                    </div>
                    <div className="pc-date">{story.date}</div>
                </div>
            </div>
        </div>
    );
}
