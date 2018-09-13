//a container class that contains Box components. The number of generated Boxes
//it displays is determined using props.
import {connect} from 'react-redux'
import React, {Component} from 'react';
import CategoryBox from './CategoryBox.js';
import CategoryPage from './CategoryPage'
import Grid from '@material-ui/core/Grid'

export default class CategoryContainer extends Component {

  constructor(props) {
    super(props)

  }

  // handleClick = (style_id) => {
  //   return(
  //     <StylePage styleId = {style_id} />
  //   )
  // }
  generateCategories = () => {

    return this.props.salecategories.map(salecategory => {
      return (
        <CategoryBox key = {salecategory.id} id = {salecategory.id} salecategory = {salecategory} categoryPosts = {salecategory.sale_posts}/>
      )
    })
  }

  handleClick = (categoryId) => {
    return(
      <CategoryPage categoryId = {categoryId}/>
    )
  }
  generateBoxes = () => {
  if (this.props.salecategories == []) {
    return null
  }
  let returnArray = []
  for (let category in this.props.salecategories) {
    let generatedKey = (this.props.salecategories[category].id.toString() + '-' + Math.random().toString())
    returnArray.push(<CategoryBox key={generatedKey} id = {this.props.salecategories[category].id} salecategory={this.props.salecategories[category]}
    handleClick = {this.handleClick}
      />)
  }
  return returnArray
}

  render() {
    return (
      <Grid container justify="space-evenly" direction="row" alignItems = "flex-start" >
      {this.generateBoxes()}
      </Grid>
    )

    }
  }
