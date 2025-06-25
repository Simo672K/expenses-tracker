"use client";
import {
  ActionDispatch,
  createContext,
  Dispatch,
  SetStateAction,
  useReducer,
} from "react";

interface ReducerAction {
  modalType: "income" | "purchasedItem" | "category";
  modalState: boolean;
}
interface ReducerState {
  income: boolean;
  purchasedItem: boolean;
  category: boolean;
}

type StateType = {
  state: ReducerState;
  dispatch: ActionDispatch<[action: ReducerAction]>;
};

const initialState: ReducerState = {
  income: false,
  purchasedItem: false,
  category: false,
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
      return { ...state, income: action.modalState };
    case "purchasedItem":
      return { ...state, purchasedItem: action.modalState };
    case "category":
      return { ...state, category: action.modalState };
  }
};
export const ModalStateProvider = (props: Props) => {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  return <ModalState.Provider value={{ state, dispatch }} {...props} />;
};
