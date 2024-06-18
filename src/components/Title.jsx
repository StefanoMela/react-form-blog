import { useState } from "react";

import './buttons.css';

export default function Title({ title, onUpdate, onDelete }) {
  const [newValue, setNewValue] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = () => {
    onUpdate(newValue);
    setIsEditing(false);
  };

  return (
    <header>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
          <div className="btn-container">
          <button className="update-button" onClick={handleUpdate}>Update</button>
          <button className="cancel-button" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h3>{title}</h3>
          <div className="btn-container">
          <button className="edit-button" onClick={() => setIsEditing(true)}>Edit</button>
          <button className="delete-button" onClick={onDelete}>Delete</button>
          </div>
        </>
      )}
    </header>
  );
}
