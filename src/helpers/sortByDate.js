export const sortByDate = (dateA, dateB) => {
  const a = new Date(dateA).getTime();
  const b = new Date(dateB).getTime();
  return b - a;
};
