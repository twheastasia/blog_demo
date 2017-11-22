import {ADD_BLOG, UPDATE_BLOG, DELETE_BLOG} from "./actionTypes";

let blog_index = 0;

export const addBlog = (title, content) => (
    {
        type: ADD_BLOG,
        id: blog_index++,
        title: title,
        content: content,
        comments: []
    }
);

export const updateBlog = (title, content, index) => (
    {
        type: updateBlog,
        id: index,
        title: title,
        content: content
    }
);

export const deleteBlog = (index) => (
    {
        type: DELETE_BLOG,
        id: index
    }
);