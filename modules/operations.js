/**
 * operations
 */

class operations {
    static add(arr=[]) {
        return arr.reduce((a,b) => a + b);
    }

    static multiply(arr=[]) {
        return arr.reduce((a,b) => a * b);
    }

    static addToDate(date='', addToDate='') {
        /** TODO: Implement */
        return date + addToDate;
    }

    static nextFibonacciNumber(fibonacciNumbers=[]) {
        const a = fibonacciNumbers.pop();
        const b = fibonacciNumbers.pop();

        return a + b;
    }
}

export default operations;