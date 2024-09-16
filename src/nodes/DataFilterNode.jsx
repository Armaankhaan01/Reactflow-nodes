// DataFilterNode.jsx
import { useState, useEffect } from "react";
import { BaseNode } from "../BaseNode";
import CustomInput from "../components/CustomInput";
import CustomSelect from "../components/CustomSelect";

export const DataFilterNode = ({ id, data }) => {
  const [inputData, setInputData] = useState(data?.inputData || []);
  const [filterCondition, setFilterCondition] = useState("equals");
  const [filterValue, setFilterValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const filterConditions = [
    { value: "equals", label: "Equals" },
    { value: "greaterThan", label: "Greater Than" },
    { value: "lessThan", label: "Less Than" },
    { value: "contains", label: "Contains" },
  ];

  useEffect(() => {
    let result = inputData;

    if (filterCondition === "equals") {
      result = inputData.filter((item) => item === filterValue);
    } else if (filterCondition === "greaterThan") {
      result = inputData.filter((item) => item > filterValue);
    } else if (filterCondition === "lessThan") {
      result = inputData.filter((item) => item < filterValue);
    } else if (filterCondition === "contains") {
      result = inputData.filter((item) => item.includes(filterValue));
    }

    setFilteredData(result);
  }, [inputData, filterCondition, filterValue]);

  // Handles for the source output and dynamic variable inputs
  const handles = [
    { type: "target", position: "Left", idSuffix: "input" },
    { type: "source", position: "Right", idSuffix: "output" },
  ];

  return (
    <BaseNode id={id} data={data} label="Data Filter" handles={handles}>
      <div className="flex flex-col gap-2">
        <CustomInput
          textarea
          placeholder="Enter input data as JSON array"
          value={JSON.stringify(inputData)}
          onChange={(e) => setInputData(JSON.parse(e.target.value))}
          label="Input Data"
        />

        <CustomSelect
          value={filterCondition}
          options={filterConditions}
          onChange={setFilterCondition}
          label="Filter Condition"
        />

        <CustomInput
          type="text"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
          label="Filter Value"
        />

        <div>
          <strong>Filtered Output:</strong>
          <pre>{JSON.stringify(filteredData, null, 2)}</pre>
        </div>
      </div>
    </BaseNode>
  );
};
