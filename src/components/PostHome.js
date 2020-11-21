import React, { useState } from "react";
import { v1 as uuid } from "uuid";

function PostHome() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [post, setPost] = useState([]);

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleContent = (event) => {
    setContent(event.target.value);
  };
  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const handleDate = (event) => {
    setDate(event.target.value);
  };
  const handlePost = (event) => {
    event.preventDefault();
    setPost([
      ...post,
      {
        id: uuid(),
        title: title,
        content: content,
        author: author
      }
    ]);
    setAuthor("");
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h1>New Post</h1>

      <form className="blogForm">
        <label>Title</label>
        <input type={title} onChange={handleTitle} />
        <label>Author</label>
        <input type={author} onChange={handleAuthor} />

        <label>Content</label>
        <input
          className="content==input"
          value={content}
          onChange={(e) => handleContent(e)}
        />
        <label>date</label>
        <input type={date} onChange={handleDate} />
        <input className="submit==button" type="submit" onClck={handlePost} />
      </form>
      <h1>All post</h1>
      <ul>
        {post.map((post) => (
          <li className="post==item" key={post.id}>
            {post.title} {post.author} {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default PostHome;
