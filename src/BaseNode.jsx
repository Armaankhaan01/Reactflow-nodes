import { Handle } from 'reactflow';

export const BaseNode = ({ id, data, label, handles, children, width = 200, height = 80 }) => {
  return (
    <div style={{ width, height, border: '1px solid black' }}>
      <div>
        <span>{label}</span>
      </div>
      {children}
      {handles?.map(({ type, position, idSuffix, style }, index) => (
        <Handle
          key={`${id}-${idSuffix}-${index}`}
          type={type}
          position={position}
          id={`${id}-${idSuffix}`}
          style={style}
        />
      ))}
    </div>
  );
};
