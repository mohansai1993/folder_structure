import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
function Loading() {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <div className="flex justify-center w-full">
      <Spin indicator={antIcon} />
    </div>
  );
}

export default Loading;
