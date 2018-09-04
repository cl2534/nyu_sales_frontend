
import PostContainer from './PostContainer.js';
import React, {Component, Fragement} from 'react';
import {connect} from 'react-redux'
import {incrementAction} from '../action'
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
  fetch('http://localhost:4000/api/v1/posts').then(res => res.json()).then(res => this.setState({
    posts: res.posts.slice(Math.max(-5))
  }))
}

// function mapStateToProps(state) {
//   return {
//     posts: [],
//   }
// }
}
export default connect()(OnSalePage);
