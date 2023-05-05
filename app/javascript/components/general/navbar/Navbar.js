import React from 'react'
import Logo from '../Logo'
import AvatarBtn from './AvatarBtn'
import NotificationsBtn from './NotificationsBtn'
import Searchbar from './Searchbar'
import SignInBtn from './SignInBtn'
import NavDrawer from './NavDrawer'

export default function Navbar({ userInfo }) {
  return (
    <nav>
      <div className="flexbox flex-align-center gap-20">
        <NavDrawer />
        <Logo />
      </div>

      <Searchbar />

      {userInfo === undefined ? (
        'Loading...'
      ) : userInfo === null ? (
        ''
      ) : Object.keys(userInfo).length === 0 ? (
        <SignInBtn />
      ) : (
        <div className="navbar-btns flexbox flex-align-center gap-12">
          <NotificationsBtn />
          <AvatarBtn userInfo={userInfo} />
        </div>
      )}
    </nav>
  )
}
