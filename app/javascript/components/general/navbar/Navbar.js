import React from 'react'
import Logo from '../Logo'
import AvatarBtn from './AvatarBtn'
import NotificationsBtn from './NotificationsBtn'
import Searchbar from './Searchbar'
import SignInBtn from './SignInBtn'

export default function Navbar({ userInfo }) {
  return (
    <nav>
      <Logo />

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
