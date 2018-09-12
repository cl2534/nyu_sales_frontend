import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ClearIcon from '@material-ui/icons/Clear'
import Card from '@material-ui/core/Card';

export default class UserBlurb extends Component{
  // state = {}

  handleDelete = (event) => {
    console.log(this.props.postID)
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
