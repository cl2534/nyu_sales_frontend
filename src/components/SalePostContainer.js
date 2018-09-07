import React, {Component, Fragement} from 'react';
import {connect} from 'react-redux'
import SalePost from './SalePost'

export default class SalePostContainer extends Component {

  renderPosts = () => {
   return this.props.sale_posts.map(salepost => {
     return (
       <SalePost salepost={salepost} key={salepost.id} renderCategories={this.props.renderCategories}/> )}
   )
  }

  render() {
    return (
      <div className = 'post-container column'>
        {this.renderPosts()}
      </div>
    )
  }
}
  function mapStateToProps(state) {
    return {
      posts: state.sale_posts,
      renderCategories: state.renderCategories
    }
  }
