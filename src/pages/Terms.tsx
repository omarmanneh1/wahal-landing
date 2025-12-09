import './Legal.css';

export default function Terms() {
    return (
        <div className="legal-page container">
            <h1>Terms of Service</h1>
            <p className="last-updated">Last Updated: December 2025</p>

            <section>
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing or using the Wahal app and website, you agree to be bound by these Terms of Service.</p>
            </section>

            <section>
                <h2>2. User Conduct</h2>
                <p>Wahal is a safe space. You agree not to use the platform to:</p>
                <ul>
                    <li>Harass, bully, or threaten others.</li>
                    <li>Post false or misleading reports.</li>
                    <li>Violate any applicable laws.</li>
                </ul>
            </section>

            <section>
                <h2>3. Content Disclaimer</h2>
                <p>Stories shared on Wahal reflect the experiences of our users. We are not responsible for the accuracy of user-generated content, though we moderate it for safety.</p>
            </section>

            <section>
                <h2>4. Termination</h2>
                <p>We reserve the right to ban users who violate our Community Guidelines or Terms of Service.</p>
            </section>
        </div>
    );
}
