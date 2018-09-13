import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-image-resizer'
import { Card, Icon } from 'semantic-ui-react'

export default class Box extends Component {

  constructor(props) {
    super(props)
  }
//
//   state = {
//     clickedBoxes = []
//   }
//
// true = () => {
//     if (clickedBoxes) {
//     return (
//       <CategoryPage></CategoryPage>
//     )
//   }
// }
//
// sandyHandleClick = (box) => {
//   this.setState({
//     clickedBoxes: [...state.clickedBoxes, box]
//   })
// }
//
//   handleClick = () => {
//     return(
//       <CategoryPage categoryId = {categoryId}/>
//     )
//   }
// if object is clicked pass down to category


  render() {
    console.log(this.props.salecategory.sale_posts)
    return (
      <Card>
      <Link to={"/categorypage?id=" + this.props.salecategory.id}>
        <Image
           src= {this.props.salecategory.picture_url}
           height={ 300 }
           width={ 300 }
         />
       <Card.Header>
          {this.props.salecategory.name}
        </Card.Header>
     </Link>
     </Card>
    )
  }
}
