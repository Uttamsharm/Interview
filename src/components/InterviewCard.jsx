import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InterviewContext } from "../context/InterviewContext";

const InterviewCard = ({ interview }) => {
  const { deleteInterview } = useContext(InterviewContext);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this interview?")) {
      deleteInterview(interview.id);
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${interview.id}`);
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
        minWidth: "250px",
      }}
    >
      <h3>{interview.candidate}</h3>
      <p>
        <strong>Interviewer:</strong> {interview.interviewer}
      </p>
      <p>
        <strong>Date:</strong> {interview.date}
      </p>
      <p>
        <strong>Time:</strong> {interview.time}
      </p>
      <p>
        <strong>Type:</strong> {interview.type}
      </p>
      <div>
        <button onClick={handleEdit} style={{ marginRight: "10px" }}>
          Edit
        </button>
        <button onClick={handleDelete} style={{ background: "red", color: "#fff" }}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default InterviewCard;
