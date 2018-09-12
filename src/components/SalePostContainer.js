import React, {Component} from 'react';
import {connect} from 'react-redux'
import SalePost from './SalePost'
import Grid from '@material-ui/core/Grid'
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
        <Grid container justify="space-evenly" direction="row" alignItems = "flex-start" >
        {this.renderPosts()}
        </Grid>
    )
  }
}
const mapStateToProps = (state) => ({
  sale_posts: state.reducer.sale_posts,
  renderCategories: state.reducer.renderCategories
})


export default connect(mapStateToProps)(SalePostContainer);
