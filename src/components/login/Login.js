import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './Login.scss';
import VideriLogo from '../../img/svg/videri-login-logo.svg';
import { loginUser } from '../../actions/authActions';
import * as userValidation from '../../validations/is-valid';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      password: '',
      idError: '',
      passwordError: ''
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) this.props.history.push('/content');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) this.props.history.push('/content');
  }

  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.id]: event.target.value,
      [event.target.password]: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    const userData = {
      id: this.state.id,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };

  render() {
    return (
      <div className={styles.Login_Main}>
        <div className={styles.Login_Form_Container}>
          <div className={styles.Login_Company_Logo}>
            <img src={VideriLogo} alt='Videri Logo' />
            <p>ORCHESTRATOR</p>
          </div>
          <form onSubmit={this.onFormSubmit} className={styles.Login_Form}>
            <p>SIGN IN</p>
            <div className={styles.Login_Form_Input_Id}>
              <input
                onChange={this.onInputChange}
                value={this.state.id}
                type='text'
                name='id'
                placeholder='ID'
              />
            </div>
            {this.state.idError.trim().length > 0 ? (
              <div style={{ color: 'red' }}>{this.state.idError}</div>
            ) : null}
            <div className={styles.Login_Form_Input_Password}>
              <input
                onChange={this.onInputChange}
                value={this.state.password}
                type='password'
                name='password'
                placeholder='PASSWORD'
              />
            </div>
            {this.state.passwordError.trim().length > 0 ? (
              <div style={{ color: 'red', marginTop: '-2px' }}>
                {this.state.passwordError}
              </div>
            ) : null}
            <div className={styles.Login_Form_Submit}>
              <input type='submit' value='Sign In' />
            </div>
          </form>
          {this.state.passwordError.trim().length > 0 ? (
            <div style={{ color: 'red' }}>
              Password must contain at least 8 characters and a combination of
              lowercase, uppercase, number and a special character
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  idError: PropTypes.string.isRequired,
  passwordError: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
