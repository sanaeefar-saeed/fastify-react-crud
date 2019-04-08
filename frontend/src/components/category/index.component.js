import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";

export default class categoryIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { category: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/categories")
      .then(response => {
        this.setState({ category: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  tabRow() {
    return this.state.category.map(function(object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align="center">Category List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Category Name</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
