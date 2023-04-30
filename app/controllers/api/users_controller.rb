class Api::UsersController < ApplicationController
  def me
    render json: current_user&.as_json&.merge({ avatar_url: url_for(current_user.avatar) }) || {}
  end
end
