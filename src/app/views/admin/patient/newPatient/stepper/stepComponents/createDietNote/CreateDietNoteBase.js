

// This implementation is deprecated   2021/03/24

// import React, {useEffect} from 'react';
// import DietNoteAddEditFrom from "./components/DietNoteAddEditFrom";
// import withReducer from "../../../../../../../store/withReducer";
// import reducer from "./store/reducers";
// import {useDispatch} from "react-redux";
// import {getStorageItem} from "../../../../../../../../utils/StorageUtils";
// import Constants from "../../../../../../../../utils/Constants";
// import * as Action from "./store/actions";
//
// const CreateDietNoteBase = ({setPageIndex}) => {
//
//     let dispatch = useDispatch();
//
//     useEffect(() => {
//         let dietNoteID = getStorageItem(Constants.STORAGE.DIET_NOTE_ID);
//         if (dietNoteID) {
//             dispatch(Action.getDietNoteDTOByID(dietNoteID))
//         } else {
//             dispatch(Action.onResetDietNoteData());
//         }
//         return (() => {
//
//         })
//     }, [dispatch]);
//
//     return (
//         <>
//             <DietNoteAddEditFrom setPageIndex={setPageIndex}/>
//         </>
//     );
// };
//
// export default withReducer('dietNote', reducer)(CreateDietNoteBase);
