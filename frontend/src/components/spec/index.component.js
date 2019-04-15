import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import { connect } from "react-redux";
import {
  getSpecs,
  isFetchingSpec,
  fetchSpecError,
  deleteSpecError
} from "../../actions/specActions";

class SpecIndex extends Component {
  componentDidMount() {
    axios
      .get("http://localhost:4000/api/specs")
      .then(response => {
        this.props.dispatch(getSpecs(response.data));
        this.props.dispatch(isFetchingSpec(false));
      })
      .catch(err => this.props.dispatch(fetchSpecError(err)));
  }

  handleDelete = id => {
    const specs = this.props.specs.filter(spec => spec._id !== id);
    axios
      .delete("http://localhost:4000/api/specs/" + id)
      .then(res => this.props.dispatch(getSpecs(specs)))
      .catch(err => this.props.dispatch(deleteSpecError(err)));
  };

  render() {
    return (
      <div>
        <h3 align="center">Spec List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Spec Name</th>
              <th>Image</th>
              <th>Edit Spec</th>
              <th>Remove Spec</th>
            </tr>
          </thead>
          <tbody>
            {this.props.specs.map(spec => {
              return (
                <TableRow
                  spec={spec}
                  key={spec._id}
                  onDelete={this.handleDelete}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { specs: state.specReducer.specs };
};

export default connect(mapStateToProps)(SpecIndex);
