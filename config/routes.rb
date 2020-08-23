Rails.application.routes.draw do
  root to: 'static_pages#home'

  get '/property/:id' => 'static_pages#property'
  get '/login' => 'static_pages#login'
  get '/booking/:id/success' =>  'static_pages#bookingsuccess'
  get '/mybookings' => 'static_pages#mybookings'

  namespace :api do
    # Add routes below this line
    resources :users, only: [:create]
    resources :sessions, only: [:create]
    resources :properties, only: [:index, :show]
    resources :bookings, only: [:create]
    resources :charges, only: [:create]

    get '/bookings/:id' => 'bookings#unique_booking'
    get '/mypastbookings' => 'bookings#past_user_bookings'
    get '/myupcomingbookings' => 'bookings#upcoming_user_bookings'
    get '/properties/:id/bookings' => 'bookings#get_property_bookings'
    get '/authenticated' => 'sessions#authenticated'
    delete '/sessions'   => 'sessions#destroy'

    # stripe webhook
    post '/charges/mark_complete' => 'charges#mark_complete'
  end
end
