import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.css';


export const MyPrograms = ({ text, updatingInInput, deleteClass }) => {
  
  return (
    <div className="list-items">
      <p className="list-items-text">{text}</p>
      <div className="list-item-actions">
      <MdEdit className="list-item-icon" onClick={updatingInInput} />
      <MdDelete className="list-item-icon" onClick={deleteClass} />
      </div>
    </div>
  );
}

