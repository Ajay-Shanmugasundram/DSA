function countUniqueValue(a) {
    var i = 0
    if (a.length > 0) {
        for (j = 1; j < a.length; j++) {
            if (a[i] !== a[j]) {
                i++
                a[i] = a[j]

            }
        }
        return i + 1
    }

}
const result = countUniqueValue([1, 2, 2, 3, 4, 8, 9, 10, 22, 22, 23, 24])
console.log(result)


