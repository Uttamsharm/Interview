import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "react-big-calendar"; 
import "react-big-calendar/lib/css/react-big-calendar.css";
import  localizer  from "../utils/localizer";
import Filters from "../components/Filters";
import { InterviewContext } from "../context/InterviewContext";
import "./DashboardPage.css";


const DashboardPage = () => {
  const { interviews } = useContext(InterviewContext);
  const navigate = useNavigate();

  console.log("Interviews:", interviews);

  // Transform interviews into events for the calendar
  const events = interviews.map((interview) => ({
    id: interview.id,
    title: `${interview.candidate} (${interview.type})`,
    start: new Date(`${interview.date}T${interview.time}`),
    end: new Date(`${interview.date}T${interview.time}`), // Adjust end time as needed
  }));

  // Handle event clicks for editing interviews
  const handleEventClick = (event) => {
    navigate(`/edit/${event.id}`);
  };

  return (
    <div className="dashboard-container">
      <h1>Interview Dashboard</h1>
      <Filters />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleEventClick}
      />
    </div>
  );
};

export default DashboardPage;
