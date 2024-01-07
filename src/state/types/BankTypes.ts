import { EActionTypes } from "../actionsTypes";

interface IDEPOSIT {
    type: EActionTypes.DEPOSIT;
    payload: { data: number };
};
interface IWITHDRAW {
    type: EActionTypes.WITHDRAW;
    payload: { data: number };
};
interface IBANKRUPT {
    type: EActionTypes.BANKRUPT;
};

export type TAction = IDEPOSIT | IWITHDRAW | IBANKRUPT;