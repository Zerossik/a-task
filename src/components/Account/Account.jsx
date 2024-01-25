import { Table } from "../Table";
import { account } from "../../services";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { filteredDate, isSorted } from "../../helpers";
import { Filter } from "../Filter";

export const Account = ({ filter, handlerFilter }) => {
  const [sortedElement, setSortedElement] = useState("");
  const [isDataSorted, setIsDataSorted] = useState(false);
  const navigate = useNavigate();

  const sortedData = useMemo(() => {
    const res = filteredDate(account, sortedElement, isDataSorted, filter);
    return isDataSorted ? res.reverse() : res;
  }, [sortedElement, isDataSorted, filter]);

  const handlerAccountNavigate = (el) => {
    navigate(`account/${el.accountId}/profiles`);
  };

  const handlerSort = (el) => {
    if (el === "email" || el === "authToken") {
      return;
    }
    setSortedElement(el);
    const result = isSorted(sortedData, sortedElement);
    console.log(`Проверяю... результат - ${result}`);
    setIsDataSorted(result);

    return;
  };

  const tableHead = ["accountId", "email", "authToken", "creationDate"];
  console.log("render account");
  return (
    <div>
      <Filter value={filter} handlerFilter={handlerFilter} />
      <Table
        data={sortedData}
        handlerNav={handlerAccountNavigate}
        handlerSort={handlerSort}
        head={tableHead}
      />
    </div>
  );
};
