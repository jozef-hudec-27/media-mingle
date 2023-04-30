import React from 'react'
import { Search } from 'react-bootstrap-icons'

export default function Searchbar() {
  return (
    <div className="video-searchbar flexbox">
      <input type="text" placeholder="Search" />

      <button className="search-btn btn">
        <Search />
      </button>
    </div>
  )
}
