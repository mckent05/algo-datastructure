def palindrome(string)
    if(string.nil? || string.length === 1)
        return true
    end
    if string[0] === string[-1]
        return palindrome string[1, string.length - 2]
    end
    false
end

p palindrome("nursesrun")