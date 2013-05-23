class WordsController < ApplicationController
  def index
    @words = SentenceGenerator.new(5).words
  end
end
