import React from 'react'
import { Request,Save,Rejected,Granted } from "../components/ContactDetails";

export const initialState = {
    grant:Granted,
    request:Request,
    save:Save,
    reject:Rejected
}



export const reducer = (state=initialState,action) => {
    
    return state
}

