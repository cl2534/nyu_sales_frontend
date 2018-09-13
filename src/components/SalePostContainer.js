import React, {Component} from 'react';
import {connect} from 'react-redux'
import SalePost from './SalePost'
import Grid from '@material-ui/core/Grid'
class SalePostContainer extends Component {

  renderPosts = () => {
    if (this.props.saleposts) {
   return this.props.saleposts.map(salepost => {
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
  saleposts: state.reducer.sale_posts,
  renderCategories: state.reducer.renderCategories
})

SalePostContainer.defaultProps = {
  saleposts: [],
  renderCategories: true
}
export default connect(mapStateToProps)(SalePostContainer);
