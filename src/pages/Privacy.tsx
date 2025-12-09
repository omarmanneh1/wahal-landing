import './Legal.css';

export default function Privacy() {
    return (
        <div className="legal-page container">
            <h1>Privacy Policy</h1>
            <p className="last-updated">Last Updated: December 2025</p>

            <section>
                <h2>1. Introduction</h2>
                <p>At Wahal, your privacy is our top priority. We are built on the principle of anonymity. We do not collect personally identifiable information (PII) unless you explicitly provide it (e.g., joining our waitlist).</p>
            </section>

            <section>
                <h2>2. Data Collection</h2>
                <p>When you use the Wahal app to report incidents or share stories:</p>
                <ul>
                    <li>We do not tracking your location without consent.</li>
                    <li>We do not store your IP address with your reports.</li>
                    <li>Your stories are anonymized before being published to the feed.</li>
                </ul>
            </section>

            <section>
                <h2>3. Waitlist Information</h2>
                <p>If you join our waitlist, your email address is stored securely and used solely to notify you about the app launch. We will never sell your email to third parties.</p>
            </section>

            <section>
                <h2>4. Contact Us</h2>
                <p>If you have questions about our privacy practices, please contact us at privacy@wahal.app.</p>
            </section>
        </div>
    );
}
