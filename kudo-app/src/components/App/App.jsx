import * as React from "react";
import s from "./App.module.css";
import { AuthProvider } from "../../contexts/authContext";
import Start from "../Start/Start";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Admin from "../Admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

function App() {
  return (
    <div className={s.wrapper}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  );
}

export default App;