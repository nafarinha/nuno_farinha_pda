### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame


  # In Ruby, by convention method names adhere to the snake_case convention, not camelCase.
  def checkforAce(card)
    # The '=' character is an assignment operator. To evaluate if the card.value is true (i.e equal to 1) or false (i.e not equal to 1), a comparison operator must be used instead, that being '==' for Ruby.
    if card.value = 1
      return true
    else
      return false
    end
  end

  # 'dif' is a typo. To define a method the correct keyword is 'def'.
  # The two parameters must be separated by a comma (card1, card2).
  dif highest_card(card1 card2)
  #By convention, the if statement should be indented in relation to the previous line where the method is defined.
  if card1.value > card2.value
    #Property 'name' does not exist in card object. It should be replaced with 'suit'.
    return card.name
  else
    card2
  end
end

# This 'end' keyword should be removed.
end

def self.cards_total(cards)
  # The variable 'total' should be initialised with the number 0 (zero).
  # This should be an instance method, not a class method (remove the self keyword)
  total
  for card in cards
    total += card.value
    # the return should run after the for-loop end keyword.
    # In the return, the variable 'total' needs to be either converted to a string if it is concatenated to a string, by using the 'to_s' method (total.to_s) or it needs to be included in the string and interpolated ( "You have a total of #{total}").
    return "You have a total of" + total
  end
end

#There is a missing 'end' keyword to define where the class 'CardGame' ends.


```
