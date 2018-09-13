import React, {Component} from 'react';
import {connect} from 'react-redux'
import SalePost from './SalePost'
import Grid from '@material-ui/core/Grid'
class SalePostContainer extends Component {

  renderPosts = () => {

    if (!!this.props.renderCategories) {
      return this.props.saleposts.map(salepost => {
        return (
          <SalePost salepost={salepost} key={salepost.id} renderCategories={this.props.renderCategories}/>
        )}
      )
    } else {
      return this.props.categoryposts.map(salepost => {
        return (
          <SalePost salepost={salepost} key={salepost.id} renderCategories={this.props.renderCategories}/>
        )}
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
})


export default connect(mapStateToProps)(SalePostContainer);
