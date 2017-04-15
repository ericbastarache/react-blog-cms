import React from 'react';
import { Route } from 'react-router-dom';
const BlogItem = (props) => {
  return (
    <div>
      <Route path={"/blog/" + props.posts.slug} component={BlogItem}/>
      <h1 className="text-center">This is the blog item view</h1>
    </div>
  );
}

export default BlogItem;
