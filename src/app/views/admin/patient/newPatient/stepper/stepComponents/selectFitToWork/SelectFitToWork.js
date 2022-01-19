import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import * as Actions from "./store/actions";
import withReducer from "../../../../../../../store/withReducer";
import reducer from "./store/reducers";
import FitToWorkList from "./components/FitToWorkList";
import Constants from "../../../../../../../../utils/Constants";

const SelectFitToWork = ({setPageIndex}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.getFitToWorkList({status:Constants.STATUS_CONST.ACT}))
    }, []);

    return (
        <div>
            <FitToWorkList setPageIndex={setPageIndex}/>
        </div>
    );
};

export default withReducer('SelectFitToWork', reducer)(SelectFitToWork);