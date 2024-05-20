# Rentify

Rentify is a web application for listing and reviewing rental properties. Users can create, read, update, and delete listings and leave reviews for the properties.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, read, update, and delete property listings
- Add reviews to listings
- User authentication and session management

## Installation

1. **Clone the repository**:

    ```sh
    git clone https://github.com/your-username/rentify.git
    cd rentify
    ```

2. **Install dependencies**:

    ```sh
    npm install
    ```

## Configuration

1. **Set up MongoDB**:

    Ensure you have MongoDB installed and running on your local machine or have a MongoDB URI.

2. **Environment variables**:

    Create a `.env` file in the root directory and add the following environment variables:

    ```env
    MONGO_URL=mongodb://127.0.0.1:27017/rentify
    SESSION_SECRET=yourSecretKey
    ```

## Usage

1. **Start the application**:

    ```sh
    nodemon app.js
    ```

    The server will start on port 3000. Open your browser and navigate to `http://localhost:3000`.

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS
- Passport.js


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
