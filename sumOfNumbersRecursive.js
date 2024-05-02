const addRecursive = (input) => {
    if (input === 0) {
        return 0;
    }
    return input + addRecursive(input - 1)
}