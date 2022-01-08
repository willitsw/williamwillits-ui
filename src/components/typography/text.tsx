import { Typography } from "antd";

interface TextProps {
  children: JSX.Element | string;
}

const Text = ({ children }: TextProps) => {
  const { Paragraph } = Typography;
  return <Paragraph>{children}</Paragraph>;
};

export default Text;
