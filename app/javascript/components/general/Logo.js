import React from 'react'
import { PlayBtnFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/">
      <div className="media-mingle-logo flexbox flex-center gap-3">
        <PlayBtnFill size={32} />
        <h1>MediaMingle</h1>
      </div>
    </Link>
  )
}
