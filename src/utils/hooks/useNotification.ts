import {v4 as uuidv4} from "uuid";

import {
    actionAddAction,
    actionAddCopy,
    actionAddError,
    actionAddFetch,
    actionAddLoading,
} from "store/slice";
import {useAppDispatch} from "utils/hooks";

export function useNotification() {
    const dispatch = useAppDispatch();

    return function (
        object: "loading" | "copy" | "fetch" | "error" | "action",
        type: { action?: { func: Function, text: string }; text: string },
        time: number = 3000
    ): void {
        const id = uuidv4();

        if (object) {
            switch (object) {
                case "loading": {
                    dispatch(actionAddLoading({pending: true, time}));
                    break;
                }
                case "copy": {
                    dispatch(actionAddCopy({pending: true, time}));
                    break;
                }
                case "fetch": {
                    dispatch(actionAddFetch({pending: true, time}));
                    break;
                }
                case "error": {
                    if (type) dispatch(actionAddError({id, text: type.text, time}));
                    break;
                }
                case "action": {
                    if (type)
                        dispatch(
                            actionAddAction({
                                id,
                                text: type.text,
                                time,
                                action: type.action,
                            })
                        );
                    break;
                }
            }
        }
    };
}
