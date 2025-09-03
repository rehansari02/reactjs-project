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
import Signup from "./Pages/Auth/Signup/Signup.jsx";
import Signin from "./Pages/Auth/Signin/Signin.jsx";
import RegisterEmailVerify from "./Pages/Auth/RegisterEmailverify/RegisterEmailVerify.jsx";
import RegisterSuccess from "./Pages/Auth/RegisterSuccess/RegisterSuccess.jsx";
import ForgotPassword from "./Pages/Auth/ForgotPassword/ForgotPassword.jsx";
import ForgotPasswordSent from "./Pages/Auth/ForgotPasswordSent/ForgotPasswordSent.jsx";
import ResetPasswordSuccess from "./Pages/Auth/ResetPasswordSuccess/ResetPasswordSuccess.jsx";
import ResetPassword from "./Pages/Auth/ResetPassword/ResetPassword.jsx";

// Router define
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} /> {/* index = "/" */}
      <Route path="transaction" element={<Transaction />} />
      <Route path="support" element={<Support />} />
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<Signin />} />
      <Route path="register-email-verify" element={<RegisterEmailVerify />} />
      <Route path="register-success" element={<RegisterSuccess />} />
      <Route path="forgot-password" element={<ForgotPassword />} />
      <Route path="forgot-success" element={<ForgotPasswordSent />} />
      <Route path="reset-success" element={<ResetPasswordSuccess />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Route>
  )
);

// Render
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
