# Stock Quote React App

This project is a simple React application that fetches and displays stock quote information using the Yahoo Finance API. It allows users to search for stock data by entering a stock ticker symbol (e.g., `AAPL` for Apple).

## Features

- **Search by Stock Ticker or Company Name:** Enter a stock ticker symbol or company name in the input field to fetch stock information.
- **Dynamic Data Fetching:** Fetch real-time stock data using the Yahoo Finance API.
- **Error Handling:** Displays appropriate error messages for invalid input or when the stock data cannot be retrieved.
- **Responsive Design:** Ensures a user-friendly experience on various devices.

## Technologies Used

- **Frontend:** React (with Hooks for state management)
- **HTTP Requests:** Axios
- **API:** [Yahoo Finance API](https://rapidapi.com/yahoo-finance15/api/yahoo-finance15/)
- **Styling:** CSS

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

Follow the steps below to set up and run the project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/stock-quote-app.git
cd stock-quote-app
```

### 2. Install Dependencies

Install the required dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

### 3. Set Up the API Key

This app uses the Yahoo Finance API via RapidAPI. To use this app:

1. Create an account on [RapidAPI](https://rapidapi.com/).
2. Subscribe to the Yahoo Finance API.
3. Create a .env file in the root directory of your project and add your RapidAPI key and host:

```javascript
VITE_RAPIDAPI_KEY = your - rapidapi - key;
VITE_RAPIDAPI_HOST = yahoo - finance15.p.rapidapi.com;
```

Replace your-rapidapi-key with your actual API key from RapidAPI.

### 4. Run the Application

Start the development server:

```bash
npm start
# or
yarn start
```

Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage

1. Enter a stock ticker symbol or company name (e.g., `AAPL` for Apple) in the input field.
2. Click the **Search** button.
3. View the stock information, including:
   - Company name and symbol
   - Last sale price
   - Net change and percentage change
   - 52-week range and daily high/low

If the stock data cannot be retrieved, an error message will be displayed.

## File Structure

```
stock-quote-app/
├── src/
│   ├── App.css         # Styling for the app
│   ├── App.js          # Main component
│   └── index.js        # Entry point
├── public/             # Static files
├── package.json        # Project metadata and dependencies
└── README.md           # Documentation
```

## Customization

- Add more fields in the `stockQuote` display section as needed.
- Update styles in `App.css` to match your design preferences.

## Known Issues

- The app relies on the API response structure. If the API response changes, adjustments in the code may be necessary.
- Free tier limits of the Yahoo Finance API on RapidAPI may restrict the number of requests.

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [RapidAPI](https://rapidapi.com/) for providing easy access to Yahoo Finance API.
- [React](https://reactjs.org/) for the amazing frontend library.

---
