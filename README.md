
# The Physical 100 Encyclopedia

Your one-stop-shop for everything about the South Korean reality competition series on Netflix — Physical 100.

This is the server for the web app, which provides an API for getting and editing contestants and challenges on the app.

## Overview

The web app is an immersion into the world of all things Physical 100. Users can reference all contestants and challenges in the show. Users can also edit articles about any contestant or challenge, encouraging a culture of open source knowledge.

## Features

- **RESTful API**: Provides endpoints for managing contestants, challenges, and stats
- **Database Integration**: Connects to a mySQL database to persist contestant and challenge data

## Tech Stack

**Client:** React, Axios

**Server:** Express, Knex, MySQL

# Getting Started

## Prerequisites

Before you begin, ensure you have Node.js (https://nodejs.org/), npm (https://www.npmjs.com/), and MySQL server installed on your local machine.
  - MySQL download for Mac (https://dev.mysql.com/doc/refman/8.0/en/macos-installation.html)
  - MySQL download for Windows (https://dev.mysql.com/doc/refman/8.0/en/windows-installation.html)

Ensure you also have a mySQL database set up.

## Installation

**Clone the project server and enter the project directory**

```
  git clone https://github.com/jasfoong/physical-100-encyclopedia-server.git

  cd physical-100-encyclopedia-server
```

**Install dependencies**

```
  npm install
```

**Set up environment variables**

Create a `.env` file in the root of the project:
```
  touch .env
```

Open the `.env` file and add your environment variables:
```
  PORT=your_port
  DB_HOST=your_database_host
  DB_DBNAME=your_database_name
  DB_USER=your_database_user
  DB_PASSWORD=your_database_password
```

**Initialize the database**

Run the database migrations to set up the schema:

```
  npm run migrate
```

Seed the database with initial data:
```
  npm run seed
```

**Start the server**

```
  npm start
```

**Access the API**

Once the server is running, you can access the API at `http://localhost:your_port`

With the server running, see instructions from the client repo on how to run the app: https://github.com/jasfoong/physical-100-encyclopedia-client