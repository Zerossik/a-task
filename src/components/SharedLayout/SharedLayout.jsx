import { Container } from "./SharedLayout.styled";
import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
export const SharedLayout = () => {
  return (
    <Container>
      <Link to="/">
        <h1>A-task</h1>
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
