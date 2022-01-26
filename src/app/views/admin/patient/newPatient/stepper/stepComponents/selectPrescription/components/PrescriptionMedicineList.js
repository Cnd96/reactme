import React, {useEffect} from 'react';
import * as Action from "../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {CCard, CCardBody, CCol} from "@coreui/react";
import PrescriptionMedicineRow from "./PrescriptionMedicineRow";

const PrescriptionMedicineList = () => {

    const dispatch = useDispatch();
    const data = useSelector(({selectPrescriptionTemplate}) => selectPrescriptionTemplate.selectPrescriptionTemplate);

    useEffect(() => {
        if (data.prescriptionTemplateID) {
            dispatch(Action.getPrescriptionTemplateByID(data.prescriptionTemplateID));
        }
    }, [data.prescriptionTemplateID]);

    return (
        <div>
            {
                data.addedTemplateMedicine && data.addedTemplateMedicine.length > 0 &&
                <CCol xs="12">
                    <CCard>
                        <CCardBody>

                            <table className="table">
                                <thead>
                                <tr>
                                    <th className="w-20-p text-align-center">Medicine</th>
                                    <th className="w-20-p text-align-center">Dose</th>
                                    <th className="w-20-p text-align-center">Meal Time</th>
                                    <th className="w-20-p text-align-center">Frequency</th>
                                    <th className="w-20-p text-align-center">Action</th>
                                </tr>
                                </thead>
                            </table>

                            <div>
                                {data.addedTemplateMedicine.map((data, index) => {
                                    return (
                                        <PrescriptionMedicineRow dataRow={data} key={index}/>
                                    );
                                })
                                }
                            </div>
                        </CCardBody>
                    </CCard>
                </CCol>
            }
        </div>
    );
};

export default PrescriptionMedicineList;