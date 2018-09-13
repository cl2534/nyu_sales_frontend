import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-image-resizer'
import { Card, Icon } from 'semantic-ui-react'

export default class Box extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <Card>
      <Link to={"/sale-category/" + this.props.salecategory.id} >
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
