import { useState } from "react";
import { BaseNode } from "../BaseNode";
import CustomInput from "../components/CustomInput";
import CustomSelect from "../components/CustomSelect";
import { Button, Typography } from "antd";

export const StringManipulatorNode = ({ id, data }) => {
  const [inputString, setInputString] = useState(data?.inputString || "");
  const [operation, setOperation] = useState(data?.operation || "Concatenate");
  const [modifier, setModifier] = useState("");
  const [result, setResult] = useState("");

  const operationOptions = [
    { value: "Concatenate", label: "Concatenate" },
    { value: "Split", label: "Split" },
  ];

  const handleOperation = () => {
    let modifiedString = inputString;

    switch (operation) {
      case "Concatenate":
        modifiedString += modifier;
        break;
      case "Split":
        modifiedString = inputString.split(modifier).join(", ");
        break;
      default:
        break;
    }

    setResult(modifiedString);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      label="String Manipulator"
      handles={[
        { type: "target", position: "Left", idSuffix: "input" },
        { type: "source", position: "Right", idSuffix: "output" },
      ]}
      height={"auto"}
    >
      <div className="flex flex-col gap-2">
        <CustomInput
          type="text"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
          placeholder="Enter input string"
          label="Input String:"
        />

        <CustomSelect
          value={operation}
          options={operationOptions}
          onChange={(value) => setOperation(value)}
          className="w-full"
          label="Operation:"
        />

        {operation !== "Split" && (
          <CustomInput
            type="text"
            value={modifier}
            onChange={(e) => setModifier(e.target.value)}
            placeholder="Enter string/char to modify"
            label="Modifier:"
          />
        )}

        <Button size="small" onClick={handleOperation}>
          Apply Operation
        </Button>

        <Typography> Result: {result}</Typography>
      </div>
    </BaseNode>
  );
};
