// src/components/BlogPost.js
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BlogPost = ({ posts, deletePost }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = posts.find(post => post.id === id);

    if (!post) {
        return <p>Post not found</p>;
    }

    const handleDelete = () => {
        deletePost(post.id);
        navigate('/');
    };

    return (
        <PostContainer>
            <Title>{post.title}</Title>
            <Details>
                <Author>{post.author}</Author>
                <PostDate>{new Date(post.date).toLocaleDateString()}</PostDate>
            </Details>
            <Content>{post.content}</Content>
            <Buttons>
                <Link to={`/edit/${post.id}`}>Edit</Link>
                <Button onClick={handleDelete}>Delete</Button>
            </Buttons>
        </PostContainer>
    );
};

const PostContainer = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
    font-size: 1.5rem;
    color: #6200ea;
`;

const Details = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: #666;
`;

const Author = styled.span`
    font-style: italic;
`;

const PostDate = styled.span`
    font-style: italic;
`;

const Content = styled.p`
    font-size: 1rem;
    color: #333;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: #6200ea;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #3700b3;
    }
`;

export default BlogPost;
