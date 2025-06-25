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

const PurchasedItemsModal = () => {
  const {
    state: { purchasedItem },
    dispatch,
  } = useContext(ModalState);

  return (
    <Dialog
      open={purchasedItem}
      onOpenChange={(open) =>
        dispatch({ modalType: "purchasedItem", modalState: open })
      }
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new purchased item.</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default PurchasedItemsModal;
