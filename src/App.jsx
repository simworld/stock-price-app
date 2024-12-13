import React, { useState } from "react";
import axios from "axios";
import "./App.css"; // Assuming you have your CSS in this file

const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;
const API_HOST = import.meta.env.VITE_RAPIDAPI_HOST;

function App() {
  const [searchTerm, setSearchTerm] = useState("AAPL"); // Default to AAPL
  const [stockQuote, setStockQuote] = useState(null);
  const [error, setError] = useState("");

  const fetchStockQuote = async (event) => {
    event.preventDefault();
    setError(""); // Reset error state
    setStockQuote(null); // Reset stock quote data

    const options = {
      method: "GET",
      url: "https://yahoo-finance15.p.rapidapi.com/api/v1/markets/quote",
      params: {
        ticker: searchTerm.toUpperCase(),
        type: "STOCKS",
      },
      headers: {
        "x-rapidapi-key": API_KEY,
        "x-rapidapi-host": API_HOST,
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data); // Log the full response
      if (response.data.body) {
        setStockQuote(response.data.body); // Set the body key if it exists
      } else {
        setError("Stock not found. Please check your input."); // Custom error message
      }
    } catch (err) {
      setError("Error fetching stock quote");
      console.error(err);
    }
  };

  return (
    <div className="app">
      <h1>Stock Quote</h1>
      <form onSubmit={fetchStockQuote}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter stock ticker or company name (e.g., AAPL or Apple)"
          required
        />
        <button type="submit">Search</button>
      </form>

      {error && <p className="error">{error}</p>}

      {stockQuote ? (
        <div className="stock-info">
          <h2>
            {stockQuote.companyName} ({stockQuote.symbol})
          </h2>
          <p>
            <strong>Last Sale Price:</strong>{" "}
            {stockQuote.primaryData?.lastSalePrice || "N/A"}
          </p>
          <p>
            <strong>Net Change:</strong>{" "}
            {stockQuote.primaryData?.netChange || "N/A"}
          </p>
          <p>
            <strong>Percentage Change:</strong>{" "}
            {stockQuote.primaryData?.percentageChange || "N/A"}
          </p>
          <p>
            <strong>Last Trade Timestamp:</strong>{" "}
            {stockQuote.primaryData?.lastTradeTimestamp || "N/A"}
          </p>
          <p>
            <strong>Volume:</strong> {stockQuote.primaryData?.volume || "N/A"}
          </p>
          <p>
            <strong>52 Week Range:</strong>{" "}
            {stockQuote.keyStats?.fiftyTwoWeekHighLow.value || "N/A"}
          </p>
          <p>
            <strong>High/Low:</strong>{" "}
            {stockQuote.keyStats?.dayrange.value || "N/A"}
          </p>
          {/* Add more fields as needed */}
        </div>
      ) : (
        <p>No data found for ticker or company name: {searchTerm}</p>
      )}
    </div>
  );
}

export default App;
