import { useState } from 'react';
import { useBlog } from '../context/BlogContext';

const AdminDashboard = () => {
    const { posts, addPost, deletePost } = useBlog();
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        excerpt: '',
        image: '',
        author: 'Dr. Manikandan Moovendran'
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.excerpt) return alert('Title and Excerpt are required');

        // Provide a default image if none provided
        const postData = {
            ...formData,
            image: formData.image || `https://placehold.co/600x400/6366f1/white?text=${encodeURIComponent(formData.title)}`
        };

        addPost(postData);
        setFormData({
            title: '',
            category: '',
            excerpt: '',
            image: '',
            author: 'Dr. Manikandan Moovendran'
        });
        alert('Post published successfully!');
    };

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h2 className="section-title">Admin Dashboard</h2>

            <div style={styles.grid}>
                {/* Editor Section */}
                <div style={styles.editor}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Write New Post</h3>
                    <form onSubmit={handleSubmit} style={styles.form}>
                        <div style={styles.formGroup}>
                            <label style={styles.label}>Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                style={styles.input}
                                placeholder="Enter post title"
                            />
                        </div>

                        <div style={styles.row}>
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    style={styles.input}
                                    placeholder="e.g. Technology"
                                />
                            </div>
                            <div style={styles.formGroup}>
                                <label style={styles.label}>Image URL (Optional)</label>
                                <input
                                    type="text"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    style={styles.input}
                                    placeholder="https://..."
                                />
                            </div>
                        </div>

                        <div style={styles.formGroup}>
                            <label style={styles.label}>Content / Excerpt</label>
                            <textarea
                                name="excerpt"
                                value={formData.excerpt}
                                onChange={handleChange}
                                style={{ ...styles.input, minHeight: '150px' }}
                                placeholder="Write your update here..."
                            />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Publish Update</button>
                    </form>
                </div>

                {/* Manage Posts Section */}
                <div style={styles.manager}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Manage Posts</h3>
                    <div style={styles.postList}>
                        {posts.map(post => (
                            <div key={post.id} style={styles.postItem}>
                                <div>
                                    <h4 style={styles.postTitle}>{post.title}</h4>
                                    <span style={styles.postDate}>{post.date}</span>
                                </div>
                                <button
                                    onClick={() => deletePost(post.id)}
                                    style={styles.deleteBtn}
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    grid: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr',
        gap: '4rem',
        alignItems: 'start'
    },
    editor: {
        backgroundColor: 'var(--card-bg)',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
    },
    manager: {
        backgroundColor: 'var(--card-bg)',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
    },
    row: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem'
    },
    label: {
        fontWeight: '600',
        fontSize: '0.9rem'
    },
    input: {
        padding: '0.75rem',
        borderRadius: '8px',
        border: '1px solid var(--border-color)',
        fontSize: '1rem',
        fontFamily: 'inherit'
    },
    postList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },
    postItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '1rem',
        borderBottom: '1px solid var(--border-color)'
    },
    postTitle: {
        fontSize: '1rem',
        marginBottom: '0.25rem'
    },
    postDate: {
        fontSize: '0.8rem',
        color: 'var(--text-light)'
    },
    deleteBtn: {
        background: '#ef4444',
        color: 'white',
        border: 'none',
        padding: '0.25rem 0.75rem',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '0.8rem'
    }
};

export default AdminDashboard;
