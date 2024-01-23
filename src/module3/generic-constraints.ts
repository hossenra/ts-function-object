type MandatoryTypes = { name: string; age: number; salary: number };
interface MandatoryInterface {
  name: string;
  age: number;
  salary: number;
}

const addMeInMyCrushMind = <T extends MandatoryInterface>(myInfo: object) => {
  const crush = "Selim Molla";
  const newData = { ...myInfo, crush };
  return newData;
};

type MyInfoType = {
  name: string;
  age: number;
  salary: number;
  other1: boolean;
  other2: null;
};
const myInfo: MyInfoType = {
  name: "Razibul",
  age: 31,
  salary: 10000,
  other1: false,
  other2: null,
};

const resultFive = addMeInMyCrushMind(myInfo);
