// // Brute Force method or naive solution

// var array = [-1, 23, 98, 8, 0, 1, -98, -2];
// var result = [];
// function naivemultiplePointers(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] + array[j] == 0) {
//                 result.push(array[i]);
//             }
//         }
//     }
//     if (result.length !== 0) {
//         return result;
//     } else {
//         return undefined;
//     }
// }
// console.log(naivemultiplePointers(array));

// multiple pointers



const data = [-7, -2, -1, 1, 2, 2, 2, 3, 4, 5]

function multiplePointers(array) {
    left = 0
    right = array.length - 1

    while (left < right) {
        const val = array[left] + array[right]
        if (val === 0) {
            return [array[left], array[right]]
        } else if (val > 0) {
            right--
        } else {
            left++
        }
    }
}

console.log(multiplePointers(data))
console.log(emp);