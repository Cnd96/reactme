import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { CCol, CRow, CFormGroup, CInput, CButton} from "@coreui/react";

import * as Actions from '../store/actions/patient.add.medical.test.results.action'
import MedicalTestRecord from './MedicalTestRecord';
import CheckupHistory from '../../checkupHistory/CheckupHistory';
import Examination from './Examination';
import ClinicalAppModal from './ClinicalAppModal';
import CheckupHistoryByYear from '../../checkupHistory/CheckupHistoryByYear';


const colors = ['#e57373','#f06292','#fff176','#dce775','#4dd0e1','#ffb74d','#64b5f6','#90caf9','#a1887f','#18ffff','#b0bec5','#bcaaa4','#80cbc4'];

Math.easeInOutQuad = function (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

const MedicalTestList = () => {
    let dispatch = useDispatch();

    const patientMedicalTestsData = useSelector(({patientMedicalTest}) => patientMedicalTest.patientMedicalTestAddEdit);
    const [examination, setExamination] = useState({});
    const [testTypes, setTestTypes] = useState([]);
    const [height, setHeight] = useState({value: '', measureUnit: ''});
    const [weight, setWeight] = useState({value: '', measureUnit: ''});
    const [bmi, setBMI] = useState(0);
    const [bmiRecordId,setBmiRecordId] = useState(0);
    const[isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);

    const toggleHistoryModal = () => {
        setIsHistoryModalOpen(!isHistoryModalOpen);
    }

    useEffect(() => {
        if(patientMedicalTestsData.medicalTestTypes.length>0){
            let tempExamination = patientMedicalTestsData.medicalTestTypes.filter(function( obj ) {
                return obj.testType.toLowerCase() == 'examination';
            });
            if(tempExamination.length>0){
                let Examination = tempExamination[0]
                Examination.height = Examination.medicalTestRecords.find(o => o.measurementName.toLowerCase() == 'height')
                Examination.weight = Examination.medicalTestRecords.find(o => o.measurementName.toLowerCase() == 'weight')
                Examination.bmi = Examination.medicalTestRecords.find(o => o.measurementName.toLowerCase() == 'bmi')
                Examination.medicalTestRecords = Examination.medicalTestRecords.filter(function( obj ) {
                    return  obj.measurementName.toLowerCase() != 'height' &&  obj.measurementName.toLowerCase() != 'weight'&&  obj.measurementName.toLowerCase() != 'bmi';
                });
                setBmiRecordId(Examination.bmi.medicalTestRecordID)
                setExamination(Examination)
            }
            
            let tempTest= patientMedicalTestsData.medicalTestTypes.filter(function( obj ) {
                return obj.testType.toLowerCase() != 'examination';
            });
            setTestTypes(tempTest)
        }       
    }, [patientMedicalTestsData.medicalTestTypes]);


    const onChange = (indexr) => {
        let myElement = document.getElementById('m'+indexr);
        let topPos =myElement.offsetTop
        scrollTo(document.getElementById('medicalTestTypeMenuScroll'), topPos-30, 600);  
    };

    const scrollTo =function(element, to, duration) {
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 20;
            
        var animateScroll = function(){        
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if(currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }

    const onHeightChange = function(val){
        setHeight(val)
        calculateBMI(val,weight)

    }

    const onWeightChange = function(val){
        setWeight(val)
        calculateBMI(height,val)
    }

    const onUnitChangeWeight = function(val){
        setWeight(val)
        calculateBMI(height,val)
    }

    const onUnitChangeHeight = function(val){
        setHeight(val)
        calculateBMI(val,weight)
    }

    const calculateBMI = function (h,w){
        let tempH = parseInt(h.value);
        let tempW = parseInt(w.value);
        if(!isNaN(tempH)&&!isNaN(tempW)){
            if(h.measureUnit.toLowerCase() == 'in'){
                tempH = tempH * 2.54
            } 

            if(w.measureUnit.toLowerCase() == 'lb'){
                tempW = tempW * 0.453
            } 
            let tempBMI = tempW / (tempH*tempH) *10000
            setBMI(tempBMI)
            dispatch(Actions.onSetMedicalResult({
                medicalTestRecordID: bmiRecordId,
                measureUnit:'',
                value: Math.round(tempBMI * 10) / 10 
            }));
        }
    }

    return (
        <div>
            <CRow>
                <CCol sm="12" md="6" lg="5">
                    <div className='medicalTestTypeMenu' >
                        {examination!=undefined && 
                            <div style={{backgroundColor:`${colors[0]}`}}  onClick={()=>onChange(0)} className='medicalTestTypeCard'  >
                                <a >Examination</a> 
                            </div>
                        }
                        {
                            testTypes.map((medicalTestType, indexr) =>
                            <div style={{backgroundColor:`${colors[indexr%(colors.length-1)+1]}`}} key={indexr} onClick={()=>onChange((indexr+1))} className='medicalTestTypeCard'  >
                                <a >{medicalTestType.testType}</a> 
                            </div>
                            )
                        }
                    </div>
                    <br/>
                    <div  style={{overflowY:'scroll',height:'500px',overflowX:'hidden'}} id='medicalTestTypeMenuScroll'>
                        {examination!=undefined && 
                            <div  style={{backgroundColor:`${colors[0]}`,marginBottom:'20px'}} id='m0'>
                                <h4 className='p-2'>Examination</h4>
                                {examination.height!=undefined && <Examination onValueChange={(e)=>onHeightChange(e)} onUnitChange={(e)=>onUnitChangeHeight(e)} medicalTestRecord={examination.height}/>}
                                {examination.weight!=undefined && <Examination onValueChange={(e)=>onWeightChange(e)} onUnitChange={(e)=>onUnitChangeWeight(e)} medicalTestRecord={examination.weight}/>}
                                {examination.bmi!=undefined &&
                                    <CRow >
                                        <CCol sm="12" md="6" lg="5" >
                                            <h6 style={{textAlign: 'right',paddingTop:'10px'}}>BMI</h6> 
                                        </CCol>
                                        <CCol sm="12" md="6" lg="3" >
                                            <CFormGroup>
                                                <CInput
                                                    type="text"
                                                    name={'value'}
                                                    disabled = {true}
                                                    value={bmi}
                                                />
                                            </CFormGroup>
                                        </CCol>
                                    </CRow>
                                }
                                {   examination.medicalTestRecords &&
                                    examination.medicalTestRecords.map((record,index)=>
                                    <MedicalTestRecord key={index} medicalTestRecord={record}/>
                                        
                                    )
                                }
                            </div>
                        }
                        {   
                        testTypes.map((medicalTestType, indexr) =>
                            <div key={indexr} style={{backgroundColor:`${colors[indexr%(colors.length-1)+1]}`,marginBottom:'20px'}} id={'m'+(indexr+1)}>
                                <h4 className='p-2'>{medicalTestType.testType}</h4>
                                {
                                    medicalTestType.medicalTestRecords.map((record,index)=>
                                    <MedicalTestRecord key={index} medicalTestRecord={record}/>
                                        
                                    )
                                }
                                
                            </div>
                        )
                        }
                    </div>
                </CCol>
                
                <CCol sm="12" md="6" lg="7">
                    <br/>
                        <CButton
                            color="secondary"
                            onClick={toggleHistoryModal}
                            style={{float:'right'}}
                        >
                            Show History
                        </CButton>
                    <br></br>
                    <br></br>
                    <CheckupHistory/>
                </CCol>
            </CRow>

            <ClinicalAppModal
                isOpen={isHistoryModalOpen}
                onToggle={toggleHistoryModal}
                title='Patient History'
                body={
                    <CheckupHistoryByYear/>
                }
                footer={
                    <>
                        <CButton color='primary' onClick={toggleHistoryModal}>
                            Close
                        </CButton>
                    </>
                }
            />
        </div>
    );
};

export default MedicalTestList;
