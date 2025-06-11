# def binary_search(array, start, last, value)
#     mid = (start + last) / 2
#     if start > last
#         return -1
#     end
#     if value == array[mid]
#         return mid
#     end
#     if value < array[mid]
#        return binary_search(array, start, mid-1, value)
#     else
#         return binary_search(array, mid+1, last, value)
#     end
    
# end

def binary_search_tree(array, start, last, value)
	return -1 if start > last

	mid = (start + last) / 2

	return mid if array[mid] == value

	if value < array[mid]
		return binary_search_tree(array, start, mid - 1, value)
	else
		return binary_search_tree(array, mid+1, last, value)
	end
end

p binary_search_tree([1,2,3,4,5,6,89,90], 0, 7, 90)
# p 7 % 2