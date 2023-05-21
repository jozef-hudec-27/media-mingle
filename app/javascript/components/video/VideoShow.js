import React from 'react'
import SubscribeBtn from '../channel/SubscribeBtn'
import LikeBtnGroup from './LikeBtnGroup'
import { Link } from 'react-router-dom'

export default function VideoShow({ video }) {
  return (
    <div className="video flexbox flex-column gap-10">
      <video controls>
        <source src={video.video_url} type="video/mp4" />
      </video>

      <h2>{video.title}</h2>

      <div className="flexbox space-between">
        <div className="flexbox gap-24">
          <div className="video-author-wrapper flexbox gap-12 flex-align-center">
            <Link to="/">
              <img className="avatar rounded" src={video.user.avatar} alt={`${video.user.username} avatar`} />
            </Link>
            <div className="flexbox flex-column">
              <Link to="/" className="bold">
                {video.user.username}
              </Link>
              <p>0 subscribers</p>
            </div>
          </div>

          <SubscribeBtn channel={video.user} />
        </div>

        <LikeBtnGroup video={video} />
      </div>
    </div>
  )
}
