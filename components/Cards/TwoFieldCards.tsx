import { Card, Space, theme } from "antd";

interface TwoFieldsType {
  title: string;
  value: string;
  bgColor?: string | null;
}
function TwoFieldCards({ title, value, bgColor = null }: TwoFieldsType) {
  const {
    token: { colorFillSecondary },
  } = theme.useToken();
  return (
    <>
      {" "}
      <Card
        style={{
          background: bgColor ? bgColor : colorFillSecondary,
          minWidth: "200px",
          paddingTop: "15px",
          paddingBottom: "15px",
        }}
      >
        <div>
          <Space
            direction="vertical"
            size="small"
            align="center"
            style={{ display: "flex" }}
          >
            <h3 className="text-lg font-semibold">{title}</h3>
            <h1 className="text-5xl font-bold  text-gray-400">{value}</h1>
          </Space>
        </div>
      </Card>
    </>
  );
}

export default TwoFieldCards;
