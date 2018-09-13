import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Nav = ({ user: { loggedIn }, location: { pathname } }) => {
  return (
    <Menu pointing secondary>
      {loggedIn ? (
        <Fragment>
          <Menu.Item as={NavLink} to="/profile" name="Profile" active={pathname === '/profile'} />
          <Menu.Item as={NavLink} to = '/sales'name = 'On Sale' active = {pathname ===
            '/sales'} />
          <Menu.Item as = {NavLink} to="/sale-category" name="Shop By Category" active = {pathname === '/sale-category'}  />
          <Menu.Item as = {NavLink} to = '/new-post' name = 'Make a Post' active = {pathname === '/new-post'} />

          <Menu.Menu position="right">
            {/* TODO: logout */}
            <Menu.Item as = {NavLink} to="/login" name="Logout" active = {pathname === '/login'}  />
          </Menu.Menu>
        </Fragment>
      ) : (
        <Menu.Item as={NavLink} to="/login" name="Login" active={pathname === '/login'} />
      )}
    </Menu>
  )
}

const mapStateToProps = ({ usersReducer: user }) => ({ user })

export default withRouter(connect(mapStateToProps)(Nav))
