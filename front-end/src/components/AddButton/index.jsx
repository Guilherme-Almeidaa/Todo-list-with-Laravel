import React from "react";
import AddIcon from "@mui/icons-material/Add";
import "./styles.css";

function AddButton({ hide, onClick, edit }) {
  if (hide) return null;
  return (
    <button
      onClick={onClick}
      className={`btn-add btn ${edit ? "btn-success" : "btn-primary"}`}
    >
      {edit ? "Confirmar" : <AddIcon></AddIcon>}
    </button>
  );
}

export default AddButton;
