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

    const generateSaveObj = () => {
        let doseArr = [];
        let frequentArr = [];
        let mealTimeArr = [];
        let tradeArr = [];

        let medicine = _.cloneDeep(data.medicine);

        if (!_.isEmpty(data.formData.values)) {

            let formDoseArray = _.uniq(data.formData.values.medicineDose.split(','));
            let formFrequentArray = _.uniq(data.formData.values.medicineFrequent.split(','));
            let formMealTime = _.uniq(data.formData.values.medicineMealTime.split(','));
            let formTrades = _.uniq(data.formData.values.trade.split(','));

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
            console.log("currentDoses", currentDoses);
            console.log("formDoseArray", formDoseArray);
            console.log("Removed Doesea", removedDoeses);
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
            console.log("currentFrequents", currentFrequents);
            console.log("formFrequentArray", formFrequentArray);
            console.log("remove frequents", removedFrequents);
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
            console.log("currnetMeals", currentMealTimes);
            console.log("formMealtimes", formMealTime);
            console.log("remove meals", removedMealTimes);
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
                {medicineName: data.formData.values.medicineName},
                {doseDTOS: doseArr},
                {frequentDTOS: frequentArr},
                {mealTimeDTOS: mealTimeArr},
                {tradeDTOS: tradeArr},
                {status: data.formData.values.status}
            );
            console.log(saveObject);
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
                                <CCol xs="12">
                                    <CButton
                                        // disabled={!data.formData.isValid}
                                        onClick={() => {
                                            console.log("here We save");
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