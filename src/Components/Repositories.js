import React from "react";
import { connect } from "react-redux";
import { fetchRepositoriesFromAPI } from "../Actions/Actions";

class Repositories extends React.Component {
  componentDidMount(props) {
    this.props.dispatch(fetchRepositoriesFromAPI());
  }

  render() {
    if (this.props.repositories.requestedAt === "") {
      return(<div>Loading...</div>)
    }
    return (
      <div className="col-md-12 text-left ">
        <div className="row" >
        {!this.props.repositories.repositories.length > 0 && <p>You don’t have any repositories yet!</p> }
        {this.props.repositories.repositories.map(repository => {
          return (
            <div key={repository.node_id} className="col-md-5 text-left cardimg m-3">
              <a className="col-md-12 pt-3 repoName" href={repository.html_url} target="_blank" rel="noopener noreferrer">{repository.name}</a>
              <p className="col-md-12 mt-3">{repository.language}</p>
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
    repositories: state.repositories
  };
};

export default connect(mapStateToProps)(Repositories);
