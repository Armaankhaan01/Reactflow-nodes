import { useState } from "react";
import { BaseNode } from "../BaseNode";
import CustomInput from "../components/CustomInput";
import { Button, Space, Typography } from "antd";
import CustomSelect from "../components/CustomSelect";

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

  const operationOptions = [
    { label: "Add", value: "add" },
    { label: "Subtract", value: "subtract" },
    { label: "Multiply", value: "multiply" },
    { label: "Divide", value: "divide" },
  ];

  const handles = [
    { type: "target", position: "Left", idSuffix: "inputA" },
    { type: "target", position: "Left", idSuffix: "inputB" },
    { type: "source", position: "Right", idSuffix: "output" },
  ];

  return (
    <BaseNode
      id={id}
      label="Math Operation"
      height={"auto"}
      width={"auto"}
      handles={handles}
    >
      <Space.Compact>
        <CustomInput
          label="A:"
          value={inputA}
          onChange={(e) => setInputA(e.target.value)}
          type="number"
          className={"w-fit"}
        />
      </Space.Compact>
      <Space.Compact>
        <CustomInput
          label="B:"
          value={inputB}
          onChange={(e) => setInputB(e.target.value)}
          type="number"
          className={"w-fit"}
        />
      </Space.Compact>

      <CustomSelect
        options={operationOptions}
        value={operation}
        onChange={(value) => setOperation(value)}
        className="w-full"
      />
      <Button
        size="small"
        type="button"
        className="w-full bg-blue-500"
        onClick={calculateResult}
      >
        Calculate
      </Button>
      <Typography>Result: {result}</Typography>
    </BaseNode>
  );
};
