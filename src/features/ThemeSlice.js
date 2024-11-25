export function themeReducer(state, action) {
    if (action.type === "theme") {
        return {...state, theme: action.payload}
    }

    return state;
}

export const themeInitialState = {
    theme: false
}