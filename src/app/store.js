import { combineReducers, createStore } from "redux";
import { InputValueReducer } from "../features/inputValueSlice";
import { submitReducer } from "../features/SubmitSlice";

const store = createStore(combineReducers({
    inputValue: InputValueReducer,
    submit: submitReducer
}))

export default store;