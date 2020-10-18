Rails.application.routes.draw do
  root 'homes#index'

  namespace :api do
    namespace :v1 do
      resources :portfolio, only: [:index]
    end
  end


  get '/portfolio', to: 'homes#index'
end
