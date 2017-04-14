import React from 'react';

const Blog = (props) => {
  const posts = props.posts;
  const postItems = posts.map((p, id) =>
     <li key={id}>
       {p.name}
     </li>
  );
  return (
    <ul>
      {postItems}
    </ul>
  );
}

export default Blog;
