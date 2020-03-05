import { combineReducers } from "redux";

import SagaReducer from "./sagaReducer";

const rootReducer =  combineReducers({
  SagaReducer: SagaReducer
});

export default rootReducer;