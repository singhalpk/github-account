import React from "react";
import loader from '../img/load.gif';
import "./login.css";


class Loader extends React.Component {
   state = {
        token: null,
      };

  componentDidMount() {
     var code = new URLSearchParams(this.props.location.search);
      code = code.get('code');
    if (code) {
      fetch(`http://parmodsinghal.pythonanywhere.com/get_token?code=${code}`)
        .then(response => response.json())
        .then(resp => {
          if (resp.success === true) {
                  sessionStorage.setItem("token", resp.access_token);
               fetch(`https://api.github.com/user?access_token=${resp.access_token}`)
                .then(response => response.json())
                .then(resp => {
                  sessionStorage.setItem("image", resp.avatar_url);
                  sessionStorage.setItem("name", resp.login);
                  sessionStorage.setItem("fullName", resp.name);
                  sessionStorage.setItem("email", resp.email);
                  sessionStorage.setItem("location", resp.location);
                   this.props.history.push("/dashboard");
                });
          }
        });
    }
  }
 
 
  render() {
      return ( 
                <div className="containerHeight view full-page-intro" >
                          <div className="mask d-flex justify-content-center align-items-center">
                            <img src = {loader} alt=""/>
                          </div>
                </div>
            );

  }
}

export default Loader;
