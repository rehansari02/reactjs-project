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
import ErrorMessage from "./Pages/ErrorMessage/ErrorMessage.jsx";
import { AuthProvider } from "./Provider/AuthProvider.jsx";
import { CookiesProvider } from "react-cookie";
import ProtectedRoute from "./components/Auth/ProtectedRoute.jsx";
import AlreadyExists from "./components/Auth/AlreadyExists.jsx";

// Router define
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        index
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />{" "}
      {/* index = "/" */}
      <Route
        path="transaction"
        element={
          <ProtectedRoute>
            <Transaction />
          </ProtectedRoute>
        }
      />
      <Route
        path="support"
        element={
          <ProtectedRoute>
            <Support />
          </ProtectedRoute>
        }
      />
      <Route
        path="signup"
        element={
          <AlreadyExists>
            <Signup />
          </AlreadyExists>
        }
      />
      <Route
        path="signin"
        element={
          <AlreadyExists>
            <Signin />
          </AlreadyExists>
        }
      />
      <Route
        path="register-email-verify"
        element={
          <AlreadyExists>
            <RegisterEmailVerify />
          </AlreadyExists>
        }
      />
      <Route
        path="email-verify/:token"
        element={
          <AlreadyExists>
            <RegisterSuccess />
          </AlreadyExists>
        }
      />
      <Route
        path="forgot-password"
        element={
          <AlreadyExists>
            <ForgotPassword />
          </AlreadyExists>
        }
      />
      <Route
        path="forgot-success"
        element={
          <AlreadyExists>
            <ForgotPasswordSent />
          </AlreadyExists>
        }
      />
      <Route
        path="forgot-password-verify/:token"
        element={
          <AlreadyExists>
            <ResetPassword />
          </AlreadyExists>
        }
      />
      <Route
        path="reset-success"
        element={
          <AlreadyExists>
            <ResetPasswordSuccess />
          </AlreadyExists>
        }
      />
      <Route path="*" element={<ErrorMessage />} />
    </Route>
  )
);

// Render
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CookiesProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </CookiesProvider>
  </StrictMode>
);
