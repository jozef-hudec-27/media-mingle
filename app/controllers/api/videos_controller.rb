class Api::VideosController < ApplicationController
  def index
    videos = Video.all
    videos = videos.map do |video|
      video.as_json.merge({
                            video_url: url_for(video.video),
                            thumbnail_url: url_for(video.thumbnail),
                            view_count: video.views.count,
                            user: video.user
                          })
    end

    render json: videos
  end
end
