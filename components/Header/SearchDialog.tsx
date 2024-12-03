"use client";

import { Search } from "lucide-react";
import React from "react";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-[425px] bg-transparent border-none shadow-none"
        noCloseButton
      >
        <DialogTitle className="sr-only">Search</DialogTitle>
        <div className="flex items-center border rounded-full p-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <Input
            type="text"
            placeholder="Search..."
            className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
