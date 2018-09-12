import React, { Component } from 'react';
import {connect} from 'react-redux'

class NewPost extends Component {

  constructor(props) {
    super(props)

    this.state = {
        user_id: this.props.loggedInUserID,
        name: "",
        picture_url: "",
        price: "",
      }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value,

    })
  }

//submit event listener. makes a post request to the backend with the information provided.
  handleSubmit = (event) => {

    event.preventDefault()
    fetch('http://localhost:4000/api/v1/sale_posts', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({...this.state})
    }).then(res => res.json()).then(json => this.props.history.push('/sales'))
  }

//TODO: make form even prettier.
  render() {
    return (
      <div className="form-container">
        <br />
        <div className="create-post-form">
          <form onSubmit={this.handleSubmit}>
            <label>Post Title: </label> <br />
            <input type="text" name="name" size="73" value={this.state.name} onChange={this.handleChange} maxlength="100"/>
            <br /> <br />
            <label>Item Price: </label> <br />
            <input type="text" name="price" size="73" value={this.state.price} onChange={this.handleChange} maxlength="30"/>
            <br /> <br />
            <label>Post Image URL: </label> <br />
            <input type="URL" name="picture_url" size="73" value={this.state.picture_url} onChange={this.handleChange} maxlength="200"/>
            <br /> <br />
            <input type="submit" bsStyle="info" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedInUserID: state.reducer.loggedInUserID,

  }
}
export default connect(mapStateToProps)(NewPost);
