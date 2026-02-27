import React from "react";
import "./tree.css";
const TreeNode = ({ node, treeData, setTreeData }) => {

  // Expand / Collapse
  const toggleNode = async () => {
    if (!node.isExpanded) {
      await loadChildren();
    }
    node.isExpanded = !node.isExpanded;
    setTreeData([...treeData]);
  };

  // Lazy Loading
  const loadChildren = async () => {
    if (!node.hasChildren || node.children.length > 0) return;

    await new Promise((res) => setTimeout(res, 500));

    node.children = [
      {
        id: Date.now(),
        name: "Lazy Child",
        children: [],
        isExpanded: false,
      },
    ];
  };

  // Add Node
  const addNode = () => {
    const name = prompt("Enter node name");
    if (!name) return;

    const newNode = {
      id: Date.now(),
      name,
      children: [],
      isExpanded: false,
    };

    node.children = node.children || [];
    node.children.push(newNode);

    setTreeData([...treeData]);
  };

  // Delete Node
  const deleteNode = (id, nodes) => {
    return nodes.filter((n) => {
      if (n.id === id) return false;
      if (n.children) {
        n.children = deleteNode(id, n.children);
      }
      return true;
    });
  };

  const handleDelete = () => {
    if (!window.confirm("Delete this node?")) return;

    const updated = deleteNode(node.id, treeData);
    setTreeData(updated);
  };

  // Edit Node
  const editNode = () => {
    const newName = prompt("Edit name", node.name);
    if (newName) {
      node.name = newName;
      setTreeData([...treeData]);
    }
  };

 return (
  <div>
    <div className="tree-node">
      
      {/* Circle */}
      <div className="node-circle" onClick={toggleNode}>
        {node.name.charAt(0)}
      </div>

      {/* Card */}
      <div className="node-content">
        <span onDoubleClick={editNode}>
          Level {node.name}
        </span>

        <button onClick={addNode}>+</button>
        <button onClick={handleDelete}>❌</button>
      </div>

      {/* Vertical Line */}
      {node.children && node.children.length > 0 && (
        <div className="node-line"></div>
      )}
    </div>

    {/* Children */}
    {node.isExpanded && node.children && (
      <div className="children">
        {node.children.map((child) => (
          <TreeNode
            key={child.id}
            node={child}
            treeData={treeData}
            setTreeData={setTreeData}
          />
        ))}
      </div>
    )}
  </div>
);
};

export default TreeNode;