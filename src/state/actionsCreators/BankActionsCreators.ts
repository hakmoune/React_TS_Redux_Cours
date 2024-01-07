import { EActionTypes } from "../actionsTypes"

export const depositMoney = (amount: number) => ({
    type: EActionTypes.DEPOSIT,
    payload: { data: amount }
});

export const withdrawMoney = (amount: number) => ({
    type: EActionTypes.WITHDRAW,
    payload: { data: amount }
});


export const bankruptMoney = () => ({
    type: EActionTypes.BANKRUPT,
});