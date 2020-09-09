import {createStore} from 'redux';
import { reducer,initialState } from "./reducer";

import React from 'react'

export const ConfigurStore = () => {
    const store=createStore(
        reducer,
        initialState
    )
    return store

}

