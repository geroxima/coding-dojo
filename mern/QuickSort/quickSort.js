function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start >= end) {
        return;
    }

    let index = partition(arr, start, end);

    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);

    return arr;
}

function partition(arr, start, end) {
    const pivotValue = arr[end];
    let pivotIndex = start;

    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            pivotIndex++;
        }
    }

    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    return pivotIndex;
}

const arrayToSort = [19, 4, 1, 5, 8, 2, 3, 4];

const start = performance.now();

quickSort(arrayToSort);

const end = performance.now();

console.log("Array ordenado:", arrayToSort);
console.log(`Tiempo de ejecución: ${(end - start).toFixed(2)} milisegundos`);
