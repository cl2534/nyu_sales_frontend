import * as actions from '../actions'
import SalePostContainer from './SalePostContainer.js';
import React, {Component, Fragement} from 'react';
import {connect} from 'react-redux'
// import SideBar from './SideBar.js';
// import Header from './Header.js';
// import Adapter from './Adapter.js'
class OnSalePage extends Component {



componentDidMount() {
  this.fetchFiveRecentPosts();
}

// fetchFiveRecentPosts = () => {
//   fetch('http://localhost:4000/api/v1/sale_posts').then(res => res.json()).then(res => this.setState({
//     posts: res.saleposts.slice(Math.max(-5))
//   }))
fetchFiveRecentPosts = () => {
  fetch('http://localhost:4000/api/v1/sale_posts').then(res => res.json()).then(res =>
  this.props.getPostsAction(res))
}

// this.props.getPostsAction(res.sale_posts.slice(Math.max(-5))))

  render() {

    return (
      <div className="black">
        <br />
        <div className="flex-container">
          <SalePostContainer/>
          {console.log("SALE POSTS", this.props.sale_posts)}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    sale_posts: state.reducer.sale_posts
  }
}
//#this.props.id
export default connect(mapStateToProps, actions)(OnSalePage);
