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
      blogs: [],
      notifications: []
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

  removeNotification = (id) => {
    this.setState(prevState => ({
      notifications: prevState.notifications.filter(n => n.id !== id)
    }));
  }

  postNotification = (n) => {
    // generate random id https://gist.github.com/6174/6062387
    const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    this.setState(prevState => ({ notifications: prevState.notifications.concat({...n, id})}));
    setTimeout(() => this.removeNotification(id), 2000);
  }

  concatBlog = (blog) => this.setState(prevState => ({ blogs: prevState.blogs.concat(blog)}));

  render() {
    return (
      <div>
        <div>
          {this.state.notifications.map(n =>
            <div key={n.id} style={n.style}>{n.message}</div>
          )}
        </div>
        <LoginForm user={this.state.user} setUser={this.setUser} postNotification={this.postNotification} />
        {this.state.user
          ? <SubmitBlogForm concatBlog={this.concatBlog} postNotification={this.postNotification} />
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
