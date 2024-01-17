import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";
import { accountLoader } from "../loaders/accountLoader";
import { AccountTable } from "./AccountTable/AccountTable";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <SharedLayout />,
        // loader: accountLoader,
        children: [{ path: "/", element: <AccountTable /> }],
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
