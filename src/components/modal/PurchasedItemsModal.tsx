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
import CreatePurchasedItemForm from "../form/CreateIPurchasedItemForm";

const PurchasedItemsModal = () => {
  const {
    state: { purchasedItemModalState },
    dispatch,
  } = useContext(ModalState);

  return (
    <Dialog
      open={purchasedItemModalState}
      onOpenChange={(open) =>
        dispatch({ modalType: "purchasedItem", modalState: open })
      }
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new purchased item.</DialogTitle>
        </DialogHeader>
        <CreatePurchasedItemForm />
      </DialogContent>
    </Dialog>
  );
};
export default PurchasedItemsModal;
