// Obyekt metodlariga oid masalalar.
// 1-masala
// function userKeys(arg) {
//     const user = {
//         name: "Alisa",
//         age: 21,
//         job: "Doctor",
//         machine:"Tracer"
//       };

//       for (const key in user) {
//          console.log(key);
//       }

// }
// userKeys()

// 2-masala
// function userValue(arg) {
//     for (const k in arg) {
//         console.log(arg[k]);
//     }
// }
// userValue({
//             name: "Alisa",
//             age: 21,
//             job: "Doctor",
//             machine:"Tracer"
//           });

// 3-masala
// function userToArr(arg) {
//     let n;
//     // for (const key in arg) {
//     //     if(true) {
//     //         n = n+1
//     //     }
//     // }

//     n = object.keys(arg)
// //   let a;
// //   for (let i = 0; i < n; i++) {
// //     a = arg[i]
// //   }

//   return n;
// }

// console.log(
//   userToArr({
//     name: "Alisa",
//     age: 21,
//     job: "Doctor",
//     machine: "Tracer",
//   })
// );

// 4-masala

// Massiv metodlariga oid masalalar.
// 1-masala
// function Slice3Value(arg) {
//     let res;
//     if(arg.length % 2 == 0) {
//         res = arg.slice((arg.length/2 - 1), arg.length/2 + 1)
//     } else {
//         res = arg.slice((arg.length-1)/2 -1, (arg.length+1)/2 + 1)
//     }

//     return res;
// }
// console.log(Slice3Value([1,3,5,7,8,9,12,29]));

// 2-masala
// let arr = [2, 4, 5, 7, 12];
// let a = +prompt("qo'shilishi kerak bo'lgan sonlar miqdori");
// let b = +prompt("qayerdan boshlab qo'shlishi kerakligi");
// b < arr.length;
// let N = Math.floor(Math.random() * 100);
//   let res;
//   for (let i = 0; i < a; i++) {
//     if(true) {
//         res = arr.splice(b, 0, N);
//     }
//   }
// console.log(res);

// 3-masala
// let arr1 = [1, 3, 4];
// let arr2 = [2, 5];
// let arr3 = [7, 8, 12];
// function toArray(arg1, arg2, arg3) {
//   let res;
//   res = arg2.concat(arg3, arg1);
//   return res;
// }
// console.log(toArray(arr1,arr2,arr3));

// 4-masala
// function IndexOfMethod(arg1, arg2) {
//   let res;
//   for (let i = 0; i < arg1.length; i++) {
//     if (arg1[i] == arg2) {
//       res = i ** 3;
//     } else {
//       res = false;
//     }
//   }

//   return res;
// }
// console.log(IndexOfMethod([2, 4, 7, 9, 12, 29], 4));
