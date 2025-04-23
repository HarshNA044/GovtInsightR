import React, { useState } from "react";
import './Complaint.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Complaint() {
  const [govType, setGovType] = useState("");
  const [state, setState] = useState("");
  const [complaintNumber, setComplaintNumber] = useState(null);
  const [partyName, setPartyName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [tenure, setTenure] = useState("");
  const [totalComplaints, setTotalComplaints] = useState(1215);

  const statesAndUTs = [
    "Andaman and Nicobar Islands", "Chandigarh", "Delhi", "Dadra and Nagar Haveli", 
    "Daman and Diu", "Lakshadweep", "Puducherry", 
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const tenureOptions = [
    "2024-Current", "2019-2024", "2014-2019", "2009-2014", "2004-2009",
    "1999-2004", "1998-1999", "1996-1998", "1991-1996", "1989-1991",
    "1984-1989", "1980-1984", "1977-1980", "1971-1977", "1967-1971",
    "1962-1967", "1957-1962", "1952-1957"
  ];

  const generateComplaintNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const complaintNo = generateComplaintNumber();
    setComplaintNumber(complaintNo);
    setTotalComplaints(prev => prev + 1);
    alert(`Complaint Registered Successfully! Your Complaint No: ${complaintNo}`);
  };

  const data = [
    {
      name: 'Complaints',
      Received: totalComplaints,
      Resolved: Math.floor(0.1 * totalComplaints),
    },
  ];

  return (
    <div className="fcontainer">
      <h1 className="header">Track / Register a Complaint</h1>

      <div className="search-filter-section">
        <input type="text" className="input-field" placeholder="Search Manifestos..." />
        <div className="filter-group">
          <label>
            Date Range:
            <input type="date" className="input-field" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <input type="date" className="input-field" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </label>

          <label>
            Party Name:
            <input type="text" className="input-field" value={partyName} onChange={(e) => setPartyName(e.target.value)} placeholder="Enter Party Name" />
          </label>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-item">Total Complaints Received: {totalComplaints}</div><br />
        <div className="stat-item">Most Complained Scheme: <u>15 Lakh In Accounts</u></div><br />
        <div className="stat-item">Total Complaints Resolved: {Math.floor((0.1 * totalComplaints))}</div><br />
      </div>

      <button
        className="file-complaint-btn"
        onClick={() => document.getElementById("complaintForm").scrollIntoView({ behavior: 'smooth' })}
      >File a Complaint</button>

      <form id="complaintForm" onSubmit={handleSubmit} className="complaint-form">
        <label className="form-label">
          <span className="label-text">Type of Government</span>
          <select className="input-field" value={govType} onChange={(e) => setGovType(e.target.value)}>
            <option value="">Select</option>
            <option value="Central">Central</option>
            <option value="State">State</option>
            <option value="MCD">MCD</option>
          </select>
        </label>

        {govType === "State" && (
          <label className="form-label">
            <span className="label-text">Select State/UT</span>
            <select className="input-field" value={state} onChange={(e) => setState(e.target.value)}>
              <option value="">Select</option>
              {statesAndUTs.map((state, index) => (
                <option key={index} value={state}>{state}</option>
              ))}
            </select>
          </label>
        )}

        {(govType === "Central" || (govType === "State" && state === "Delhi")) && (
          <label className="form-label">
            <span className="label-text">Select Tenure</span>
            <select className="input-field" value={tenure} onChange={(e) => setTenure(e.target.value)}>
              <option value="">Select</option>
              {tenureOptions.map((t, index) => (
                <option key={index} value={t}>{t}</option>
              ))}
              <option value="Custom">Custom</option>
            </select>
          </label>
        )}

        {tenure === "Custom" && (
          <div className="custom-tenure-inputs">
            <input
              type="date"
              className="input-field"
              placeholder="Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <input
              type="date"
              className="input-field"
              placeholder="End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        )}

        <label className="form-label">
          <span className="label-text">Upload Government ID</span>
          <input type="file" className="input-field" required />
        </label>

        <label className="form-label">
          <span className="label-text">Upload Supporting Documents</span>
          <input type="file" className="input-field" required multiple />
        </label>

        <button type="submit" className="submit-btn">Submit Complaint</button>
      </form>


      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Received" fill="#8884d8" />
            <Bar dataKey="Resolved" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {complaintNumber && (
        <div className="complaint-number">
          Your Complaint Number: <strong>{complaintNumber}</strong>
        </div>
      )}
    </div>
  );
};

export default Complaint;