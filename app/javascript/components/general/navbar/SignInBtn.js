import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export default function SignInBtn() {
  return (
    <a href="/users/sign_in" className="sign-in-btn btn rounded">
      <FontAwesomeIcon icon={faUser} /> Sign in
    </a>
  )
}
