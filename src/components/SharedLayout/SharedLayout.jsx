import { Container } from "./SharedLayout.styled";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
export const SharedLayout = () => {
  return (
    <Container>
      <h1>A-task</h1>
      <Outlet />
    </Container>
  );
};
