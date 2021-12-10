import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import "./styles.css";

function ButtonEdit({ onClick }) {
  return <EditIcon className="icon-btn-edit" onClick={onClick}></EditIcon>;
}

export default ButtonEdit;
