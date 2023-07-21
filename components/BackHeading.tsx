import { theme } from "antd";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function BackHeading({ title }: any) {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <div className="flex gap-5 items-center ">
      <BsArrowLeft
        color={colorPrimary}
        size={22}
        className="cursor-pointer"
        onClick={() => navigate(-1)}
      />
      <h3 className="text-xl font-semibold ">{title}</h3>
    </div>
  );
}

export default BackHeading;
