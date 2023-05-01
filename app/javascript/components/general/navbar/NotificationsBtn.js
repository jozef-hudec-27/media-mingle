import React from 'react'
import { Bell } from 'react-bootstrap-icons'
import Dropdown from '../Dropdown'

export default function NotificationsBtn({ handleDropdownBtnClick, isDropdownVisible }) {
  return (
    <div className="notifications-btn">
      <Dropdown
        name="navbar-notifications"
        button={
          <button className="btn" aria-label="Notifications">
            <Bell className="p-8" aria-hidden="true" size={24} />
          </button>
        }
        isVisible={isDropdownVisible}
        onClick={handleDropdownBtnClick}
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
