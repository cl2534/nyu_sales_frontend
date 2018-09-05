import React, {Component} from 'react';
import { Link } from 'react-router-dom';


export default class User extends Component{
  // state = {}
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     currentUser: ''
  //   }
  // }

  componentDidMount(props) {
    this.fetchUser()
  }

  fetchUser = (user_id) => {
    fetch(`https://localhost` + this.props.userId).then(res => res.json()).then(res => this.setState({
      currentUser: res.user
    }))
  }


  render() {
    return (
      <div className = 'user'>
        <img className ='user-text avatar'alt="" src={this.state.currentUser.profile_img_link} height="75" width="75"/>
        <div>
          <Link className='user-text user-name' to={"/user/" + this.state.currentUser.id} params={{userId: this.state.currentUser.id}}> {this.state.currentUser.name} </Link>
          <br />
          <br />
          <div className='user-text user-description'> {this.state.currentUser.about_me} </div>
        </div>
      </div>
    )
  }
}
