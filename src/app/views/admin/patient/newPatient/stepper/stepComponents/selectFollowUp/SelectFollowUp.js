import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import * as Actions from "./store/actions";
import withReducer from "../../../../../../../store/withReducer";
import reducer from "./store/reducers";
import FollowUpList from "./components/FollowUpList";
import Constants from "../../../../../../../../utils/Constants";

const SelectFollowUp = ({setPageIndex}) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.getFollowUpList({status: Constants.STATUS_CONST.ACT}))
    }, []);

    return (
        <div>
            <FollowUpList setPageIndex={setPageIndex}/>
        </div>
    );
};

export default withReducer('SelectFollowUps', reducer)(SelectFollowUp);