import React from 'react';
import {CCard, CCardBody, CCol} from "@coreui/react";
import {useSelector} from "react-redux";
import PrescriptionTemplateMedicineRow from "./PrescriptionTemplateMedicineRow";

const PrescriptionTemplateMedicineList = () => {
    const data = useSelector(({prescriptionTemplate}) => prescriptionTemplate.prescriptionTemplateAddEdit);

    return (
        <CCol xs="12">
            <CCard>
                <CCardBody>
                    {
                        data.addedTemplateMedicine && data.addedTemplateMedicine.length > 0 &&
                        <table className="table">
                            <thead>
                            <tr>
                                <th className="w-20-p text-align-center">Medicine</th>
                                <th className="w-20-p text-align-center">Dose</th>
                                <th className="w-20-p text-align-center">Meal Time</th>
                                <th className="w-20-p text-align-center">Frequent</th>
                                <th className="w-20-p text-align-center">Action</th>
                            </tr>
                            </thead>
                        </table>
                    }
                    <div>
                        {data.addedTemplateMedicine.map((data, index) => {
                            return (
                                <PrescriptionTemplateMedicineRow dataRow={data} key={index}/>
                            );
                        })
                        }
                    </div>
                </CCardBody>
            </CCard>
        </CCol>
    );
};

export default PrescriptionTemplateMedicineList;