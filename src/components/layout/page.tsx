import { FacebookFilled, MailFilled, LinkedinFilled } from "@ant-design/icons";
import { Row, Col, Button } from "antd";
import React from "react";
import Footer from "./footer";
import Header from "./header";

interface PageProps {
  title: string;
  imageUrl: string;
  children: React.ReactNode;
}

const ICON_SIZE = 24;

const Page = ({ title, imageUrl, children }: PageProps) => {
  return (
    <div className="wrapper">
      <Header title={title} imageUrl={imageUrl} />
      <Row gutter={8} justify="center" style={{ marginBottom: "24px" }}>
        <Col>
          <Button type="text" href="https://www.facebook.com/bill.willits/">
            <FacebookFilled style={{ fontSize: ICON_SIZE }} />
          </Button>
        </Col>
        <Col>
          <Button type="text" href="mailto:willitsw@gmail.com">
            <MailFilled style={{ fontSize: ICON_SIZE }} />
          </Button>
        </Col>
        <Col>
          <Button type="text" href="https://www.linkedin.com/in/bill-willits/">
            <LinkedinFilled style={{ fontSize: ICON_SIZE }} />
          </Button>
        </Col>
      </Row>
      {children}
      <Footer />
    </div>
  );
};

export default Page;
