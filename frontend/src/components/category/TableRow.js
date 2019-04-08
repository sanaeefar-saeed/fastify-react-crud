import React from "react";
import {Link} from "react-router-dom";

const TableRow = props => {

  const deleteItem = () => {
    props.onDelete(props.category._id)
  };

  return (
    <tr>
      <td>{props.category.parentId}</td>
      <td>{props.category.categoryName}</td>
      <td>
        <Link to={"/category/edit/" + props.category._id} className="btn btn-primary">
          Edit
        </Link>
      </td>
      <td>
        <button onClick={deleteItem} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TableRow
