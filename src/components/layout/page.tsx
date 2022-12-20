import React from "react";
import Footer from "./footer";
import Header from "./header";

interface PageProps {
  title: string;
  imageUrl: string;
  children: React.ReactNode;
}

const Page = ({ title, imageUrl, children }: PageProps) => {
  return (
    <div className="wrapper">
      <Header title={title} imageUrl={imageUrl} />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
