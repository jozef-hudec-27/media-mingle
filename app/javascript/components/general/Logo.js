import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to="/">
      <div className="media-mingle-logo flexbox flex-center gap-4">
        <FontAwesomeIcon icon={faCirclePlay} size="lg" />
        <h1>MediaMingle</h1>
      </div>
    </Link>
  )
}
