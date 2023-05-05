import React, { useContext } from 'react'
import { Bell, BellFill } from 'react-bootstrap-icons'
import { DropdownContext } from '../../../contexts/DropdownContext'
import Dropdown from '../Dropdown'

export default function NotificationsBtn() {
  const { isDropdownVisible } = useContext(DropdownContext)

  return (
    <div className="notifications-btn btn-hover-grey-circle">
      <Dropdown
        name="navbar-notifications"
        button={
          <button className="btn" aria-label="Notifications">
            {isDropdownVisible('navbar-notifications') ? (
              <BellFill className="p-8" aria-hidden="true" size={24} />
            ) : (
              <Bell className="p-8" aria-hidden="true" size={24} />
            )}
          </button>
        }
      >
        <div className="notifications-btn-dropdown">
          <div className="flexbox flex-center">
            <div className="flexbox flex-column gap-24">
              <Bell size={96} fill="#909090" />

              <div className="flexbox flex-column gap-8">
                <h3>Your notifications live here</h3>
                <p>Subscribe to your favourite channels to receive notifications about their latest videos.</p>
              </div>
            </div>
          </div>
        </div>
      </Dropdown>
    </div>
  )
}
