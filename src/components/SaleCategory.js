import React, {Component, Fragment} from 'react';

import CategoryContainer from './CategoryContainer'
import * as actions from '../actions'
export default class SaleCategory extends Component {


  state = {
    salecategories: []
  }
  componentDidMount() {
    fetch('http://localhost:4000/api/v1/sale_categories')
    .then(res => res.json())
    .then(res=> this.setState({
      salecategories: res.sale_categories
      })
    )
  }


  render() {
    return (
      <div className="black">
          <CategoryContainer salecategories={this.state.salecategories}/>
      </div>
    )
  }
}
