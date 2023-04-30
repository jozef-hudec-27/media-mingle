import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Dropdown({ button, links, children }) {
  const dropdownBodyRef = useRef()

  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        onClick={() => {
          dropdownBodyRef.current?.classList.toggle('hidden')
        }}
      >
        {button}
      </div>

      <div className="dropdown-body hidden" ref={dropdownBodyRef}>
        {children && <div className="p-16">{children}</div>}

        {children && links?.length && <hr></hr>}

        {links?.map((link, i) => {
          return (
            <div
              className={`dropdown-link px-16 pt-16 pb-16`}
              key={i}
            >
              <Link to={link.url}>
                <div className="flexbox gap-8 flex-align-center">
                  {link.icon} {link.text}
                </div>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
