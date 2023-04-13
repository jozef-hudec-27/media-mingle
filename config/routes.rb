Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'users/registrations' }

  root 'react#index'
  get '*path', to: 'react#index'
end
