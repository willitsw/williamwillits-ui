import { Typography, List, Tag, Divider, Tooltip } from "antd";

interface Job {
  title: string;
  startDate: string;
  endDate: string;
  companyName: string;
  companyLocation: string;
  duties: string[];
  technologies: { name: string; description: string; level: number }[];
}

export const jobs: Job[] = [
  {
    title: "Lead Software Engineer",
    companyName: "Nextbite",
    companyLocation: "Denver, CO",
    startDate: "December 2021",
    endDate: "Present",
    duties: [
      "Architect full-stack software solutions to solve critical business problems and generate direct value for the company.",
      "Collaborate with product, design, executives, and other stakeholders to ensure that all needs are met throughout the development life cycle.",
      "Manage, mentor, and orchestrate work for a small team of software engineers. Ensure that the quality of work is as high as possible.",
      "Contribute impactful code at an individual level. Manage and build integration / deployment pipelines. Ensure the development process is safe and smooth for the team.",
    ],
    technologies: [
      {
        name: "React",
        description:
          "Extensively used React for all front-end purposes. Introduced a new micro front-end pattern using Webpack Module Federation, among numerous other contributions.",
        level: 1,
      },
      {
        name: "TypeScript",
        description:
          "All front-end and some back-end code was written in TypeScript, with lots of module sharing between repositories. Also, built a stateless, serverless API using TypeScript lambdas for a lightweight BFF.",
        level: 1,
      },
      {
        name: "Python",
        description:
          "Most back-end code was written in Python, with extensive use of Pydantic models. Made many contributions across a service-oriented architecture.",
        level: 1,
      },
      {
        name: "FastAPI",
        description:
          "Developed new python services in FastAPI, utilizing containerization through ECS deployed into AWS Fargate.",
        level: 1,
      },
      {
        name: "Django",
        description:
          "Maintained legacy python services in Django, utilizing containerization through ECS.",
        level: 1,
      },
      {
        name: "Terraform",
        description:
          "Provisioned the majority of front-end and back-end resources using Terraform and Terraform Cloud.",
        level: 1,
      },
      {
        name: "Github Actions",
        description:
          "Configured the majority of CI/CD workflows using Github Actions.",
        level: 1,
      },
      {
        name: "AWS",
        description: "Extensively leveraged AWS for all infrastructure needs.",
        level: 1,
      },
      {
        name: "Postgres",
        description:
          "Postgres was the database of choice for most python services. Used either Django migrations or Alembic for DB versioning, and either Django ORM or SQL Alchemy for operations.",
        level: 1,
      },
      {
        name: "AWS DynamoDB",
        description:
          "Dynamo was a secondary choice when NoSQL made more sense. Extensive use was made of global secondary indexing and intelligent management of sort keys to make querying data more powerful.",
        level: 1,
      },
      {
        name: "AWS Lambda",
        description:
          "For very lightweight, low-traffic BFF services, or highly scaling back-end jobs, AWS Lambda was utilized.",
        level: 1,
      },
      {
        name: "CSS",
        description: "Implemented media queries for responsive designs.",
        level: 1,
      },
    ],
  },
  {
    title: "Senior Software Engineer",
    companyName: "Paycor Inc.",
    companyLocation: "Cincinnati, OH",
    startDate: "May 2018",
    endDate: "December 2021",
    duties: [
      "Build, maintain, test and support client-facing, cloud-hosted SaaS applications across the full stack, as a member of an agile delivery team.",
      "Contribute to architectural planning of new systems, and take part in user research, design, and product planning as a technology lead/advocate.",
    ],
    technologies: [
      {
        name: "React",
        description:
          "All new front-end development was done in React. Extensively tested apps using cypress and jest with react testing library.",
        level: 1,
      },
      {
        name: "TypeScript",
        description:
          "Advocated for the use of TypeScript over JavaScript for front-end codebases. Converted one repo from JS to TS.",
        level: 1,
      },
      {
        name: "C#/.NET",
        description:
          "All back-end services were written in .NET, using a combination of persistant App Service and stateless Azure Functions.",
        level: 1,
      },
      {
        name: "Azure",
        description:
          "Took part in a large-scale cloud migration, moving many on-premise resources to Azure.",
        level: 1,
      },
      {
        name: "AWS",
        description:
          "Integrated an aquisition provisioned in AWS into our Azure ecosystem. Set up logging/telemetry, deployment operations, and other resource sharing between clouds so that the acquired product could mesh well with existing infrastructure.",
        level: 1,
      },
      {
        name: "SQL Server",
        description: "This was the database of choice for all legacy services.",
        level: 1,
      },
      {
        name: "Python",
        description:
          "Used python extensively for automating ETL processes for incoming business. Also, was a key contributor on an aquisition written in Django.",
        level: 1,
      },
      {
        name: "Azure Functions",
        description:
          "Developed lightweight APIs and asynchronous, scaling back-end processes. Leveraged Durable Functions with orchestration for more complex and highly scaling workflows.",
        level: 1,
      },
      {
        name: "CSS",
        description:
          "Implemented scoped styling using CSS modules in a legacy front-end repository.",
        level: 1,
      },
      {
        name: "Django",
        description:
          "Worked heavily on an aquisition that was a large Django monolith. Developed a process for developers on Windows machines to conttribute and run the code using WSL.",
        level: 1,
      },
    ],
  },
  {
    title: "Web Developer / Consultant / Administrator",
    companyName: "Freelance",
    companyLocation: "Cincinnati, OH",
    startDate: "August 2010",
    endDate: "May 2018",
    duties: [
      "Clients include Cincinnati Music Academy, Brewhaus Dog Bones, Greater Cincinnati Guitar Society, Classical Guitar Cincinnati, individual musicians, writers, and artists.",
      "Work with clients directly to develop high level plans, site maps, online marketing strategies, and content frameworks that fit their needs. Create and customize CMS templates, implement modules, manage content and e-commerce functionality, SEO, graphic design, and other UI/UX concerns.",
    ],
    technologies: [
      {
        name: "AWS Lambda",
        description: "Used for lightweight, stateless BFF APIs.",
        level: 1,
      },
      {
        name: "AWS DynamoDB",
        description: "Used for cost-effective, flexible storage.",
        level: 1,
      },
      {
        name: "AWS",
        description: "The cloud of choice for all freelance and side projects.",
        level: 1,
      },
      {
        name: "TypeScript",
        description: "The language of choice for freelance and side projects.",
        level: 1,
      },
      {
        name: "Adobe Creative Suite",
        description:
          "Used for basic graphic design, image manipulation, etc. for client websites.",
        level: 2,
      },
      {
        name: "GIMP",
        description:
          "Used for basic graphic design, image manipulation, etc. for client websites when my Adobe CS license expired :)",
        level: 2,
      },
      {
        name: "Joomla",
        description:
          "CMS of choice for clients who required a higher level of customization.",
        level: 2,
      },
      {
        name: "Wordpress",
        description:
          "CMS of choice for clients who required a faster, turn-key solution.",
        level: 2,
      },
      {
        name: "PHP",
        description:
          "Used when altering Joomla templates and plugins. Also used for database communication on some side projects.",
        level: 2,
      },
      {
        name: "MySQL",
        description: "Database of choice when working with PHP.",
        level: 2,
      },
      {
        name: "HTML",
        description:
          "Proficiency with styling, positioning, responsiveness, and accessibility.",
        level: 1,
      },
      {
        name: "CSS",
        description:
          "Proficiency with styling, positioning, responsiveness, and accessibility.",
        level: 1,
      },
      {
        name: "Github Actions",
        description:
          "Used for all CI/CD workflows for freelance and side projects.",
        level: 1,
      },
      {
        name: "Terraform",
        description:
          "Used for all infrastructure-as-code needs in freelance and side projects.",
        level: 1,
      },
    ],
  },
  {
    title: "Assistant Web Developer",
    companyName: "MMJ Technology",
    companyLocation: "Grand Rapids, MI",
    startDate: "June 2009",
    endDate: "October 2010",
    duties: [
      "Managed content for enterprise clients. Designed and built websites for small business clients.",
    ],
    technologies: [
      {
        name: "Adobe Creative Suite",
        description:
          "Used for basic graphic design, image manipulation, etc. for client websites.",
        level: 0,
      },
      {
        name: "GIMP",
        description:
          "Used for basic graphic design, image manipulation, etc. for client websites when my Adobe CS license expired :)",
        level: 0,
      },
      {
        name: "Joomla",
        description:
          "CMS of choice for clients who required a higher level of customization.",
        level: 0,
      },
      {
        name: "Wordpress",
        description:
          "CMS of choice for clients who required a faster, turn-key solution.",
        level: 0,
      },
      {
        name: "PHP",
        description:
          "Used when altering Joomla templates and plugins. Also used for database communication on some side projects.",
        level: 0,
      },
      {
        name: "MySQL",
        description: "Database of choice when working with PHP.",
        level: 0,
      },
      {
        name: "HTML",
        description:
          "Proficiency with styling, positioning, responsiveness, and accessibility.",
        level: 0,
      },
      {
        name: "CSS",
        description:
          "Proficiency with styling, positioning, responsiveness, and accessibility.",
        level: 0,
      },
    ],
  },
  {
    title: "Music Teacher",
    companyName: "Freelance",
    companyLocation: "Cincinnati, OH",
    startDate: "December 2007",
    endDate: "May 2018",
    duties: ["Teacher of plucked string instruments."],
    technologies: [
      {
        name: "University of Cincinnati Summer Guitar Workshop",
        description: "Faculty member for many years.",
        level: 0,
      },
      {
        name: "Cincinnati Music Academy",
        description: "Guitar instructor for 3 years.",
        level: 0,
      },
      {
        name: "Cincinnati School of Music",
        description: "Guitar instructor for 5 years.",
        level: 0,
      },
      {
        name: "School for the Creative and Performing Arts",
        description: "Head guitar faculty for 1 year.",
        level: 0,
      },
      {
        name: "Wert Music",
        description: "Guitar instructor for 2 years.",
        level: 0,
      },
      {
        name: "Meyer Music",
        description: "Guitar instructor for 5 years.",
        level: 0,
      },
    ],
  },
];

const JobTab = () => {
  return (
    <div>
      {jobs.map((job) => {
        return (
          <div key={job.companyName + job.title}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "bottom",
              }}
            >
              <Typography.Title
                level={3}
                style={{ marginBottom: 0, marginTop: 0 }}
              >
                {job.companyName} - {job.companyLocation}
              </Typography.Title>
              <Typography.Title
                level={5}
                style={{ marginBottom: 0, marginTop: 0 }}
              >
                {job.startDate} - {job.endDate}
              </Typography.Title>
            </div>
            <Typography.Title level={5}>{job.title}</Typography.Title>
            <List
              size="small"
              dataSource={job.duties}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 15,
                flexWrap: "wrap",
                rowGap: 10,
              }}
            >
              {job.technologies.map((technology) => (
                <Tooltip
                  key={technology.name}
                  placement="top"
                  title={technology.description}
                >
                  <Tag color="processing">{technology.name}</Tag>
                </Tooltip>
              ))}
            </div>
            <Divider />
          </div>
        );
      })}
    </div>
  );
};

export default JobTab;
