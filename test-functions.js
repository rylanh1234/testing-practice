function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
    return string.split("").reverse().join("");
}

function calculator() {
    return {
        add(a, b) {
            return a + b;
        },
        subtract(a, b) {
            return a - b;
        },
        divide(a, b) {
            return a / b;
        },
        multiply(a, b) {
            return a * b;
        }
    };
}

function caesarCipher(string, shift) {
    const alphabeticalLower = "abcdefghijklmnopqrstuvwxyz";
    const alphabeticalUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const chars = string.split("");
    for (let i = 0; i < chars.length; i++) {
        if (alphabeticalLower.includes(chars[i])) {
            const shiftedIdx = alphabeticalLower.indexOf(chars[i]) + shift;
            while (shiftedIdx > 26) {
                shiftedIdx -= 26;
            }
            chars[i] = alphabeticalLower.charAt(shiftedIdx);
        }
    }
    for (let i = 0; i < chars.length; i++) {
        if (alphabeticalUpper.includes(chars[i])) {
            const shiftedIdx = alphabeticalUpper.indexOf(chars[i]) + shift;
            while (shiftedIdx > 26) {
                shiftedIdx -= 26;
            }
            chars[i] = alphabeticalUpper.charAt(shiftedIdx);
        }
    }
    return chars.join("");
}

function analyzeArray(array) {
    const length = array.length;
    const average = (array.reduce((total, current) => total + current, 0)) / length;
    const min = Math.min(...array);
    const max = Math.max(...array);
    return { average, min, max, length };
}