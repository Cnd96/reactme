import React from 'react';
import {getActInaFromConstantForGrid, getCommonStringForGrid} from "../../../../../../../utils/GridUtil";
import CIcon from "@coreui/icons-react";

const FollowUp = ({data}) => {
    return (
        <>
            <td style={{width: '10%'}}>
                 <span>
                     <CIcon size={'sm'} name={'cil-move'}/>
                 </span>
            </td>
            <td>{getCommonStringForGrid(data.followUp)}</td>
            <td>{getActInaFromConstantForGrid(data.status)}</td>
        </>
    );
};

export default FollowUp;