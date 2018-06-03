import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../common/Spinner";
import { getProfiles } from "../../actions/profileActions";

class Profiles extends Component {
  componentDidMount() {
    this.props.getProfiles();
  }
  render() {
    const{ profiles, loading } = this.props.profile;
    let profileItems;

    if(profiles === null || loading) {
      profileItems = <Spinner />;
    } else {
      if(profiles.length > 0) {
        <h1>PROFILES HERE</h1>
      } else {
        profileItems = <h4> No Profiles Found </h4>
      }
    }
    return (

    );
  }
}

Profile.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
