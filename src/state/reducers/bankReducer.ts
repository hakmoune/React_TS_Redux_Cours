import { TAction } from "../types";
import { EActionTypes } from "../actionsTypes";

const initialState: number = 0;

const bankReducer = (state: number = initialState, action: TAction): number => {
    switch (action.type) {
        case EActionTypes.DEPOSIT:
            return state + action.payload.data;
        case EActionTypes.WITHDRAW:
            return state - action.payload.data;
        case EActionTypes.BANKRUPT:
            return 0;
        default:
            return state;
    };
};

export default bankReducer;