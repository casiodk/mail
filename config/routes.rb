# -*- encoding : utf-8 -*-
Mailgorilla::Application.routes.draw do
  devise_for :users
  root to: "words#index"
end
