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

// 5-masala
// function LastIndexOfMethod(arg) {
//   let res;
//   res = arg.lastIndexOf(2)

//   return res;
// }

// console.log(LastIndexOfMethod([2, 4, 5, 2, 6, 2, 9]));

// 6-masala
// function ConcatandIndexOfcombined(arg1, arg2) {
//   let result;
//      let res1;
//   let res2;
//   res1 = arg1.includes(6)
//   res2 = arg2.includes(6)
//     if(res1 == true && res2 == true) {
//         result = true
//     }else {
//         result = false
//     }
//   return result;
// }
// console.log(ConcatandIndexOfcombined([2, 3, 5, 6], [6, 8, 9, 12]));

// 7-masala
// const Includesmethod = (arg) => {
//     let res;
//     res = arg.includes(5)
//     return res;
// }
// console.log(Includesmethod([3,7,8,9]));

// 8-masala
// function ForEachmethod(arg) {
//   let res;
//   let sum = 0;
//   let count = 0;
//   arg.forEach(value => {
//     if(value / 100 >= 1 && value /100 < 10) {
//         sum = sum + value
//         count = count + 1
//     }
//   })

//   res = sum / count

//   return res;
// }
// console.log(ForEachmethod([12,29,101,242,145,683,109,73]));

// 9-masala
// const Mapmethod = (arg) => {
//     let res;
//     res = arg.map(value => {
//         if(value % 2 == 1) {
//             return value ** 3
//         } else {
//             return value ** 2
//         }
//     })

//     return res;
// }
// console.log(Mapmethod([2,4,6,8,3,7,12,29]));

// 10-masala
// function arrayVSString(arg) {
//     let res;
//     res = arg.map(value => {
//         return value = arg.at(-1)
//     })

//     return res;
// }
// console.log(arrayVSString(["salom","bye","hello","good"]));

// 11-masala
// function Filtermethod(arg) {
//     let res;
//     res = arg.filter(value => {
//         return value.length < 4
//     })

//     return res;
// }
// console.log(Filtermethod(["bye","hello","ok","salom","yes","good"]));

// 12-masala
// function Somemethod(arg) {
//     let res;
//     res = arg.some(value => {
//         if(value.age >18) {
//             return true
//         } else {
//             return false
//         }
//     })

//     if(res == true) {
//         res = "18 yoshdan kattalar bor"
//     } else {
//         res = "18 yoshdan kattalar yo'q"
//     }

//     return res;
// }
// console.log(Somemethod([
//     {name:"Olga",age:19},
//     {name:"Devid",age:18},
//     {name:"Alex",age:17},
//     {name:"Jhon",age:21},
//     {name:"Dilya",age:15},
// ]));

// 13-masala
// function Everymethod(arg) {
//   let res;
//     res = arg.every(value => {
//         return value.includes("jon")
//     })
//   return res;
// }
// console.log(Everymethod(["Sherzodjon", "Ahmadjon", "Odiljon", "Alijon"]));

// 14-masala
// const Findmethod = function (arg) {
//   let res;
//     res = arg.find(value => {
//         return value % 3 == 0 && value % 5 == 0
//     })
//   return res;
// };
// console.log(Findmethod([2, 4, 6, 8, 15,25,30]));

// 15-masala
// function FindIndexmethod(arg) {
//     let res;
//     res = arg.findIndex(value => {
//         return value.includes("bek")
//     })

//     return res;
// }
// console.log(FindIndexmethod(["Sherzod","Abrorxon","Ahrorbek","Alisher"]));
