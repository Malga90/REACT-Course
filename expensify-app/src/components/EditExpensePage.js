import React from "react";

const EditExpensePage = props => {
  console.log(props);
  return <div>Edit expense with {props.match.params.id}</div>;
};

export default EditExpensePage;
