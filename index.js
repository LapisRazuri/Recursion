function fibs(num) {
    
    const arr = [0, 1];
    let sum = 0;
    let first = arr[0];
    let second = arr[1];

    for(let i = 0; i < num - 2; i++){
        sum = first + second;
        arr.push(sum);

        first = second;
        second = sum;
    }
 return arr;
}

console.log(fibs(10))

function fibsRec(n, arr = [0, 1] ) {
    
    console.log("This was printed recursively");
    if (arr.length >= n ){
        return arr;
    }

    let nextFib = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(nextFib)

    return fibsRec(n, arr);
}


