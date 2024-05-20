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

## Dependencies
- Express: Fast, unopinionated, minimalist web framework for Node.js.
- Mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
- EJS: Embedded JavaScript templates for rendering HTML pages in Express.
- Passport: Simple, unobtrusive authentication middleware for Node.js.
- passport-local: Passport strategy for authenticating with a username and password.
- passport-local-mongoose: Passport plugin that simplifies building username and password login with Mongoose    models.
- express-session: Session middleware for Express.
- morgan: HTTP request logger middleware for Node.js.
- cookie-parser: Parse HTTP request cookies.
## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
