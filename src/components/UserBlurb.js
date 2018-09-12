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
  constructor(props) {
    super(props)
  }
  handleDelete = (event) => {
    event.preventDefault()
    fetch(`http://localhost:4000/api/v1/sale_posts/` + this.props.postID, {
      method: 'DELETE',
    }).then(res => res.json())
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
