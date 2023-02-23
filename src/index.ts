import { NumberCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumberCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
