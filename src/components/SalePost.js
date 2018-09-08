import React, {Component} from 'react';
import User from './User';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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

  render() {
    return (
      <div className = 'salepost'>
        <div className = 'salepost-inner'>
          <div className="flex-container">
            
          </div>
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

// function mapStateToProps(state) {
//   return {
//     posts: state.sale_posts,
//     renderCategories: state.renderCategories
//   }
// }
//
// export default connect(mapStateToProps)(SalePost);
