import { Heart, MessageSquare } from 'lucide-react';
import './Stories.css';

export default function Stories() {
    const stories = [
        {
            text: "To anyone reading this: you are not alone. There are people who care and want to help.",
            date: "4 days ago",
            hearts: 8,
            comments: 0
        },
        {
            text: "I found strength in speaking up. It wasn't easy, but I'm healing one day at a time.",
            date: "4 days ago",
            hearts: 6,
            comments: 1
        },
        {
            text: "I'm learning to trust again. It's scary but I'm finding my voice.",
            date: "2 days ago",
            hearts: 12,
            comments: 3
        }
    ];

    return (
        <section className="stories" id="stories">
            <div className="container">
                <div className="section-header">
                    <h2>Stories Feed</h2>
                    <p>Anonymous stories of strength and healing from our community.</p>
                </div>

                <div className="stories-scroll">
                    {stories.map((story, index) => (
                        <div className="story-card" key={index}>
                            <div className="story-options">...</div>
                            <p className="story-text">"{story.text}"</p>

                            <div className="story-meta">
                                <span className="date">{story.date}</span>
                                <div className="interactions">
                                    <div className="int-item liked">
                                        <Heart size={16} fill="#E6D5F8" className="heart-filled" />
                                        <span>{story.hearts}</span>
                                    </div>
                                    <div className="int-item">
                                        <MessageSquare size={16} />
                                        <span>{story.comments}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
