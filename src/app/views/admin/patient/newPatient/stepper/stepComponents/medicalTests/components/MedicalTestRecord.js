import React, {useEffect, useState} from 'react';
import {CFormGroup,CRow ,CCol , CInput,CSelect } from "@coreui/react";
import {useDispatch, useSelector} from "react-redux";
import * as Actions from '../store/actions/patient.add.medical.test.results.action'


const MedicalTestRecordNew = ({medicalTestRecord}) => {

    let dispatch = useDispatch();
    const checkupData = useSelector(({checkup}) => checkup.checkupAddEdit);
    const [formValue, setFormValue] = useState({value: '', measureUnit: ''});

    const setValue = () => {
        let value = '';
        let measureUnit = medicalTestRecord.measurementUnits ? medicalTestRecord.measurementUnits[0]:'';
        setFormValue({...formValue, value: value, measureUnit: measureUnit});
    };

    const onChangeValue = (event) => {
        const target = event.target;
        dispatch(Actions.onSetMedicalResult({
            medicalTestRecordID: medicalTestRecord.medicalTestRecordID,
            ...formValue,
            value: target.value
        }));
        setFormValue({...formValue, value: target.value});
    };

    const onChangeUnit = (event) => {
        const target = event.target;
        dispatch(Actions.onSetMedicalResult({
            medicalTestRecordID: medicalTestRecord.medicalTestRecordID,
            ...formValue,
            measureUnit: target.value
        }));
        setFormValue({...formValue,  measureUnit: target.value});
    };

    useEffect(() => {
        setValue();
    }, [checkupData.checkup.medicalTestResults]);

    return (
        <CRow >
            <CCol sm="12" md="6" lg="5" >
                <h6 style={{textAlign: 'right',paddingTop:'10px'}}>{medicalTestRecord.measurementName}</h6> 
            </CCol>
            <CCol sm="12" md="6" lg="3" >
                <CFormGroup>
                    <CInput
                        type="text"
                        name={'value'}
                        placeholder={'Value'}
                        value={formValue.value ? formValue.value : ''}
                        onChange={(e)=>onChangeValue(e)}
                    />
                </CFormGroup>
            </CCol>
            <CCol sm="12" md="6" lg="3" >
                <CFormGroup>
                    {medicalTestRecord.measurementUnits.length > 0 && 
                        <CSelect custom name="status" style={{height:'35px'}}  onChange={(e)=>onChangeUnit(e)} >
                            {
                                medicalTestRecord.measurementUnits.map((item) => {
                                    return (
                                    <option key={item} value={item}>{item}</option>
                                    );
                                })
                            }
                        </CSelect>
                    }   
                </CFormGroup> 
            </CCol>
        </CRow>
    );
};

export default MedicalTestRecordNew;