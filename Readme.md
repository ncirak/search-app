# Search App

This is a simple search app that allows users to search for specific items within a given dataset. The app is built using [React](https://reactjs.org/) and [Spring Boot](https://spring.io/projects/spring-boot), and it utilizes [Postgresql](https://www.postgresql.org) for efficient search functionality.

## Features

- Simple User-friendly interface
- Real-time search results
- Create new companies


## How to Run

1. Clone the repository
2. Set Up Environment Variables
   Create a .env file in the root directory of your project and add the following variables:

``` .env

POSTGRES_USER=your_postgres_user
POSTGRES_PASSWORD=your_postgres_password
POSTGRES_DB=your_postgres_database_name
POSTGRES_HOST=your_postgres_host # add as postgres to run via Docker
POSTGRES_PORT=your_postgres_port 
```

3. Run the following command to start the app:

``` bash
docker-compose up --build
```

4. Visit `http://localhost:3000` to view the app.
    - Main Page: `http://localhost:3000` Search for companies
    - Create Company: `http://localhost:3000/create` Create a new company



## In Progress Features
[ ] - Faster search results using index on the database 
[ ] - Pagination for search results
[ ] - Add more data to the dataset
[ ] - For medium to large datasets, implement a caching mechanism to improve search performance



