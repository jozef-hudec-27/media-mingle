Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations' }

  namespace :api do
    resources :videos, only: [:index]
  end

  root 'react#index'
  get '*path', to: 'react#index', constraints: ->(request) { !request.path.start_with?('/rails/active_storage') }
end
