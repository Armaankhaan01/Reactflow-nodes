import { useState } from "react";
import axios from "axios";
import { BaseNode } from "../BaseNode";
import CustomInput from "../components/CustomInput";
import CustomSelect from "../components/CustomSelect";
import { Button } from "antd";
export const APINode = ({ id, data }) => {
  const [apiUrl, setApiUrl] = useState(data?.apiUrl || "");
  const [method, setMethod] = useState(data?.method || "GET");
  const [requestBody, setRequestBody] = useState(data?.requestBody || "");
  const [response, setResponse] = useState("");

  const handleApiCall = async () => {
    try {
      let result;
      if (method === "GET") {
        result = await axios.get(apiUrl);
      } else if (method === "POST") {
        result = await axios.post(apiUrl, JSON.parse(requestBody));
      }
      setResponse(JSON.stringify(result.data, null, 2));
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }
  };
  const methodOptions = [
    { value: "GET", label: "GET" },
    { value: "POST", label: "POST" },
  ];
  return (
    <BaseNode
      id={id}
      label="API Node"
      data={data}
      height={"100%"}
      handles={[
        { type: "target", position: "Left", idSuffix: "input" },
        { type: "source", position: "Right", idSuffix: "output" },
      ]}
    >
      <CustomInput
        type="text"
        value={apiUrl}
        onChange={(e) => setApiUrl(e.target.value)}
        placeholder="https://example.com/api"
        label="API URL :"
      />

      <CustomSelect
        value={method}
        options={methodOptions}
        onChange={(value) => {
          console.log(value);
          setMethod(value);
        }}
        className="w-full"
        label="Method : "
      />
      {method === "POST" && (
        <CustomInput
          textarea={true}
          placeholder='{"key": "value"}'
          value={requestBody}
          onChange={(e) => setRequestBody(e.target.value)}
          label="Request Body (JSON):"
        />
      )}
      <Button size="small" onClick={handleApiCall}>
        Send Request
      </Button>
    </BaseNode>
  );
};
