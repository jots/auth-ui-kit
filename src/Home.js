import React, { Component } from "react";
import './style.css';
import { NavLink } from "react-router-dom";
class Home extends React.Component {

  render() {
    return (
      <div className='landingPageWrapper container-fluid'>
        <div className='landingPageInnerWrapper'>
          <div className='signUpWrapper'>
            <div className='headerDescription addPaddTop'>
              Sign In
            </div>
            <div className='commonBtn usernameLogin'>
              <NavLink to="/username">
                <button>
                  <span><i className="fa fa-user" aria-hidden="true"></i></span>
                  <span>Sign in with Username</span>
                </button>
              </NavLink>
            </div>
            <div className='commonBtn emailLogin'>
              <NavLink to="/email">
                <button>
                  <span><i className="fa fa-envelope" aria-hidden="true"></i></span>
                  <span>Sign in with email</span>
                </button>
              </NavLink>
            </div>
            <div className='commonBtn mobileLogin'>
              <NavLink to="/mobile">
                <button>
                  <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                  <span>Sign in with mobile</span>
                </button>
              </NavLink>
            </div>
            <div className='commonBtn mobileLogin'>
              <NavLink to="/mobile-otp">
                <button>
                  <span><i className="fa fa-phone" aria-hidden="true"></i></span>
                  <span>Sign in with mobile otp</span>
                </button>
              </NavLink>
            </div>
            {/* <div className='descriptionText'>
              Hello! Sign in with your username or email
            </div>
            <form className='formGroupWrapper'>
              <input type="email" placeholder='User name or Email or Mobile Number' />
            </form>
            <form className='formGroupWrapper'>
              <input type="password" placeholder='Password' />
            </form>
            <div className='linkDescription forgotPassword descriptionText'>
              <a href='#'> Forgot Password?</a>
            </div>
            <div className='commonBtn'>
              <button>Sign In</button>
            </div> */}
            <div className='socialLoginWrapper'>
              <div className='descriptionText'>
                Or connect with:
              </div>
              <div className='socialLoginIconWrapper'>
                <div className='socialLoginIcon'>
                  <i className='fa fa-github' aria-hidden='true'></i>
                </div>
                <div className='socialLoginIcon'>
                  <i className='fa fa-facebook' aria-hidden='true'></i>
                </div>
                <div className='socialLoginIcon'>
                  <i className='fa fa-google' aria-hidden='true'></i>
                </div>
                <div className='socialLoginIcon'>
                  <i className='fa fa-linkedin' aria-hidden='true'></i>
                </div>
              </div>
            </div>
            <div className='descriptionText'>
              Don{'\''}t have an account? <b>Sign Up</b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home
