import { useState } from "react";

export default function Title({ title, onUpdate, onDelete }) {
  const [newValue, setNewValue] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdate = () => {
    onUpdate(newValue);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <span>{title}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </li>
  );
}
