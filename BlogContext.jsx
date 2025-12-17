import { createContext, useState, useEffect, useContext } from 'react';
import { posts as initialPosts } from '../data/posts';

const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
    const [posts, setPosts] = useState(() => {
        const savedPosts = localStorage.getItem('daily_digest_posts');
        return savedPosts ? JSON.parse(savedPosts) : initialPosts;
    });

    useEffect(() => {
        localStorage.setItem('daily_digest_posts', JSON.stringify(posts));
    }, [posts]);

    const addPost = (newPost) => {
        const postWithId = {
            ...newPost,
            id: Date.now(), // Generate unique ID based on timestamp
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        };
        setPosts([postWithId, ...posts]); // Add new post to the top
        return postWithId.id;
    };

    const deletePost = (id) => {
        setPosts(posts.filter(post => post.id !== id));
    };

    return (
        <BlogContext.Provider value={{ posts, addPost, deletePost }}>
            {children}
        </BlogContext.Provider>
    );
};
