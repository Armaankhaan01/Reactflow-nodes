import { useState } from "react";
import { Handle, Position } from "reactflow";
import { BaseNode } from "../BaseNode";

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || "add");
  const [inputA, setInputA] = useState(data?.inputA || 0);
  const [inputB, setInputB] = useState(data?.inputB || 0);
  const [result, setResult] = useState(0);

  const calculateResult = () => {
    let res = 0;
    switch (operation) {
      case "add":
        res = parseFloat(inputA) + parseFloat(inputB);
        break;
      case "subtract":
        res = parseFloat(inputA) - parseFloat(inputB);
        break;
      case "multiply":
        res = parseFloat(inputA) * parseFloat(inputB);
        break;
      case "divide":
        res = parseFloat(inputA) / parseFloat(inputB);
        break;
      default:
        res = 0;
    }
    setResult(res);
  };

  return (
    <BaseNode id={id} title="Math Operation" height={200}>
      <div>
        <label>
          A:
          <input
            type="number"
            className="w-full"
            value={inputA}
            onChange={(e) => setInputA(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          B:
          <input
            type="number"
            value={inputB}
            onChange={(e) => setInputB(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Operation:
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          >
            <option value="add">Add</option>
            <option value="subtract">Subtract</option>
            <option value="multiply">Multiply</option>
            <option value="divide">Divide</option>
          </select>
        </label>
      </div>
      <button
        type="button"
        className="w-full bg-blue-500"
        onClick={calculateResult}
      >
        Calculate
      </button>
      <div>
        <span>Result: {result}</span>
      </div>

      <Handle type="source" position={Position.Right} id={`${id}-output`} />
      <Handle type="target" position={Position.Left} id={`${id}-input`} />
    </BaseNode>
  );
};
