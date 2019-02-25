import React from "react";
import { connect } from "react-redux";
import { fetchACTIVITIESFromAPI } from "../Actions/Actions";
import create from '../img/create.png';
import push from '../img/push.png';

class Activities extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchACTIVITIESFromAPI());
  }

  render() {
    if (this.props.activities.requestedAt === "") {
      return(<div>Loading...</div>)
    }
    return (
      <div className="col-md-12 text-left ">
        <div className="row" >
        {!this.props.activities.activities.length > 0 && <p>No activity</p> }
        {this.props.activities.activities.map(activity => {
          return (
            <div key={activity.id} className="col-md-12 text-left cardimg m-3">
              {activity.type === "CreateEvent" ?<img src={create} alt="" />:<img src={push} alt="" />}
              <span className="col-md-12 pt-3 repoName" >{activity.repo.name}</span>
              {activity.type === "CreateEvent" ?<p className="col-md-12 mt-3">Created {activity.repo.name.split('/')[1]} repository</p>:<p className="col-md-12 mt-3">Created commit  in  {activity.repo.name.split('/')[1]} repository</p>}
              
            </div>
          );
        })}
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activities: state.activities
  };
};

export default connect(mapStateToProps)(Activities);
