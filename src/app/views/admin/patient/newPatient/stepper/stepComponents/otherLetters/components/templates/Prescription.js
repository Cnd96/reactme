import React, {useEffect} from 'react';
import {getStorageItem} from "../../../../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../../../../utils/Constants";
import {useDispatch, useSelector} from "react-redux";
import * as Action from "../../store/actions"
import {getFullName} from "../../../../../../../../../../utils/HealthTrackerUtils";

const Prescription = React.forwardRef((props, ref) => {

    let dispatch = useDispatch();
    const reducerData = useSelector(({selectOtherLetter}) => selectOtherLetter.selectOtherLetter);

    let procedure = reducerData.notes.procedure;
    let indication = reducerData.notes.indication;
    let postop = reducerData.notes.postop;
    let patient = reducerData.patient;
    let checkup = reducerData.checkup;

    useEffect(() => {
        let checkupID = getStorageItem(Constants.STORAGE.CHECKUP_ID);
        dispatch(Action.getPrescriptionByID(checkupID));
    }, []);
    return (
        <div ref={ref} style={{padding: '100px 25px 10px 100px'}}>
            <div className='privilege-scroll-section'>
                <div className="prescription-section">
                    <div>
                        <h5 className="text-align-center">Prescription</h5>
                        <table>
                            <tbody>

                            <tr>
                                <th colSpan="2">Dr {reducerData.doctor.firstName} {reducerData.doctor.middleName} {reducerData.doctor.lastName} {reducerData.doctor.description}</th>
                            </tr>

                            <tr>
                                <th colSpan="2"><br/></th>
                            </tr>

                            <tr>
                                <th>Name of the Patient</th>
                                <td> : {getFullName(patient)}</td>
                            </tr>

                            <tr>
                                <th>Patient Code</th>
                                <td> : {patient.patientCode}</td>
                            </tr>

                            <tr>
                                <th>Age</th>
                                <td> : {patient.age}</td>
                            </tr>
                            <tr>
                                <th>Checkup No</th>
                                <td> : {checkup.checkupCode}</td>
                            </tr>
                            <tr>
                                <th>Checkup Date</th>
                                <td> : {checkup.checkupDateStr}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    <hr/>
                    <div className="align-content-center">
                        {
                            reducerData.prescription && reducerData.prescription.addedTemplateMedicine &&
                            <table className="table custom-table">
                                <thead>
                                <tr>
                                    <th>
                                        Medicine
                                    </th>
                                    <th>
                                        Dose
                                    </th>
                                    <th>
                                        Meal Time
                                    </th>
                                    <th>
                                        Frequency
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    reducerData.prescription.addedTemplateMedicine.map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{data.medicineName}</td>
                                                <td>{data.dose}</td>
                                                <td>{data.mealTime}</td>
                                                <td>{data.frequent}</td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Prescription;