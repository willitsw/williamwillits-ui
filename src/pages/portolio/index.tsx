import { Tabs } from "antd";
import { useMediaQuery } from "react-responsive";
import Page from "../../components/layout/page";
import techSelfie from "../../images/tech_selfie.jpg";
import EducationTab from "./education";
import JobTab from "./jobs";
import OverviewTab from "./overview";
import PortfolioTab from "./portfolio";
import SkillsTab from "./skills";

const PortfolioPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <Page title="Resume / Portfolio" imageUrl={techSelfie}>
      <Tabs
        defaultActiveKey="overview"
        centered
        size={isTabletOrMobile ? "small" : "large"}
        items={[
          {
            label: `Overview`,
            key: "overview",
            children: <OverviewTab />,
          },
          {
            label: `Employment History`,
            key: "job",
            children: <JobTab />,
          },
          {
            label: `Education`,
            key: "school",
            children: <EducationTab />,
          },
          {
            label: `Skills`,
            key: "skills",
            children: <SkillsTab />,
          },
          {
            label: `Projects`,
            key: "projects",
            children: <PortfolioTab />,
          },
        ]}
      />
    </Page>
  );
};

export default PortfolioPage;
