This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started


Here’s a README file for your Next.js project with a GraphQL endpoint that returns products:

GraphQL Products API - Next.js
This project is a simple Next.js application that provides a GraphQL API to fetch a list of products. The API can be tested using Postman or directly through the frontend.

Table of Contents
Installation
Usage
Testing the GraphQL API
Using Postman
Using the Frontend
GraphQL Query
Technologies Used

Installation

Follow these steps to get the project up and running on your local machine:

Clone the repository:

git clone https://github.com/your-personal-username/your-repo-name.git
cd your-repo-name

npm install
npm run dev

Open http://localhost:3000 to view the app in the browser.

Usage
The app provides a GraphQL endpoint at;
http://localhost:3000/api/graphql


Testing the GraphQL API
Using Postman
Open Postman and create a POST request to:
http://localhost:3000/api/graphql

In the body section, select raw and choose JSON format. Enter the following GraphQL query to get the list of products:
{
  "query": "{ products { id name price } }"
}


