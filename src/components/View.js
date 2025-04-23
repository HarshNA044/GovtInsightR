import React, { useState, useEffect, useRef } from 'react';
import './View.css';
import Chart from 'chart.js/auto';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const govtData = {
  central: [
    { from: 1947, to: 1952, party: "Indian National Congress" },
    { from: 1952, to: 1957, party: "Indian National Congress" },
    { from: 1957, to: 1962, party: "Indian National Congress" },
    { from: 1962, to: 1967, party: "Indian National Congress" },
    { from: 1967, to: 1971, party: "Indian National Congress" },
    { from: 1971, to: 1977, party: "Indian National Congress" },
    { from: 1977, to: 1980, party: "Janata Party" },
    { from: 1980, to: 1984, party: "Indian National Congress" },
    { from: 1984, to: 1989, party: "Indian National Congress" },
    { from: 1989, to: 1991, party: "Janata Dal" },
    { from: 1991, to: 1996, party: "Indian National Congress" },
    { from: 1996, to: 1998, party: "Bharatiya Janata Party" },
    { from: 1998, to: 1999, party: "Bharatiya Janata Party" },
    { from: 1999, to: 2004, party: "Bharatiya Janata Party" },
    { from: 2004, to: 2009, party: "Indian National Congress" },
    { from: 2009, to: 2014, party: "Indian National Congress" },
    { from: 2014, to: 2019, party: "Bharatiya Janata Party" },
    { from: 2019, to: 2024, party: "Bharatiya Janata Party" },
    { from: 2024, to: "Current", party: "Bhartiya Janta Party (NDA)" }
  ],
  state: {
    delhi: [
      { from: 1993, to: 1998, party: "Indian National Congress" },
      { from: 1998, to: 2003, party: "Indian National Congress" },
      { from: 2003, to: 2008, party: "Indian National Congress" },
      { from: 2008, to: 2013, party: "Indian National Congress" },
      { from: 2013, to: 2014, party: "Aam Aadmi Party" },
      { from: 2015, to: 2020, party: "Aam Aadmi Party" },
      { from: 2020, to: 2025, party: "Aam Aadmi Party" },
      { from: 2025, to: "Current", party: "Bhartiya Janta Party" }
    ]
  }
};

const completedPromises = [
  "100% electrification of villages",
  "Construction of 100 smart cities",
  "Swachh Bharat Mission for clean India",
  "Digital India initiative",
  "Ayushman Bharat healthcare for poor"
];

const notCompletedPromises = [
  "Doubling farmers' income by 2022",
  "Make in India to boost manufacturing",
  "Affordable housing for all by 2022",
  "New Education Policy implementation",
  "Self-reliant India (Atmanirbhar Bharat)"
];

function View() {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [govtType, setGovtType] = useState('central');
  const [centralSession, setCentralSession] = useState('');
  const [stateSession, setStateSession] = useState('');
  const [result, setResult] = useState('Select Govt type and session period');

  useEffect(() => {
    const currentCentral = govtData.central.find(s => s.to === 'Current');
    const currentState = govtData.state.delhi.find(s => s.to === 'Current');
    if (currentCentral) {
      const val = `${currentCentral.from}-${currentCentral.to}`;
      setCentralSession(val);
      setResult(`Central Government (${val}):\nRuling Party: ${currentCentral.party}`);
    }
    if (currentState && govtType === 'state') {
      const val = `${currentState.from}-${currentState.to}`;
      setStateSession(val);
      setResult(`Delhi Government (${val}):\nRuling Party: ${currentState.party}`);
    }
  }, []);

  useEffect(() => {
    const [from, to] = (govtType === 'central' ? centralSession : stateSession).split('-');
    const session = govtType === 'central'
      ? govtData.central.find(s => s.from === parseInt(from) && s.to == to)
      : govtData.state.delhi.find(s => s.from === parseInt(from) && s.to == to);

    if (session) {
      setResult(`${govtType === 'central' ? 'Central' : 'Delhi'} Government (${from}-${to}):\nRuling Party: ${session.party}`);
    }
  }, [centralSession, stateSession, govtType]);

  const promisesData = [
    { promise: 'Promise A', complaints: 50 },
    { promise: 'Promise B', complaints: 30 },
    { promise: 'Promise C', complaints: 25 },
    { promise: 'Promise D', complaints: 20 },
    { promise: 'Promise E', complaints: 15 },
    { promise: 'Promise F', complaints: 10 },
    { promise: 'Promise G', complaints: 5 },
  ];

  const top5 = [...promisesData].sort((a, b) => b.complaints - a.complaints).slice(0, 5);
  const top5Total = top5.reduce((sum, item) => sum + item.complaints, 0);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: promisesData.map(p => p.promise),
        datasets: [{
          label: 'Number of Complaints',
          data: promisesData.map(p => p.complaints),
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Complaints' }
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'Complaints per Promise'
          }
        }
      }
    });
  }, []);

  const data = {
    labels: ["Completed", "Not Completed"],
    datasets: [{
      label: "Promises Status",
      data: [60, 40],
      backgroundColor: ["rgba(75, 192, 192, 0.7)", "rgba(255, 99, 132, 0.7)"],
      borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
      borderWidth: 1
    }]
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Promise Completion Status",
        font: { size: 18 }
      },
      legend: { position: "top" }
    }
  };

  const [completedSearch, setCompletedSearch] = useState('');
  const [notCompletedSearch, setNotCompletedSearch] = useState('');

  const filteredCompleted = completedPromises.filter(p =>
    p.toLowerCase().includes(completedSearch.toLowerCase())
  );

  const filteredNotCompleted = notCompletedPromises.filter(p =>
    p.toLowerCase().includes(notCompletedSearch.toLowerCase())
  );

  return (
    <div>
      <div className="selector-container">
        <h2>Select Government Type</h2>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="govtType"
              value="central"
              checked={govtType === 'central'}
              onChange={() => setGovtType('central')}
            />
            Central Govt
          </label>
          {' '}
          <label>
            <input
              type="radio"
              name="govtType"
              value="state"
              checked={govtType === 'state'}
              onChange={() => setGovtType('state')}
            />
            State Govt (Delhi)
          </label>
        </div>

        {govtType === 'central' && (
          <div className="dropdown-container">
            <h3>Select Session Period</h3>
            <select value={centralSession} onChange={e => setCentralSession(e.target.value)}>
              <option value="">Select a session period</option>
              {govtData.central.map((session, i) => (
                <option key={i} value={`${session.from}-${session.to}`}>
                  {session.from}-{session.to}
                </option>
              ))}
            </select>
          </div>
        )}

        {govtType === 'state' && (
          <div className="dropdown-container">
            <h3>Select Session Period (Delhi)</h3>
            <select value={stateSession} onChange={e => setStateSession(e.target.value)}>
              <option value="">Select a session period</option>
              {govtData.state.delhi.map((session, i) => (
                <option key={i} value={`${session.from}-${session.to}`}>
                  {session.from}-{session.to}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="result-box">
          <pre>{result}</pre>
        </div>
      </div>

      <div className="view-container">
        <div className="scroll-container">
          <h2>Promises Completed</h2>
          <div className="search-bar-wrapper">
            <input
              type="text"
              className="search-bar"
              placeholder="Search promises..."
              value={completedSearch}
              onChange={e => setCompletedSearch(e.target.value)}
            />
          </div>
          <div className="scroll-box">
            {filteredCompleted.map((promise, index) => (
              <div className="promise-box" key={index}>{promise}</div>
            ))}
          </div>
        </div>

        <div className="scroll-container">
          <h2>Promises Not Completed</h2>
          <div className="search-bar-wrapper">
            <input
              type="text"
              className="search-bar"
              placeholder="Search promises..."
              value={notCompletedSearch}
              onChange={e => setNotCompletedSearch(e.target.value)}
            />
          </div>
          <div className="scroll-box">
            {filteredNotCompleted.map((promise, index) => (
              <div className="promise-box" key={index}>{promise}</div>
            ))}
          </div>
        </div>

        <div className='view-container' style={{ border: "1px solid lightgrey", borderRadius: "8px", boxShadow: "0 8px 10px rgba(0,0,0,0.1)", padding: "8px", margin: "3px" }}>
          <Pie data={data} options={options} />
        </div>

        <div className="dashboard-container">
          <div className="chart-box">
            <h2>Complaints per Promise</h2>
            <canvas id="barChart" ref={chartRef} width="800" height="400"></canvas>
          </div>

          <div className="top5-box">
            <h2>Top 5 Most Complained Promises</h2>
            <div className="note">Showing % of total complaints within Top 5</div>
            <div className="top5-section">
              {top5.map((item, index) => {
                const percent = ((item.complaints / top5Total) * 100).toFixed(1);
                return (
                  <div key={item.promise} className="top5-item">
                    <div className="label">
                      <span>{item.promise}</span>
                      <span>{item.complaints} complaints ({percent}%)</span>
                    </div>
                    <div className="bar-container">
                      <div
                        className={`bar rank-${index + 1}`}
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;