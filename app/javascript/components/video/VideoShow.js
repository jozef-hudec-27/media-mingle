import React from 'react'

export default function VideoShow({ video }) {
  console.log(video)
  return (
    <div className="video flexbox flex-column gap-10">
      <video controls>
        <source src={video.video_url} type="video/mp4" />
      </video>

      <h2>{video.title}</h2>

      <div className="flexbox">
        <div className="flexbox">
          <div className="flexbox">
            <img src={video.user.avatar} alt={`${video.user.username} avatar`} />
            <div className="flexbox flex-column">
              <a href="">{video.user.username}</a>
              <p></p>
            </div>
          </div>

          <button className='subscribe-btn'>Subscribe</button>
        </div>

        <div className="btn-group">
          <button>Like</button>
          <button>Dislike</button>
        </div>
      </div>
    </div>
  )
}
