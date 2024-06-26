// src/components/BlogForm.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const BlogForm = ({ addPost, editPost, posts = [] }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEdit = Boolean(id);
    const [post, setPost] = useState({
        title: '',
        author: '',
        content: '',
        date: new Date().toISOString().split('T')[0],
    });

    useEffect(() => {
        if (isEdit) {
            const postToEdit = posts.find(post => post.id === id);
            if (postToEdit) {
                setPost(postToEdit);
            }
        }
    }, [id, isEdit, posts]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost(prevPost => ({ ...prevPost, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            editPost(post);
        } else {
            addPost({ ...post, id: `${Date.now()}` });
        }
        navigate('/');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                Title:
                <Input type="text" name="title" value={post.title} onChange={handleChange} />
            </Label>
            <Label>
                Author:
                <Input type="text" name="author" value={post.author} onChange={handleChange} />
            </Label>
            <Label>
                Content:
                <Textarea name="content" value={post.content} onChange={handleChange} />
            </Label>
            <Label>
                Publication Date:
                <Input type="date" name="date" value={post.date} onChange={handleChange} />
            </Label>
            <Button type="submit">Save Post</Button>
        </Form>
    );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 800px;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    color: #333;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
`;

const Textarea = styled.textarea`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    height: 150px;
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

export default BlogForm;
