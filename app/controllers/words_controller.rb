class WordsController < ApplicationController
  def index
    @words = SentenceGenerator.new(8, "Anders").words
  end
end
