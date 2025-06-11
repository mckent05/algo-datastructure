require 'pry'

## Problem Statement: Find the sum of all prime numbers that are factorials of a given number:
## for a given number: 10
## 10 / 2 = 5
## 5 / 5 = 1 
# Therefore the sum of all prime numbers that are factorials of 10 is 2 + 5 = 7 


def is_prime?(num)
    sqrt_num = Math.sqrt(num)
    (2..sqrt_num).each do |p|
        if num % p == 0
            return false
        end
    end
    true
end

def prime_factorials(number)
    while !is_prime?(number)
        prime_sum = 0
        divisor = 2
        while number > 1
            if is_prime?(divisor)
                if number % divisor == 0
                    number = number / divisor
                    prime_sum = prime_sum + divisor
                else
                    divisor = divisor + 1
                end
            else
                divisor = divisor + 1
            end
        end
        number = prime_sum
    end
    number
    
end

p 6 % 2

p prime_factorials(119)
