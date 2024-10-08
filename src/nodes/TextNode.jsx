import { useEffect, useState } from "react";
import { BaseNode } from "../BaseNode";
import CustomInput from "../components/CustomInput";

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState([]);
  const [nodeSize, setNodeSize] = useState({ width: 150, height: 50 });
  const [isTyping, setIsTyping] = useState(false);
  const variableRegex = /\{\{(\w+)\}\}/g;

  // Function to dynamically adjust the node's width and height
  useEffect(() => {
    const lines = currText.split("\n").length;
    const newHeight = Math.max(50, lines * 30);
    const newWidth = Math.max(150, currText.length * 8);
    setNodeSize({ width: newWidth, height: newHeight });
  }, [currText]);

  useEffect(() => {
    const detectedVariables = [...currText.matchAll(variableRegex)].map(
      (match) => match[1]
    );
    setVariables(detectedVariables);
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const handleFocus = () => {
    setIsTyping(true);
  };

  const handleBlur = () => {
    setIsTyping(false);
  };

  const outputHandle = {
    type: "source",
    position: "Right",
    idSuffix: "output",
  };

  const handles = [
    outputHandle,
    ...variables.map((variable, index) => ({
      type: "target",
      position: "Left",
      idSuffix: `input-${variable}`,
      style: { top: `${index * 20 + 20}px` },
    })),
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      label="Text"
      handles={handles}
      style={nodeSize}
      width="auto"
      height={"100%"}
    >
      <div className="flex flex- gap-2">
        <CustomInput
          textarea
          type="text"
          label="Text"
          value={currText}
          onChange={handleTextChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{
            width: isTyping ? nodeSize.width - 20 : 150,
            height: isTyping ? nodeSize.height - 20 : 30,
            minHeight: "30px",
            maxWidth: "40vw",
            overflow: "hidden",
            resize: "none",
          }}
        />
      </div>
    </BaseNode>
  );
};
