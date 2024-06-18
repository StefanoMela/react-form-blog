import { useState } from "react";

export default function({title, onUpdate, onDelete}) {

    const [newValue, setnewValue] = useState(title);

    return (
        <li>
            <input
                type="text"
                value={newValue}
                onChange={e => setnewValue(e.target.value)}
            />
            <button
                onClick={() => onUpdate(newValue)}
            >
                Update
            </button>
            <button
                onClick={onDelete}
            >
                Delete
            </button>
        </li>
    )
}