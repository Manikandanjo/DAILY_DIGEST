const BlogCard = ({ post }) => {
    return (
        <article style={styles.card}>
            <div style={styles.imageWrapper}>
                <img src={post.image} alt={post.title} style={styles.image} />
                <span style={styles.category}>{post.category}</span>
            </div>
            <div style={styles.content}>
                <div style={styles.meta}>
                    <span>{post.date}</span> &bull; <span>{post.author}</span>
                </div>
                <h3 style={styles.title}>{post.title}</h3>
                <p style={styles.excerpt}>{post.excerpt}</p>
                <a href="#" style={styles.readMore}>Read Article &rarr;</a>
            </div>
        </article>
    );
};

const styles = {
    card: {
        backgroundColor: 'var(--card-bg)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        transition: 'transform 0.2s',
        display: 'flex',
        flexDirection: 'column'
    },
    imageWrapper: {
        position: 'relative',
        height: '200px',
        width: '100%',
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    },
    category: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        backgroundColor: 'white',
        color: 'var(--primary-color)',
        padding: '0.25rem 0.75rem',
        borderRadius: '9999px',
        fontSize: '0.75rem',
        fontWeight: '700',
        textTransform: 'uppercase'
    },
    content: {
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        flex: 1
    },
    meta: {
        fontSize: '0.8rem',
        color: 'var(--text-light)',
        marginBottom: '0.5rem'
    },
    title: {
        fontSize: '1.25rem',
        marginBottom: '0.75rem',
        lineHeight: '1.4'
    },
    excerpt: {
        color: 'var(--text-light)',
        fontSize: '0.95rem',
        marginBottom: '1.5rem',
        flex: 1
    },
    readMore: {
        color: 'var(--primary-color)',
        fontWeight: '600',
        fontSize: '0.9rem'
    }
};

export default BlogCard;
