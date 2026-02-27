import React, { useState } from "react";
import TreeNode from "./TreeNode";

const TreeView = ({ data }) => {
  const [treeData, setTreeData] = useState(data);

  return (
    <div>
      {treeData.map((node) => (
        <TreeNode
          key={node.id}
          node={node}
          treeData={treeData}
          setTreeData={setTreeData}
        />
      ))}
    </div>
  );
};

export default TreeView;