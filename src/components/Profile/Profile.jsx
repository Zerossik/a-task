import { useNavigate, useParams } from "react-router-dom";
import { profileData } from "../../services";
import { Table } from "../Table";
import { Filter } from "../Filter";
import { useEffect, useMemo, useState } from "react";
import { filteredDate } from "../../helpers";

const Profile = ({ filter, handlerFilter }) => {
  const [sortedElement, setSortedElement] = useState("");
  const [isRevers, setIsRevers] = useState(false);
  // const [sortedDate, setSortedDate] = useState([]);
  const { accountId } = useParams();
  const navigate = useNavigate();

  const handlerNavigateProfile = (el) => {
    navigate(`/account/${accountId}/profiles/${el.profileId}`);
  };
  const handlerSort = (el) => {
    setSortedElement(el);
    setIsRevers((prev) => !prev);
  };

  const data = profileData
    .filter(({ owner }) => owner === accountId)
    .map(({ owner, ...rest }) => rest);

  const sortedDate = useMemo(() => {
    return filteredDate(data, sortedElement, isRevers, filter);
  }, [data, filter, isRevers, sortedElement]);

  const tableHead = ["profileId", "country", "marketplace"];

  return (
    <div>
      {console.log(`Профіль(і) належить(ать) до акаунту - ${accountId}`)}
      <Filter value={filter} handlerFilter={handlerFilter} />
      <Table
        data={sortedDate}
        handlerNav={handlerNavigateProfile}
        handlerSort={handlerSort}
        head={tableHead}
      />
    </div>
  );
};

export default Profile;
