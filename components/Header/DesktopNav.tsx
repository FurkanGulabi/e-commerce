"use client";
import { Search } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import SearchDialog from "./SearchDialog";

interface DesktopNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DesktopNav = ({ open, onOpenChange }: DesktopNavProps) => {
  return (
    <>
      <Button
        variant="outline"
        className="w-full justify-start text-left font-normal pr-36 rounded-full"
        onClick={() => onOpenChange(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        Search...
      </Button>
      <SearchDialog onOpenChange={onOpenChange} open={open} />
    </>
  );
};

export default DesktopNav;
