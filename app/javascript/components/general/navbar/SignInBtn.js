import React from 'react'
import { PersonCircle } from 'react-bootstrap-icons'

export default function SignInBtn() {
  return (
    <a href="/users/sign_in" className="sign-in-btn btn rounded flexbox flex-align-center gap-8">
      <PersonCircle /> Sign in
    </a>
  )
}
