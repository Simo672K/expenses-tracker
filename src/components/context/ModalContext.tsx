"use client";
import { ActionDispatch, createContext, useReducer } from "react";

interface ReducerAction {
  modalType: "income" | "purchasedItem" | "category";
  modalState: boolean;
}

interface ReducerState {
  incomeModalState: boolean;
  purchasedItemModalState: boolean;
  categoryModalState: boolean;
}

type StateType = {
  state: ReducerState;
  dispatch: ActionDispatch<[action: ReducerAction]>;
};

const initialState: ReducerState = {
  incomeModalState: false,
  purchasedItemModalState: false,
  categoryModalState: false,
};

export const ModalState = createContext<StateType>({
  state: initialState,
  dispatch: function () {},
});

interface Props {
  children?: React.ReactNode;
}

const modalReducer = (state: ReducerState, action: ReducerAction) => {
  switch (action.modalType) {
    case "income":
      return { ...state, incomeModalState: action.modalState };
    case "purchasedItem":
      return { ...state, purchasedItemModalState: action.modalState };
    case "category":
      return { ...state, categoryModalState: action.modalState };
  }
};

export const ModalStateProvider = (props: Props) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  return <ModalState.Provider value={{ state, dispatch }} {...props} />;
};
