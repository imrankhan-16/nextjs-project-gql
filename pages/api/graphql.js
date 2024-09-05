import { ApolloServer, gql } from 'apollo-server-micro';
import { describe } from 'node:test';

const products = [
  { id: 1, name: 'Product 1', description: 'A product description is a form of marketing copy used to describe and explain the benefits of your product.s all the information and details of your product on your ecommerce site.', price: 29.99 },
  { id: 2, name: 'Product 2', description: 'A product description is a form of marketing copy used to describe and explain the benefits of your product.s all the information and details of your product on your ecommerce site.', price: 39.99 },
  { id: 3, name: 'Product 3', description: 'A product description is a form of marketing copy used to describe and explain the benefits of your product.s all the information and details of your product on your ecommerce site.', price: 49.99 },
  { id: 4, name: 'Product 4', description: 'A product description is a form of marketing copy used to describe and explain the benefits of your product.s all the information and details of your product on your ecommerce site.', price: 29.99 },
  { id: 5, name: 'Product 5', description: 'A product description is a form of marketing copy used to describe and explain the benefits of your product.s all the information and details of your product on your ecommerce site.', price: 39.99 },
  { id: 6, name: 'Product 6', description: 'A product description is a form of marketing copy used to describe and explain the benefits of your product.s all the information and details of your product on your ecommerce site.', price: 49.99 },

];

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
  }

  type Query {
    products: [Product!]!
  }
`;

const resolvers = {
  Query: {
    products: () => products,
  },
};


const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await startServer;
  await apolloServer.createHandler({ path: '/api/graphql' })(req, res);
}
