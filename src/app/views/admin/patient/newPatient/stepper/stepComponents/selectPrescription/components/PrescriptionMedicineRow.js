import React, {useEffect, useState} from 'react';
import {CButton, CCol, CFormGroup, CRow, CTooltip} from "@coreui/react";
import * as Action from "../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {Formik} from "formik";
import CreatableSelect from 'react-select/creatable';
import CIcon from "@coreui/icons-react";

let initValues = {
    prescriptionTemplateMedicineID: '',
    medicineID: '',
    medicineName: '',
    doseID: '',
    dose: '',
    mealTimeID: '',
    mealTime: '',
    frequentID: '',
    frequent: ''
};

let defaultOption = null;

const PrescriptionMedicineRow = ({dataRow, index}) => {
    const dispatch = useDispatch();
    const data = useSelector(({selectPrescriptionTemplate}) => selectPrescriptionTemplate.selectPrescriptionTemplate);
    const [medicineID, setMedicineID] = useState();

    const [doses, setDoses] = useState([]);
    const [mealTimes, setMealTimes] = useState([]);
    const [frequents, setFrequents] = useState([]);

    const [defaultMedicine, setDefaultMedicine] = useState(defaultOption);
    const [defaultDose, setDefaultDoses] = useState(defaultOption);
    const [defaultMealTime, setDefaultMealTimes] = useState(defaultOption);
    const [defaultFrequent, setDefaultFrequents] = useState(defaultOption);


    useEffect(() => {
        let defaultMedicine = Object.assign({}, {
            label: dataRow.medicineName,
            value: dataRow.medicineName,
            medicineID: dataRow.medicineID,
            uuid: dataRow.uuid
        });

        if (dataRow.medicineID) {
            getDosesMealTimesFrequents(dataRow.medicineID);
        }

        let defaultDose = Object.assign({}, {
            label: dataRow.dose,
            value: dataRow.dose,
            medicineID: dataRow.medicineID,
            doseID: dataRow.doseID,
            uuid: dataRow.uuid
        });
        let defaultMealTime = Object.assign({}, {
            label: dataRow.mealTime,
            value: dataRow.mealTime,
            medicineID: dataRow.medicineID,
            mealTimeID: dataRow.mealTimeID,
            uuid: dataRow.uuid
        });
        let defaultFrequent = Object.assign({}, {
            label: dataRow.frequent,
            value: dataRow.frequent,
            medicineID: dataRow.medicineID,
            frequentID: dataRow.frequentID,
            uuid: dataRow.uuid
        });

        setDefaultMedicine(defaultMedicine);
        setDefaultDoses(defaultDose);
        setDefaultMealTimes(defaultMealTime);
        setDefaultFrequents(defaultFrequent);

    }, [data.addedTemplateMedicine]);

    useEffect(() => {
        setDoses(data.dose[medicineID]);
    }, [data.dose[medicineID]]);

    useEffect(() => {
        setMealTimes(data.mealTime[medicineID]);
    }, [data.mealTime[medicineID]]);

    useEffect(() => {
        setFrequents(data.frequents[medicineID]);
    }, [data.frequents[medicineID]]);


    const getDosesMealTimesFrequents = (medicineID) => {
        if (!data.dose[medicineID]) {
            dispatch(Action.getDoseList({medicineID: medicineID}));
        }

        if (!data.mealTime[medicineID]) {
            dispatch(Action.getMealTimeList({medicineID: medicineID}));
        }

        if (!data.frequents[medicineID]) {
            dispatch(Action.getFrequentList({medicineID: medicineID}));
        }
    };

    const handleChangeMedicine = (newValue, actionMeta) => {
        if (newValue) {
            setDefaultMedicine(newValue);
            if (newValue.medicineID) {
                getDosesMealTimesFrequents(newValue.medicineID);
                setMedicineID(newValue.medicineID);
            }
            dispatch(Action.addTemplateMedicine({
                uuid: dataRow.uuid,
                medicineID: newValue.medicineID,
                medicineName: newValue.label
            }))
        }
    };

    const handleChangeDose = (newValue, actionMeta) => {
        if (newValue) {
            setDefaultDoses(newValue);
            dispatch(Action.addTemplateMedicine({uuid: dataRow.uuid, doseID: newValue.doseID, dose: newValue.label}))
        }
    };

    const handleChangeMealTime = (newValue, actionMeta) => {
        if (newValue) {
            setDefaultMealTimes(newValue);
            dispatch(Action.addTemplateMedicine({
                uuid: dataRow.uuid,
                mealTimeID: newValue.mealTimeID,
                mealTime: newValue.label
            }));
        }
    };

    const handleChangeFrequent = (newValue, actionMeta) => {
        if (newValue) {
            setDefaultFrequents(newValue);
            dispatch(Action.addTemplateMedicine({
                uuid: dataRow.uuid,
                frequentID: newValue.frequentID,
                frequent: newValue.label
            }));
        }
    };

    const toggleState = () => {
        dispatch(Action.toggleState(dataRow));
    };

    return (
        <Formik
            enableReinitialize={true}
            initialValues={initValues}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    setSubmitting(false)
                }, 200)
            }}
            validateOnMount={true}
            validateOnChange={true}
            validate={(values => {
            })}
        >
            <CRow key={index}
                  className={'clickable-data-row'}
                  style={dataRow.removed ? {backgroundColor: '#dee6f3', paddingTop: '10px',paddingBottom: '2px'} : null}
            >
                <CCol>
                    <CFormGroup>
                        <CreatableSelect
                            isClearable
                            value={defaultMedicine}
                            onChange={handleChangeMedicine}
                            options={data.medicineList}
                        />
                    </CFormGroup>
                </CCol>

                <CCol>
                    <CFormGroup>
                        <CreatableSelect
                            isClearable
                            value={defaultDose}
                            onChange={handleChangeDose}
                            options={doses}
                        />
                    </CFormGroup>
                </CCol>

                <CCol>
                    <CFormGroup>
                        <CreatableSelect
                            isClearable
                            value={defaultMealTime}
                            onChange={handleChangeMealTime}
                            options={mealTimes}
                        />
                    </CFormGroup>
                </CCol>
                <CCol>
                    <CFormGroup>
                        <CreatableSelect
                            value={defaultFrequent}
                            isClearable
                            onChange={handleChangeFrequent}
                            options={frequents}
                        />
                    </CFormGroup>
                </CCol>
                <CCol className="text-align-center">
                    <CFormGroup>
                        <CTooltip
                            content={'Add new Prescription Template'}
                        >
                            <CButton
                                onClick={() => {
                                    toggleState()
                                }}
                                color="danger">
                                <CIcon size={'sm'} name={dataRow.removed ? "cil-reload" : "cil-x-circle"}/>
                            </CButton>
                        </CTooltip>
                    </CFormGroup>
                </CCol>
            </CRow>
        </Formik>
    );
};

export default PrescriptionMedicineRow;