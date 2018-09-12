//a container class that contains Box components. The number of generated Boxes
//it displays is determined using props.
import {connect} from 'react-redux'
import React, {Component} from 'react';
import CategoryBox from './CategoryBox.js';
import CategoryPage from './CategoryPage'
import Grid from '@material-ui/core/Grid'

class CategoryBoxContainer extends Component {

  // handleClick = (style_id) => {
  //   return(
  //     <StylePage styleId = {style_id} />
  //   )
  // }
  generateCategories = () => {
    return this.props.sale_categories.map(salecategory => {
      return (
        <CategoryBox key = {salecategory.id} id = {salecategory.id} salecategory = {salecategory} />
      )
    })
  }

  render() {
    return (
      <Grid container justify = "space-evenly" directions = "row" alignItems = "flex-start">
        {this.generateCategories()}
      </Grid>
    )
  }
}
const mapStateToProps = (state) => ({
  sale_categories: state.reducer.sale_categories,
})
export default connect(mapStateToProps)(CategoryBoxContainer);
