import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./components/Store";

const cache = new InMemoryCache();
const link = new HttpLink({
	uri: "http://localhost:4000/graphql"
});
const client = new ApolloClient({
	cache,
	link
});

client
	.query({
		query: gql`
			query getAllTasks {
				getTasks {
					title
					isCompleted
				}
			}
		`
	})
	.then(result => console.log(result));

ReactDOM.render(
	<ApolloProvider client={client}>
		<Provider store={configureStore()}>
			<App />
		</Provider>
	</ApolloProvider>,
	document.getElementById("root")
);
