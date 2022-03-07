function findOdd(A) {
    if (A.length == 1) {
        return A[0];
    }
    let count = 0;
    for (let j = 0; j < A.length; j++) {
        for (let i = 0; i < A.length; i++) {
            if (A[j] == A[i]) {
                count++
            }
        }
        console.log(count);
        if (count % 2 !== 0) {
            return A[j];
        }
    }
}

findOdd([0, 1, 2, 3, 0, 3, 2]);