import { Routes, Route, Navigate } from 'react-router-dom'; // Import RouterLink for MUI buttons
import MarketingPage from './marketing-page/MarketingPage.tsx'; // MarketingPage.jsx is the chosen landing page from marketing-page

function App() {
  return (
    <>
      <Routes>
        <Route path="/for-client" element={<MarketingPage />} />
        <Route path="/for-provider" element={<MarketingPage />} />
        <Route path="/" element={<Navigate to="/for-client" replace />} />
        {/* <Route path="/checkout" element={<Checkout />} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

export default App;