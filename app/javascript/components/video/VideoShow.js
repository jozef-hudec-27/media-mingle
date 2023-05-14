import React from 'react'

export default function VideoShow({ video }) {
  return (
    <div className="video">
      <video controls>
        <source src={video.video_url} type="video/mp4" />
      </video>
    </div>
  )
}
