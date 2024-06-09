
# The Physical 100 Encyclopedia

Your one-stop-shop for everything about the South Korean reality competition series on Netflix — Physical 100.

This is the server for the web app, which provides an API for getting and editing contestants and challenges on the app.

## Overview

The web app is an immersion into the world of all things Physical 100. Users can reference all contestants and challenges in the show. Users can also edit articles about any contestant or challenge, encouraging a culture of open source knowledge.

## Features

- **REST API**: Provides endpoints for managing contestants, challenges, and stats
- **Database Integration**: Persists contestant and challenge data through a mySQL database

## Tech Stack

**Client:** React, Axios

**Server:** Express, Knex, MySQL

## API Endpoints

**GET /contestants**

- Get a list of all contestants

Response:
```
[
    {
        "id": 1,
        "name": "Amotti",
        "season": 2,
        "career": "Crossfitter",
        "photo": "/images/contestants/s2-amotti.png",
        "description": "Amotti, whose real name is Kim Jae Hong, is the winner of season 2. He is a world-renowned bodybuilder and CrossFit athlete. He is 31-years-old (born on November 9, 1992)."
    },
    ...
]
```

**GET /contestants/:id**

- Get details of a single contestant by ID

Response:
```
[
    {
        "id": 1,
        "name": "Amotti",
        "season": 2,
        "career": "Crossfitter",
        "photo": "/images/contestants/s2-amotti.png",
        "description": "Amotti, whose real name is Kim Jae Hong, is the winner of season 2. He is a world-renowned bodybuilder and CrossFit athlete. He is 31-years-old (born on November 9, 1992)."
    },
]
```

**GET /challenges**

- Get a list of all challenges

Response:
```
[
    {
        "id": 1,
        "name": "Infinite Squats",
        "season": 2,
        "team": false,
        "photo": "/images/challenges/s2-infinite-squats.jpg",
        "description": "The second round of the final quest in season 2, contestants must complete as many rounds of squats as possible. Weight will increase each round. Contestants must execute a squat each time the beeper goes off, and contestants must complete each squat before the next beep."
    },
    ...
]
```

**GET /challenges/:id**

- Get details of a single challenge by ID

Response:
```
[
    {
        "id": 1,
        "name": "Infinite Squats",
        "season": 2,
        "team": false,
        "photo": "/images/challenges/s2-infinite-squats.jpg",
        "description": "The second round of the final quest in season 2, contestants must complete as many rounds of squats as possible. Weight will increase each round. Contestants must execute a squat each time the beeper goes off, and contestants must complete each squat before the next beep."
    },
]
```

**PUT /contestants/:id**

- Edit the name / description of a contestant

Parameters:
- name
- description

Example response:
```
[
    {
        "id": 1,
        "name": "Amotti",
        "season": 2,
        "career": "Crossfitter",
        "photo": "/images/contestant-s2-amotti.jpg",
        "description": "Amotti, whose real name is Kim Jae Hong, is the winner of season 2. He is a world-renowned bodybuilder and CrossFit athlete. He is 32-years-old (born on November 9, 1991)."
    },
]
```

**PUT /challenges/:id**

- Edit the name / description of a challenge

Parameters:
- name
- description

Example response:
```
[
    {
        "id": 1,
        "name": "Infinite Squats",
        "season": 2,
        "team": false,
        "photo": "/images/challenge/s2/infinite-squats.jpg",
        "description": "The second round of the final quest in season 2, contestants must complete as many rounds of squats as possible. Weight will increase each round. Contestants must execute a squat each time the beeper goes off, and contestants must complete each squat before the next beep. The challenge ends once a contestant fails to complete a squat in time. The remaining two contestants move on to the next round."
    },
]
```

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