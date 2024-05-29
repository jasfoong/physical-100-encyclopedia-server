# Project Title

The Physical 100 Encyclopedia

## Overview

The Physical 100 Encyclopedia is your one-stop-shop for everything about the South Korean reality competition series on Netflix — Physical 100.

### Problem

The only way to find any information about Physical 100 contestants are to scroll through long web articles, and information is often unavailable, sparse, or requires reading long paragraphs. The Physical 100 Encyclopedia is meant to package data from the various articles about the show in an easy-to-digest, user-friendly web app. Users will be able to reference challenges and contestants from all seasons through this web app. Users will also be able to edit information on the app, much like other online encyclopedias, encouraging a culture of open source knowledge.

### User Profile

Physical 100 fans:
- looking for information about a contestant/challenge/team 
- who want to contribute information about a contestant/challenge/team 

### Features

- As a user, I want to view all contestants with their photo, name, and career 
- As a user, I want to view all the challenges with their titles and season
- As a user, I want to edit any information about contestants or challenges

## Implementation

### Tech Stack

- React
- MySQL
- Express
- Client Libraries:
    - react
    - react-router-dom
    - axios
- Server Libraries:
    - knex
    - express

### APIs

- No external APIs will be used for the first sprint

### Sitemap

- Home page (list of contestants)
- Contestant details (single contestant)
- List of challenges
- Challenge details (single challenge)
- Edit details

### Mockups

![](/public/mockups/home-contestants.png)

![](/public/mockups/contestant-details.png)

![](/public/mockups/challenges.png)

![](/public/mockups/challenge-details.png)

![](/public/mockups/edit.png)

### Data

table: contestants
- id (int)
- name (varchar)
- season (int)
- career (varchar)
- photo (varchar)

table: challenges
- id (int)
- name (varchar)
- season (int)
- team (boolean)
- photo (varchar)

### Endpoints

**GET /contestants**

- Get contestants from all seasons

Response:
```
[
    {
        "id": 1,
        "name": "Amotti",
        "season": 2,
        "career": "Crossfitter",
        "photo": "/images/contestant-s2-amotti.jpg",
        "description": "Amotti, whose real name is Kim Jae Hong, is the winner of season 2. He is a world-renowned bodybuilder and CrossFit athlete. He is 31-years-old (born on November 9, 1992)."
    },
    ...
]
```

**GET /contestants/:id**

- Get details for a single contestant

Response:
```
[
    {
        "id": 1,
        "name": "Amotti",
        "season": 2,
        "career": "Crossfitter",
        "photo": "/images/contestant-s2-amotti.jpg",
        "description": "Amotti, whose real name is Kim Jae Hong, is the winner of season 2. He is a world-renowned bodybuilder and CrossFit athlete. He is 31-years-old (born on November 9, 1992)."
    },
]
```

**GET /challenges**

- Get challenges from all seasons

Response:
```
[
    {
        "id": 1,
        "name": "Infinite Squats",
        "season": 2,
        "team": false,
        "photo": "/images/challenge/s2/infinite-squats.jpg",
        "description": "The second round of the final quest in season 2, contestants must complete as many rounds of squats as possible. Weight will increase each round. Contestants must execute a squat each time the beeper goes off, and contestants must complete each squat before the next beep."
    },
    ...
]
```

**GET /challenges/:id**

- Get details of a single challenge

Response:
```
[
    {
        "id": 1,
        "name": "Infinite Squats",
        "season": 2,
        "team": false,
        "photo": "/images/challenge/s2/infinite-squats.jpg",
        "description": "The second round of the final quest in season 2, contestants must complete as many rounds of squats as possible. Weight will increase each round. Contestants must execute a squat each time the beeper goes off, and contestants must complete each squat before the next beep."
    },
]
```

**PATCH /contestants/:id**

- Edit the name / description of a contestant

Parameters:
- name
- description

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

**PATCH /challenges/:id**

- Edit the name / description of a challenge

Parameters:
- name
- description

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

### Auth

This sprint does not include any login functionality.

## Roadmap

- Create client
    - react project with routes and boilerplate pages

- Create server
    - express project with routing

- Create migrations
- Create table for contestants 
- Create table for challenges 

- Create seeds with sample contestant data
- Create seeds with sample challenge data

- Connect client and server projects with remote repo so all commits will be recorded

- Feature: Display all contestants
    - Create contestants page
    - Create GET /contestants endpoint

- Feature: Display single contestant
    - Create contestant details page
    - Create GET /contestants/:id endpoint

- Feature: Display all challenges
    - Create challenges page
    - Create GET /challenges endpoint

- Feature: Display single challenge
    - Create challenge details page
    - Create GET /challenges/:id endpoint

- Feature: Edit contestant details
    - Create edit view for contestant details page
    - Create PATCH /contestants/:id endpoint

- Feature: Edit challenge details
    - Add edit view to challenge details page
    - Create PATCH /challenges/:id endpoint

- Testing & bug fixes

- Practice presentation / demo day


## Nice-to-haves

- Search filter to view the details of a given contestant by typing in a contestant's name/career
- Log in functionality to save username of user who edited content
- Users win badges when they reach contribution milestones
- Map to add pins for each contestant's hometown
- Korean language version of website (translated)