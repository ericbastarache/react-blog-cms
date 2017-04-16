import React from 'react';

const BlogItem = (props) => {

  return (
    <div>
      <h1 className="text-center">{props.match.params.slug}</h1>
      <p></p>
    </div>
  );
}

export default BlogItem;
