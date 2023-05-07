import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { DropdownContext } from '../../contexts/DropdownContext'
import Divider from './divider'

export default function Dropdown({ name, button, links, children }) {
  const { handleDropdownBtnClick, isDropdownVisible } = useContext(DropdownContext)

  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        onClick={() => {
          handleDropdownBtnClick(name)
        }}
      >
        {button}
      </div>

      {isDropdownVisible(name) && (
        <div className="dropdown-body">
          {children && <div className="p-16">{children}</div>}

          {children && links?.length && <Divider />}

          {links?.map((link, i) => {
            if (link.divider) return <Divider key={i} />

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
