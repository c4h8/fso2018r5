import React from 'react';
import PropTypes from 'prop-types';

const blogStyle = ({
  paddingTop: 10,
  paddingLeft: 2,
  backgroundColor: '#e5e5e5',
  marginBottom: 5,
  boxSizing: 'border-box'
});

const Blog = ({ blog: {_id, title, author, likes, url, expanded}, toggleBlog }) => {
  const payload = expanded
    ? (
      <React.Fragment>
        {url}
        {`${likes} like`} <button>like</button>
      </React.Fragment>)
    : null;

  return (
    <div style={blogStyle}>
      <div onClick={() => toggleBlog(_id)}>{ title } { author }</div>
      { payload }
    </div>);
};

Blog.propTypes = ({
  blog: PropTypes.instanceOf(Object),
  toggleBlog: PropTypes.func
});

export default Blog;
