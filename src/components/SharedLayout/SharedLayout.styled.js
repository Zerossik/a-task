import styled from "styled-components";

export const Container = styled.section`
  width: 1000px;
  margin: 0 auto;
`;
export const StyledLogo = styled.h1({
  display: "inline-block",
  margin: "0 0 4px 40px",
  padding: "8px",
  color: "#161616",
  borderRadius: "12px",
  transition: "background-color 300ms linear, color 300ms linear",
  "&:hover": {
    backgroundColor: "#161616",
    color: "#ffffff",
  },
});
