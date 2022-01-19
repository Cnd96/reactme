import React, {useEffect} from 'react';
import withReducer from "../../../../../../../store/withReducer";
import reducer from "./store/reducers";
import {useDispatch} from "react-redux";
import {getStorageItem} from "../../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../../utils/Constants";
import * as Action from "./store/actions/instruction.note.add.edit.action";
import InstructionAddEditForm from "./components/InstructionAddEditForm";
import Image from "./webCam/WebCamImage";

const CreateInstructionNote = ({setPageIndex, nextPageIndex, prevPageIndex}) => {

    let dispatch = useDispatch();

    useEffect(() => {

        let checkupID = getStorageItem(Constants.STORAGE.CHECKUP_ID);
        if (checkupID) {
            dispatch(Action.getInstructionNoteDTOByCheckupID(checkupID))
        } else {
            dispatch(Action.onRemoveInstructionData());
        }
        return (() => {
            dispatch(Action.onRemoveInstructionData())
        })
    }, [dispatch]);


    return (
        <div>
            <InstructionAddEditForm setPageIndex={setPageIndex} nextPageIndex={nextPageIndex} prevPageIndex={prevPageIndex} />
            <Image/>
        </div>
    );
};

export default withReducer('InstructionNote', reducer)(CreateInstructionNote);