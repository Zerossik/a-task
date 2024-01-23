import { Table } from "../Table";
import { campaigns } from "../../services";
import { useParams } from "react-router-dom";
import { Filter } from "../Filter";
import { useMemo, useState } from "react";
import { filteredDate } from "../../helpers";

const Campaigns = ({ filter, handlerFilter }) => {
  const [sortedElement, setSortedElement] = useState("");
  const [isRevers, setIsRevers] = useState(false);
  const { profileId } = useParams();

  const handlerSort = (el) => {
    setSortedElement(el);
    setIsRevers((prev) => !prev);
  };

  const data = campaigns
    .filter(({ profileOwner }) => profileOwner === profileId)
    .map(({ profileOwner, ...rest }) => {
      const year = new Date(rest.date).getUTCFullYear();
      const month = new Date(rest.date).getUTCMonth();
      const day = new Date(rest.date).getUTCDate();
      const newDate = `${year}-${month + 1}-${day}`;
      const newObj = {
        ...rest,
        date: newDate,
      };

      return newObj;
    });

  const sortedDate = useMemo(() => {
    return filteredDate(data, sortedElement, isRevers, filter);
  }, [data, filter, isRevers, sortedElement]);
  const tableHead = ["campaignId", "clicks", "cost", "date"];
  return (
    <div>
      {console.log(`Компанія(ї) належить(ать) до профілю з id - ${profileId}`)}
      <Filter value={filter} handlerFilter={handlerFilter} />
      <Table data={sortedDate} head={tableHead} handlerSort={handlerSort} />
    </div>
  );
};
export default Campaigns;
