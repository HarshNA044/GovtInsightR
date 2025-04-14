import React, { useState, useEffect, useRef } from 'react';
import './View.css';
import Chart from 'chart.js/auto';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

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

  const promisesData = [
    { promise: 'Promise A', complaints: 50 },
    { promise: 'Promise B', complaints: 30 },
    { promise: 'Promise C', complaints: 25 },
    { promise: 'Promise D', complaints: 20 },
    { promise: 'Promise E', complaints: 15 },
    { promise: 'Promise F', complaints: 10 },
    { promise: 'Promise G', complaints: 5 },
  ];

  const top5 = [...promisesData]
    .sort((a, b) => b.complaints - a.complaints)
    .slice(0, 5);
  const top5Total = top5.reduce((sum, item) => sum + item.complaints, 0);

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: promisesData.map((p) => p.promise),
        datasets: [{
          label: 'Number of Complaints',
          data: promisesData.map((p) => p.complaints),
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
    datasets: [
      {
        label: "Promises Status",
        data: [60, 40], // Replace with dynamic values if needed
        backgroundColor: [
          "rgba(75, 192, 192, 0.7)", // Completed
          "rgba(255, 99, 132, 0.7)", // Not Completed
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Promise Completion Status",
        font: {
          size: 18,
        },
      },
      legend: {
        position: "top",
      },
    },
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
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <div className="scroll-box">
          {filteredCompleted.map((promise, index) => (
            <div className="promise-box" key={index}>
              {promise}
            </div>
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
          <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <div className="scroll-box">
          {filteredNotCompleted.map((promise, index) => (
            <div className="promise-box" key={index}>
              {promise}
            </div>
          ))}
        </div>
      </div>

      <div className='view-container' style={{border:"1px solid lightgrey", borderRadius:"8px",boxShadow:"0 8px 10px rgba(0,0,0,0.1)",padding:"8px",margin:"3px"}}>
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
                      style={{ width: `${percent}% `}}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;