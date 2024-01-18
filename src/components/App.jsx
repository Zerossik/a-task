import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { AccountTable } from "./AccountTable/AccountTable";
import { lazy } from "react";

const Profile = lazy(() => import("./Profile"));

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <SharedLayout />,
        children: [
          { path: "/", element: <AccountTable /> },
          {
            path: "/account/:accountId",
            element: <Profile />,
          },
        ],
      },
    ],
    { basename: "/a-task" }
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
