import React, { useState } from "react";

const Card = ({ card, columnKey, data, setData, deleteCard }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(card.title);

  const handleEdit = () => {
    setEditing(true);
  };

  const saveEdit = () => {
    const updated = data[columnKey].map(c =>
      c.id === card.id ? { ...c, title: text } : c
    );

    setData({
      ...data,
      [columnKey]: updated
    });

    setEditing(false);
  };

  // Drag Start
  const handleDragStart = (e) => {
    e.dataTransfer.setData("cardId", card.id);
    e.dataTransfer.setData("fromColumn", columnKey);
  };

  return (
  <div
    className="card"
    draggable
    onDragStart={handleDragStart}
  >
    {editing ? (
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={saveEdit}
        autoFocus
      />
    ) : (
      <span onDoubleClick={handleEdit}>{card.title}</span>
    )}

    <button className="delete-btn" onClick={() => deleteCard(card.id)}>
      🗑
    </button>
  </div>
);
};

export default Card;