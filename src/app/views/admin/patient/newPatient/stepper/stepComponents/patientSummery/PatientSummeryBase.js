import React, {useEffect} from 'react';
import withReducer from "../../../../../../../store/withReducer";
import reducer from "./store/reducers";
import PatientBasicInformation from "./components/PatientBasicInformation";
import PatientSocialHabitReport from "./components/PatientSocialHabitReport";
import {useDispatch} from "react-redux";
import * as Actions from './store/actions'
import PatientFamilyDiseases from "./components/PatientFamilyDiseases/PatientFamilyDiseases";
import CheckupMedicalTestResults from "./components/CheckupMedicalTestResults/CheckupMedicalTestResults";
import CheckupDiagnosis from "./components/CheckupDiagnosis";
import {getStorageItem} from "../../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../../utils/Constants";
import CheckupDietaryHabit from "./components/CheckupDietaryHabit";
import CheckupPhysicalActivity from "./components/CheckupPhysicalActivity";


const downloadFile = (url, fileName) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    // a.target = '_blank';
    a.click();
};

const createBlob = (fileName) => {
    if (!_.isEmpty(fileName)) {
        let fileURL = Constants.REPORT_BASE_URL + fileName;
        downloadFile(fileURL, fileName);
    }
};


const PatientSummeryBase = () => {

    const dispatch = useDispatch();

    useEffect(() => {

        let storagePatientID = getStorageItem(Constants.STORAGE.PATIENT_ID);
        let storageCheckupID = getStorageItem(Constants.STORAGE.CHECKUP_ID);
        let patientID = storagePatientID;
        let checkupID = storageCheckupID;

        if (patientID) {
            dispatch(Actions.getPatientSocialHabits({patientID: patientID}));
            dispatch(Actions.getPatientFamilyDiseasesList({patientID: patientID}));
            dispatch(Actions.getPatientDTOByID(patientID));
            console.log("Patient ID", patientID);
        }

        if (checkupID) {
            let searchObj = {checkupID: checkupID};

            dispatch(Actions.getCheckupDTOByID(checkupID));
            dispatch(Actions.getCheckupMedicalTestResultsList(searchObj));
            dispatch(Actions.getCheckupDiagnosisList(searchObj));
            dispatch(Actions.getCheckupFollowUp(searchObj));
            dispatch(Actions.getCheckupFitToWork(searchObj));
            dispatch(Actions.getDietaryHabitsList(searchObj));
            dispatch(Actions.getPhysicalActivitiesList(searchObj));


            dispatch(Actions.getCheckupDietNoteByCheckupID(searchObj));
            dispatch(Actions.getCheckupFitnessNoteByCheckupID(searchObj));
            dispatch(Actions.getCheckupInstructionNoteByCheckupID(searchObj));

            console.log("Checkup ID", checkupID);
        }
    }, [dispatch]);


    const downloadReport = () => {
        let checkupID = getStorageItem(Constants.STORAGE.CHECKUP_ID);
        if (checkupID) {
            let searchObject = Object.assign({}, {checkupID: checkupID},

                {
                    includeSocialHabitData: true,
                    includeFamilyHistory: true,
                    includeDietaryHabits: true,
                    includePhysicalActivities: true,
                    includeInstruction: true
                }
            );
            dispatch(Actions.getCheckUpsDetailCSVReport(searchObject)).then(response => {
                let fileName = response.payload;
                // createBlob(fileName);    //FIXME here to download the file from the public link
                dispatch(Actions.downloadCheckUpsByDateDetailCSVReport(fileName));
            });
        }
    };

    return (
        <div>
            <PatientBasicInformation/>
            <PatientSocialHabitReport/>
            <PatientFamilyDiseases/>
            <CheckupMedicalTestResults/>
            <CheckupDiagnosis/>
            <CheckupDietaryHabit/>
            <CheckupPhysicalActivity/>
            <div className='d-flex flex-row flex-wrap  justify-content-end'>
                {/*<CButton*/}
                {/*    onClick={() => {*/}
                {/*        downloadReport()*/}
                {/*    }}*/}
                {/*    color="info"*/}
                {/*    className="row-button-styles mr-2 mb-20p">*/}
                {/*                        <span>*/}
                {/*                            <CIcon size={'lg'}*/}
                {/*                                   name={'cil-arrow-thick-from-top'}*/}
                {/*                                   style={{marginRight: '4px'}}*/}
                {/*                            />*/}
                {/*                        </span>*/}

                {/*    Download Report*/}
                {/*</CButton>*/}
            </div>
        </div>
    );
};

export default withReducer('patientSummery', reducer)(PatientSummeryBase);
