
import SalePostContainer from './SalePostContainer.js';
import React, {Component, Fragement} from 'react';
import {connect} from 'react-redux'
// import SideBar from './SideBar.js';
// import Header from './Header.js';
// import Adapter from './Adapter.js'
class OnSalePage extends Component {

state = {
  posts: []
}

componentDidMount() {
  this.fetchFiveRecentPosts();
}

fetchFiveRecentPosts = () => {
  fetch('http://localhost:4000/api/v1/saleposts').then(res => res.json()).then(res => this.setState({
    posts: res.saleposts.slice(Math.max(-5))
  }))
}



  render() {
    return (
      <div className="black">
        <br />
        <div className="flex-container">
          <SalePostContainer posts = {this.state.posts}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: [],
  }
}

export default connect()(OnSalePage);
