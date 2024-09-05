# GraphQL Products API - Next.js

This project is a simple Next.js application that provides a **GraphQL** API to fetch a list of products. The API can be tested using **Postman** or directly through the frontend.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing the GraphQL API](#testing-the-graphql-api)
  - [Using Postman](#using-postman)
  - [Using the Frontend](#using-the-frontend)
- [GraphQL Query](#graphql-query)
- [Technologies Used](#technologies-used)

## Installation

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository**:
   ```bash
   cd your-repo-name

Install the required dependencies:

npm install

Run the development server:

npm run dev

Open http://localhost:3000 to view the app in the browser.

Usage

The app provides a GraphQL endpoint at:

http://localhost:3000/api/graphql


Testing the GraphQL API

You can test the GraphQL API in two ways:

Using Postman
http://localhost:3000/api/graphql

In the body section, select raw and choose JSON format. Enter the following GraphQL query to get the list of products:

{
  "query": "{ products { id name price } }"
}



GraphQL Query
To fetch the list of products, use the following GraphQL query:
{
  products {
    id
    name
    price
  }
}



Technologies Used

Next.js: Framework for React with server-side rendering and static site generation.

Apollo Server: A GraphQL server library used to define the API.

GraphQL: Query language for APIs used to fetch products.

Apollo Client: A library used to fetch data from the GraphQL API on the frontend.

