// src/utils/localStorage.js
export const getPosts = () => {
    const posts = localStorage.getItem('posts');
    console.log('Getting posts from localStorage:', posts); // Debugging
    return posts ? JSON.parse(posts) : [];
};

export const savePosts = (posts) => {
    console.log('Saving posts to localStorage:', posts); // Debugging
    localStorage.setItem('posts', JSON.stringify(posts));
};
