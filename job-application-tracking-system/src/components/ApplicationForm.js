import React, { useState } from 'react';

const ApplicationForm = ({ addApplication }) => {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addApplication({ name, company, position });
    setCompany('');
    setPosition('');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Company:
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </label>
      <label>
        Position:
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </label>
      <button type="submit">Add Application</button>
    </form>
  );
};

export default ApplicationForm;
