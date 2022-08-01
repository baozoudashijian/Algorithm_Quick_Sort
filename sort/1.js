
const quickSort = (arr) => {
    console.log(arr, '123')
    const [pivot, ...rest] = arr
    console.log('pivot:' + pivot)
    console.log('rest:' + JSON.stringify(rest))
    console.log('arr:' + JSON.stringify(arr))
    console.log('---------------------------------')
    return arr.length <= 1 ? arr : 
    [
        ...quickSort(rest.filter( n => { console.log('left'); return n < pivot})),
        pivot,
        ...quickSort(rest.filter( n => { console.log('right'); return n > pivot})),
    ]
}

console.log(quickSort([47,8,91,74,917,41]))