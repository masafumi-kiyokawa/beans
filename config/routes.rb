Rails.application.routes.draw do
  root "beans#index"
  get "/api/beans", to:"api/beans#index"
end
