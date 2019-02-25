import React from "react";
import Background from '../img/background.svg';
import emoji from '../img/emoji.png';
import "./login.css";

class NotFound extends React.Component {
 
 
  render() {
    return (
     <div className="containerHeight view full-page-intro" style={{backgroundImage: "url(" + Background + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <div className="mask d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row wow fadeIn">
              <div className="col-md-3 ">
              </div>
              <div className="col-md-6 mb-4 white-text text-center text-md-center">
                <h1 className="display-4 font-weight-bold" style={{color:"#263238"}}>404 Not Found </h1>
                <hr style={{borderColor:"#263238"}} className="hr-light" />
                <img style={{width:"300px", marginLeft:"100px"}} src={emoji} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default NotFound;
