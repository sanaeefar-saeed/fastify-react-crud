import React, {Component} from "react";
import axios from "axios";
import TableRow from "./TableRow";

export default class CategoryIndex extends Component {
  state = {
    categories: [],
    isFetchingData: true,
    error: false
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/categories")
      .then(response => {
        this.setState({
          categories: response.data,
          isFetchingData: false
        });
      })
      .catch(error => {
        this.setState({error});
        console.log(error);
      })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    axios
      .get("http://localhost:4000/api/categories")
      .then(response => {
        this.setState({
          categories: response.data,
          isFetchingData: false
        });
      })
      .catch(error => {
        this.setState({error});
        console.log(error);
      })
  }

  handleDelete = id => {
    const categories = this.state.categories.filter(category => category._id !== id);
    axios
      .delete("http://localhost:4000/api/categories/" + id)
      .catch(err => console.log(err));
    this.setState({categories})
  };

  render() {
    return (
      <div>
        <h3 align="center">Category List</h3>
        <table className="table table-striped" style={{marginTop: 20}}>
          <thead>
          <tr>
            <th>ID</th>
            <th>Category Name</th>
          </tr>
          </thead>
          <tbody>
          {this.state.categories.map(category => {
            return <TableRow
              category={category}
              key={category._id}
              onDelete={this.handleDelete}
            />
          })}
          </tbody>
        </table>
      </div>
    )
  }
}
