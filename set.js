const ar = [1, 23, 34, 3, 2, 3];



// removing duplicate elements in an Array
removeDuplicate(ar)
function removeDuplicate(array){
const set = new Set(array);

    const arr = Array.from(set);
// Alternatively: const arr = [...set];

console.log(arr); // Output: [1, 23, 34, 3, 2]

}