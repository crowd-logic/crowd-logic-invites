import React from 'react';

const JoinForm = () => (
    <div id="join-form" style={styles.formContainer}>
        <div style={styles.formContent}>
            <h2 style={styles.headline}>Join the Vision.</h2>
            <p style={styles.subheadline}>Get early access updates, pilot program invitations, and be the first to know what's next.</p>
            <form style={styles.form}>
                <input type="email" placeholder="your@email.com" style={styles.input} />
                <button type="submit" className="cta-button">Join Now</button>
            </form>
        </div>
    </div>
);

export default JoinForm;

// CSS-in-JS for a self-contained component
const styles = {
    formContainer: {
        backgroundColor: '#1A1A1A',
        padding: '6rem 2rem',
    },
    formContent: {
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center' as const,
    },
    headline: {
        fontFamily: "'Crimson Text', serif",
        fontSize: '3rem',
        color: '#EAEAEA',
        marginBottom: '1rem',
    },
    subheadline: {
        fontFamily: "'Inter', sans-serif",
        fontSize: '1.1rem',
        color: '#A0A0A0',
        marginBottom: '2.5rem',
    },
    form: {
        display: 'flex',
        gap: '1rem',
    },
    input: {
        flexGrow: 1,
        padding: '1rem',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '6px',
        backgroundColor: '#242424',
        color: '#EAEAEA',
        fontSize: '1rem',
    }
};