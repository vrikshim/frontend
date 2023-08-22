import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({}); // Change data_function to setData

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/");
      const jsonData = await response.json(); // Parse JSON response
      setData(jsonData); // Update state with parsed data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div> hello sjlks</div>
      <h1>{data.message}</h1> {/* Replace 'someProperty' with the actual property you want to display */}
      <h1> jdlkja;lsdl </h1>
    </div>
  );
}

export default App;
