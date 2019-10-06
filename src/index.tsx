import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink, Observable } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { HttpLink } from 'apollo-link-http';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import jwtDecode from 'jwt-decode';
import React from 'react';
import ReactDOM from 'react-dom';

import { getAccessToken, setAccessToken } from './accessToken';
import { App } from './App';
import './index.css';

const cache = new InMemoryCache({});

const requestLink = new ApolloLink(
	(operation, forward) =>
		new Observable((observer) => {
			let handle: any;
			Promise.resolve(operation)
				.then((operation) => {
					const accessToken = getAccessToken();
					operation.setContext({
						headers: {
							Authorization: accessToken ? `Bearer ${accessToken}` : ''
						}
					});
				})
				.then(() => {
					handle = forward(operation).subscribe({
						next: observer.next.bind(observer),
						error: observer.error.bind(observer),
						complete: observer.complete.bind(observer)
					});
				})
				.catch(observer.error.bind(observer));

			return () => {
				if (handle) handle.unsubscribe();
			};
		})
);

const client = new ApolloClient({
	link: ApolloLink.from([
		new TokenRefreshLink({
			accessTokenField: 'accessToken',
			isTokenValidOrUndefined: () => {
				const token = getAccessToken();

				if (!token) {
					return true;
				}

				try {
					const { exp } = jwtDecode(token);
					if (Date.now() >= exp * 1000) {
						return false;
					} else {
						return true;
					}
				} catch (error) {
					return false;
				}
			},
			fetchAccessToken: () => {
				return fetch('http://localhost:4000/refresh_token', {
					method: 'POST',
					credentials: 'include'
				});
			},
			handleFetch: (accessToken) => {
				setAccessToken(accessToken);
			},
			handleError: (err) => {
				// full control over handling token fetch Error
				console.warn('Your refresh token is invalid. Try to relogin');
				console.error(err);
			}
		}),
		onError(({ graphQLErrors, networkError }) => {
			console.log(graphQLErrors);
			console.log(networkError);
		}),
		requestLink,
		new HttpLink({
			uri: 'http://localhost:4000/graphql',
			credentials: 'include'
		})
	]),
	cache
});

const rootEl = document.getElementById('root');

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	rootEl
);
