require 'minitest/autorun'
require 'minitest/rg'
require_relative '../testing_task_2'

class TestCardGame < Minitest::Test

  def setup
    @card1 = Card.new("Diamonds", 10)
    @card2 = Card.new("Clubs", 8)
    @card3 = Card.new("Spades", 1)
    @hand = [@card1, @card2, @card3]
    @card_game = CardGame.new()

  end

    def test_card_has_suit()
      assert_equal("Diamonds", @card1.suit)
    end

    def test_card_has_value()
      assert_equal(10, @card1.value)
    end

    def test_check_for_ace__true()
      assert(@card_game.check_for_ace(@card3))
    end

    def test_check_for_ace__false()
      refute(@card_game.check_for_ace(@card1))
    end

    def test_highest_card()
      assert_equal(@card1, @card_game.highest_card(@card1, @card2))
    end

    def test_cards_total()
      assert_equal("You have a total of 19", @card_game.cards_total(@hand))
    end




end
