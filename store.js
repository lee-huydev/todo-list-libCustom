import { createStore } from "./core.js";
import Logger from "./logger.js";
import reducer from "./reducer.js";
const { attatch, dispatch, connect } = createStore(Logger(reducer))
window.dispatch = dispatch
export { attatch, connect }