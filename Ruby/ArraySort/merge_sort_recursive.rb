def merge_sort(array)
    if array.length <= 1
        return
    end

    mid = array.length / 2
    left_array = array[0...mid]
    right_array = array[mid...array.length]
    merge_sort(left_array)
    merge_sort(right_array)
    sort(left_array, right_array, array)
end

def sort(left_array, right_array, array)
    i = 0
    l = 0
    r = 0
    while l < left_array.length && r < right_array.length
        if left_array[l] < right_array[r]
            array[i] = left_array[l]
            i +=1
            l +=1
        else
            array[i] = right_array[r]
            i +=1
            r +=1
        end
    end
    while l < left_array.length
        array[i] = left_array[l]
        i +=1
        l +=1
    end
    while r < right_array.length
        array[i] = right_array[r]
        i +=1
        r +=1
    end
end

array = [6,7,1,2,8,9,10,11,56,77,90,13,11,57,57]
merge_sort(array)
p array
