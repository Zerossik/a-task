export const filteredDate = (data, sortedElement, isDataSorted, filter) => {
  console.log("sort");

  const sortedAccount = [...data].filter((obj) => {
    for (let key in obj) {
      if (obj[key].toString().toLowerCase().includes(filter.trim()))
        return true;
    }
  });

  sortedAccount.sort((a, b) => {
    if (typeof a[sortedElement] === "number") {
      console.log("Итерации сортировки");
      return a[sortedElement] - b[sortedElement];
    }
  });

  return sortedAccount;
};

// (a, b) => {
//   if (typeof a[sortedElement] === "number") {
//     if (Math.sign(b[sortedElement] - a[sortedElement]) === -1) {
//       console.log("ok", b[sortedElement] - a[sortedElement]);
//       return a[sortedElement] - b[sortedElement];
//     }
//     if (a[sortedElement] - b[sortedElement]) {
//       console.log("Не ок", a, b);
//       return b[sortedElement] - a[sortedElement];
//     }
//     // return isRevers
//     //   ? a[sortedElement] - b[sortedElement]
//     //   : b[sortedElement] - a[sortedElement];
//   }
//   if (typeof a[sortedElement] === "string") {
//     return isRevers
//       ? b[sortedElement].localeCompare(a[sortedElement])
//       : a[sortedElement].localeCompare(b[sortedElement]);
//   }
// }
