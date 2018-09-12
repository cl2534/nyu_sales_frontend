import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux'
import CategoryBoxContainer from './CategoryBoxContainer'
import * as actions from '../actions'
class SaleCategory extends Component {
  componentDidMount() {
    this.fetchAllCategories();
  }

  fetchAllCategories = () => {
    fetch('http://localhost:4000/api/v1/sale_categories').then(res => res.json()).then(res=>this.props.getCategoryAction(res))
  }

  render() {
    return (
    <React.Fragment>
      <CategoryBoxContainer/>
    </React.Fragment>
    )
  }
}

  function mapStateToProps(state) {
    return {
      sale_categories: state.reducer.sale_categories
    }
  }

export default connect(mapStateToProps, actions)(SaleCategory);
