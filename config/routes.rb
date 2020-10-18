Rails.application.routes.draw do
  root 'homes#index'

  resources :portfolio, only: [:index]

  get '/PortfolioPage', to: 'homes#index'
end
