import { Search } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import SearchDialog from "./SearchDialog";

interface MobileNavProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MobileNav = ({ open, onOpenChange }: MobileNavProps) => {
  return (
    <>
      <Button
        variant="outline"
        className="w-full justify-start text-left font-normal rounded-full "
        onClick={() => onOpenChange(true)}
      >
        <Search />
      </Button>
      <SearchDialog onOpenChange={onOpenChange} open={open} />
    </>
  );
};

export default MobileNav;
