// index.jsx (or index.js)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PolicyDetail from "./pages/PolicyDetail.jsx";
import Homepage from "./pages/Homepage.jsx";
import EduactePolicyPage from "./pages/EduactePolicyPage.jsx";
import UserPage from "./pages/UserPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Homepage />} />
      <Route path="policydetail/:id" element={<PolicyDetail />} />
      <Route path="educatepolicypage" element={<EduactePolicyPage />} />
      <Route path="userpage" element={<UserPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
