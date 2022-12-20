import { Typography, List, Divider } from "antd";

interface Education {
  schoolName: string;
  degreeName: string;
  graduationDate: string;
  gpa: string;
  details: string[];
}

const education: Education[] = [
  {
    schoolName: "University of Cincinnati, Carl H. Lindner College of Business",
    degreeName: "Master of Science, Information Systems",
    graduationDate: "December 2019",
    gpa: "3.879",
    details: [
      "Focused coursework in data analytics, computer science, and project management",
    ],
  },
  {
    schoolName: "University of Cincinnati, College-Conservatory of Music",
    degreeName:
      "Master of Music, Classical Guitar Performance and Music History",
    graduationDate: "December 2014",
    gpa: "3.93",
    details: ["GA position in guitar, TA position in music history"],
  },
  {
    schoolName: "Grand Valley State University",
    degreeName: "Bachelor of Music, Classical Guitar Performance",
    graduationDate: "May 2010",
    gpa: "3.49",
    details: ["Minor in Information Systems"],
  },
];

const EducationTab = () => {
  return (
    <div>
      {education.map((school) => {
        return (
          <div key={school.schoolName}>
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
                {school.schoolName}
              </Typography.Title>
              <Typography.Title
                level={5}
                style={{ marginBottom: 0, marginTop: 0 }}
              >
                {school.graduationDate}
              </Typography.Title>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "bottom",
              }}
            >
              <Typography.Title level={5}>{school.degreeName}</Typography.Title>
              <Typography.Title
                level={5}
                style={{ marginBottom: 0, marginTop: 0 }}
              >
                GPA: {school.gpa}
              </Typography.Title>
            </div>
            <List
              size="small"
              dataSource={school.details}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
            <Divider />
          </div>
        );
      })}
    </div>
  );
};

export default EducationTab;
