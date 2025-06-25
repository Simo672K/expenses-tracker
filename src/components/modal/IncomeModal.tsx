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

const IncomeModal = () => {
  const {
    state: { income },
    dispatch,
  } = useContext(ModalState);

  return (
    <Dialog
      open={income}
      onOpenChange={(open) =>
        dispatch({ modalType: "income", modalState: open })
      }
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new income source.</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default IncomeModal;
