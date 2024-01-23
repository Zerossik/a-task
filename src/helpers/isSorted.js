export const isSorted = (arr, sortedElement) => {
  for (let i = 0; i < arr.length - 1; i += 1) {
    if (arr[i][sortedElement] < arr[i + 1][sortedElement]) {
      return true;
    }
    return false;
  }
};
