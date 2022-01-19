import React from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

function AppModal(props) {

    let {isOpen, className, onToggle, header, body, footer,size} = props;
    if (!className) {
        className = '';
    }

    if(!size){
        size='xl'
    }

    return (
        <Modal isOpen={isOpen} toggle={onToggle} className={className} size={size}>
            <ModalHeader toggle={onToggle}>
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
                {
                    footer
                }
            </ModalFooter>
        </Modal>
    );
}

export default AppModal;
