import { v4 as uuidv4 } from "uuid";

import { actionAddError, actionAddFetch, actionDeleteError } from "store/slice";
import { useAppDispatch } from "utils/hooks";

//take string and push in notification, then delete this notification
export function useError() {
  const dispatch = useAppDispatch();

  return function (text: string): void {
    const id = uuidv4();
    if (text === "Failed to fetch") {
      dispatch(actionAddFetch(true));
    } else {
      dispatch(actionAddError({ id, text }));
      setTimeout(() => {
        dispatch(actionDeleteError(id));
      }, 3000);
      dispatch(actionAddFetch(false));
    }
  };
}
