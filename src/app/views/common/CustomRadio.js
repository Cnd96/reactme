import React from 'react';
import {CFormGroup, CInputRadio, CLabel} from "@coreui/react";

const CustomRadio = (props) => {
    return (
        <>
            <CFormGroup>
                <CInputRadio
                    id={props.id}
                    name={props.name}
                    checked={props.checked}
                    onChange={() => {
                        props.onCheckChange(props.value)
                    }}
                />
                <CLabel htmlFor={props.name}>{props.label}</CLabel>
            </CFormGroup>
        </>
    );
};

export default CustomRadio;