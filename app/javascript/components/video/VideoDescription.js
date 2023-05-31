import React from 'react'

export default function VideoDescription({ video }) {
  const videoDate = new Date(video.created_at)
    .toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    .replace(',', '')

  return (
    <div className="video-description p-12 flexbox flex-column gap-2">
      <p className="bold font-09">
        {video.view_count} views {videoDate}
      </p>

      <p>{video.description}</p>
    </div>
  )
}
