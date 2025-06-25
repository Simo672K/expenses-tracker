"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Plus } from "lucide-react";
import { useContext } from "react";
import { ModalState } from "../context/ModalContext";
import IncomeModal from "../modal/IncomeModal";
import { Button } from "../ui/button";
import CategoryModal from "../modal/CategoryModal";
import PurchasedItemsModal from "../modal/PurchasedItemsModal";

const NewRecordDropDown = () => {
  const { dispatch } = useContext(ModalState);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="bg-[#3B82F6] hover:bg-[#3B82F6] hover:opacity-85 cursor-pointer"
            size="lg"
          >
            <Plus />
            Add new
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          <DropdownMenuItem
            onSelect={() => {
              dispatch({ modalType: "income", modalState: true });
            }}
          >
            Income
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              dispatch({ modalType: "purchasedItem", modalState: true });
            }}
          >
            Purchased Item
          </DropdownMenuItem>
          <DropdownMenuItem
            onSelect={() => {
              dispatch({ modalType: "category", modalState: true });
            }}
          >
            Category
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <IncomeModal />
      <CategoryModal />
      <PurchasedItemsModal />
    </>
  );
};
export default NewRecordDropDown;
