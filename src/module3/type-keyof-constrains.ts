type PersonType = {
  name: string;
  age: number;
  address: string;
};

type newType = "name" | "age" | "address";

type newTypeUsingKeyOf = keyof PersonType;

// const a: newType = "age";
// const b: newTypeUsingKeyOf = 'address'

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}

const property = getProperty({ name: "Tetu", age: 100 }, "age");

// const a = {
//   name: "Rahim",
//   age: 100,
// };
// a['name']
