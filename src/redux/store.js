import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import reducers from "./reducers/index";

const enhancer = devToolsEnhancer();
// 🏭 store
const store = createStore(reducers, enhancer);

export default store;
