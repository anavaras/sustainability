import React, { useEffect, useState } from 'react';

const App = () => {
  const [carbonFootprintData, setCarbonFootprintData] = useState(null);

  useEffect(() => {
    fetchCarbonFootprintData();
  }, []);

  const fetchCarbonFootprintData = async () => {
    try {
      const response = await fetch('/api/carbonFootprint');
      const data = await response.json();
      setCarbonFootprintData(data);
    } catch (error) {
      console.error('Error fetching carbon footprint data:', error);
    }
  };

  return (
    <div>
      <h1>Carbon Footprint Information</h1>
      {carbonFootprintData ? (
        <div>
          <p>Current carbon footprint: {carbonFootprintData} tons</p>
        </div>
      ) : (
        <p>Loading carbon footprint data...</p>
      )}
    </div>
  );
};

export default App;
