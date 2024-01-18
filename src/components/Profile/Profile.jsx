import { useParams } from "react-router-dom";
import { profileData } from "../../services";
const Profile = () => {
  const { accountId } = useParams();

  const data = profileData.filter(({ owner }) => owner === accountId);
  console.log(data);

  return <div>{accountId}</div>;
};

export default Profile;
