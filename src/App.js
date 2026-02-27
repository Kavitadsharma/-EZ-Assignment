import React, { useState } from "react";
import TreeView from "./components/TreeView";
import KanbanBoard from "./kanban/KanbanBoard";
import treeData from "./data/treeData";
import "./app.css";

function App() {
  const [view, setView] = useState(null);
  const [theme, setTheme] = useState("light");

  // Landing Page
 if (!view) {
  return (
    <div className={`landing ${theme}`}>

      {/* ✅ Theme Toggle Button (TOP RIGHT) */}
      <button
        className="theme-toggle"
        onClick={() =>
          setTheme(theme === "light" ? "dark" : "light")
        }
      >
        {theme === "light" ? "🌙 Dark" : "☀ Light"}
      </button>

      <div className="card">
  <div className="content">
    <h1>Assignment UI</h1>

    <div className="btn-group">
      <button onClick={() => setView("tree")}>
        🌳 Tree View
      </button>

      <button onClick={() => setView("kanban")}>
        📋 Kanban Board
      </button>
    </div>
  </div>
</div>
    </div>
  );
}

  // Tree View
 if (view === "tree") {
  return (
    <div className={`tree-page ${theme}`}>
      <button className="back-btn" onClick={() => setView(null)}>
        ⬅ Back
      </button>

      <TreeView data={treeData} />
    </div>
  );
}

  // Kanban View
  return (
  <div className={`kanban-page ${theme}`}>
    <button className="back-btn" onClick={() => setView(null)}>
      ⬅ Back
    </button>

    <KanbanBoard theme={theme} />
  </div>
);
}

export default App;