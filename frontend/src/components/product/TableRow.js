import React from "react";
import {Link} from "react-router-dom";

const TableRow = props => {

  const deleteItem = () => {
    props.onDelete(props.product._id)
  };

  return (
    <tr>
      <td>
        <img src={props.product.image} alt='not found' width={40} height={40}/>
      </td>
      <td>{props.product.productName}</td>
      <td>{props.product.price}</td>
      <td>
        {props.product.visibility ? <p>&#10004;</p> : <p>&#10006;</p>}
      </td>
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
