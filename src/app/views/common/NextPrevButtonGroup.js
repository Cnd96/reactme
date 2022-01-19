import React from 'react';
import {CButton} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const NextPrevButtonGroup = ({setPageIndex, prevPageIndex, saveFunction, isValid}) => {
    return (
        <div className='d-flex flex-row flex-wrap  justify-content-end'>
            <CButton
                onClick={() => {
                    setPageIndex(prevPageIndex);
                }}
                color="success"
                className='custom-button'
            >
                <CIcon size={'lg'} name={'cil-media-skip-backward'} style={{marginRight: '3px'}} />
                Prev
            </CButton>
            <CButton
                disabled={!isValid}
                onClick={() => {
                    saveFunction();
                }}
                color="success"
                className='custom-button'
            >
                Next
                <CIcon size={'lg'} name={'cil-media-skip-forward'} style={{marginLeft: '3px'}} />
            </CButton>
        </div>
    );
};

export const PrevButton = ({ isValid, onClickHandler }) => {
    return(
        <CButton
            disabled={!isValid}
            onClick={onClickHandler}
            color="success"
        >
            Prev
            <CIcon size={'lg'} name={'cil-media-skip-backward'} style={{ marginRight: '3px' }} />
        </CButton>
    );
};

export const SaveButton = ({isValid, onClickHandler}) => {
    return(
        <CButton
            disabled={!isValid}
            onClick={onClickHandler}
            color="info"
            style={{ marginRight: '3px', marginLeft: '3px' }}
        >
            Save
        </CButton>
    );
};

export const NextButton = ({isValid, onClickHandler}) => {
    return(
        <CButton
            disabled={!isValid}
            onClick={onClickHandler}
            color="success"
        >
            Next
            <CIcon size={'lg'} name={'cil-media-skip-forward'} style={{ marginLeft: '3px' }} />
        </CButton>
    );
};

export default NextPrevButtonGroup;