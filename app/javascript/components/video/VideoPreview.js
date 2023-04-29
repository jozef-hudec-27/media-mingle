import React, { useRef } from 'react'
import { timeElapsedSince } from '../../utils'

export default function VideoPreview({ video }) {
  const videoLinkRef = useRef()

  return (
    <div
      className="video-preview flexbox flex-column gap-12"
      onClick={(e) => {
        if (e.target.tagName !== 'A') {
          // If we're not clicking a link
          videoLinkRef.current?.click()
        }
      }}
    >
      <a className="thumbnail-wrapper" href={video.video_url}>
        <img className="thumbnail" src={video.thumbnail_url} alt="Video thumbnail" />

        <div className="video-duration-box p-2">
          <p className="font-08">{video.duration}</p>
        </div>
      </a>

      <div className="flexbox gap-12">
        <a href="">
          <img className="avatar rounded" src={video.user.avatar} alt="Author profile picture" />
        </a>

        <div className="flexbox flex-column">
          <h3 className="mb-4">
            <a href="" ref={videoLinkRef}>{video.title}</a>
          </h3>

          <div className="video-info">
            <a className="author" href={video.video_url}>
              {video.user.username}
            </a>

            <p>
              {video.view_count} {video.view_count === 1 ? 'view' : 'views'} •{' '}
              {timeElapsedSince(new Date(video.created_at))}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
