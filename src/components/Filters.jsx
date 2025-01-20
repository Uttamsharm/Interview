import React, { useState, useContext } from "react";
import { InterviewContext } from "../context/InterviewContext";

const Filters = () => {
  const { interviews, setFilteredInterviews } = useContext(InterviewContext);
  const [filters, setFilters] = useState({
    date: "",
    interviewer: "",
    candidate: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });

    const filtered = interviews.filter((interview) => {
      const dateMatch = !filters.date || interview.date === filters.date;
      const interviewerMatch =
        !filters.interviewer || interview.interviewer.toLowerCase().includes(filters.interviewer.toLowerCase());
      const candidateMatch =
        !filters.candidate || interview.candidate.toLowerCase().includes(filters.candidate.toLowerCase());
      return dateMatch && interviewerMatch && candidateMatch;
    });

    setFilteredInterviews(filtered);
  };

  return (
    <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      <input
        type="date"
        name="date"
        value={filters.date}
        onChange={handleFilterChange}
        placeholder="Filter by Date"
      />
      <input
        type="text"
        name="interviewer"
        value={filters.interviewer}
        onChange={handleFilterChange}
        placeholder="Filter by Interviewer"
      />
      <input
        type="text"
        name="candidate"
        value={filters.candidate}
        onChange={handleFilterChange}
        placeholder="Filter by Candidate"
      />
    </div>
  );
};

export default Filters;
