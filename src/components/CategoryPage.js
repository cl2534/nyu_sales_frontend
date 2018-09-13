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

//fetches style/post join table information from the backend to display. takes in a style id and outputs
//an array of posts associated with the style
  fetchCategory = (categoryId) => {
    fetch(`http://localhost:4000/api/v1/sale_categories/` + this.state.currentCategory.id)
    .then(res => res.json())
    .then(json => {
      this.setState({
        categoryPosts: json.sale_posts
      })
    })
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
      currentCategory: json
    }))
  }
}

  renderPosts = () => {
    if (this.state.categoryPosts.length == 0) {
      return <h2> Sorry, this category does not have any posts associated with it yet! </h2>
    }
    else {
      return <SalePostContainer saleposts={this.state.categoryPosts} renderCategories={false} />
    }
  }


  render() {

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
