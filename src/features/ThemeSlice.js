export function themeReducer(state=themeInitialState, action) {
    if (action.type === "theme") {
        return {...state, theme: action.payload}
    }

    return state;
}

export const themeInitialState = {
    theme: false
}