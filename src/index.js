import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import App from './App';
import { UserProvider } from './contexts/user.context';
import { CategoriesProvider } from './contexts/categories.context';
import { CartProvider } from './contexts/cart.context';

import './index.scss';

const client = new ApolloClient({
  uri: 'https://crwn-clothing.com/',
  fetchOptions: {
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  },
  // onError: ({ networkError, graphQLErrors }) => {
  //   console.log('graphQLErrors', graphQLErrors)
  //   console.log('networkError', networkError)
  // },
  onError: (e) => { console.log(e) },
  cache: new InMemoryCache(),
})

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <UserProvider>
          <CategoriesProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </CategoriesProvider>
        </UserProvider>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  rootElement
);
