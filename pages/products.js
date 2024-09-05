
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useEffect, useState } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const client = new ApolloClient({
        uri: '/api/graphql',
        cache: new InMemoryCache(),
      });

      const { data } = await client.query({
        query: gql`
          query GetProducts {
            products {
              id
              name
              description
              price
            }
          }
        `,
      });

      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} {product.description}- ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
