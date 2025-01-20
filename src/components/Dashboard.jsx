import React, { useContext } from "react";
import { InterviewContext } from "../context/InterviewContext";
import Filters from "./Filters";
import InterviewCard from "./InterviewCard";

const Dashboard = () => {
  const { interviews } = useContext(InterviewContext);

  return (
    <div>
      <h1>Interview Dashboard</h1>
      <Filters />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
        {interviews.length > 0 ? (
          interviews.map((interview) => (
            <InterviewCard key={interview.id} interview={interview} />
          ))
        ) : (
          <p>No interviews scheduled.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
