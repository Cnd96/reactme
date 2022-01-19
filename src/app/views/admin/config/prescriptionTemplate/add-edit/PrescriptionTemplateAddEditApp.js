import React, {useEffect} from 'react';
import PrescriptionTemplateAddEditBase from "./components/PrescriptionTemplateAddEditBase";
import withReducer from "../../../../../store/withReducer";
import reducer from "../store/reducer";
import {useDispatch} from "react-redux";
import * as Action from "../store/actions/prescription.template.add.edit.action"

const PrescriptionTemplateAddEditApp = () => {

    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(Action.getMedicineValueList({}))
    }, [dispatch]);
    return (
        <div>
            <PrescriptionTemplateAddEditBase/>
        </div>
    );
};
export default withReducer('prescriptionTemplate', reducer)(PrescriptionTemplateAddEditApp);