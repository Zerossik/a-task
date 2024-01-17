import { StyledTable, StyledThead } from "./AccountTable.styled";
import { account } from "../../services";
export const AccountTable = () => (
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
        <tr key={el.accountId}>
          <td>{el.accountId}</td>
          <td>{el.email}</td>
          <td>{el.authToken}</td>
          <td>{el.creationDate}</td>
        </tr>
      ))}
    </tbody>
  </StyledTable>
);
