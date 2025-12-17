const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div className="container">
                <div style={styles.content}>
                    <div style={styles.branding}>
                        <h3>dAIly_dAIgest</h3>
                        <p>Your daily dose of AI innovation and research updates.</p>
                    </div>
                    <div style={styles.copyright}>
                        &copy; {new Date().getFullYear()} Dr.Manikandan Moovendran. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#111827',
        color: '#f3f4f6',
        padding: '4rem 0 2rem 0',
        marginTop: '4rem'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '2rem'
    },
    branding: {
        maxWidth: '400px'
    },
    copyright: {
        opacity: 0.7,
        fontSize: '0.9rem',
        borderTop: '1px solid #374151',
        width: '100%',
        paddingTop: '2rem'
    }
};

export default Footer;
