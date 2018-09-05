import React, {Component} from 'react';
import User from './User';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class SalePost extends Component{
//   constructor(props) {
//     super(props)
// //initial state takes in the amount of likes the salepost has, and whether or not
// //the like button has been pressed already. if its been pressed, it will disable
// //the like button.
//     this.state = {
//       likes: props.salepost.likes,
//       likedAlready: false
//     }
//   }
generateCategories = () => {
  if (this.props.post.categories.length == 0) {
    return null
  }
  else {
    let categoryArr = this.props.post.articles.split(",")
    let returnArray = []
    for (let category in categoryArr) {
      returnArray.push(<li> {categoryArr[category]} </li>)
    }
    return <ul className="right-list">Listed Categories: {returnArray} </ul>
  }
}

  render() {
    return (
      <div className = 'salepost'>
        <div className = 'salepost-inner'>
          <div className="flex-container">
            <User className="user-blurb" userId = {this.props.salepost.user_id} />
          </div>
          {this.generateCategories()}
          <div>
            <div className="salepost-title"> {this.props.salepost.name} </div>
            <img src ={this.props.salepost.picture_url}/>
            <br />
          </div>
        </div>
      </div>
    )
  }
}
