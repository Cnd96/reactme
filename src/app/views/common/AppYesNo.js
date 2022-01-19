import {CButton} from "@coreui/react";
import React from "react";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

function AppYesNo(props) {

    let {isOpen, onYes, onNo, header, body, className, size} = props;

    if (!className) {
        className = '';
    }

    return (

        <Modal isOpen={isOpen} toggle={onNo} className={className} size={size ? size : null}>
            <ModalHeader toggle={onNo}>
                {
                    header
                }
            </ModalHeader>
            <ModalBody>
                {
                    body
                }
            </ModalBody>
            <ModalFooter>
                <>
                    <CButton
                        color="primary"
                        onClick={onYes}
                    >Yes</CButton>
                    {' '}
                    <CButton color="secondary" onClick={onNo}>No</CButton>
                </>
            </ModalFooter>
        </Modal>
    );
}

export default AppYesNo;
