import { Routes, Route } from 'react-router-dom'; // Import RouterLink for MUI buttons
import MarketingPage from './marketing-page/MarketingPage.tsx'; // MarketingPage.jsx is the chosen landing page from marketing-page

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MarketingPage />} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

export default App;