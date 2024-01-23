// type a1 = number;
// type a2 = a1 extends string ? string : null;
// // nested conditional type
// type a3 = undefined;
// type a4 = number;

// type d = a1 extends null
//   ? null
//   : a3 extends number
//   ? number
//   : a4 extends null
//   ? null
//   : never;

// type Sheikh = {
//   wife1: string;
//   wife2: string;
// };

// type A = keyof Sheikh;

// type CheckProperty<T, K> = K extends keyof Sheikh ? true : false;

// type CheckWife2 = CheckProperty<Sheikh, "wife1">;

// // new example
// type Bandhobi = "Monika" | "Salma" | "Tanni";

// type RemoveBandhobi<T, K> = T extends K ? never : T;

// type CurrentBandhobi = RemoveBandhobi<Bandhobi, "Tanni">;
