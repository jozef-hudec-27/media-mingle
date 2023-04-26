import React, { useState, useEffect } from 'react'
import Page from '../general/Page'
import { request } from '../../utils'
import VideoPreview from '../video/VideoPreview'

export default function Home() {
  const [videos, setVideos] = useState(undefined)
  // undefined - loading, null - fetch error, empty array - no records, array - records

  useEffect(() => {
    request('/api/videos', 'GET', {}, (data) => setVideos(data))
  }, [])

  if (videos === undefined) {
    // Videos are loading
    return 'Loading...'
  } else if (videos === null) {
    // Error fetching videos
    return 'Could not fetch videos.'
  }

  return (
    <Page name="home">
      {videos.length === 0 ? (
        <p>No videos yet.</p>
      ) : (
        <div className="home-video-feed">
          {videos.map((video) => {
            return <VideoPreview key={video.id} video={video} />
          })}
        </div>
      )}
    </Page>
  )
}
