import { Container, StyledLogo } from "./SharedLayout.styled";
import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
export const SharedLayout = () => {
  return (
    <Container>
      <Link to="/">
        <StyledLogo>A-task</StyledLogo>
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
