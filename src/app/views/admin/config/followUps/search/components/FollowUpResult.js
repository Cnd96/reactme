import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CAlert, CCard, CCardHeader} from "@coreui/react";
import {setStorageItem} from "../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../utils/Constants";
import history from "../../../../../../../@history";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import FollowUp from "./FollowUp";
import * as Action from '../../store/action/'


const gotToAddEdit = (followUpID) => {
    setStorageItem(Constants.STORAGE.SELECTED_FOLLOW_UP_ID, followUpID);
    history.push({
        pathname: Constants.PAGES.followUpsAddEdit
    });
};

const getItemStyle = (isDragging, draggableStyle) => ({
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({});


const FollowUpResult = () => {

    const dispatch = useDispatch();
    const [followUps, setFollowUps] = useState([]);
    const data = useSelector(({followUp}) => followUp.followUpSearch);
    const [updatedIndexes, setUpdatedIndexes] = useState([]);

    useEffect(() => {
        setFollowUps(data.followUpList);
    }, [dispatch, data.followUpList]);

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };


    const onDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const items = reorder(
            followUps,
            result.source.index,
            result.destination.index
        );

        if (result.destination.index !== result.source.index) {
            let reOrderedFollowups = [];
            items.map((followUp, index) => {
                let obj = Object.assign(followUp, {displayOrder: (index + 1)});
                reOrderedFollowups.push(obj);
            });
            let followUpListUpdateRQ = {
                followUpDTOList: reOrderedFollowups
            };

            dispatch(Action.saveReOrderedList(followUpListUpdateRQ));
            setFollowUps(items);
        }
    };

    return (
        <div>
            <CCard>
                <CCardHeader>
                    {
                        data.followUpList && data.followUpList.length == 0 &&
                        <CAlert color="warning">
                            No Follow Ups(s) found.
                        </CAlert>
                    }
                    {
                        followUps.length > 0
                        &&
                        <>

                            <table className="table table-striped">
                                <thead>
                                <tr style={{fontSize: '15px', backgroundColor: '#EBEDEF'}}>
                                    <th>Move Order</th>
                                    <th>Follow Up</th>
                                    <th>Status</th>
                                </tr>
                                </thead>

                                <DragDropContext onDragEnd={onDragEnd}>
                                    <Droppable droppableId="droppable">
                                        {(provided, snapshot) => (
                                            <tbody
                                                {...provided.droppableProps}
                                                ref={provided.innerRef}
                                                style={getListStyle(snapshot.isDraggingOver)}
                                            >
                                            {followUps.map((data, index) => (
                                                <Draggable key={data.followUpID}
                                                           draggableId={data.followUpID.toString()} index={index}>
                                                    {(provided, snapshot) => (
                                                        <tr
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                e.stopPropagation();
                                                                gotToAddEdit(data.followUpID);
                                                            }}
                                                            className={'clickable-data-row'}
                                                        >

                                                            <FollowUp
                                                                key={data.followUpID}
                                                                data={data}
                                                                gotToAddEdit={gotToAddEdit}
                                                                updatedIndexes={updatedIndexes}
                                                            />
                                                        </tr>
                                                    )}
                                                </Draggable>
                                            ))}
                                            {provided.placeholder}
                                            </tbody>
                                        )}
                                    </Droppable>
                                </DragDropContext>
                            </table>
                        </>
                    }
                </CCardHeader>
            </CCard>
        </div>
    );
};

export default FollowUpResult;