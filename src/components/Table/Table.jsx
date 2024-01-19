import { StyledTable, StyledThead, StyledTr } from "./Table.styled";

export const Table = ({ data = [], handler }) => {
  return (
    <>
      {Array.isArray(data) &&
        data.length > 0 &&
        typeof data[0] === "object" && (
          <StyledTable>
            <StyledThead>
              <tr>
                {Object.keys(data[0]).map((el, index) => (
                  <th key={index}>{el}</th>
                ))}
              </tr>
            </StyledThead>
            <tbody>
              {data.map((el, index) => (
                <StyledTr
                  key={index}
                  onClick={() =>
                    handler ? handler(el) : console.log("handler Not Found")
                  }
                >
                  {Object.values(el).map((tabletValue, index) => (
                    <td key={index}>{tabletValue}</td>
                  ))}
                </StyledTr>
              ))}
            </tbody>
          </StyledTable>
        )}
    </>
  );
};
