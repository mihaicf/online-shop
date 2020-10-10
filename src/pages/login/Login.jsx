import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import { ReactComponent as Google } from '../../assets/icons/google.svg';
import { ReactComponent as Facebook } from '../../assets/icons/fb.svg';
import './Login.css'
import { connect } from 'react-redux';
import { loginGoogle, loginFacebook } from '../../redux/actions/user';

class Login extends React.Component {

    componentDidUpdate(prevProps) {
        if (this.props.user !== prevProps.user) {
            this.props.history.push('/');
        }
    }

    render() {
        return(
            <div className="login-page">
                <Link to='/'>
                    <img src={Logo} alt="logo" className="mb-5"/>
                </Link>

                <h1 className="h2">Login</h1>
                <p>Choose your login method:</p>

                <button
                    className="btn btn-outline-dark d-flex align-items-center mb-3"
                    onClick={() => this.props.signInWithGoogle()}
                >
                    <Google className="mw-50 mr-3"/>
                    <span className="text-nowrap">Login with Google</span>
                </button>
                <button
                    className="btn btn-outline-dark d-flex align-items-center"
                    onClick={() => this.props.signInWithFacebook()}
                >
                    <Facebook className="mw-50 mr-3"/>
                    <span className="text-nowrap">Login with Facebook</span>
                </button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        signInWithGoogle: () => dispatch(loginGoogle()),
        signInWithFacebook: () => dispatch(loginFacebook())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);