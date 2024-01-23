const arrayofNumbers = [1, 2, 3];

const arrayofStrings = arrayofNumbers.map((number) => number.toString());
console.log(arrayofStrings);

type Volume = {
  height: number;
  width: number;
  depth: number;
};

type AreaString = {
  height: string;
  width: string;
};

const rectangularArea: AreaReadOnly = {
  height: 10,
  width: 12,
};

type Area<T> = {
  // [key in keyof Volume]: Volume[key];
  readonly [key in keyof T]: T[key];
};

const area1: Area<{ height: number; width: number }> = {
  height: 10,
  width: 12,
};

type AreaReadOnly = {
  readonly height: number;
  readonly width: number;
};

type A = AreaNumber["height"]; // look up types
type B = keyof AreaNumber; // 'width' | 'height'

// const obj = {
//   name: "Razibul",
// };

// obj["name"];
