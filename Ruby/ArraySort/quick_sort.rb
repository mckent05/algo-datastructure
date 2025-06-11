# def quick_sort(start, finish, array)
#     if start > finish
#         return
#     end

#     pivot = pivot_function(start, finish, array)
#     quick_sort(start, pivot - 1, array)
#     quick_sort(pivot + 1, finish, array)
# end

# def pivot_function (start, finish, array)
#     i = start - 1
#     (start...finish).each do |num|
#         if array[num] < array[finish]
#             i +=1
#             array[i], array[num] = array[num], array[i]
#         end
#     end
#     i +=1
#     array[i], array[finish] = array[finish], array[i]
#     i
# end

# array = [6,7,1,2,8]
# quick_sort(0, 4, array )
# p array

def quick_sort(array, start, last)
 return if start >= last

  pivot_index =  pivot(start, last, array)
  quick_sort(array, start, pivot_index - 1)
  quick_sort(array, pivot_index + 1, last)
end

def pivot(start, last, array)
  i = start -1

  (start...last).each do |j|
    if array[j] < array[last]
      i +=1
      array[i], array[j] = array[j], array[i]
    end
  end
  i +=1
  array[i], array[last] = array[last], array[i]
  i
end

array = [6,7,1,2,8,9,10,11,56,77,90,13,11,57,57]
quick_sort(array, 0, 14)
p array