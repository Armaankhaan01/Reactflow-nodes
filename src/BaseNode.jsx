import { Typography } from "antd";
import { Handle, Position } from "reactflow";

export const BaseNode = ({
  id,
  // data,
  label,
  handles,
  children,
  width = 200,
  height = "auto",
}) => {
  return (
    <div
      style={{
        width,
        height,
        border: "1px solid black",
        backgroundColor: "rgba(4, 4, 4, 0.6)",
      }}
      className="p-2.5 pb-3.5"
    >
      <Typography className="pb-2.5 w-full text-center text-lg">
        {label}
      </Typography>

      <div className="flex flex-col gap-2">{children}</div>

      {handles?.map(({ type, position, idSuffix, style }, index) => (
        <Handle
          key={`${id}-${idSuffix}-${index}`}
          type={type}
          position={Position[position]}
          id={`${id}-${idSuffix}`}
          style={style}
        />
      ))}
    </div>
  );
};
