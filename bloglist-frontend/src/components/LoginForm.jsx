import React from 'react';
import service from '../services/service';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleFormChange = e => {
    const field = e.target.name;
    const value = e.target.value;

    this.setState(prevstate => ({
      ...prevstate,
      [field]: value
    }));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    service
      .login(this.state.username, this.state.password)
      .then(res => this.setState({ user: res.data }))
      .catch(e => window.alert(e));
  }

  render() {
    if(this.state.user) return (
      <div>
        logged in as {`${this.state.user.name}`}
      </div>
    );

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label>name </label>
              <input name="username" type="text" value={this.state.username} onChange={this.handleFormChange} />
            </li>
            <li>
              <label>password </label>
              <input name="password" type="password" value={this.state.password} onChange={this.handleFormChange} />
            </li>
            <li><input type="submit" value="login" /></li>
          </ul>
        </form>
      </div>
    );
  }
}

export default LoginForm;
