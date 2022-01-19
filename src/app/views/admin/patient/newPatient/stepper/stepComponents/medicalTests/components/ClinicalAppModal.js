import React from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

const ClinicalAppModal = (props) => {
    const {
            isOpen,
            onToggle,
            title,
            body,
            footer,
        } = props;
    return (
        <Modal isOpen={isOpen} toggle={onToggle} size='xl'>
            <ModalHeader
                close={<button className="close" onClick={onToggle}>×</button>}
                toggle={onToggle}
            >
                {title}
            </ModalHeader>
            <ModalBody>
                {body}
            </ModalBody>
            <ModalFooter>
                {footer}
            </ModalFooter>
        </Modal>
    );
}

export default ClinicalAppModal;