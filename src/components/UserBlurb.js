import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Card from '@material-ui/core/Card';

export default class UserBlurb extends Component{
  // state = {}
  constructor(props) {
    super(props)
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
            <MoreVertIcon />
          </IconButton>
        }
        title={this.props.postuser.name}
        subheader={this.props.postuser.location}
      />
    )
  }
}
