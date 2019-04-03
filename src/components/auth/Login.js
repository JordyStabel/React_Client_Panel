import React, { Component } from "react";
//import { compose } from "redux";
//import { connect } from "react-redux";
import PropTypes from "prop-types";
import { firebaseConnect } from "react-redux-firebase";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  onSubmit = event => {
    event.preventDefault();

    const { firebase } = this.props;
    const { email, password } = this.state;

    firebase
      .login({
        email,
        password
      })
      .catch(error => alert("Invalid Login Credentials" + error.toString()));
  };

  onChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center pb-4 pt-3">
                <span className="text-primary">
                  <i className="fas fa-lock" /> Login
                </span>
              </h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  firebase: PropTypes.object.isRequired
};

export default firebaseConnect()(Login);
