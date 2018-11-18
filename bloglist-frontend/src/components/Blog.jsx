import React from 'react';
import PropTypes from 'prop-types';

const Blog = ({ blog }) => (
  <div>
    { blog.title } { blog.author }
  </div>  
);

Blog.propTypes = ({
  blog: PropTypes.instanceOf(Object)
});

export default Blog;
