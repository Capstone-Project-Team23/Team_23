import selection from "./HomePageReducer"
import isAuthenticated from "./AuthenticatedReducer";
import chooseService from "./ChooseServiceReducer";
import { combineReducers } from "redux";

const MasterReducer = combineReducers({
    selection, isAuthenticated,chooseService
})
export default MasterReducer;