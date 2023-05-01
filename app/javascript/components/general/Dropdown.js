import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Dropdown({ name, button, links, isVisible, onClick, children }) {
  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        onClick={() => {
          onClick(name)
        }}
      >
        {button}
      </div>

      {isVisible(name) && (
        <div className="dropdown-body">
          {children && <div className="p-16">{children}</div>}

          {children && links?.length && <hr></hr>}

          {links?.map((link, i) => {
            return (
              <div className={`dropdown-link px-16 pt-16 pb-16`} key={i}>
                <Link to={link.url} onClick={link.onClick || function () {}}>
                  <div className="flexbox gap-8 flex-align-center">
                    {link.icon} {link.text}
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
