# Depremler-App

**Depremler-App** is a React application that allows users to visualize daily earthquake data. It provides detailed information about each earthquake, including its magnitude, depth, time, and location, and analyzes the data based on the user's location.

## Features

- View daily earthquake data
- Detailed information on earthquakes (magnitude, depth, time, location)
- Calculate distance from user's location to earthquakes
- Color-coded earthquake cards based on severity
- Display distance information for users who grant location access

## Technologies

- **React**: For the user interface
- **Axios**: For API requests
- **PropTypes**: For component prop validation
- **React Icons**: For icons

## Installation

To run the project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/username/repository-name.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd repository-name
    ```

3. **Install the required dependencies:**

    ```bash
    npm install
    ```

4. **Start the application:**

    ```bash
    npm start
    ```

    The application will open automatically in your browser at `http://localhost:3000`.

## Usage

- **Upon opening the application**, it fetches daily earthquake data from the API and displays it in the user interface.
- **By granting location access**, you can view distance information on earthquake cards.
- **Earthquake cards** show details such as magnitude, depth, date, time, and location. The color of the cards changes based on the severity of the earthquake.

## API

The application fetches earthquake data from the my other repository [Kandilli-API](https://github.com/kaddef/kandilli-api).
