import { FacebookFilled, MailFilled } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import Text from "../../components/typography/text";
import lutePic from "../../images/lute_selfie.png";
import styles from "./index.module.css";
import YouTubeSegment from "./youtube-segment";

const MusicPage = () => {
  return (
    <div className="wrapper">
      <Header title="william willits, lute and guitar" imageUrl={lutePic} />
      <Row gutter={16} justify="center" style={{ marginBottom: "24px" }}>
        <Col>
          <Button type="text" href="https://www.facebook.com/bill.willits/">
            <FacebookFilled className={styles.icon} />
          </Button>
        </Col>
        <Col>
          <Button type="text" href="mailto:willitsw@gmail.com">
            <MailFilled className={styles.icon} />
          </Button>
        </Col>
      </Row>
      <Text>
        I am a musician based in Cincinnati, OH, and I primarily perform on the
        Renaissance lute, theorbo, and classical guitar. I earned a Masters
        degree in guitar performance and music history from the UC Conservatory
        of Music, and have performed as a soloist and in many groups over the
        years. Here are a few videos of performances I have done. Please reach
        out with any inquiries!
      </Text>
      <Row gutter={[16, 24]} justify="space-around">
        <Col>
          <YouTubeSegment
            embedId="JFbJrn7dOXs"
            title="Joaquin Turina: Homage a Tarrega"
          />
        </Col>
        <Col>
          <YouTubeSegment
            embedId="OV_ztlsJiBg"
            title="Luis de Narvaez: Two Fantasias del Quarto Tono"
          />
        </Col>
        <Col>
          <YouTubeSegment
            embedId="cT50efL46uw"
            title="J.S. Bach: Adagio BWV 1001"
          />
        </Col>
        <Col>
          <YouTubeSegment
            embedId="NzyL0a5LLLo"
            title="John Dowland: Now o Now"
          />
        </Col>
        <Col>
          <YouTubeSegment
            embedId="tokWBsb2n-w"
            title="Villa-Lobos: Guitar Concerto - Cadenza and Third Movement"
          />
        </Col>
      </Row>

      <Footer />
    </div>
  );
};

export default MusicPage;
