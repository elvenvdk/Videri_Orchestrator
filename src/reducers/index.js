import { combineReducers } from "redux";

import PreviewReducer from "./previewReducer";
import ContentReducer from "./contentReducer";
import AuthReducer from "./authReducer";

const rootReducer = combineReducers({
  preview: PreviewReducer,
  content: ContentReducer,
  auth: AuthReducer
});

export default rootReducer;
