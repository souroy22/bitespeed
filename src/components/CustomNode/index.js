import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Handle, Position } from "reactflow";
const CustomNode = ({ data }) => {
    return (_jsxs("div", { children: [_jsx("div", { children: data.label }), _jsx(Handle, { type: "source", position: Position.Bottom }), _jsx(Handle, { type: "target", position: Position.Top })] }));
};
export default CustomNode;
