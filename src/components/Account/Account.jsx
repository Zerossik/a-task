import { Table } from "../Table";
import { account } from "../../services";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { filteredDate } from "../../helpers";
import { Filter } from "../Filter";

export const Account = ({ filter, handlerFilter }) => {
  const [sortedElement, setSortedElement] = useState("");
  const [isRevers, setIsRevers] = useState(false);
  const navigate = useNavigate();

  const handlerAccountNavigate = (el) => {
    navigate(`account/${el.accountId}/profiles`);
  };

  const handlerSort = (el) => {
    if (el === "email" || el === "authToken") return;
    setSortedElement(el);
    setIsRevers((prev) => !prev);
  };

  const sortedData = useMemo(() => {
    return filteredDate(account, sortedElement, isRevers, filter);
  }, [filter, isRevers, sortedElement]);

  const tableHead = ["accountId", "email", "authToken", "creationDate"];

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
