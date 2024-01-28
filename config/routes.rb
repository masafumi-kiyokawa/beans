Rails.application.routes.draw do
  root to: redirect('/beans')

  get 'beans', to: 'site#index'
  get 'beans/new', to: 'site#index'
  get 'beans/:id', to: 'site#index'
  get 'beans/:id/edit', to: 'site#index'

  namespace :api do
    resources :beans, only: %i[index show create destroy update]
  end
end
