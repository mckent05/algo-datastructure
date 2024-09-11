def quick_sort(start, finish, array)
    if start > finish
        return
    end

    pivot = pivot_function(start, finish, array)
    quick_sort(start, pivot - 1, array)
    quick_sort(pivot + 1, finish, array)
end

def pivot_function (start, finish, array)
    i = start - 1
    (start...finish).each do |num|
        if array[num] < array[finish]
            i +=1
            array[i], array[num] = array[num], array[i]
        end
    end
    i +=1
    array[i], array[finish] = array[finish], array[i]
    i
end

array = [6,7,1,2,8]
quick_sort(0, 4, array )
p array