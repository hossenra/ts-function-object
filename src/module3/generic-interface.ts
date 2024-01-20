// // Generic Interface
// interface CrushInterface<T, U = null> {
//   name: string;
//   husband: T;
//   wife?: U;
// }

// const crushFirst: CrushInterface<boolean, string> = {
//   name: "Samia",
//   husband: true,
// };

// interface PersonInterface {
//   name: string;
//   age: number;
// }

// const crushFour: CrushInterface<PersonInterface, PersonInterface> = {
//   name: "Razibul",
//   husband: {
//     name: "Razibul",
//     age: 30,
//   },
//   wife: {
//     name: "Wislate",
//     age: 40,
//   },
// };

// const crushSecond: CrushInterface<string> = {
//   name: "Karim molla",
//   husband: "tetu",
//   wife: "Rahuma",
// };

// interface HusbandInterface {
//   name: string;
//   salary: number;
// }

// const crushThird: CrushInterface<HusbandInterface> = {
//   name: "Tetu Sarder",
//   husband: {
//     name: "Bisti",
//     salary: 1000,
//   },
// };

// type GenericTuple<X, Y> = [X, Y];

// const relation: GenericTuple<string, string> = ["Selim", "Molla"];

// // type RelationWithSalaryType = {
// //   name: string;
// //   salary: number;
// // };

// interface RelationWithSalaryInterface {
//   name: string;
//   salary: number;
// }

// const relationWithSalary: GenericTuple<object, string> = [
//   {
//     name: "Sazzad",
//     salary: 1000,
//   },
//   "Ket Brown",
// ];

// const relationWithSalary2: GenericTuple<RelationWithSalaryInterface, string> = [
//   {
//     name: "Tetu",
//     salary: 1000,
//   },
//   "Ket Brown",
// ];

// type GenericArray<T> = Array<T>;

// const rollNumbers: GenericArray<number> = [44, 12, 66];
// const rollNumbers2: GenericArray<string> = ["44", "12", "66"];
// const rollNumbers3: GenericArray<boolean> = [true, false];

// type NameRollType = {
//   name: string;
//   roll: number;
// };

// const userNameAndRollNumbers: GenericArray<NameRollType> = [
//   {
//     name: "Mr Karim",
//     roll: 1,
//   },
//   {
//     name: "Mr Selim",
//     roll: 66,
//   },
// ];
