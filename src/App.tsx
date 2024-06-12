import React, { useState } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  ReactFlowProvider,
  Connection,
  Edge,
  Node,
  ReactFlowInstance,
} from "reactflow";
import "reactflow/dist/style.css";
import NodesPanel from "./components/NodesPanel";
import SettingsPanel from "./components/SettingsPanel";

type Elements = (Node | Edge)[];

const initialElements: Elements = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];

const App: React.FC = () => {
  const [elements, setElements] = useState<Elements>(initialElements);
  const [selectedElement, setSelectedElement] = useState<Node | null>(null);

  const onElementsRemove = (elementsToRemove: Elements) =>
    setElements((els) => els.filter((el) => !elementsToRemove.includes(el)));

  const onConnect = (params: Edge | Connection) =>
    setElements((els: any) => addEdge(params, els));

  const onLoad = (reactFlowInstance: any) => {
    reactFlowInstance.fitView();
  };

  const onElementClick = (_: React.MouseEvent, element: Node) => {
    setSelectedElement(element);
  };

  const updateNodeText = (id: string, text: string) => {
    setElements((els) =>
      els.map((el) =>
        el.id === id ? { ...el, data: { ...el.data, label: text } } : el
      )
    );
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <NodesPanel setElements={setElements} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <ReactFlowProvider>
          <ReactFlow
            elements={elements}
            onElementsRemove={onElementsRemove}
            onConnect={onConnect}
            onLoad={onLoad}
            onElementClick={onElementClick}
            deleteKeyCode={null} /* 'delete'-key */
          >
            <Background />
            <Controls />
          </ReactFlow>
        </ReactFlowProvider>
        <button
          onClick={() => {
            const emptyNodes = elements.filter(
              (el: any) =>
                "type" in el && el.type === "default" && !el.targetPosition
            );
            if (emptyNodes.length > 1) {
              alert("Error: More than one node has empty target handles.");
            } else {
              alert("Flow saved successfully!");
            }
          }}
        >
          Save Flow
        </button>
      </div>
      {selectedElement && selectedElement.type === "default" && (
        <SettingsPanel node={selectedElement} updateNodeText={updateNodeText} />
      )}
    </div>
  );
};

export default App;
