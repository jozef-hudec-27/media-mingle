import React from 'react'
import Dropdown from '../Dropdown'
import { Person, BoxArrowRight } from 'react-bootstrap-icons'
import useToast from '../../../hooks/useToast'
import { request } from '../../../utils'

export default function AvatarBtn({ userInfo }) {
  return (
    <div className="avatar-btn">
      <Dropdown
        button={
          <button className="btn">
            <img className="rounded" src={userInfo.avatar_url} alt="User PFP" />
          </button>
        }
        links={[
          { text: 'Your channel', icon: <Person />, url: '/' },
          {
            text: 'Sign out',
            icon: <BoxArrowRight />,
            url: '/',
            onClick(e) {
              e.preventDefault()

              request(
                '/users/sign_out',
                'DELETE',
                {
                  headers: {
                    'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                  },
                },
                () => (window.location.href = ''),
                (_) => useToast('Unable to log out.', 'error')
              )
            },
          },
        ]}
      >
        <div className="avatar-btn-dropdown flexbox gap-16">
          <img className="rounded" src={userInfo.avatar_url} alt="User PFP" />

          <div className="flexbox flex-column gap-4">
            <p>@{userInfo.username}</p>
            <p>{userInfo.email}</p>
          </div>
        </div>
      </Dropdown>
    </div>
  )
}
