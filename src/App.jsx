import { ConfigProvider, theme } from "antd";
import { SubmitButton } from "./Submit";
import { PipelineToolbar } from "./Toolbar";
import { PipelineUI } from "./UI";

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <div className="space-y-4">
        <PipelineToolbar />
        <PipelineUI />
        <SubmitButton />
      </div>
    </ConfigProvider>
  );
}

export default App;
