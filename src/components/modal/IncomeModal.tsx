"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ModalState } from "../context/ModalContext";
import { useContext } from "react";
import CreateIncomeForm from "../form/CreateIncomeForm";

const IncomeModal = () => {
  const {
    state: { incomeModalState },
    dispatch,
  } = useContext(ModalState);

  return (
    <Dialog
      open={incomeModalState}
      onOpenChange={(open) =>
        dispatch({ modalType: "income", modalState: open })
      }
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new income source.</DialogTitle>
        </DialogHeader>
        <CreateIncomeForm />
      </DialogContent>
    </Dialog>
  );
};
export default IncomeModal;
