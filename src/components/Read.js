import React from "react";

const Read = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.fullName}</td>
      <td>{contact.phoneNumber}</td>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)} style={{backgroundColor:" rgb(4, 86, 137)" , padding:"4px 10px", color:"white",borderRadius:"10px"}}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)} style={{backgroundColor:" red" , padding:"4px 10px", color:"white",borderRadius:"10px"}}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Read;