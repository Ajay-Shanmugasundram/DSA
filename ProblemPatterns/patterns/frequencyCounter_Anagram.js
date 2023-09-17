


function validAnagram(a, b) {

    const c = a.split('')
    const d = b.split('')
    const fre1 = {}
    const fre2 = {}

    //it will add the data in object
    for (let data of c) {
        fre1[data] = (fre1[data] || 0) + 1
    }
    for (let data of d) {
        fre2[data] = (fre2[data] || 0) + 1
    }

    for (let key in fre1) {
        if (fre2[key] != fre1[key]) {
            return false
        }
    }
    return true
}
console.log(validAnagram('anagram', 'nagaram'))
const arr1 = [1, 2, 2, 3]
const arr2 = [1, 4, 4, 9]
function frequencyCounter(a, b) {
    const fre1 = {}
    const fre2 = {}
    for (let data of a) {
        fre1[data] = (fre1[data] || 0) + 1
    }
    for (let data of b) {
        fre2[data] = (fre2[data] || 0) + 1
    }
    for (let key in fre1) {
        if (!(key ** 2 in fre2)) {
            return false
        }
        if (fre2[key * key] !== fre1[key]) {
            return false
        }
    }
    for (let i = 0; i < a.length; i++) {

        if (!(a[i] ** 2 == b[i])) {
            return false
        }
    }
    return true
}

console.log(frequencyCounter(arr1, arr2)
)




