import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Drawer from '../Drawer'

export default function NavDrawer() {
  return (
    <div className="btn-hover-grey-circle">
      <Drawer
        button={
          <button className="nav-drawer btn" aria-label="Navbar drawer">
            <FontAwesomeIcon icon={faBars} />
          </button>
        }
        links={[]}
      >
        <button>btn1</button>
        <button>btn2</button>
        <button>btn3</button>
        <button>btn4</button>
      </Drawer>
    </div>
  )
}
