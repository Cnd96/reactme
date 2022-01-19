import {CFormGroup, CInputCheckbox, CLabel} from "@coreui/react";
import React from "react";

function CustomCheckBox(props) {
    return (

        <>
            <CFormGroup variant="custom-checkbox" inline>
                <CInputCheckbox
                    custom
                    id={props.id}
                    name={props.name}
                    checked={props.checked}
                    onChange={(e) => {
                        props.onCheckChange(e, props.value)
                    }}
                />
                <CLabel variant="custom-checkbox" htmlFor={props.name}>{props.label}</CLabel>
            </CFormGroup>
        </>
    );
}

export default CustomCheckBox;
