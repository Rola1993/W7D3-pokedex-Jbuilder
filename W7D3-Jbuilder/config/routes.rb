Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :guests, only: [:index, :show]
  end

end
