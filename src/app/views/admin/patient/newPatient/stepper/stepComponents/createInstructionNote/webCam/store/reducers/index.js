import {combineReducers} from 'redux';
import webCamImageAddEditReducer from "./web.cam.image.upload.reducer";

const reducer = combineReducers({
    webCamImageAddEdit: webCamImageAddEditReducer
});

export default reducer;