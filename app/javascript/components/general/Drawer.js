import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import useFocusTrap from '../../hooks/useFocusTrap'

export default function Drawer({ button, links, children }) {
  const [show, setShow] = useState(false)

  const drawerBodyRef = useRef()
  const drawerBodyWrapperRef = useRef()
  const drawerOverlayRef = useRef()

  useFocusTrap(drawerBodyWrapperRef, show)

  const closeDrawer = () => {
    const drawerAnimationDuration = 300

    const drawerBody = drawerBodyRef.current
    const drawerOverlay = drawerOverlayRef.current

    if (drawerBody && drawerOverlay) {
      drawerBody.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-100%)' }], {
        duration: drawerAnimationDuration,
        iterations: 1,
      })
      drawerOverlay.animate([{ opacity: '1' }, { opacity: '0' }], {
        duration: drawerAnimationDuration,
        iterations: 1,
      })

      setTimeout(() => {
        setShow(false)
      }, drawerAnimationDuration * 0.93)
    }
  }

  return (
    <div className="drawer">
      <div className="drawer-btn" onClick={() => setShow(true)}>
        {button}
      </div>

      {show && (
        <div className="drawer-body-wrapper" ref={drawerBodyWrapperRef}>
          <div className="drawer-body" ref={drawerBodyRef}>
            {children && <div className="p-12">{children}</div>}

            {links?.map((link, i) => {
              return (
                <div className="drawer-link px-12 pt-12 pb-12" key={i}>
                  <Link to={link.url} onClick={link.onClick || function () {}}>
                    <div className="flexbox gap-8 flex-align-center">
                      {link.icon} {link.text}
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>

          <div
            className="drawer-overlay"
            tabIndex={0}
            ref={drawerOverlayRef}
            onClick={closeDrawer}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                closeDrawer()
              }
            }}
          ></div>
        </div>
      )}
    </div>
  )
}
