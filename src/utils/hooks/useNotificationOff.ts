import { IAction, IError, INotify } from "utils/interface";

import { useAppDispatch } from "./useRedux";

export function useNotificationOff(
  type: "object"
): (value: INotify, action: Function) => void;
export function useNotificationOff(
  type: "array"
): (value: IAction | IError, action: Function) => void;
export function useNotificationOff(type: "object" | "array") {
  const dispatch = useAppDispatch();

  if (type === "object") {
    return (value: INotify, action: Function): void => {
      if (value.pending) {
        setTimeout(() => {
          dispatch(action({ pending: false }));
        }, value.time ?? 0);
      }
    };
  }

  if (type === "array") {
    return (value: IAction | IError, action: Function): void => {
      setTimeout(() => {
        dispatch(action(value.id));
      }, value.time ?? 0);
    };
  }
}
