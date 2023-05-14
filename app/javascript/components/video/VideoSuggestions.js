import React, { useEffect, useState } from 'react'
import { request } from '../../utils'
import VideoPreview from './VideoPreview'

export default function VideoSuggestions({ video }) {
  const [videos, setVideos] = useState(undefined)
  // undefined - loading, null - fetch error, empty array - no records, array - records

  useEffect(() => {
    request('/api/videos', 'GET', {}, (data) => setVideos(data))
  }, [])

  if (videos === undefined) {
    return 'Loading...'
  } else if (videos === null) {
    return 'Could not fetch video suggestions.'
  }

  return (
    <div className="video-suggestions">
      {videos.length === 0 ? (
        <p>No suggestions for you.</p>
      ) : (
        <div className="home-video-feed">
          {videos.map((video) => {
            return <VideoPreview key={video.id} video={video} />
          })}
        </div>
      )}
    </div>
  )
}
