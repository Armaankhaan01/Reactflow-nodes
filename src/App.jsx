import { ConfigProvider, theme } from "antd";
import { SubmitButton } from "./components/Submit";
import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <div>
        <PipelineToolbar />
        <PipelineUI />
        <SubmitButton />
      </div>
    </ConfigProvider>
  );
}

export default App;
