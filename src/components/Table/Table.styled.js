import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledTable = styled.table({
  margin: "0 auto",
  width: "1000px",
  tableLayout: "fixed",
  borderRadius: "8px",
  overflow: "hidden",
  color: "black",
  textAlign: "center",
});

export const StyledThead = styled.thead({
  backgroundColor: "#3395ff",
});

export const StyledTr = styled.tr({
  cursor: "pointer",
  "&:nth-child(2n)": {
    backgroundColor: "grey",
  },
  "&:hover": {
    transform: "scale(0.99)",
  },
});

export const StyledLink = styled(Link)({
  display: "block",
  textDecoration: "none",
  color: "inherit",
});
