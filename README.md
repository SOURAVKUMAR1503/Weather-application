# Weather App

A simple and responsive Weather App built using React.js and Axios. Users can search for any city and view real-time weather information using the OpenWeatherMap API.

## Features

- Search weather by city name
- Display current temperature
- Display weather condition
- Display weather description
- Display sunrise time
- Display sunset time
- Display city and country
- Error message for invalid city names
- Responsive design
- Press Enter to search

## Technologies Used

- React.js
- JavaScript
- Axios
- CSS
- OpenWeatherMap API

## Project Structure

weather-app/
│
├── public/
│
├── src/
│   ├── App.js
│   ├── Weather.jsx
│   ├── index.js
│   └── index.css
│
├── package.json
└── README.md

## Installation

Clone the repository:

git clone YOUR_GITHUB_REPOSITORY_URL

Go to the project folder:

cd weather-app

Install dependencies:

npm install

Start the application:

npm start

The application will run at:

http://localhost:3000

## How It Works

1. Enter a city name in the search box.
2. Click the Get Weather button or press Enter.
3. Axios sends a request to the OpenWeatherMap API.
4. The API returns the weather information.
5. React displays the temperature, weather condition, sunrise, and sunset.

## API

This project uses the OpenWeatherMap API to get real-time weather information.

The application retrieves:

- City name
- Country
- Temperature
- Weather condition
- Weather description
- Sunrise
- Sunset

## Author

Sourav Kumar

## License

This project is created for learning and educational purposes.
