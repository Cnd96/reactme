import React, {useRef} from 'react';
import {useReactToPrint} from "react-to-print";
import Prescription from "./Prescription";
import {CButton} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const PrintPrescription = () => {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    });

    return (
        <div>

            <Prescription ref={componentRef}/>
            <div className='d-flex flex-row flex-wrap  justify-content-end'>
                <CButton
                    onClick={handlePrint}
                    className='custom-button'
                    color="primary"
                >
                    <span><CIcon size={'lg'} name={'cil-print'} style={{marginRight: '3px'}}/></span>
                    Print
                </CButton>
            </div>
        </div>
    );
};

export default PrintPrescription;