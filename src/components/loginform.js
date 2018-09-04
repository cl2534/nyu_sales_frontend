import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router'
import { loginUser } from '../actions/user'
import { Button, Form, Segment, Message } from 'semantic-ui-react'

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
      <Segment>
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
              label="email"
              placeholder="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <Form.Input
              type="password"
              label="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
      </Segment>
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
