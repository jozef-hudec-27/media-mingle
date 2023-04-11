Rails.application.routes.draw do
  devise_for :users
  root 'react#index'
end
