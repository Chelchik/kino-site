export function menuReducer(state=showInitialState, action) {
    if (action.type === "menu") {
        return {...state, isShow: !action.payload}
    }

    return state;
}

export const showInitialState = {
    isShow: false
}

export function selectShow(state) {
    return state.menu.isShow
}