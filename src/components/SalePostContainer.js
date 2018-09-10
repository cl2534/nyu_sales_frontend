import React, {Component, Fragement} from 'react';
import {connect} from 'react-redux'
import SalePost from './SalePost'

class SalePostContainer extends Component {

  renderPosts = () => {
    if (this.props.sale_posts) {
   return this.props.sale_posts.map(salepost => {
     return (
       <SalePost salepost={salepost} key={salepost.id} renderCategories={this.props.renderCategories}/> )}
   )
 }
}

  render() {
    return (
      <div className = 'post-container column'>
        {this.renderPosts()}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  sale_posts: state.reducer.sale_posts,
  renderCategories: state.reducer.renderCategories
})


export default connect(mapStateToProps)(SalePostContainer);
