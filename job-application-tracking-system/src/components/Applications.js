import React, { useState } from 'react';
import './styles.css'
import ApplicationForm from './ApplicationForm';

const Applications = () => {
  const [applications, setApplications] = useState([]);

  const addApplication = (application) => {
    setApplications([...applications, application]);
  };

  const deleteApplication = (index) => {
    const updatedApplications = [...applications];
    updatedApplications.splice(index, 1);
    setApplications(updatedApplications);
  };

  return (
    <div>
      <h1>Job Applications</h1>
      <ApplicationForm addApplication={addApplication} />
      <ul>
        {applications.map((application, index) => (
          <li key={index}>
            {application.name} - {application.company} - {application.position}
            <button onClick={() => deleteApplication(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Applications;
