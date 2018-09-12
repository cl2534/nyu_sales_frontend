import React from 'react'
import { connect } from 'react-redux'
import { Card, Image, Icon } from 'semantic-ui-react'
import withAuth from '../hocs/withAuth'
import Grid from '@material-ui/core/Grid'

const Profile = ({ name, location, picture_url, email }) => {
// const Profile = (props) => {
//   console.log(props);
  console.log(email)
  console.log(picture_url)
  return (
  <Grid container justify="space-evenly" direction="row" alignItems = "flex-start" >
    <Card>
      <Image
         src= {picture_url}
         height={ 300 }
         width={ 300 }
       />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className = 'location'> {location} </span>
        </Card.Meta>
        <Card.Description> Contact Info: {email} </Card.Description>
          <Card.Content extra>
            <a>
              <Icon name='user' />
              22 Friends
            </a>
          </Card.Content>
      </Card.Content>
    </Card>
  </Grid>
  )
}


// instead of state.usersReducer.user.username, state.usersReducer.user.avatar
const mapStateToProps = ({ usersReducer: { user: { name, location, picture_url, email } } }) => ({
  name,
  location,
  picture_url,
  email
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
