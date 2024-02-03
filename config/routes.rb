Rails.application.routes.draw do
<<<<<<< HEAD
  root to: redirect('/beans')

  get 'beans', to: 'site#index'
  get 'beans/new', to: 'site#index'
  get 'beans/:id', to: 'site#index'
  get 'beans/:id/edit', to: 'site#index'
  get 'recipes', to: 'site#index'
  get 'recipes/new', to: 'site#index'
  get 'recipes/:id', to: 'site#index'
  get 'recipes/:id/edit', to: 'site#index'

  namespace :api do
    resources :beans, only: %i[index show create destroy update]
    resources :recipes, only: %i[index show create destroy update]
  end
=======
  root "beans#index"
>>>>>>> 160b883dfffc778a8ea174f45156c9da3bf12da9
end
