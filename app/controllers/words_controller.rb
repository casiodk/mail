class WordsController < ApplicationController
  def index
    @words = SentenceGenerator.new(5, "Anders").words
  end
end
