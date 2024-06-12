import { jsx as _jsx } from "react/jsx-runtime";
const NodesPanel = ({ setElements }) => {
    const addTextNode = () => {
        setElements((els) => [
            ...els,
            {
                id: `${els.length}`,
                type: "default",
                position: { x: 250, y: 5 * els.length * 50 },
                data: { label: `Text Node ${els.length}` },
            },
        ]);
    };
    return (_jsx("aside", { children: _jsx("button", { onClick: addTextNode, children: "Add Text Node" }) }));
};
export default NodesPanel;
