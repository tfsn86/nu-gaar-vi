<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The web application makes it possible for users to input and monitor the amount of steps they have taken on a daily basis. The user will at a later stage also be able to see step count statistics and compete against friends and family. The purpose with this is to keep the user motivated staying active.

I have coded this web application to practice my skills making full stack web applications.

The app can be accessed at: https://nugårvi.dk

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

* [React.js](https://reactjs.org/)
* [Express.js](https://expressjs.com/)
* [Bootstrap](https://getbootstrap.com)
* [PostgreSQL](https://www.postgresql.org/)
* [JSON Web Tokens](https://jwt.io/)
* [SendGrid](https://sendgrid.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

* PostgreSQL
Install PostgreSQL on your local machine from https://www.postgresql.org/

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/tfsn86/nu-gaar-vi
   ```
2. Install server NPM packages from the root directory
   ```sh
   npm install
   ```
3. Install client NPM packages
   ```sh
   cd client && npm install
   ```
4. Create database and tables
   * Create database
   ```sql
   CREATE DATABASE stepcount;
   ```
   Create step count table
   ```sql
   CREATE TABLE stepstable (
    step_id SERIAL PRIMARY KEY,
    user_id uuid REFERENCES users(user_id),
    steps integer NOT NULL,
    date_count date);
   ```
   Create users table
   ```sql
   CREATE TABLE users (
    user_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_name character varying(255) NOT NULL,
    user_email character varying(255) NOT NULL UNIQUE,
    user_password character varying(255) NOT NULL,
    pw_resetlink character varying(255));
   ```

5. Enter your local config variables in `.env`
PostgreSQL
   * PG_USER
   * PG_PASSWORD
   * PG_HOST
   * PG_PORT
   * PG_DATABASE
   
JSON Web token secret

SendGrid API Key

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

Coming features will soon be added here.

- [] Feature 1
- [] Feature 2
- [] Feature 3
    - [] Nested Feature

<p align="right">(<a href="#top">back to top</a>)</p>
