import React from 'react';
import PatientComplainAddEditForm from "./addEdit/PatientComplainAddEditForm";
import SearchApp from "./search/SearchApp";

const PatientComplainBase = ({setPageIndex, nextPageIndex, prevPageIndex}) => {
    return (
        <div>
            <PatientComplainAddEditForm
                setPageIndex={setPageIndex}
                nextPageIndex={nextPageIndex}
                prevPageIndex={prevPageIndex}/>
            <SearchApp/>
        </div>
    );
};

export default PatientComplainBase;