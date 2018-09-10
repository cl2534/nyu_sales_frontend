import React, {Component} from 'react';
import User from './User';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-image-resizer'
export default class SalePost extends Component{

  constructor(props) {
    super(props)
  }

  generateCategories = () => {
    if (this.props.renderStyles) {
      if (this.props.salepost.sale_categories.length == 0) {
        return null
      }
      else {
        let returnArray = []
        for (let category in this.props.salepost.sale_categories) {
          returnArray.push(<Link className="style-text" to={"/sale_categories/" + this.props.salepost.sale_categories[category].id}> <li>   {this.props.salepost.sale_categories[category].name} </li> </Link>)
        }
        return <ul className="right-list"> Categories:  {returnArray} </ul>
      }
    }
  }

        // <img src ={this.props.salepost.picture_url}/>
  render() {
    return (

      <div class="ui items">
        <div class="item">
          <div class="ui small image">
            <img src={this.props.salepost.picture_url}/>
          </div>
          <div class="content">
            <div class="header">{this.props.salepost.name}</div>
            <div class="meta">
              <span class="price">$200</span>
            </div>
            <div class="description">
              <p>Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their tiny stature, and even others for their massive size.</p>
        <p>Many people also have their own barometers for what makes a cute dog.</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

// function mapStateToProps(state) {
//   return {
//     posts: state.sale_posts,
//     renderCategories: state.renderCategories
//   }
// }
//
// export default connect(mapStateToProps)(SalePost);
