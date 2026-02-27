import React, { useState } from "react";
import Column from "./Column";
import initialData from "./data";
import "./kanban.css";

const KanbanBoard = () => {
  const [data, setData] = useState(initialData);

  return (
    <div className="board">
      <Column title="Todo" columnKey="todo" data={data} setData={setData} />
      <Column title="In Progress" columnKey="inProgress" data={data} setData={setData} />
      <Column title="Done" columnKey="done" data={data} setData={setData} />
    </div>
  );
};

export default KanbanBoard;