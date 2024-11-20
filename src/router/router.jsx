import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import About from "../pages/About";
import Pricing from "../pages/Pricing";
import ProtectedRoute from "./protectedRoute";
import AuthLayout from "../layouts/AuthLayout";
import RootLayout from "../layouts/RootLayout";
import App from "../App";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      {/* public routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      {/* private routes */}

      <Route
        element={
          <ProtectedRoute>
            <RootLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
      </Route>
    </Route>
  )
);

export default router;
