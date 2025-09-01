import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Transaction from "./Pages/Transaction/Transaction.jsx";
import Support from "./Pages/Support/Support.jsx";

// Router define
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} /> {/* index = "/" */}
      <Route path="transaction" element={<Transaction />} />
      <Route path="support" element={<Support />} />
    </Route>
  )
);

// Render
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
