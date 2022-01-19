import React, {useEffect} from 'react';
import withReducer from "../../../../../../../store/withReducer";
import reducer from "./store/reducers";
import {useDispatch} from "react-redux";
import * as Actions from './store/actions'
import DiagnosisList from "./components/DiagnosisList";

const SelectDiagnosis = ({setPageIndex, nextPageIndex, prevPageIndex}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.getDiagnosisList({}))
    }, []);

    return (
        <div>
            <DiagnosisList setPageIndex={setPageIndex} nextPageIndex={nextPageIndex} prevPageIndex={prevPageIndex}/>
        </div>
    );
};

export default withReducer('selectDiagnosis', reducer)(SelectDiagnosis);