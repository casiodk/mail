# -*- encoding : utf-8 -*-
class SentenceGenerator
  attr_reader :number_of_words
  attr_reader :name

  def initialize(number_of_words=5, name=nil)
    @number_of_words = number_of_words
    @name = name
  end

  def words
    fetch_words
  end

  def fetch_words
    fetch_words = []
    fetch_words += random_sentence_words
    fetch_words += random_words(number_of_words, random_sentence_words)
    fetch_words.uniq.sort_by { rand }
  end

  def sentences
    [
      "du er sød",
      "skal vi lege",
      "hvad hedder du",
      "hvem er din far",
      "hvad laver din mor",
      "vil du med til min fødselsdag",
      "har du en bamse",
      "hvor bor du henne",
      "kan du lide pizza",
      "hvor bor du",
      "jeg hedder #{ name }"
    ]
  end

  def all_words
    sentences.map { |s| s.split }.flatten.uniq
  end

  def random_words(num=5, reject_words=[])
    all_words.reject { |word| reject_words.include?(word) }.sample(num)
  end

  def random_sentence_words
    sentences.sample.split
  end
end
