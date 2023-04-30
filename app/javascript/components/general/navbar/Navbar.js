import React from 'react'
import { Link } from 'react-router-dom'
import useToast from '../../../hooks/useToast'
import Logo from '../Logo'
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
        'User'
      )}
    </nav>
  )
}
