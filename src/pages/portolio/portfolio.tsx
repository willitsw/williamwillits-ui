import { Button, Divider, Image, List, Typography } from "antd";
import beerIcon from "../../images/beer_icon.png";
import brewhaus from "../../images/brewhaus.png";
import luteSelfie from "../../images/lute_selfie.png";

interface Project {
  image: string;
  name: string;
  description: string;
  links: { href: string; description: string }[];
}

const projects: Project[] = [
  {
    image: beerIcon,
    name: "What Ales You",
    description: `This is a beer recipe builder app I created as a tool for the homebrewing community. 
      After creating a free account, homebrewers can build recipes here while automatically calculating 
      metrics like color (SRM), bitterness (IBU), predicted ABV, predicted water loss, and other things. 
      Technologies include a React frontend (relying heavily on Ant Design) and a fairly thin 
      API/backend comprised of AWS Lambdas which talk to a handful of DynamoDB tables. 
      All infrastructure is provisioned with Terraform.`,
    links: [
      {
        href: "http://www.whatalesyou.net",
        description: "Main Site",
      },
      {
        href: "https://github.com/willitsw/brewing-frontend",
        description: "Front-end Code",
      },
      {
        href: "https://github.com/willitsw/brewing-backend",
        description: "Back-end Code",
      },
      {
        href: "https://github.com/willitsw/brewing-infra",
        description: "Infrastructure",
      },
    ],
  },
  {
    image: brewhaus,
    name: "Brewhaus Dog Bones",
    description: `This is a pro-bono ecommerce website for a nonprofit based out of Cincinnati OH
    that creates job training opportunities for young people with disabilities. The front-end
    is built with NextJS, and it is all deployed on Netlify. The back-end is all Shopify- I 
    did not want to deal with any sensitive data, so I was able to integrate the front end with 
    a headless Shopify storefront and pass off all handling of PII.`,
    links: [
      {
        href: "http://www.brewhausdogbones.com",
        description: "Main Site",
      },
      {
        href: "https://github.com/willitsw/brewhaus",
        description: "Front-end Code",
      },
    ],
  },
  {
    image: luteSelfie,
    name: "This site!",
    description: `Originally, I built this site to market myself as a musician. As my
    career diverged from that path into tech, I have slowly stripped down that side of it, but I still
    keep a few videos up for posterity. The site is built with React, and the code can be found below.`,
    links: [
      {
        href: "http://www.williamwillits.com",
        description: "Main Site",
      },
      {
        href: "https://github.com/willitsw/williamwillits-ui",
        description: "Front-end Code",
      },
    ],
  },
];

const PortfolioTab = () => {
  return (
    <div>
      {projects.map((project) => (
        <>
          <div
            key={project.name}
            style={{ display: "flex", flexDirection: "row", gap: 20 }}
          >
            <Image
              src={project.image}
              preview={false}
              width={80}
              height={80}
              style={{ width: 80 }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                flexShrink: 1,
              }}
            >
              <Typography.Title level={4}>{project.name}</Typography.Title>
              <Typography.Text>{project.description}</Typography.Text>
            </div>
          </div>
          <List
            size="small"
            dataSource={project.links}
            renderItem={(link) => (
              <List.Item
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <Typography.Text style={{ fontWeight: "bold" }}>
                  {link.description}:
                </Typography.Text>
                <Button type="text" href={link.href} target="_blank">
                  {link.href}
                </Button>
              </List.Item>
            )}
          />
          <Divider />
        </>
      ))}
    </div>
  );
};

export default PortfolioTab;
