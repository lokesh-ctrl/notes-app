import React, { Component } from "react";
import Grid from "./Grid";

export default class GridContainer extends Component {
	render() {
		const notes = [
			{
				title: "Task1",
				description: "1 desc",
				isTask: true
			},
			{
				title: "Task2",
				description: "2 desc",
				isTask: false
			},
			{
				title: "Task3",
				description: "3 desc",
				isTask: true
			},
			{
				title: "Task4",
				description: "4 desc",
				isTask: false
			}
		];

		return <Grid notes={notes} />;
	}
}
