import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import styled from 'styled-components';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import BlogForm from './components/BlogForm';
import { generateSamplePosts } from './utils/sampleData';
import { getPosts, savePosts } from './utils/localStorage';

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const storedPosts = getPosts();
        if (storedPosts.length === 0) {
            const samplePosts = generateSamplePosts(5);
            setPosts(samplePosts);
            savePosts(samplePosts);
        } else {
            setPosts(storedPosts);
        }
    }, []);

    const addPost = (newPost) => {
        const updatedPosts = [...posts, newPost];
        setPosts(updatedPosts);
        savePosts(updatedPosts);
    };

    const editPost = (updatedPost) => {
        const updatedPosts = posts.map(post => (post.id === updatedPost.id ? updatedPost : post));
        setPosts(updatedPosts);
        savePosts(updatedPosts);
    };

    const deletePost = (postId) => {
        const updatedPosts = posts.filter(post => post.id !== postId);
        setPosts(updatedPosts);
        savePosts(updatedPosts);
    };

    const handleSaveToLocalStorage = () => {
        savePosts(posts);
        alert('All posts have been saved to local storage!');
    };

    return (
        <Router>
            <Container>
                <Header>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/new">New Post</NavLink>
                    <SaveButton onClick={handleSaveToLocalStorage}>Save</SaveButton>
                </Header>
                <Main>
                    <Routes>
                        <Route path="/" element={<BlogList posts={posts} />} />
                        <Route path="/post/:id" element={<BlogPost posts={posts} editPost={editPost} deletePost={deletePost} />} />
                        <Route path="/new" element={<BlogForm addPost={addPost} />} />
                        <Route path="/edit/:id" element={<BlogForm posts={posts} editPost={editPost} />} />
                    </Routes>
                </Main>
            </Container>
        </Router>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    font-family: Arial, sans-serif;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 800px;
    padding: 10px;
    background-color: #6200ea;
    color: #fff;
`;

const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

const SaveButton = styled.button`
    padding: 10px 20px;
    background-color: #03dac5;
    color: #000;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #018786;
    }
`;

const Main = styled.main`
    width: 100%;
    max-width: 800px;
    padding: 20px;
`;

export default App;
