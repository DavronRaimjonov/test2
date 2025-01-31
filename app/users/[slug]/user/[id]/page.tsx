import React from "react";

const UserDetails = async ({
  params,
}: {
  params: Promise<{ id: string; slug: string }>;
}) => {
  const { id } = await params;
  return <div>UserDetails page | {id}</div>;
};

export default UserDetails;

// 20 page diyanmic 20 page
// 20 * 20 === 400
