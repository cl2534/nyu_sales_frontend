import React, { Component } from 'react';

export default class AboutMe extends Component {



  render() {
  
    return (
      <div className="about-me">
        <div>
          <img src={this.props.picture} height="250" width="250" />
        </div>
      </div>
    )
  }
}
