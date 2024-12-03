"use client";
import { User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const UserButton = () => {
  const session = false; //Todo:  Replace with your session state
  if (session) {
    return (
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Logout
      </button>
    );
  }
  if (!session) {
    return (
      <div className="flex items-center justify-center gap-2">
        <Link href={"/auth"}>
          <Button variant={"default"}>
            <User size={24} /> <span>Login</span>
          </Button>
        </Link>
      </div>
    );
  }
  return null;
};

export default UserButton;
