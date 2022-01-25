// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (arguments.length)
        return matrix
            .map((x, y) => ((y + 1) % 2 == 0 ? x.reverse() : x))
            .flat();
    return [];
};
