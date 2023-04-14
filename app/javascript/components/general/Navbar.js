import React from 'react'
import { Link } from 'react-router-dom'
import useToast from '../../hooks/useToast'

export default function Navbar() {
  return (
    <nav>
      <h1>
        <Link to="/">MediaMingle</Link>
      </h1>

      <ul className="flexbox gap-16">
        <li className="nav-link">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault()

              fetch('/users/sign_out', {
                method: 'DELETE',
                headers: {
                  'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                },
              })
                .then((response) => {
                  if (response.ok) return (window.location.href = '')
                  throw new Error('')
                })
                .catch((_) => {
                  useToast('Unable to log out.', 'error')
                })
            }}
          >
            Logout
          </a>
        </li>
      </ul>
    </nav>
  )
}
