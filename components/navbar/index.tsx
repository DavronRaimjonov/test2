import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-red-500 p-5">
      <div className="flex items-center justify-center gap-5">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/users"}>Users</Link>
      </div>
    </div>
  );
};

export default Navbar;
