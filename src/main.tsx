import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

import EndPage from "./pages/End.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import NoPage from "./pages/NoPage.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path={`/`}>
        <Route index path={`/`} element={<EndPage />} />
        <Route path={`/registration`} element={<SignupPage />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  </BrowserRouter>
);
