import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About page",
  description: "This is abot page",
  openGraph: {
    images: ["/images.jpeg"],
  },
};
const About = () => {
  return <div>About</div>;
};

export default About;
