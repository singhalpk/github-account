import React from "react";
import Repositories from "./Repositories";
import Activities from "./Activities";
class Dashboard extends React.Component {
	state = {
        torepositories: true,
      };
 
 	repositories = () =>{
 		this.setState({torepositories: true});
 	}

 	activity = () =>{
 		this.setState({torepositories: false});
 	}
 	logout = () =>{
 		sessionStorage.clear();
 		window.location.reload();
 	}

  render() {
    return (
    	<div className="container">
    		<div className="row" >
	    		<div className="col-md-3 offset-md-1 mt-5">
	    			 <div className="cardimg col-md-9" >
					    <img className="card-img-top" style={{paddingBottom:"50px"}} src={sessionStorage.getItem('image')} alt=" " />
					  </div>
					  <div className="col-md-9 text-left mt-3">
					  	<span className="userName">{sessionStorage.getItem('name')}</span>
					  </div>
					  <div className="col-md-9 " style={{paddingLeft:"0",paddingRight:"0px"}}>
					  	<button type="button" className="col-md-12 btn mt-5" onClick={this.logout} >Log Out</button>
					  </div>
	    		</div>
	    		<div className="col-md-8 mt-5">
				 	  <div className="list-inline row col-md-6 mb-3" style={{justifyContent:"space-between"}}>
					    <div className= { this.state.torepositories ? "Title ActiveTab" : "Title" } onClick={this.repositories}>
					    	<h2 className="TabTitle" >Repositories</h2>
					    </div>
					    <div className= { !this.state.torepositories ? "Title ActiveTab" : "Title" } onClick={this.activity}>
					   		 <h2 className="TabTitle" >Contribution activity</h2>
					   	</div>
					  </div>
					  <div className="row col-md-12 mb-3">
					  {
					  	this.state.torepositories?<Repositories/>:<Activities/>
					  }
					  </div>
	    		</div>
    		</div>
    	</div>
    );
  }
};

export default Dashboard;
