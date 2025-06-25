"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ModalState } from "../context/ModalContext";
import { useContext } from "react";
import CreateCategoryForm from "../form/CreateCategoryForm";

const CategoryModal = () => {
  const {
    state: { categoryModalState },
    dispatch,
  } = useContext(ModalState);

  return (
    <Dialog
      open={categoryModalState}
      onOpenChange={(open) =>
        dispatch({ modalType: "category", modalState: open })
      }
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new category.</DialogTitle>
        </DialogHeader>
        <CreateCategoryForm />
      </DialogContent>
    </Dialog>
  );
};
export default CategoryModal;
