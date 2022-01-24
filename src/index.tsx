import * as React from 'react';
import ReactDOM from 'react-dom';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import './index.css';

const client = new ApolloClient({
  uri: 'https://spacexdata.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
