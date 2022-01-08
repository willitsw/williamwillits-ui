import { Avatar } from "antd";
import Heading from "../typography/heading";
import styles from "./header.module.css";

interface HeaderProps {
  imageUrl: string;
  title: string;
}

const Header = ({ imageUrl, title }: HeaderProps) => {
  return (
    <div className={styles.container}>
      <Avatar src={imageUrl} size={200} style={{ marginBottom: "20px" }} />
      <Heading>{title}</Heading>
    </div>
  );
};

export default Header;
