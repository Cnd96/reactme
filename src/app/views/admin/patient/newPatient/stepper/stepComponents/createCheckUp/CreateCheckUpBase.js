import React, {useEffect} from 'react';
import withReducer from "../../../../../../../store/withReducer";
import reducer from "./store/reducer";
import CreateCheckupForm from "./components/CreateCheckupForm";
import {useDispatch} from "react-redux";
import {getStorageItem} from "../../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../../utils/Constants";
import * as Action from "./store/action";
import * as CheckupActions from "./store/action";

const CreateCheckUpBase = ({setPageIndex, nextPageIndex, prevPageIndex}) => {

    let dispatch = useDispatch();

    useEffect(() => {
        let checkupID = getStorageItem(Constants.STORAGE.CHECKUP_ID);
        if (checkupID) {
            dispatch(Action.getCheckupDTOByID(checkupID))
        } else {
            dispatch(CheckupActions.resetCheckupData());
        }
        return (() => {
            dispatch(Action.reset());
        })
    }, []);

    return (<>
            <CreateCheckupForm setPageIndex={setPageIndex} nextPageIndex={nextPageIndex} prevPageIndex={prevPageIndex}/>
        </>
    );
};

export default withReducer('checkup', reducer)(CreateCheckUpBase);