import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/routes/Dashboard";
import Profile from "./components/routes/Profile";
import MyCourses from "./components/routes/MyCourses";
import CreditHours from "./components/routes/CreditHours";
import Payments from "./components/routes/Payments";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/courses" element={<MyCourses />} />
          <Route path="/credits" element={<CreditHours />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
