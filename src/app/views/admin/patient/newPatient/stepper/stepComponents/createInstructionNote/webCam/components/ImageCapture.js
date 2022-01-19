import React, {Component} from 'react';
import {CButton, CCol, CRow, CTooltip} from "@coreui/react";
import WebCamImageAddEdit from "./WebCamImageAddEdit";

class ImageCapture extends Component {

    processDevices(devices) {
        devices.forEach(device => {
            console.log(device.label);
            this.setDevice(device);
        });
    }

    async setDevice(device) {
        const {deviceId} = device;
        try {
            const stream = await navigator.mediaDevices.getUserMedia({audio: false, video: {deviceId}});
            this.videoPlayer.srcObject = stream;
            this.videoPlayer.play();
        } catch (e) {
            console.log(e);
        }
    }

    async componentDidMount() {
        const cameras = await navigator.mediaDevices.enumerateDevices();
        this.processDevices(cameras);
    }

    takePhoto = () => {
        const {sendFile} = this.props;
        const context = this.canvas.getContext('2d');
        context.drawImage(this.videoPlayer, 0, 0, 680, 360);

        // this.canvas.toBlob(sendFile);
    };

    upload = () => {
        const {sendFile} = this.props;
        // const context = this.canvas.getContext('2d');
        // context.drawImage(this.videoPlayer, 0, 0, 680, 360);

        this.canvas.toBlob(sendFile);
    };

    render() {
        return (
            <CRow>
                <CCol sm="6">
                    <CRow>
                        <CCol className="align-content-lg-center">
                            <video ref={ref => (this.videoPlayer = ref)} width="680" heigh="360"/>
                        </CCol>
                    </CRow>
                    <CRow>
                        <CCol sm="12">
                            <CTooltip
                                content={'Take Image'}
                                placement={'left-start'}
                            >
                                <CButton
                                    onClick={() => {
                                        this.takePhoto();
                                    }}
                                    color="success"
                                >
                                    Take Image
                                </CButton>
                            </CTooltip>
                        </CCol>
                    </CRow>
                </CCol>
                <CCol sm="6">
                    <CRow>
                        <CCol className="text-align-center privilege-main-category-section pt-10p">
                            <canvas width="680" height="360" ref={ref => (this.canvas = ref)}/>
                        </CCol>

                    </CRow>
                    <CRow>
                        <CCol>
                            <WebCamImageAddEdit/>
                            <div className='d-flex flex-row flex-wrap  justify-content-end'>
                                <CTooltip
                                    content={'Take Image'}
                                    placement={'left-start'}
                                >
                                    <CButton
                                        onClick={() => {
                                            this.upload();
                                        }}
                                        color="success"
                                    >
                                        Upload
                                    </CButton>
                                </CTooltip>
                            </div>
                        </CCol>
                    </CRow>
                </CCol>
            </CRow>
        );
    }


}

export default ImageCapture;