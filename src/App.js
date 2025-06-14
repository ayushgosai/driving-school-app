import React, { useState, useEffect, useRef } from 'react';
import './App.css';


function App() {
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


  return (
    <div className="App">
      <h1>Driving School License Data</h1>
      <div className="data-container">
        <table className="license-table">
          <thead>
            <tr>
              <th>LL Time</th>
              <th>Learning License</th>
              <th>Name</th>
              <th>Mobile Number</th>
              <th>Application Number</th>
              <th>Birth Day</th>
              <th>DL License</th>
              <th>Money</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item['LL Time']}</td>
                <td>{item['Learning License']}</td>
                <td>{item.Name}</td>
                <td>{item['Mobile Number']}</td>
                <td>{item['Application Number']}</td>
                <td>{item['Birth Day']}</td>
                <td>{item['DL License']}</td>
                <td>{item.Money}</td>
                <td>{item.birthDay}</td>
                <td>{item.dlLicense}</td>
                <td>{item.money}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
