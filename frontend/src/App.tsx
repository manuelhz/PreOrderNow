import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
    // State to hold the message fetched from the backend
  const [message, setMessage] = useState<string>('Loading greeting...');
  /////////
  useEffect(() => {
    // This effect runs once after the initial render of the component
    const fetchHelloMessage = async () => {
      try {
        // Make a GET request to the /hello endpoint
        // IMPORTANT: If your backend is running on a different port (e.g., 8080)
        // than your Vite dev server (e.g., 5173), you will need to configure a proxy
        // in your `vite.config.ts` file, or use the full URL:
        // For example: await axios.get('http://localhost:8080/hello');
        const response = await axios.get('/api/v1/helloReact');

        // Assuming your backend returns the string directly in `response.data`
        setMessage(response.data);
      } catch (error) {
        console.error('There was an error fetching the greeting:', error);
        // Display an error message if the fetch fails
        setMessage('Failed to load greeting. Please check the backend server.');
      }
    };

    fetchHelloMessage();
  }, []); // The empty dependency array [] ensures this effect runs only once on mount

  ///////////////////

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Message from server:</h1>
      <h1>{message}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
