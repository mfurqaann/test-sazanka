export function getTwoSum(input, target) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] + input[j] === target) {
                result.push([i, j]);
            }
        }
    }

    result.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });

    return result;
}
