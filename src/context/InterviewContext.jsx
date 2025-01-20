import React, { createContext, useState, useEffect } from "react";

// Create InterviewContext
export const InterviewContext = createContext();

// InterviewProvider Component
const InterviewProvider = ({ children }) => {
  // Initialize state with data from localStorage or an empty array
  const [interviews, setInterviews] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("interviews")) || [];
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return [];
    }
  });

  // Persist interviews to localStorage whenever the state changes
  useEffect(() => {
    try {
      localStorage.setItem("interviews", JSON.stringify(interviews));
    } catch (error) {
      console.error("Error saving interviews to localStorage:", error);
    }
  }, [interviews]);

  // Add a new interview
  const addInterview = (interview) => {
    setInterviews((prevInterviews) => [...prevInterviews, interview]);
  };

  // Update an existing interview by matching its ID
  const updateInterview = (updatedInterview) => {
    setInterviews((prevInterviews) =>
      prevInterviews.map((i) =>
        i.id === updatedInterview.id ? updatedInterview : i
      )
    );
  };

  // Delete an interview by ID
  const deleteInterview = (id) => {
    setInterviews((prevInterviews) =>
      prevInterviews.filter((i) => i.id !== id)
    );
  };

  // Provide the state and action functions via context
  return (
    <InterviewContext.Provider
      value={{ interviews, addInterview, updateInterview, deleteInterview }}
    >
      {children}
    </InterviewContext.Provider>
  );
};

export default InterviewProvider;
