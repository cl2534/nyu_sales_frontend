import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ClearIcon from '@material-ui/icons/Clear'
import Card from '@material-ui/core/Card';
import * as actions from '../actions'
import {connect} from 'react-redux'
class UserBlurb extends Component{
  // state = {}
  constructor(props) {
    super(props)
    this.state = {
      currentUserInstance: {}
    }
  }


  componentDidMount() {
    if (!this.props.renderPosts) {
      this.fetchUser(this.props.postuserID);
    }
  }


  handleDelete = (event) => {
    fetch(`http://localhost:4000/api/v1/sale_posts/` + this.props.postID, {
      method: 'DELETE',
    }).then(res => this.fetchAllPosts())
  }

  fetchAllPosts = () => {
    fetch('http://localhost:4000/api/v1/sale_posts/')
    .then(res => res.json())
    .then(res => this.props.getPostsAction(res))
  }

  fetchUser = (user_id) => {
    fetch('http://localhost:4000/api/v1/users/' + user_id)
    .then(res => res.json())
    .then(res => this.setState({
      currentUserInstance: res.user
    }))
  }

  renderAvatar = () => {
    if (!!this.props.renderPosts) {
      return (
        <CardHeader
          avatar={
            <Avatar aria-label={this.props.postuser.name} className={this.props.avatar}>
              {this.props.postuser.name.charAt(0).toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton>
              <ClearIcon onClick = {this.handleDelete}/>
            </IconButton>
          }
          title={this.props.postuser.name}
          subheader={this.props.postuser.location}
        />
      )
    } else if (this.state.currentUserInstance){
      console.log(this.state.currentUserInstance)
      return (
        <CardHeader
          avatar={
            <Avatar aria-label={this.state.currentUserInstance.name} className={this.props.avatar}>
              {this.state.currentUserInstance.name.charAt(0).toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton>
              <ClearIcon onClick = {this.handleDelete}/>
            </IconButton>
          }
          title={this.state.currentUserInstance.name}
          subheader={this.state.currentUserInstance.location}
        />
      )
    } else {
      return (
        <CardHeader
          avatar={
            <Avatar aria-label={this.props.postuser.name} className={this.props.avatar}>
              {this.props.postuser.name.charAt(0).toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton>
              <ClearIcon onClick = {this.handleDelete}/>
            </IconButton>
          }
          title={this.props.postuser.name}
          subheader={this.props.postuser.location}
        />
      )
    }
  }

  render() {

    return (
      <div>
        {this.renderAvatar()}
      </div>
  )
  }
}
function mapStateToProps(state) {
  return {
    ...state
  }
}
export default connect(mapStateToProps, actions)(UserBlurb);
