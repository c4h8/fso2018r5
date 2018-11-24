import React from 'react';
import PropTypes from 'prop-types';

const blogStyle = ({
  paddingTop: 10,
  paddingLeft: 2,
  backgroundColor: '#e5e5e5',
  marginBottom: 5,
  boxSizing: 'border-box'
});

const Blog = ({ blog, toggleBlog, likeBlog }) => {
  const payload = blog.expanded
    ? (
      <React.Fragment>
        <p>{blog.url}</p>
        <span>
          {`${blog.likes} likes `}
          <button onClick={() => likeBlog(blog)}>like</button>
        </span>
      </React.Fragment>)
    : null;

  return (
    <div style={blogStyle}>
      <div onClick={() => toggleBlog(blog._id)}>{ blog.title } { blog.author }</div>
      { payload }
    </div>);
};

Blog.propTypes = ({
  blog: PropTypes.instanceOf(Object),
  toggleBlog: PropTypes.func,
  likeBlog: PropTypes.func
});

export default Blog;
