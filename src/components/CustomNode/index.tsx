import { Handle, Position } from "reactflow";

const CustomNode = ({ data }: { data: any }) => {
  return (
    <div>
      <div>{data.label}</div>
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>
  );
};

export default CustomNode;
