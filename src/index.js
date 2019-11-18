import ReactDOM from "react-dom";
import React  from 'react';
import "./index.css";
import routes from "./routes";
import * as serviceWorker from "./serviceWorker";
import 'bootstrap/dist/css/bootstrap.css';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'


const local = 'http://localhost:4000/graphql';
// const live = process.env.REACT_GRAPHQL_URL;

const client = new ApolloClient({
    uri: local,
    fetchOptions: {
        credentials: 'include'
    },
    request: operation => {
        const token = localStorage.getItem('token');
        operation.setContext({
            headers: {
                authorization: token
            }
        })
    },
    onError: ({ networkError }) => {
        if (networkError) {
            console.log('Network Error', networkError);
        }
        console.log('We connected');

    }
})

ReactDOM.render(<ApolloProvider client={client}>{routes}</ApolloProvider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
