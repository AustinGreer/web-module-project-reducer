export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_VALUE = "MEMORY_VALUE";
export const MEMORY_APPLIED = "MEMORY_APPLIED";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operation) => {
    return({type: CHANGE_OPERATION, payload: operation})
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}

export const memoryValue = () => {
    return({type:MEMORY_VALUE})
}

export const memoryApplied = () => {
    return({type:MEMORY_APPLIED})
}