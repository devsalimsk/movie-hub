import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import './Displaydata.css'; // Import the CSS file

function Displaydata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get('http://localhost:5000/movies');
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="table-container">
      <h1>Movies Data</h1>
      <table>
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Actor</th>
            <th>Actress</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r, i) => (
            <tr key={i}>
              <td>{r.moviename}</td>
              <td>{r.actor}</td>
              <td>{r.actress}</td>
              <td>{r.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Displaydata;
