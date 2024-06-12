import React from "react";
import { Node, Edge } from "reactflow";

type NodesPanelProps = {
  setElements: React.Dispatch<React.SetStateAction<(Node | Edge)[]>>;
};

const NodesPanel: React.FC<NodesPanelProps> = ({ setElements }) => {
  const addTextNode = () => {
    setElements((els) => [
      ...els,
      {
        id: `${els.length}`,
        type: "default",
        position: { x: 250, y: 5 * els.length * 50 },
        data: { label: `Text Node ${els.length}` },
      } as Node,
    ]);
  };

  return (
    <aside>
      <button onClick={addTextNode}>Add Text Node</button>
    </aside>
  );
};

export default NodesPanel;
