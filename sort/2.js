const quickSort = (arr) => {
    let left = [], right = [];
    if(arr.length <= 1) { return arr }
    arr.slice(1).map((n) => {
        if(n > arr[0]) {
            right.push(n)
        } else {
            left.push(n)
        }
    })

    return [...quickSort(left), arr[0], ...quickSort(right)]
}

console.log(quickSort([47,3,47,62,83,64,28,34]))