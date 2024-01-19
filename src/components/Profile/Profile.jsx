import { useNavigate, useParams } from "react-router-dom";
import { profileData } from "../../services";
import { Table } from "../Table";
const Profile = () => {
  const { accountId } = useParams();
  const navigate = useNavigate();

  const handlerNavigateProfile = (el) => {
    navigate(`/account/${accountId}/profiles/${el.profileId}`);
  };

  const data = profileData
    .filter(({ owner }) => owner === accountId)
    .map(({ owner, ...rest }) => rest);

  return (
    <>
      {console.log(`Профіль(і) належить(ать) до акаунту - ${accountId}`)}
      <Table data={data} handler={handlerNavigateProfile} />
    </>
  );
};

export default Profile;
