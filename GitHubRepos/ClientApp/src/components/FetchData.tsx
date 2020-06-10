import React, { useState, useEffect } from 'react';

const FetchData: React.FC = () => {
  const [forecasts, setForecasts] = useState([])
  const [loading, setLoading] = useState(true)

  const populateWeatherData = async () => {
    const response = await fetch('weatherforecast');
    const data = await response.json();

    setForecasts(data);
    setLoading(false);
  }

  useEffect(() => {
    populateWeatherData();
  }, [])

  const renderForecastsTable = (forecasts: any) => {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast: any) =>
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  return (
    <div>
      <h1 id="tabelLabel" >Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {loading
        ? <p><em>Loading...</em></p>
        : renderForecastsTable(forecasts)}
    </div>
  );
}

export default FetchData;

