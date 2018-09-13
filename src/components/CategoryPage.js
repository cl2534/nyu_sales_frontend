import React, { Component } from 'react';

import SalePostContainer from './SalePostContainer'
export default class CategoryPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentCategory: {},
      categoryPosts: []
    }
  }

//only makes API calls once the component renders. this is to avoid unnecessary backend calls.
  componentDidMount() {
    this.setStyle()
  }


//fetches style information and sets the state to it.
  setStyle = () => {
    if (window.location.search) {
      const query = window.location.search.substring(1)
      const pair = query.split('=')
      const id = pair[1]
    fetch('http://localhost:4000/api/v1/sale_categories/' + id)
    .then(res => res.json())
    .then(json => this.setState({
      currentCategory: json.sale_category,
      categoryPosts: json.sale_category.sale_posts
    }))
  }
}

  renderPosts = () => {

    if (this.state.categoryPosts.length == 0) {
      return <h2> Sorry, this category does not have any posts associated with it yet! </h2>
    }
    else {
      return <SalePostContainer categoryposts={this.state.categoryPosts} renderCategories={false} />
    }
  }


  render() {
    console.log(this.state)
    return (
      <div>

      <br />
      <br />
      <h1>{this.state.currentCategory.name} </h1>
      <div className = 'post-container column'>
        {this.renderPosts()}
      </div>
      </div>
    )
  }
}
