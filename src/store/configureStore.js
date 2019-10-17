import generateTree from "./generateTree";
import { createStore } from "redux";
import rootReducer from "../reducers/index";

const tree = generateTree();

export default function configureStore(preloadedState) {
  const store = createStore(rootReducer, tree);

  if (process.env.NODE_ENV !== "production") {
    if (module.hot) {
      module.hot.accept("../reducers/index", () => {
        const newrootReducer = require("../reducers/index").default;
        store.replaceReducer(newrootReducer);
      });
    }
  }
  return store;
}
