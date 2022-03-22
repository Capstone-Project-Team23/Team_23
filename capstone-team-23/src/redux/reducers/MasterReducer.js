import selection from "./HomePageReducer"
import isAuthenticated from "./AuthenticatedReducer";
import { combineReducers } from "redux";

const MasterReducer = combineReducers({
    selection, isAuthenticated
})
export default MasterReducer;