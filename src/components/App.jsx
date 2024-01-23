import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { lazy, useState } from "react";
import { Account } from "./Account";

const Profile = lazy(() => import("./Profile"));
const Campaigns = lazy(() => import("./Campaigns"));

function App() {
  const [filter, setFilter] = useState("");

  const handlerFilter = (value) => {
    setFilter(value);
  };
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <SharedLayout />,
        children: [
          {
            path: "/",
            element: <Account filter={filter} handlerFilter={handlerFilter} />,
            index: true,
          },
          {
            path: "/account/:accountId/profiles",
            element: <Profile filter={filter} handlerFilter={handlerFilter} />,
          },
          {
            path: "/account/:accountId/profiles/:profileId",
            element: (
              <Campaigns filter={filter} handlerFilter={handlerFilter} />
            ),
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
