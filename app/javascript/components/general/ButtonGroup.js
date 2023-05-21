import React from 'react'

export default function ButtonGroup({ name, buttons }) {
  return (
    <div className={`${name && `${name}-button-group`} button-group`}>
      {buttons.map((button, index) => (
        <button
          key={index}
          onClick={button.onClick}
          className={`btn button-group-button ${index === 0 ? 'button-group-button-first' : ''} ${
            index === buttons.length - 1 ? 'button-group-button-last' : ''
          }`}
          aria-label={button.ariaLabel}
        >
          <div className="flexbox flex-center gap-4" aria-hidden="true">
            {button.icon && button.icon}
            {button.name}
          </div>
        </button>
      ))}
    </div>
  )
}
