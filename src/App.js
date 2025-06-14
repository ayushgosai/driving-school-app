import React from 'react';

const App = () => {
  return (
    <div className="App">
      <table>
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
          <tr>
            <td>12:00</td>
            <td>12345</td>
            <td>राम</td>
            <td>9876543210</td>
            <td>DL12345</td>
            <td>15/06/1990</td>
            <td>23456</td>
            <td>5000</td>
          </tr>
          <tr>
            <td>13:30</td>
            <td>67890</td>
            <td>श्याम</td>
            <td>9876543211</td>
            <td>DL67890</td>
            <td>20/07/1992</td>
            <td>78901</td>
            <td>6000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
