import React from 'react'
import Dropdown from '../Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faRightToBracket } from '@fortawesome/free-solid-svg-icons'

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
          { text: 'Sign out', icon: <FontAwesomeIcon icon={faRightToBracket} />, url: '/' },
          { text: 'Your channel', icon: <FontAwesomeIcon icon={faUserCircle} />, url: '/' },
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
