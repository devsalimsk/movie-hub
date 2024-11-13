import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import "../components/AddData.css"; // Import the CSS file

function AddData() {
  const [moviename, setmoviename] = useState('');
  const [actor, setactor] = useState('');
  const [actress, setactress] = useState('');
  const [rating, setrating] = useState('');

  const senddata = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/movies', {
        moviename,
        actor,
        actress,
        rating,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Add Movies Data</h1>
      <form onSubmit={senddata}>
        <input
          type="text"
          name="moviename"
          placeholder="Movie Name"
          onChange={(e) => setmoviename(e.target.value)}
        />
        <input
          type="text"
          name="actor"
          placeholder="Actor"
          onChange={(e) => setactor(e.target.value)}
        />
        <input
          type="text"
          name="actress"
          placeholder="Actress"
          onChange={(e) => setactress(e.target.value)}
        />
        <input
          type="number"
          name="rating"
          placeholder="Rating"
          onChange={(e) => setrating(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AddData;
