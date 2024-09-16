import { Modal } from "antd";
import { RestApiIcon } from "./Icons";

const Title = ({ titleIcon, title }) => {
  return (
    <div className="flex items-center gap-4">
      <div className=" bg-[#1C2536] h-10 w-10 rounded-full flex items-center justify-center">
        <div className="w-7 h-7">{titleIcon}</div>
      </div>
      {title}
    </div>
  );
};

const ResponseModal = ({ alertData, open, setOpen }) => {
  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        title={<Title titleIcon={<RestApiIcon />} title={"Response"} />}
        open={open}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <p>Number of Nodes: {alertData?.num_nodes}</p>
          <p>Number of Edges: {alertData?.num_edges}</p>
          <p>Is DAG: {alertData?.is_dag ? "Yes" : "No"}</p>
        </div>
      </Modal>
    </>
  );
};

export default ResponseModal;
