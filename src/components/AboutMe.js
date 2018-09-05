import React, { Component } from 'react';

export default class AboutMe extends Component {



  render() {
    return (
      <div className="about-me">
        <div>
          <h1> {this.props.user.name} </h1>
          <img src={this.props.user.profile_img_link} height="250" width="250" />
        </div>
        <div>
          <p> {this.props.user.address} </p>
          <p> {this.props.user.about_me} </p>
          {this.generateSocialMedia()}
        </div>
      </div>
    )
  }
}
