export const isSorted = (arr, sortedElement) => {
  let result = null;
  let count;

  for (let i = 0; i < arr.length - 1; i += 1) {
    if (
      typeof arr[i]?.[sortedElement] === "number" &&
      arr[i]?.[sortedElement] <= arr[i + 1]?.[sortedElement]
    ) {
      result = true;
      count = i + 1;
      continue;
    }
    result = false;
    count = i + 1;
    break;
  }

  console.log(count);
  return result;
};
