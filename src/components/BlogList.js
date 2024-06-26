// src/components/BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BlogList = ({ posts }) => {
    if (posts.length === 0) return <p>No posts available</p>;

    return (
        <List>
            {posts.map(post => (
                <ListItem key={post.id}>
                    <Title>{post.title}</Title>
                    <Details>
                        <Author>{post.author}</Author>
                        <PostDate>{new Date(post.date).toLocaleDateString()}</PostDate>
                    </Details>
                    <Summary>{post.summary}</Summary>
                    <Link to={`/post/${post.id}`}>Read More</Link>
                </ListItem>
            ))}
        </List>
    );
};

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 800px;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const ListItem = styled.div`
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

const Summary = styled.p`
    font-size: 1rem;
    color: #333;
`;

export default BlogList;
