# Given an array select numbers greater than 5

# def greater_than_number(array, target)
#   array.select {|number| number >= target }.count
# end

# def reverse_array(array)
#   return [] if array.length.zero?

#   last_element = array.pop()

#   [last_element] + reverse_array(array)
# end

# def find_missing_number(array)
#   (1..10).each do |number|
#     return number unless array.include?(number)
#   end
# end

# def fibonacci_sequence(n)
#   return n if n <= 1

#   fibonacci_sequence(n - 1) + fibonacci_sequence(n -2)
# end

# (1..10).each do |i|
#   puts fibonacci_sequence(i)
# end

# def my_reverse(string)
#   return string if string.length <= 1

#   my_reverse(string[1..]) + string[0]
# end

# p "A man, a plan, a canal: Panama".gsub(/\W/, '')

# def palindrome(string)
#   return true if string.length <= 1 


#   if string[0] == string[-1]
#    return palindrome(string[1...-1])
#   end

#   false
# end

# p palindrome('PAPAPs')

# p find_missing_number([1,4,6,8,9,7,5,3,10]) 



# find the maximum number in a possible nested array

def my_array(array)
  # variable to hold the max number in the array
  max_num = -Float::INFINITY

  array.each do |item|
    if item.is_a?(Array)
      # If the item is an array, recursively loop through the array(s) to get the max number in the array
      nested_array_max = my_array(item)

      # Assign the max_num, by comparing the values returned from the recursive iterations
      max_num = check_max(nested_array_max, max_num)
    else
      # If the item is not an array,simply compare the number.
      max_num = check_max(item, max_num)
    end
  end

  max_num
end

#Function to return the max number since .max method is not allowed.
def check_max(item, max_item)
  item > max_item ? item : max_item
end

p my_array([-1, [-2, [-3,-4], [-5, -6, [-1000, -20]], -200]]) # => 1000
