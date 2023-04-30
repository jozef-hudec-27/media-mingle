import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { request } from '../utils'
import Navbar from './general/navbar/Navbar'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'

export default function App() {
  const [userInfo, setUserInfo] = useState(undefined)
  // undefined - loading, null - fetch error, empty object - not signed in, array - signed in

  useEffect(() => {
    request('/api/me', 'GET', {}, (data) => setUserInfo(data), (_) => setUserInfo(null))
  }, [])

  return (
    <Router>
      <Navbar userInfo={userInfo} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}
