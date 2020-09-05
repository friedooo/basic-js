// module.exports = function transform(arr) {
//     if(!Array.isArray(arr)) throw 'arr is not an Array';
//     const Keys = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
    
//     const transformArray = [];
//     for (let index = 0; index < arr.length; index++) {

//         if (arr[index] == Keys[0])
//         index += 1;
//         else if (arr[index] == Keys[1])
//         transformArray.pop();
//         else if (arr[index] == Keys[2])
//         {
//             if (arr.length > index + 1 && !Keys.includes(arr[index + 1])) {
//                 transformArray.push(arr[index + 1]);
//             }
//         }
//         else if (arr[index] == Keys[3])  
//         {
//             if (index - 1 >= 0 && !Keys.includes(arr[index - 1])) {
//                 transformArray.push(arr[index - 1]);
//             }
//         }
//         else
//         transformArray.push(arr[index])         
//     }
//     return transformArray;
// };