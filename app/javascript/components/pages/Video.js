import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { request } from '../../utils'
import Page from '../general/Page'
import VideoComments from '../video/VideoComments'
import VideoShow from '../video/VideoShow'
import VideoSuggestions from '../video/VideoSuggestions'

export default function Video() {
  const [video, setVideo] = useState(undefined)
  // undefined - loading, null - fetch error, array - record

  const { id } = useParams()

  useEffect(() => {
    request(
      `/api/videos/${id}`,
      'GET',
      {},
      (data) => setVideo(data),
      (_) => setVideo(null)
    )
  }, [])

  if (!video) return

  return (
    <Page name="video">
      <div className="video-wrapper flexbox flex-justify-center gap-24">
        <div className="flexbox flex-column" style={{ border: '2px solid red'}}>
          <VideoShow video={video} />
          <VideoComments video={video} />
        </div>

        <VideoSuggestions video={video} />
      </div>
    </Page>
  )
}
