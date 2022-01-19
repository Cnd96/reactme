import React, {useEffect} from 'react';
import ImageCapture from "./components/ImageCapture";
import reducer from "./store/reducers";
import withReducer from "../../../../../../../../store/withReducer";
import {useDispatch, useSelector} from "react-redux";
import {CButton, CCardBody, CCol, CRow, CTooltip} from "@coreui/react";
import * as Action from '../webCam/store/actions/image.upload.actions'
import {getStorageItem} from "../../../../../../../../../utils/StorageUtils";
import Constants from "../../../../../../../../../utils/Constants";
import CIcon from "@coreui/icons-react";

// Upload to local seaweedFS instance
const uploadImage = async file => {

    const formData = new FormData();
    let fileName = new Date().toDateString() + ' Web Cam Image';
    formData.append("uploadingFile", file, fileName);

    return formData;
};


const WebCamImage = () => {

    const webCamImageData = useSelector(({webCamImage}) => webCamImage.webCamImageAddEdit);
    const dispatch = useDispatch();
    const checkupID = getStorageItem(Constants.STORAGE.CHECKUP_ID);
    let saveObject;
    const uploadImageFile = (file) => {
        uploadImage(file).then(
            (response: any) => {

                saveObject = response;
                let webCamImageUploadRQ = Object.assign({}, {
                    remark: webCamImageData.formData.values ? webCamImageData.formData.values.remark : '',
                    // webCamImageID: webCamImageData.formData.values.webCamImageID,
                    // documentStorageID: webCamImageData.formData.values.documentStorageID,
                    status: webCamImageData.formData.values.status,
                    checkupID: checkupID
                });

                webCamImageUploadRQ.docStorageDTO = {
                    fileName: new Date().toDateString() + ' Web Cam Image',
                    description: "Web Cam Image Description",
                    documentType: "Web_CAM_IMAGE"
                };
                saveObject.append("uploadRequestData", JSON.stringify(webCamImageUploadRQ));
                dispatch(Action.saveOrUpdateWebCamImage(saveObject));
            }
        );
    };

    const removeImage = (data) => {
        let removeData = Object.assign({}, data, {checkupID: checkupID});
        dispatch(Action.removeWebCamImage(removeData));
    };

    useEffect(() => {
        console.log(webCamImageData);
        return (() => {
            dispatch(Action.onFormChange())
        })
    }, []);

    useEffect(() => {
        let checkupID = getStorageItem(Constants.STORAGE.CHECKUP_ID);
        dispatch(Action.getWebCamImages({checkupID: checkupID, status: Constants.STATUS_CONST.ACT}));
    }, [dispatch, webCamImageData.imageData]);

    return (
        <div>
            <CRow>
                <CCardBody>
                    <ImageCapture sendFile={uploadImageFile}/>
                </CCardBody>
            </CRow>
            {/*<CRow className={'privilege-main-category-section'}>*/}
            {/*    <CCol sm="6" className="pt-5p">*/}
            {/*        {*/}
            {/*            webCamImageData.imageData && webCamImageData.imageData.docStorageDTO.document &&*/}
            {/*            <img src={`data:image/jpeg;base64,${webCamImageData.imageData.docStorageDTO.document}`}/>*/}
            {/*        }*/}

            {/*    </CCol>*/}
            {/*    <CCol sm="6">*/}
            {/*        {webCamImageData.imageData.remark}*/}
            {/*    </CCol>*/}
            {/*</CRow>*/}
            {webCamImageData.webCamImages && webCamImageData.webCamImages.map((data, index) =>

                <CRow className={'privilege-main-category-section'} key={index}>
                    <CCol sm="6" className="pt-5p">
                        {
                            data.docStorageDTO && data.docStorageDTO.documentType &&
                            <img src={`data:image/jpeg;base64,${data.docStorageDTO.document}`}/>
                        }

                        <CTooltip
                            content={'Double Click to Remove'}
                            placement={'left-start'}
                        >
                            <CButton
                                style={{position: 'absolute', marginLeft: '3px'}}
                                onDoubleClick={() => {
                                    removeImage(data);
                                }}
                                color="danger"
                            >
                                <CIcon size={'sm'} name={"cil-x-circle"}/>
                            </CButton>
                        </CTooltip>

                    </CCol>
                    <CCol sm="6">
                        {data.remark}
                    </CCol>
                </CRow>
            )
            }
        </div>
    );
};

export default withReducer('webCamImage', reducer)(WebCamImage);