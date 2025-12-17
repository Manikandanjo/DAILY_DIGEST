import { useBlog } from '../context/BlogContext';
import BlogCard from '../components/BlogCard';

const Home = () => {
    const { posts } = useBlog();
    return (
        <>
            {/* Hero Section */}
            <section style={styles.hero}>
                <div className="container">
                    <h1 style={styles.heroTitle}>Shaping the Future <br /><span style={{ color: 'var(--accent-color)' }}>One Algorithm at a Time</span></h1>
                    <p style={styles.heroSubtitle}>Welcome to dAIly_dAIgest. Curated insights, research breakdowns, and tech updates from Dr. Manikandan Moovendran.</p>
                    <div style={styles.heroButtons}>
                        <button className="btn btn-primary">Subscribe Updates</button>
                    </div>
                </div>
            </section>

            {/* Blog Grid Section */}
            <section style={styles.section}>
                <div className="container">
                    <h2 className="section-title">Latest Updates</h2>
                    <div style={styles.grid}>
                        {posts.map(post => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

const styles = {
    hero: {
        padding: '6rem 0',
        textAlign: 'center',
        background: 'linear-gradient(180deg, rgba(99,102,241,0.05) 0%, rgba(255,255,255,0) 100%)'
    },
    heroTitle: {
        fontSize: '3.5rem',
        lineHeight: '1.1',
        marginBottom: '1.5rem',
        fontWeight: '800'
    },
    heroSubtitle: {
        fontSize: '1.25rem',
        color: 'var(--text-light)',
        maxWidth: '700px',
        margin: '0 auto 2rem auto'
    },
    section: {
        padding: '4rem 0'
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem'
    }
};

export default Home;
