import React from 'react'
import Logo from '../Logo'
import AvatarBtn from './AvatarBtn'
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
        <AvatarBtn userInfo={userInfo} />
      )}
    </nav>
  )
}
