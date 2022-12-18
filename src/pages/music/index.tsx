import { Col, Row, Typography } from "antd";
import Page from "../../components/layout/page";
import lutePic from "../../images/lute_selfie.png";
import YouTubeSegment from "./youtube-segment";

const MusicPage = () => {
  return (
    <Page title="william willits, lute and guitar" imageUrl={lutePic}>
      <Typography.Paragraph>
        I am a musician based in Cincinnati, OH, and I primarily perform on the
        Renaissance lute, theorbo, and classical guitar. I earned a Masters
        degree in guitar performance and music history from the UC Conservatory
        of Music, and have performed as a soloist and in many groups over the
        years. Here are a few videos of performances I have done. Please reach
        out with any inquiries!
      </Typography.Paragraph>
      <Row gutter={[16, 24]} justify="space-around">
        <Col>
          <YouTubeSegment
            embedId="38DEKEvUJ9Y"
            title="Francesco da Milano - Ricercar 84"
          />
        </Col>
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
    </Page>
  );
};

export default MusicPage;
