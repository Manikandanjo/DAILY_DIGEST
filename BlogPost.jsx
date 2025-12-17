import { useParams, Link } from 'react-router-dom';
import { useBlog } from '../context/BlogContext';

const BlogPost = () => {
    const { id } = useParams();
    const { posts } = useBlog();

    const post = posts.find(p => p.id.toString() === id);

    if (!post) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Post not found</h2>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>Back to Home</Link>
            </div>
        );
    }

    return (
        <article className="container" style={{ padding: '4rem 0', maxWidth: '800px' }}>
            <Link to="/" style={{ color: 'var(--text-light)', marginBottom: '1rem', display: 'inline-block' }}>&larr; Back to Home</Link>

            <header style={{ marginBottom: '2rem' }}>
                <span style={styles.category}>{post.category}</span>
                <h1 style={styles.title}>{post.title}</h1>
                <div style={styles.meta}>
                    <span>{post.date}</span> &bull; <span>{post.author}</span>
                </div>
            </header>

            <div style={styles.imageWrapper}>
                <img src={post.image} alt={post.title} style={styles.image} />
            </div>

            <div style={styles.content}>
                <p>{post.excerpt}</p>
                <p style={{ marginTop: '1rem' }}>
                    {/* Placeholder for full content if we had a separate field, recycling excerpt for now or adding dummy text */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </article>
    );
};

const styles = {
    category: {
        color: 'var(--primary-color)',
        fontWeight: '700',
        textTransform: 'uppercase',
        fontSize: '0.9rem',
        marginBottom: '0.5rem',
        display: 'block'
    },
    title: {
        fontSize: '2.5rem',
        lineHeight: '1.2',
        marginBottom: '1rem'
    },
    meta: {
        color: 'var(--text-light)',
        fontSize: '0.9rem'
    },
    imageWrapper: {
        width: '100%',
        height: '400px',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '2rem'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    content: {
        fontSize: '1.1rem',
        lineHeight: '1.8',
        color: 'var(--text-color)'
    }
};

export default BlogPost;
