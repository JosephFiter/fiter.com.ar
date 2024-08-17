import React, { useEffect } from 'react';
import axios from 'axios';

const FetchJuegos: React.FC = () => {
  useEffect(() => {
    const fetchJuegos = async () => {
      try {
        const response = await axios.get('https://backjoseph-com-ar2024.vercel.app/juegos');
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching juegos:', error);
      }
    };

    fetchJuegos();
  }, []);

  return (
    <div>
      <h1>Fetch Juegos</h1>
      <p>Check the console for the fetched data.</p>
    </div>
  );
};

export default FetchJuegos;
