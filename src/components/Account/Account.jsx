import { Table } from "../Table";
import { account } from "../../services";
import { useNavigate } from "react-router-dom";
export const Account = () => {
  const navigate = useNavigate();
  const handlerAccountNavigate = (el) => {
    navigate(`account/${el.accountId}/profiles`);
  };
  return (
    <>
      <Table data={account} handler={handlerAccountNavigate} />
    </>
  );
};
