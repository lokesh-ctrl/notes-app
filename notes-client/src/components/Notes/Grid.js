import React, {Component} from "react";
import _ from "lodash";
import Note from "./Note";
import "./Grid.css";

export default class Grid extends Component {
    state = {
        notes: this.props.notes
    };

    renderGrid = () => {
        const children = [];
        _.each(this.state.notes, item => {
            children.push(<Note note={item}/>);
        });
        return children;
    };

    render() {
        return <div className="grid-container">{this.renderGrid()}</div>;
    }
}
