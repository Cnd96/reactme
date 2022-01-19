import React, {useEffect} from 'react';
import PrescriptionTemplate from "./components/PrescriptionTemplate";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from "./store/actions/index";
import withReducer from "../../../../../../../store/withReducer";
import reducer from "./store/reducer";
import PrescriptionMedicineList from "./components/PrescriptionMedicineList";
import { NextButton, PrevButton, SaveButton } from "../../../../../../common/NextPrevButtonGroup";
import {getStorageItem} from "../../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../../utils/Constants";
import {trimData} from "../../../../../../../../utils/DataExtractHelper";
import * as CheckupAction from "../createCheckUp/store/action/checkup.app.add.edit.action";

const SelectPrescription = ({setPageIndex, nextPageIndex, prevPageIndex}) => {

    const dispatch = useDispatch();
    const data = useSelector(({selectPrescriptionTemplate}) => selectPrescriptionTemplate.selectPrescriptionTemplate);
    let checkupID = getStorageItem(Constants.STORAGE.CHECKUP_ID);
    const checkupData = useSelector(({checkup}) => checkup.checkupAddEdit);

    useEffect(() => {
        dispatch(Actions.getMedicineValueList({}));
        dispatch(Actions.getPrescriptionTemplateList());
        
        if (checkupData.checkup.prescriptionID) {
            dispatch(Actions.getPrescriptionByID(checkupData.checkup.prescriptionID));
        }
        
        return (() => {
            dispatch(Actions.onResetPrescription());
        })
    }, []);

    const saveFunction = (isNext) => {
        let saveObj = Object.assign({},
            {checkupID: checkupID},
            {...data.prescription},
            data.prescriptionTemplateID ? {prescriptionTemplateID: data.prescriptionTemplateID} : {},
            {addedTemplateMedicine: data.addedTemplateMedicine});

        dispatch(Actions.saveOrUpdateCheckupWithPrescription(trimData(saveObj))).then(response => {
            dispatch(CheckupAction.onSetCheckup(response.payload));
            isNext && setPageIndex(nextPageIndex);
        })
    };

    return (
        <div>
            <div className='d-flex flex-row flex-wrap  justify-content-end'>
                <PrevButton isValid={true} onClickHandler={ () => setPageIndex(prevPageIndex) } />
                <SaveButton isValid={true} onClickHandler={ () => saveFunction(false) } />
                <NextButton isValid={true} onClickHandler={ () => saveFunction(true) } />
            </div>
            <PrescriptionTemplate/>
            <PrescriptionMedicineList/>
        </div>
    );
};

export default withReducer('selectPrescriptionTemplate', reducer)(SelectPrescription);