import React from 'react';

const Dashboard = () => {
    console.log("Dashboard Clicked")
  return (
        <div
        style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Right',
        height: '100vh',
        }}
    >
        <h1 style={{color: 'white'}}>
        Dashboard
        </h1>
    </div>
  );
};
export default Dashboard;