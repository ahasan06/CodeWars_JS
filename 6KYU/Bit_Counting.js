// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function (n) {

    if (n < 0) {
        return 0
    } else {

        const toString = n.toString(2).split('');
        return toString.filter((item)=>item==='1').length
    }


};
console.log(countBits(10));