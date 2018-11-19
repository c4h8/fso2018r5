import React from 'react';
import Blog from './components/Blog';
import LoginForm from './components/LoginForm';
import service from './services/service';
import SubmitBlogForm from './components/SubmitBlogForm';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      blogs: []
    };
  }

  componentDidMount() {
    try {
      const user = JSON.parse(window.localStorage.getItem('loggedInUser'));
      this.setState({user});
      service.setAuthHeader(user.token);
    } catch(e) {
      window.alert(e);
    }

    service.getBlogs().then(blogs => this.setState({ blogs }));
  }

  setUser = (user) => {
    this.setState({ user });
    service.setAuthHeader(user ? user.token : undefined);
  }

  concatBlog = (blog) => this.setState(prevState => ({ blogs: prevState.blogs.concat(blog)}));

  render() {
    return (
      <div>
        <LoginForm user={this.state.user} setUser={this.setUser} />
        {this.state.user
          ? <SubmitBlogForm concatBlog={this.concatBlog} />
          : null
        }
        <h2>blogs</h2>
        {this.state.blogs.map(blog => 
          <Blog key={blog._id} blog={blog}/>
        )}
      </div>
    );
  }
}

export default App;
