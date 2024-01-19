import { Table } from "../Table";
import { campaigns } from "../../services";
import { useParams } from "react-router-dom";
const Campaigns = () => {
  const { profileId } = useParams();

  const data = campaigns
    .filter(({ profileOwner }) => profileOwner === profileId)
    .map(({ profileOwner, ...rest }) => rest);

  return (
    <>
      {console.log(`Компанія(ї) належить(ать) до профілю з id - ${profileId}`)}
      <Table data={data} />
    </>
  );
};
export default Campaigns;
