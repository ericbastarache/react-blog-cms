import React from 'react';

const BlogItem = (props) => {
  return (
    <div>
      <h1 className="text-center">This is the blog item view for {props.match.params.slug}</h1>
    </div>
  );
}

export default BlogItem;
