import './Legal.css';

export default function Guidelines() {
    return (
        <div className="legal-page container">
            <h1>Community Guidelines</h1>
            <p className="intro">Wahal is a sanctuary for truth and healing. To maintain this safe environment, we ask all members to adhere to these guidelines.</p>

            <div className="guidelines-grid">
                <div className="guideline-card">
                    <h3>💜 Be Supportive</h3>
                    <p>Treat every story with empathy and respect. Validation can change a life.</p>
                </div>

                <div className="guideline-card">
                    <h3>🛡️ Protect Anonymity</h3>
                    <p>Do not share names, addresses, or specific details that could identify others without their consent.</p>
                </div>

                <div className="guideline-card">
                    <h3>🚫 Zero Tolerance for Hate</h3>
                    <p>Any form of hate speech, victim-blaming, or harassment will result in an immediate ban.</p>
                </div>

                <div className="guideline-card">
                    <h3>⚠️ Trigger Warnings</h3>
                    <p>When sharing sensitive content, please use appropriate tags so others can choose to engage safely.</p>
                </div>
            </div>
        </div>
    );
}
