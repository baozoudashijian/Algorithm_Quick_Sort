
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
    return smallEnd
}

// const arr = [32,32,4,2,3,52]
const arr = [32,4,2,3,52]
console.log(handlePivot(arr, 0, arr.length))
console.log(arr)