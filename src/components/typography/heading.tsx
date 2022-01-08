import { Typography } from "antd";

interface HeadingProps {
  headingLevel?: 1 | 2 | 3 | 4 | 5;
  children: JSX.Element | string;
}

const Heading = ({ children, headingLevel = 1 }: HeadingProps) => {
  const { Title } = Typography;
  return <Title level={headingLevel}>{children}</Title>;
};

export default Heading;
