import React from 'react';
import MedicineAddEditFrom from "./MedicineAddEditFrom";
import {CButton, CCard, CCardBody, CCol, CRow} from "@coreui/react";
import {useDispatch, useSelector} from "react-redux";
import Constants from "../../../../../../../utils/Constants";
import * as _ from "lodash";
import {getStringArrayVales} from "./SupportFuntions";
import * as Actions from "../../store/action/medicine.add.edit.action"

const MedicineAddEditBase = () => {

    const dispatch = useDispatch();
    const data = useSelector(({medicine}) => medicine.medicineAddEdit);

    const deleteMedicine = () => {
        let medicine = _.cloneDeep(data.medicine);
        medicine.status = Constants.STATUS_CONST.INA;
        dispatch(Actions.saveOrUpdateMedicine(medicine));
    }
    const generateSaveObj = () => {
        let doseArr = [];
        let frequentArr = [];
        let mealTimeArr = [];
        let tradeArr = [];

        let medicine = _.cloneDeep(data.medicine);

        if (!_.isEmpty(data.formData.values)) {

            let formDoseArray = data.formData.values.medicineDoses;
            let formFrequentArray = data.formData.values.medicineFrequents;
            let formMealTime = data.formData.values.medicineMealTimes;
            let formTrades = data.formData.values.trades;

            formDoseArray.forEach(
                (dose, index) => {
                    if (!_.isEmpty(dose)) {
                        doseArr.push(Object.assign({}, {dose: dose.trim()}, {
                            status: Constants.STATUS_CONST.ACT,
                            isDefault: index === 0 ? Constants.YES_NO_CONST.Y : Constants.YES_NO_CONST.N
                        }))
                    }
                }
            );

            //Remove Does Array
            let currentDoses = getStringArrayVales(medicine.doseDTOS ? medicine.doseDTOS : [], 'dose');
            let removedDoeses = _.difference(currentDoses, formDoseArray);
            if (removedDoeses.length > 0) {
                removedDoeses.forEach(element => {
                    doseArr.push(Object.assign({}, {dose: element.trim()}, {
                        status: Constants.STATUS_CONST.INA,
                        isDefault: Constants.YES_NO_CONST.N
                    }))
                });
            }

            formFrequentArray.forEach(
                (frequent, index) => {
                    if (!_.isEmpty(frequent)) {
                        frequentArr.push(Object.assign({}, {frequent: _.upperFirst(frequent.trim())}, {
                            status: Constants.STATUS_CONST.ACT,
                            isDefault: index === 0 ? Constants.YES_NO_CONST.Y : Constants.YES_NO_CONST.N
                        }))
                    }
                }
            );

            // To Remove Frequent Array
            let currentFrequents = getStringArrayVales(medicine.frequentDTOS ? medicine.frequentDTOS : [], 'frequent');
            let removedFrequents = _.difference(currentFrequents, formFrequentArray);
            if (removedFrequents.length > 0) {
                removedFrequents.forEach(element => {
                    frequentArr.push(Object.assign({}, {frequent: element.trim()}, {
                        status: Constants.STATUS_CONST.INA,
                        isDefault: Constants.YES_NO_CONST.N
                    }))
                });
            }


            formMealTime.forEach(
                (mealTime, index) => {
                    if (!_.isEmpty(mealTime)) {
                        mealTimeArr.push(Object.assign({}, {mealTime: _.upperFirst(mealTime.trim())}, {
                            status: Constants.STATUS_CONST.ACT,
                            isDefault: index === 0 ? Constants.YES_NO_CONST.Y : Constants.YES_NO_CONST.N
                        }))
                    }
                }
            );

            //To Remove Meal times
            let currentMealTimes = getStringArrayVales(medicine.mealTimeDTOS ? medicine.mealTimeDTOS : [], 'mealTime');
            let removedMealTimes = _.difference(currentMealTimes, formMealTime);
            if (removedMealTimes.length > 0) {
                removedMealTimes.forEach(element => {
                    mealTimeArr.push(Object.assign({}, {mealTime: element.trim()}, {
                        status: Constants.STATUS_CONST.INA,
                        isDefault: Constants.YES_NO_CONST.N
                    }))
                });
            }

            formTrades.forEach(
                trade => {
                    if (!_.isEmpty(trade)) {
                        tradeArr.push(Object.assign({}, {tradeName: _.upperFirst(trade.trim())}, {
                            status: Constants.STATUS_CONST.ACT
                        }))
                    }
                }
            );

            let currentTrades = getStringArrayVales(medicine.tradeDTOS ? medicine.tradeDTOS : [], 'tradeName');
            let removedTrades = _.difference(currentTrades, formTrades);
            if (removedTrades.length > 0) {
                removedTrades.forEach(element => {
                    tradeArr.push(Object.assign({}, {tradeName: element.trim()}, {
                        status: Constants.STATUS_CONST.INA,
                    }))
                });
            }

            let saveObject = Object.assign(
                {},
                {medicineID: data.formData.values.medicineID},
                {routeOfAdmin: data.formData.values.routeOfAdmin},
                {medicineName: data.formData.values.medicineName},
                {doseDTOS: doseArr},
                {frequentDTOS: frequentArr},
                {mealTimeDTOS: mealTimeArr},
                {tradeDTOS: tradeArr},
                {status: data.formData.values.status}
            );
            
            dispatch(Actions.saveOrUpdateMedicine(saveObject));
        }
    };

    return (
        <div>
            <CRow>
                <CCol xs="12">
                    <CCard>
                        <CCardBody>
                            <MedicineAddEditFrom/>
                            <CRow>
                                <CCol xs="11">
                                    <CButton
                                        hidden={!(data.medicine.medicineID)||((data.medicine.medicineID)&&(data.medicine.status==Constants.STATUS_CONST.INA))}
                                        onClick={() => {
                                            deleteMedicine();
                                        }}
                                        color="primary" className="float-right">Delete</CButton>
                                </CCol>
                                <CCol xs="1">
                                    <CButton
                                        onClick={() => {
                                            generateSaveObj();
                                        }}
                                        color="primary" className="float-right">Save</CButton>
                                </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    );
};

export default MedicineAddEditBase;