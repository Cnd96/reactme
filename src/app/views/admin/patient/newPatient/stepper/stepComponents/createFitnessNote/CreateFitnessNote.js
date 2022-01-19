import React, {useEffect} from 'react';
import withReducer from "../../../../../../../store/withReducer";
import reducer from "./store/reducers";
import FitnessNoteAddEditFrom from "./components/FitnessNoteAddEditFrom";
import {useDispatch} from "react-redux";
import {getStorageItem} from "../../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../../utils/Constants";
import * as Action from "./store/actions";

const CreateFitnessNote = ({setPageIndex}) => {

    let dispatch = useDispatch();

    useEffect(() => {
        let fitnessNoteID = getStorageItem(Constants.STORAGE.FITNESS_NOTE_ID);
        if (fitnessNoteID) {
            dispatch(Action.getFitnessNoteDTOByID(fitnessNoteID))
        } else {
            dispatch(Action.onRemoveFitnessNoteData())
        }
        return (() => {

        })
    }, [dispatch]);

    return (
        <div>
            <FitnessNoteAddEditFrom setPageIndex={setPageIndex}/>
        </div>
    );
};
export default withReducer('fitnessNote', reducer)(CreateFitnessNote);