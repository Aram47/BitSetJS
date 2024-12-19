export default class BitSet {
    #bitVector = new Int32Array(2407);
    #isValidPos(pos) {
        if (typeof pos !== 'number') {
            return false;
        }
        if (isNaN(pos) || pos < 0 || pos > 77000) {
            return false;
        }
        return true;
    }
    #isValidArgsForSetBit(pos, val) {
        if (!this.#isValidPos(pos)) {
            return false;
        }
        if (val === 0 || val === 1) {
            return true;
        }
        return false;
    }
    setBit(pos, val) {
        if (!this.#isValidArgsForSetBit(pos, val)) {
            throw new Error('Invalid arguments');
        }
        
        const index = Math.floor(pos / 32);
        const offset = pos - 32 * index;
        if (val === 0) {
            (this.#bitVector[index]) & (1 << (32 - offset)) 
                ? this.#bitVector[index] ^= 1 << (32 - offset) 
                : this.#bitVector[index] ^= 0 << (32 -offset);
        } else {
            if (!((this.#bitVector[index]) & (1 << (32 - offset)))) {
                this.#bitVector[index] |= (1 << (32 - offset));
            }
        }
    }
    getBit(pos) {
        if (!this.#isValidPos(pos)) {
            throw new Error('Invalid position');
        }
        const index = Math.floor(pos / 32);
        const offset = pos - 32 * index;
        return (this.#bitVector[index]) & (1 << (32 - offset)) ? 1 : 0;
    }
};

