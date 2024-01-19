import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { lazy } from "react";
import { Account } from "./Account";

const Profile = lazy(() => import("./Profile"));
const Campaigns = lazy(() => import("./Campaigns"));

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <SharedLayout />,
        children: [
          { path: "/", element: <Account /> },
          {
            path: "/account/:accountId/profiles",
            element: <Profile />,
          },
          {
            path: "/account/:accountId/profiles/:profileId",
            element: <Campaigns />,
          },
          { path: "*", element: <div>Not Found</div> },
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
