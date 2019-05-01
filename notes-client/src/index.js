import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
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

ReactDOM.render(
	<ApolloProvider client={client}>
		<Provider store={configureStore()}>
			<App />
		</Provider>
	</ApolloProvider>,
	document.getElementById("root")
);
