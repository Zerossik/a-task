import { StyledTable, StyledThead, StyledTr } from "./AccountTable.styled";
import { account } from "../../services";
import { useNavigate } from "react-router-dom";
export const AccountTable = () => {
  const navigate = useNavigate();
  return (
    <StyledTable>
      <StyledThead>
        <tr>
          <th>accountId</th>
          <th>email</th>
          <th>authToken</th>
          <th>creationDate</th>
        </tr>
      </StyledThead>
      <tbody>
        {account.map((el) => (
          <StyledTr
            key={el.accountId}
            onClick={() => navigate(`account/${el.accountId}`)}
          >
            <td>{el.accountId}</td>
            <td>{el.email}</td>
            <td>{el.authToken}</td>
            <td>{el.creationDate}</td>
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
  );
};
