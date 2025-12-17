import { Link } from 'react-router-dom';
// import { FaSearch } from 'react-icons/fa'; // Commented out to avoid build error if icon not installed. 
// Using text for search or basic SVG to be safe without node_modules

const Header = () => {
    return (
        <header style={styles.header}>
            <div className="container" style={styles.container}>
                <Link to="/" style={styles.logo}>
                    dAIly_<span style={{ color: 'var(--primary-color)' }}>dAIgest</span>
                </Link>

                <nav style={styles.nav}>
                    <Link to="/" style={styles.link}>Home</Link>
                    <a href="#" style={styles.link}>Tech</a>
                    <a href="#" style={styles.link}>Research</a>
                    <a href="#" style={styles.link}>About</a>
                    <Link to="/admin" style={{ ...styles.link, color: 'var(--secondary-color)' }}>Admin</Link>
                    <button style={styles.searchBtn}>Search</button>
                </nav>
            </div>
        </header>
    );
};

const styles = {
    header: {
        backgroundColor: 'var(--card-bg)',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 100
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        fontSize: '1.5rem',
        fontWeight: '800',
        letterSpacing: '-1px'
    },
    nav: {
        display: 'flex',
        gap: '2rem',
        alignItems: 'center'
    },
    link: {
        fontWeight: '500',
        color: 'var(--text-color)'
    },
    searchBtn: { // Simulating icon or button
        background: 'transparent',
        border: '1px solid var(--border-color)',
        padding: '0.5rem 1rem',
        borderRadius: '20px',
        cursor: 'pointer'
    }
};

export default Header;
