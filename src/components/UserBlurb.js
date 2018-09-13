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

  render() {
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
function mapStateToProps(state) {
  return {
    ...state
  }
}
export default connect(mapStateToProps, actions)(UserBlurb);
