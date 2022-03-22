export function romanToInteger(str) {
    let result = 0;
    let num = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let i = 0;
    while (i < str.length - 1) {
        if (num[str[i]] < num[str[i + 1]]) result -= num[str[i]];
        else result += num[str[i]];
        i++;
    }

    return result + num[str[str.length - 1]];
}
