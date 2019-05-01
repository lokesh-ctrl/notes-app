import React from "react";
import Grid from "./Grid";
import {Query} from "react-apollo";
import gql from "graphql-tag";

export default function GridContainer() {
    return (
        <Query
            query={gql`
				query getAllNotes {
					getNotes {
						title
						description
						isTask
					}
				}
			`}
        >
            {({loading, error, data}) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;
                return <Grid notes={data.getNotes}/>;
            }}
        </Query>
    );
}
