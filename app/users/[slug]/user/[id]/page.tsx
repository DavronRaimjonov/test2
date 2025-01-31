import React from "react";

const UserDetails = ({ params }: { params: { id: string; slug: string } }) => {
  console.log(params.id, params.slug);
  return <div>UserDetails page | {params.id}</div>;
};

export default UserDetails;

// 20 page diyanmic 20 page
// 20 * 20 === 400
