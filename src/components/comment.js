import React, {Component} from 'react';
import { Comment, Icon } from 'semantic-ui-react'
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from "@material-ui/core/Typography";


export default class comment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: ''
    }
  }

  componentDidMount(props) {
    this.findUser(this.props.userID)
  }

  findUser = (user_id) => {
    fetch(`http://localhost:4000/api/v1/users/` + user_id)
    .then(res => res.json())
    .then(res => this.setState({
      currentUser: res.user
    }))
  }


  render () {
    return (
        <Typography key={comment._id}>
          <strong>{this.state.currentUser.name}: </strong>
          {this.props.comment}
        </Typography>
    )
  }
}
