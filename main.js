import BitSet from "./BitSet.js";

const BS = new BitSet();
BS.setBit(5, 1);
console.log(BS.getBit(5));
BS.setBit(5, 0);
console.log(BS.getBit(5));
BS.setBit(5, 1);
console.log(BS.getBit(5));