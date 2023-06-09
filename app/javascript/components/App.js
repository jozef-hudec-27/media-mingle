import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { request } from '../utils'
import Navbar from './general/navbar/Navbar'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import { DropdownContext } from '../contexts/DropdownContext'
import Video from './pages/Video'

export default function App() {
  const [userInfo, setUserInfo] = useState(undefined)
  // undefined - loading, null - fetch error, empty object - not signed in, array - signed in

  const [visibleDropdown, setVisibleDropdown] = useState(null)

  // Closes currently open dropdown and/or opens a new one
  const handleDropdownBtnClick = (dropdownName) => {
    setVisibleDropdown((prevVisibleDropdown) => {
      return dropdownName === prevVisibleDropdown ? null : dropdownName
    })
  }

  const isDropdownVisible = (dropdownName) => {
    return dropdownName === visibleDropdown
  }

  useEffect(() => {
    // Returns true if element is not inside a dropdown / isn't a dropdown
    const isNotDropdown = (element) => {
      if (element === null) return true

      return !element.classList?.contains('dropdown') && isNotDropdown(element.parentNode)
    }

    const handleClickOutsideDropdown = (e) => {
      // If we're not clicking the left mouse button, ignore
      if (e.which !== 1) return

      if (isNotDropdown(e.target)) {
        setVisibleDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutsideDropdown)

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideDropdown)
    }
  }, [])

  useEffect(() => {
    request(
      '/api/me',
      'GET',
      {},
      (data) => setUserInfo(data),
      (_) => setUserInfo(null)
    )
  }, [])

  return (
    <DropdownContext.Provider value={{ handleDropdownBtnClick, isDropdownVisible }}>
      <Router>
        <Navbar userInfo={userInfo} />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/videos/:id" element={<Video />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </DropdownContext.Provider>
  )
}
