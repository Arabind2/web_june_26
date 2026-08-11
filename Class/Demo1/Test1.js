// function describe(value){
//     return typeof value;
// }

// console.log(describe([1,2,3]));

// let name="priya";
// name.toUpperCase();
// console.log(name);


//4.
// const arr = [
//     undefined,
//     null,
//     true,
//     100,
//     "Hello",
//     10n,
//     Symbol("id"),
//     NaN,
//     [],
//     [1, 2, 3],
//     {},
//     { name: "John" },
//     function () {},
//     () => {},
//     new Date()
// ];

// function getType(arr) {
//     for (let n of arr) {

//         if (n === null) {
//             console.log(n, "=> null");
//         }
//         else if (Array.isArray(n)) {
//             console.log(n, "=> array");
//         }
//         else if (n instanceof Date) {
//             console.log(n, "=> date");
//         }
//         else if (Number.isNaN(n)) {
//             console.log(n, "=> NaN");
//         }
//         else {
//             console.log(n, "=>", typeof n);
//         }
//     }
// }

// getType(arr);

// function checkMutable(arr) {
//     if (typeof arr === "object" && arr !== null) {
//         return "Mutable";
//     }

//     if (typeof arr === "function") {
//         return "Mutable";
//     }

//     return "Immutable";
// }

// console.log(checkMutable(arr));











