import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import ReactFlow, { addEdge, Background, Controls, ReactFlowProvider, } from "reactflow";
import "reactflow/dist/style.css";
import NodesPanel from "./components/NodesPanel";
import SettingsPanel from "./components/SettingsPanel";
const initialElements = [
    { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
    { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const App = () => {
    const [elements, setElements] = useState(initialElements);
    const [selectedElement, setSelectedElement] = useState(null);
    const onElementsRemove = (elementsToRemove) => setElements((els) => els.filter((el) => !elementsToRemove.includes(el)));
    const onConnect = (params) => setElements((els) => addEdge(params, els));
    const onLoad = (reactFlowInstance) => {
        reactFlowInstance.fitView();
    };
    const onElementClick = (_, element) => {
        setSelectedElement(element);
    };
    const updateNodeText = (id, text) => {
        setElements((els) => els.map((el) => el.id === id ? { ...el, data: { ...el.data, label: text } } : el));
    };
    return (_jsxs("div", { style: { display: "flex", height: "100vh" }, children: [_jsx(NodesPanel, { setElements: setElements }), _jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column" }, children: [_jsx(ReactFlowProvider, { children: _jsxs(ReactFlow, { elements: elements, onElementsRemove: onElementsRemove, onConnect: onConnect, onLoad: onLoad, onElementClick: onElementClick, deleteKeyCode: null, children: [_jsx(Background, {}), _jsx(Controls, {})] }) }), _jsx("button", { onClick: () => {
                            const emptyNodes = elements.filter((el) => "type" in el && el.type === "default" && !el.targetPosition);
                            if (emptyNodes.length > 1) {
                                alert("Error: More than one node has empty target handles.");
                            }
                            else {
                                alert("Flow saved successfully!");
                            }
                        }, children: "Save Flow" })] }), selectedElement && selectedElement.type === "default" && (_jsx(SettingsPanel, { node: selectedElement, updateNodeText: updateNodeText }))] }));
};
export default App;
