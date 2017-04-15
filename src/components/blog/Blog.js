import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = (props) => {
  const posts = props.posts;
  const postItems = posts.map((p) =>
     <li className="blog-item" key={p.id}>
       <Link to={"/blog/" + p.slug}>{p.name}</Link>
     </li>
  );
  return (
    <div>
      <ul className="blog-posts">
        {postItems}
      </ul>
    </div>
  );
}

export default Blog;
