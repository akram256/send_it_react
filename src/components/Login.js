import React, { Component } from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import loginuser from '../actions/loginActions'

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.loginuser({ email: this.state.email, password: this.state.password }, this.props)
  }
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a class="navbar-brand" href="#">SEND_IT</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">

                  <Link to='/' class="nav-link" >Login</Link>
                </li>
                <li class="nav-item">
                  <Link to='/register' className="nav-link">signup</Link>

                </li>
   
              </ul>

            </div>
          </div>
        </nav>


        <div className="content">
          <div className="form">
            <form className="signup" onSubmit={this.onSubmit}>
              <h4>create an account</h4>
              <div className="field">
                <label >email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.onChange} required />
              </div>
              <div className="field">
                <label >Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.onChange} min="8" required />
              </div>
              <div className="button">
                <button type="submit" className="submit">Login</button>
              </div>
              <br />

              <div><Link to='/register' className="link">Don't Have an account? SignUp here.</Link></div>

            </form>

          </div>
        </div>
      </div>
    )
  }
}
export const mapStateToProps = state => ({
  token: state.loginReducers.token,
  errors: state.loginReducers.errors,
  isSuccessful: state.loginReducers.isSuccessful,
});

export default connect(mapStateToProps, { loginuser })(Login)
