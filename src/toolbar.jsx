// toolbar.jsx

import { DraggableNode } from "./DraggableNode";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}

      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="math" label="Math" />
        <DraggableNode type="timer" label="Timer" />
        <DraggableNode type="api" label="API" />
        <DraggableNode type="filter" label="Filter" />
        <DraggableNode type="string" label="String" />
      </div>
    </div>
  );
};
