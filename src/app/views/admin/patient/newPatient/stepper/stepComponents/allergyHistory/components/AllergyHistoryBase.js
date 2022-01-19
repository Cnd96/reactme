import React from 'react';
import AllergyHistoryAddEditForm from "./addEdit/AllergyHistoryAddEditForm";
import SearchApp from "./search/SearchApp";

const AllergyHistoryBase = ({setPageIndex, nextPageIndex, prevPageIndex}) => {
    return (
        <div>
            <AllergyHistoryAddEditForm setPageIndex={setPageIndex} nextPageIndex={nextPageIndex} prevPageIndex={prevPageIndex}/>
            <SearchApp/>
        </div>
    );
};

export default AllergyHistoryBase;