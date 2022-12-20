import { List, Typography, Input } from "antd";
import React, { useState } from "react";
import { jobs } from "./jobs";

const SkillsTab = () => {
  const [filter, setFilter] = useState<string>("");
  const skills = jobs.reduce(
    (skillsObj, currentJob) => {
      const newSkillsObj = { ...skillsObj };
      currentJob.technologies.forEach((technology) => {
        if (technology.level > 0) {
          if (!(technology.name in skillsObj[technology.level.toString()])) {
            newSkillsObj[technology.level.toString()][technology.name] = [];
          }
          newSkillsObj[technology.level.toString()][technology.name].push(
            <div>
              <strong>{currentJob.companyName}</strong> -{" "}
              {technology.description}
            </div>
          );
        }
      });
      return newSkillsObj;
    },
    { "1": {}, "2": {} } as Record<string, Record<string, React.ReactNode[]>>
  );

  const sortedSkills = Object.keys(skills["1"])
    .sort()
    .concat(Object.keys(skills["2"]).sort())
    .filter((skill) => skill.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <Input
        onChange={(newFilter) => setFilter(newFilter.target.value ?? "")}
        placeholder="Filter..."
      />
      {sortedSkills.map((skill) => (
        <List
          key={skill}
          size="small"
          header={
            <Typography.Title level={5} style={{ marginBottom: 0 }}>
              {skill}
            </Typography.Title>
          }
          dataSource={skills["1"][skill] ?? skills["2"][skill]}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      ))}
    </div>
  );
};

export default SkillsTab;
