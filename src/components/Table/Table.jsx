import { StyledTable, StyledThead, StyledTr } from "./Table.styled";

export const Table = ({ data = [], handlerNav, handlerSort, head }) => {
  return (
    <>
      {
        <StyledTable>
          <StyledThead>
            <tr>
              {head.map((el, index) => (
                <th
                  key={index}
                  onClick={(evt) => handlerSort?.(evt.target.textContent)}
                >
                  {el}
                </th>
              ))}
            </tr>
          </StyledThead>
          <tbody>
            {Array.isArray(data) &&
              typeof data[0] === "object" &&
              data.map((el, index) => (
                <StyledTr key={index} onClick={() => handlerNav?.(el)}>
                  {Object.values(el).map((tabletValue, index) => (
                    <td key={index}>{tabletValue}</td>
                  ))}
                </StyledTr>
              ))}
          </tbody>
        </StyledTable>
      }
    </>
  );
};
