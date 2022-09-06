import react from "react";
import reactDom from "react-dom";
import App from "./components/App";
import {createStore} from 'redux';
import MasterReducer from "./redux/reducers/MasterReducer";
import { Provider } from "react-redux";

const store = createStore(MasterReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
reactDom.render(
<Provider store={store}>
     <App>
     </App>
</Provider>
     ,document.getElementById('root'));