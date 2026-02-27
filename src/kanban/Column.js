import React from "react";
import Card from "./Card";

const Column = ({ title, columnKey, data, setData }) => {

  const addCard = () => {
    const text = prompt("Enter task");
    if (!text) return;

    const newCard = {
      id: Date.now().toString(),
      title: text
    };

    setData({
      ...data,
      [columnKey]: [...data[columnKey], newCard]
    });
  };

  const deleteCard = (id) => {
    const updated = data[columnKey].filter(card => card.id !== id);

    setData({
      ...data,
      [columnKey]: updated
    });
  };

 return (
  <div className="column">
    
    {/* Header */}
    <div className={`column-header ${columnKey}`}>
      <span>{title}</span>
      <span>{data[columnKey].length}</span>
    </div>

    {/* Cards */}
    {data[columnKey].map(card => (
      <Card
        key={card.id}
        card={card}
        columnKey={columnKey}
        data={data}
        setData={setData}
        deleteCard={deleteCard}
      />
    ))}

    {/* Add Button */}
    <button className="add-btn" onClick={addCard}>
      + Add Card
    </button>

  </div>
);
};

export default Column;