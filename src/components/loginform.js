import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import { loginUser } from '../actions/user'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LoginForm extends React.Component {
  state = { email: '', password: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleLoginSubmit = () => {
    this.props.loginUser(this.state.email, this.state.password)
    this.setState({ email: '', password: '' })
  }

  render() {
    return this.props.loggedIn ? (
      <Redirect to="/profile" />
    ) : (
  <div className='login-form'>
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='purple' textAlign='center'>
          <Image src='https://i.pinimg.com/originals/dd/bb/ed/ddbbed13fd7874e79a75e931f34d7253.jpg' /> Log-in to your account
        </Header>
        <Form size = 'large'>
        <Segment stacked>
        <Form
          onSubmit={this.handleLoginSubmit}
          size="mini"
          key="mini"
          loading={this.props.authenticatingUser}
          error={this.props.failedLogin}
        >
          <Message error header={this.props.failedLogin ? this.props.loginError.message : null} />
          <Form.Group widths="equal">
            <Form.Input
              flud icon = 'user'
              iconPosition = 'left'
              placeholder="E-mail address"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <Form.Input
              fluid icon = 'lock'
              iconPosition = 'left'
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Group>
          <Button color = 'purple' fluid size = 'large' type="submit">Login</Button>
        </Form>
      </Segment>
    </Form>
        <Message>
          New to us? <a href='#'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
  )
  }
}

const mapStateToProps = state => ({
  authenticatingUser: state.usersReducer.authenticatingUser,
  failedLogin: state.usersReducer.failedLogin,
  loginError: state.usersReducer.error,
  user: state.usersReducer.email,
  loggedIn: state.usersReducer.loggedIn
})

export default withRouter(
  connect(
    mapStateToProps,
    { loginUser }
  )(LoginForm)
)
