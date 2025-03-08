const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require("./test-functions");

describe("capitalize", () => {
    test.skip("capitalize the string", () => {
        expect(capitalize("hello")).toEqual("Hello");
    });
    test.skip("capitalize the string2", () => {
        expect(capitalize("heLLo, how are you?")).toEqual("HeLLo, how are you?");
    });
});

describe("reverseString", () => {
    test.skip("reverse single word", () => {
        expect(reverseString("hello")).toEqual("olleh");
    });
    test.skip("reverse multiple words", () => {
        expect(reverseString("hello there")).toEqual("ereht olleh");
    });
    test.skip("works with numbers and punctuation", () => {
        expect(reverseString("123! abc! Hello, there.")).toEqual(".ereht ,olleH !cba !321");
    });
    test.skip("works with blank strings", () => {
        expect(reverseString("")).toEqual("");
    });
});

describe("calculator", () => {
    test.skip("adds 0 and 0", () => {
        const testCalculator = new calculator();
        expect(testCalculator.add(0, 0)).toEqual(0);
    });
    test.skip("adds 2 and 2", () => {
        const testCalculator = new calculator();
        expect(testCalculator.add(2, 2)).toEqual(4);
    });
    test.skip("adds positive numbers", () => {
        const testCalculator = new calculator();
        expect(testCalculator.add(2, 6)).toEqual(8);
    });
    test.skip("subtracts numbers", () => {
        const testCalculator = new calculator();
        expect(testCalculator.subtract(10, 4)).toEqual(6);
    });
    test.skip("multiplies numbers", () => {
        const testCalculator = new calculator();
        expect(testCalculator.multiply(3, 9)).toEqual(27);
    });
    test.skip("divides numbers", () => {
        const testCalculator = new calculator();
        expect(testCalculator.divide(42, 7)).toEqual(6);
    });
});