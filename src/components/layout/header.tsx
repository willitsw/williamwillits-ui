import { Avatar, Typography, Row, Col, Button } from "antd";
import { MailFilled, LinkedinFilled, GithubFilled } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

interface HeaderProps {
  imageUrl: string;
  title: string;
}

const ICON_SIZE = 24;

const Header = ({ imageUrl, title }: HeaderProps) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 40,
        marginTop: 40,
      }}
    >
      <Avatar
        src={imageUrl}
        size={isTabletOrMobile ? 80 : 200}
        style={{ marginBottom: "20px" }}
      />
      <div>
        <Typography.Title level={isTabletOrMobile ? 3 : 1}>
          {title}
        </Typography.Title>
        <Row gutter={8} justify="center" style={{ marginBottom: "24px" }}>
          <Col>
            <Button type="text" href="https://github.com/willitsw">
              <GithubFilled style={{ fontSize: ICON_SIZE }} />
            </Button>
          </Col>
          <Col>
            <Button type="text" href="mailto:willitsw@gmail.com">
              <MailFilled style={{ fontSize: ICON_SIZE }} />
            </Button>
          </Col>
          <Col>
            <Button
              type="text"
              href="https://www.linkedin.com/in/bill-willits/"
            >
              <LinkedinFilled style={{ fontSize: ICON_SIZE }} />
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Header;
