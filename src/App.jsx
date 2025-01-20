import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import CreateEditPage from "./pages/CreateEditPage";
import NotFoundPage from "./pages/NotFoundPage"; 
import  InterviewProvider  from "./context/InterviewContext"
import "./styles/global.css";
const App = () => {
  return (
    <InterviewProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/create" element={<CreateEditPage />} />
          <Route path="/edit/:id" element={<CreateEditPage />} />
          <Route path="*" element={<NotFoundPage />} /> 
        </Routes>
      </Router>
    </InterviewProvider>
  );
};

export default App;
