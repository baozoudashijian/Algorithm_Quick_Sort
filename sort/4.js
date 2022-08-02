const quickSort = arr => 
    _quickSort(arr, 0, arr.length)

const _quickSort = (arr, start, end) => {
    if(end - start <= 1) { return arr }
    const pivotIndex = handlePivot(arr, start, end)
    _quickSort(arr, start, pivotIndex)
    _quickSort(arr, pivotIndex+1, end)
    return arr
}

const swap = (arr, a, b) => {
    [arr[a], arr[b] ] = [ arr[b], arr[a] ]
}

const handlePivot = (arr, start, end) => {
    // 处理特殊情况
    if(end - start === 0) { return -1 } // 空数组排序
    if(end - start === 1) { return 0 } // 只有一个元素排序

    let pivot = arr[start] // 基准
    let smallEnd = start
    let bigStart = end
    let i = start + 1

    while(bigStart - smallEnd > 1) {
        console.log(bigStart, smallEnd, arr[i], pivot)
        if(arr[i] < pivot) {
            smallEnd += 1; 
            swap(arr, i, smallEnd)
            i+=1
        }else if(arr[i] > pivot) {
            bigStart -= 1;
            swap(arr, i, bigStart)
        }
    }
    swap(arr, start, smallEnd)
    return smallEnd // 返回的是基准 - 左边的小于基准，右边的大于基准
}

const arr = [32,4,2,3,52]
console.log(quickSort(arr))