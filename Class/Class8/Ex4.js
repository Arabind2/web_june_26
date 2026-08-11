function doubleAndReturnArgs(arr, ...args) {
    let doubled = args.map((el) => el * 2);

    return [...arr, ...doubled];
}

console.log(doubleAndReturnArgs([1, 2, 3], 4, 5));
console.log(doubleAndReturnArgs([2], 10, 4));