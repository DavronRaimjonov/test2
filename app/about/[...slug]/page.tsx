import React from "react";

const AboutDetails = async ({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) => {
  const { slug } = await params;
  return <div>AboutDetails | {slug.join(" ")}</div>;
};

export default AboutDetails;
