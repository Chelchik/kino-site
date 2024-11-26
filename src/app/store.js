import { combineReducers, createStore } from "redux";
import { InputValueReducer } from "../features/inputValueSlice";
import { submitReducer } from "../features/SubmitSlice";
import { themeReducer } from "../features/ThemeSlice";
import { menuReducer } from "../features/menuSlice";

const store = createStore(combineReducers({
    inputValue: InputValueReducer,
    submit: submitReducer,
    theme: themeReducer,
    menu: menuReducer
}))

export default store;