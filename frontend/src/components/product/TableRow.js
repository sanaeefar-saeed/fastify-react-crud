import React from "react";
import {Link} from "react-router-dom";

const TableRow = props => {

  const deleteItem = () => {
    props.onDelete(props.product._id)
  };

  return (
    <tr>
      <td>{props.product.productId}</td>
      <td>{props.product.productName}</td>
      <td>
        <Link to={"/product/edit/" + props.product._id} className="btn btn-primary">
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
