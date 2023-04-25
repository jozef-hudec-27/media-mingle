require 'net/http'

class Api::VideosController < ApplicationController
  def index
    videos = Video.all
    videos = videos.map do |video|
      video.as_json.merge({
                            video_url: url_for(video.video),
                            thumbnail_url: url_for(video.thumbnail),
                            view_count: video.views.count,
                            duration: format_video_duration(video_duration(video)),
                            user: video.user
                          })
    end

    render json: videos
  end

  private

  # returns duration of a video in seconds
  def video_duration(video)
    FFMPEG::Movie.new(url_for(video.video)).duration.round
  end

  # returns duration in the format 'hh:mm:ss'
  def format_video_duration(duration_sec)
    hours = duration_sec / 3600
    minutes = (duration_sec / 60) % 60
    seconds = duration_sec % 60
    if hours.positive?
      "#{hours.to_s.rjust(2, '0')}:#{minutes.to_s.rjust(2, '0')}:#{seconds.to_s.rjust(2, '0')}"
    else
      "#{minutes.to_s.rjust(2, '0')}:#{seconds.to_s.rjust(2, '0')}"
    end
  end
end
