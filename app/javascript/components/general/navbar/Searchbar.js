import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Searchbar() {
  return (
    <div className="video-searchbar flexbox">
      <input type="text" placeholder="Search" />

      <button className="search-btn btn">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  )
}
