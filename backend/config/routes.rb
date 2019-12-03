Rails.application.routes.draw do
  resources :payments #TODO: add more intentional routes
  resources :tenants
  resources :buildings
  resources :landlords
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
