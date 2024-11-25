export function InputValueReducer(state=initialInputValue, action) {
    if (action.type === "INPUT_VALUE") {
        return {text: action.payload};
    }

    return state
}

export const initialInputValue = {
    text: "",
}

export function selectInput(state) {
    return state.inputValue.text;
}
