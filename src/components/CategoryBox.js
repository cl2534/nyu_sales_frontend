import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-image-resizer'

export default class Box extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <React.Fragment>
      <Link to={"/style/" + this.props.style.id} >
        <Image
           src= {this.props.salecategory.picture_url}
           height={ 300 }
           width={ 300 }
         />
       {this.props.salecategory.name}
      </Link>
      </React.Fragment>
    )
  }
}
