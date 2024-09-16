import { useState } from "react";
import axios from "axios";
import { Button } from "antd";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";
import ResponseModal from "./ResponseModal";
export const SubmitButton = () => {
  const [alertData, setAlertData] = useState(null);
  const [open, setOpen] = useState(false);

  const { nodes, edges } = useStore(
    (state) => ({
      nodes: state.nodes,
      edges: state.edges,
    }),
    shallow
  );

  const foo = [1, 2, 3];
  foo[10] = 11;
  console.log(foo.length);

  const handleSubmit = async () => {
    try {
      // Prepare the payload to send to the backend
      const payload = {
        nodes: nodes.map((node) => ({ id: node.id })),
        edges: edges.map((edge) => ({
          source: edge.source,
          target: edge.target,
        })),
      };

      // Send a POST request to the backend
      const response = await axios.post(
        "http://127.0.0.1:8000/pipelines/parse",

        payload // stringify the payload
      );

      // Set the response data to trigger the alert
      setAlertData(response.data);
      setOpen(true);
    } catch (error) {
      console.error("Error submitting pipeline: ", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <ResponseModal alertData={alertData} open={open} setOpen={setOpen} />

      <Button onClick={handleSubmit}>Submit Pipeline</Button>
    </div>
  );
};
