import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InterviewContext } from "../context/InterviewContext";
import "./ScheduleForm.css"; // Import the CSS file

const ScheduleForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { interviews, addInterview, updateInterview } = useContext(InterviewContext);

  const isEdit = Boolean(id);
  const [formData, setFormData] = useState({
    candidate: "",
    interviewer: "",
    date: "",
    time: "",
    type: "Technical",
  });

  useEffect(() => {
    if (isEdit) {
      const interview = interviews.find((i) => i.id === parseInt(id));
      if (interview) setFormData(interview);
    }
  }, [id, isEdit, interviews]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate for scheduling conflicts
    const hasConflict = interviews.some(
      (interview) =>
        interview.id !== (id ? parseInt(id) : null) &&
        interview.interviewer === formData.interviewer &&
        interview.date === formData.date &&
        interview.time === formData.time
    );

    if (hasConflict) {
      alert("Scheduling conflict: The interviewer is already booked for this time.");
      return;
    }

    if (isEdit) {
      updateInterview({ ...formData, id: parseInt(id) });
    } else {
      addInterview({ ...formData, id: Date.now() });
    }

    navigate("/");
  };

  return (
    <div className="schedule-form-container">
      <h1>{isEdit ? "Edit Interview" : "Schedule Interview"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="candidate"
          value={formData.candidate}
          onChange={handleChange}
          placeholder="Candidate Name"
          required
        />
        <input
          type="text"
          name="interviewer"
          value={formData.interviewer}
          onChange={handleChange}
          placeholder="Interviewer Name"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Technical">Technical</option>
          <option value="HR">HR</option>
          <option value="Behavioral">Behavioral</option>
        </select>
        <button type="submit">{isEdit ? "Update" : "Schedule"}</button>
      </form>
    </div>
  );
};

export default ScheduleForm;
