import React, { useState } from "react";
import { Node } from "reactflow";

type SettingsPanelProps = {
  node: Node;
  updateNodeText: (id: string, text: string) => void;
};

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  node,
  updateNodeText,
}) => {
  const [text, setText] = useState(node.data.label);

  return (
    <aside>
      <div>
        <label>Text:</label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={() => updateNodeText(node.id, text)}
        />
      </div>
    </aside>
  );
};

export default SettingsPanel;
