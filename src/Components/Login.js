import React from "react";
import Background from '../img/background.svg';
import "./login.css";



const CLIENT_ID = "f112da4ae40c9c9d830b";
const REDIRECT_URI = "http://localhost:3000/loading";

class Login extends React.Component {

  render() {

    return (
		 <div className="containerHeight view full-page-intro" style={{backgroundImage: "url(" + Background + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
		    <div className="mask  d-flex justify-content-center align-items-center">
		      <div className="container">
		        <div className="row wow fadeIn">
		          <div className="col-md-3 ">
		          </div>
		          <div className="col-md-6 mb-4  text-center text-md-center">
		            <h1 className="display-4 font-weight-bold">Access Your Github Account </h1>
		            <hr className="hr-light" />
		            <p className="mb-4 d-none d-md-block">
		              <strong>Sign in your github accout to get your github repository and check your activities.</strong>
		            </p>
		            <a href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=user&redirect_uri=${REDIRECT_URI}`} className="nav-link border border-light rounded" style={{color: "black"}}>
		              <i className="fab fa-github mr-2"></i>Sign In With GitHub
		            </a>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
    );
  }
}

export default Login;
