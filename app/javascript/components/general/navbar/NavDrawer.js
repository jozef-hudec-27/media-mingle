import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Drawer from '../Drawer'
import Logo from '../Logo'
import { HouseDoor, Book, ClockHistory, PlayBtn, HandThumbsUp, PlayCircle } from 'react-bootstrap-icons'

export default function NavDrawer() {
  return (
    <div className="nav-drawer btn-hover-grey-circle">
      <Drawer
        button={
          <button className="nav-drawer btn" aria-label="Navbar drawer">
            <FontAwesomeIcon icon={faBars} />
          </button>
        }
        links={[
          { icon: <HouseDoor />, text: 'Home', url: '/' },
          { icon: <PlayCircle />, text: 'Subscriptions', url: '/' },
          { icon: <Book />, text: 'Library', url: '/' },
          { icon: <ClockHistory />, text: 'History', url: '/' },
          { icon: <PlayBtn />, text: 'Your videos', url: '/' },
          { icon: <HandThumbsUp />, text: 'Liked videos', url: '/' }
        ]}
      >
        <Logo />
      </Drawer>
    </div>
  )
}
