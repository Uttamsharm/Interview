# Interview Scheduler

The **Interview Scheduler** is a React application that allows users to schedule and manage interviews. It features a calendar view to display all scheduled interviews and a form for creating and editing interview events. The application is styled with custom CSS and uses the `react-big-calendar` library for the calendar functionality.

---

## Features

- 📅 **Calendar View**: Displays all interviews in a user-friendly calendar interface.
- 📝 **Schedule and Edit Interviews**: Add, update, and manage interview schedules with ease.
- 🔍 **Filters**: Filter interviews by type (e.g., Technical, HR, Behavioral).
- ✅ **Conflict Detection**: Prevent scheduling conflicts by checking interviewer availability.

---


## Technologies Used

- **Frontend**:
  - React
  - React Router
  - React Big Calendar
- **State Management**:
  - React Context API
- **Styling**:
  - CSS

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Uttamsharm/Interview
   cd interview-scheduler
Install dependencies:


1. npm install
Run the application:

2. npm start


Folder Structure
src/
├── components/
│   ├── Filters.jsx
│   └── ...
├── context/
│   └── InterviewContext.jsx
├── pages/
│   ├── DashboardPage.jsx
│   ├── CreateEditPage.jsx
│   └── ...
├── utils/
│   └── localizer.js
└── App.js



Usage
Schedule an Interview:

Click the "Schedule Interview" button to add a new interview.
Fill in the candidate, interviewer, date, time, and type of interview.
Edit an Interview:

Click on an existing interview in the calendar to edit its details.
Filter Interviews:

Use the filter options to view interviews of specific types (e.g., Technical, HR).
