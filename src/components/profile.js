import React from 'react'
import { connect } from 'react-redux'
import { Card, Image } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'

const Profile = ({ name, location }) => {
// const Profile = (props) => {
//   console.log(props);
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>

        <Card.Description>{location}</Card.Description>
      </Card.Content>
    </Card>
  )
}


// instead of state.usersReducer.user.username, state.usersReducer.user.avatar
const mapStateToProps = ({ usersReducer: { user: { name, location } } }) => ({
  name,
  location
})

// const mapStateToProps = (state) => {
//   return {
//     location: state.usersReducer.location
//   }
// }
// function mapStateToProps(state){
//   location: state.usersReducer.location
// }

export default withAuth(connect(mapStateToProps)(Profile))
