import React, {Component} from 'react';
import { Comment, Icon } from 'semantic-ui-react'
import AccountCircle from '@material-ui/icons/AccountCircle';


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
    .then(res => {console.log(res); this.setState({
      currentUser: res.user
    })})
  }


  render () {
    return (
        <Comment>
          <br />
          <AccountCircle/>
          <Comment.Content>
            <Comment.Author>{this.state.currentUser.name}</Comment.Author>
            <Comment.Text>
              {this.props.comment}
            </Comment.Text>
          </Comment.Content>
        </Comment>
    )
  }
}
