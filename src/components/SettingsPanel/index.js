import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const SettingsPanel = ({ node, updateNodeText, }) => {
    const [text, setText] = useState(node.data.label);
    return (_jsx("aside", { children: _jsxs("div", { children: [_jsx("label", { children: "Text:" }), _jsx("input", { value: text, onChange: (e) => setText(e.target.value), onBlur: () => updateNodeText(node.id, text) })] }) }));
};
export default SettingsPanel;
