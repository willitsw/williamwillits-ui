import { Avatar, Typography } from "antd";
import styles from "./header.module.css";

interface HeaderProps {
  imageUrl: string;
  title: string;
}

const Header = ({ imageUrl, title }: HeaderProps) => {
  return (
    <div className={styles.container}>
      <Avatar src={imageUrl} size={200} style={{ marginBottom: "20px" }} />
      <Typography.Title level={1}>{title}</Typography.Title>
    </div>
  );
};

export default Header;
