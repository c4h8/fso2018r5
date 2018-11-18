import React from 'react';
import Blog from './components/Blog';
import LoginForm from './components/LoginForm';
import service from './services/service';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: []
    }
  }

  componentDidMount() {
    service.getBlogs().then(blogs =>
      this.setState({ blogs })
    );
  }

  render() {
    return (
      <div>
        <LoginForm />
        <h2>blogs</h2>
        {this.state.blogs.map(blog => 
          <Blog key={blog._id} blog={blog}/>
        )}
      </div>
    );
  }
}

export default App;
