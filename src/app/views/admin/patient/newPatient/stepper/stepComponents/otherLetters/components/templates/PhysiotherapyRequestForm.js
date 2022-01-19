import React from 'react';
import {
    HtmlEditor,
    Image,
    Inject,
    Link,
    QuickToolbar,
    RichTextEditorComponent,
    Toolbar
} from "@syncfusion/ej2-react-richtexteditor";
import {useSelector} from "react-redux";
import {getFullName} from "../../../../../../../../../../utils/HealthTrackerUtils";
import {getDateFromDateStr} from "../../../../../../../../../../utils/GridUtil";

const PhysiotherapyRequestForm = () => {

    const reducerData = useSelector(({selectOtherLetter}) => selectOtherLetter.selectOtherLetter);

    const heading = 'Physiotherapy Request From';
    const address = 'Physiotherapy ' +
        'Request From';

    const toolbarSettings = {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
    };

    const quickToolbarSettings = {
        image: ['Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'OpenImageLink', '-', 'EditImageLink', 'RemoveImageLink', 'Display', 'AltText', 'Dimension']
    };

    return (
        <RichTextEditorComponent height={500} toolbarSettings={toolbarSettings}
                                 quickToolbarSettings={quickToolbarSettings}>

            <div style={{marginTop: '100px', marginLeft: '70px'}}>
                <div>
                    <div>
                        <p className={'font-weight-bold'}>{heading}</p>
                    </div>

                    <div>
                        <p><span className="font-weight-bold">Hospital Address : </span> {reducerData.hospital.address}
                        </p>
                    </div>

                    <div className="d-flex flex-column">
                        <div className="d-flex flex-row">
                            <div className="physiotherapy-request-sub-div">
                                <table className="physiotherapy-request-table">
                                    <tbody>
                                    <tr>
                                        <td className="sub-topic">Patient Name</td>
                                        <td className="colon">:</td>
                                        <td> {getFullName(reducerData.patient)}</td>
                                    </tr>

                                    <tr style={{height: '150px'}}>
                                        <td className="sub-topic">Patient Address</td>
                                        <td className="colon">:</td>
                                        <td> {reducerData.patient.addressLine1 ? reducerData.patient.addressLine1 : ''}{reducerData.patient.addressLine2 ? ', ' +reducerData.patient.addressLine2 + ' ,' : ''} {reducerData.patient.addressLine3}</td>
                                    </tr>

                                    <tr>
                                        <td className="sub-topic">DOB</td>
                                        <td className="colon">:</td>
                                        <td> {getDateFromDateStr(reducerData.patient.dateOfBirthStr) ? getDateFromDateStr(reducerData.patient.dateOfBirthStr) :'................................'}</td>
                                    </tr>

                                    <tr>
                                        <td className="sub-topic">Hospital No</td>
                                        <td className="colon">:</td>
                                        <td> ................................</td>
                                    </tr>

                                    <tr>
                                        <td className="sub-topic">Mobile No</td>
                                        <td className="colon">:</td>
                                        <td> {reducerData.patient.contactNo ? reducerData.patient.contactNo : '................................' }</td>
                                    </tr>

                                    <tr>
                                        <td className="sub-topic">Telephone</td>
                                        <td className="colon">:</td>
                                        <td> ................................</td>
                                    </tr>

                                    <tr>
                                        <td className="sub-topic">Email</td>
                                        <td className="colon">:</td>
                                        <td> {reducerData.patient.email ? reducerData.patient.email : '................................'}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="physiotherapy-request-sub-div">
                                <table className="physiotherapy-request-table">
                                    <tbody>
                                    <tr>
                                        <td className="sub-topic">Referrer</td>
                                        <td className="colon">:</td>
                                        <td> ................................</td>
                                    </tr>

                                    <tr style={{height: '150px'}}>
                                        <td className="sub-topic">Address</td>
                                        <td className="colon">:</td>
                                        <td> ................................</td>
                                    </tr>

                                    <tr>
                                        <td className="sub-topic">Telephone</td>
                                        <td className="colon">:</td>
                                        <td> ................................</td>
                                    </tr>

                                    <tr>
                                        <td className="sub-topic">Fax</td>
                                        <td className="colon">:</td>
                                        <td> ................................</td>
                                    </tr>

                                    <tr>
                                        <td className="sub-topic">Signature</td>
                                        <td className="colon">:</td>
                                        <td> ................................</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="d-flex flex-row">
                            <div className="physiotherapy-request-sub-div">
                                <table className="physiotherapy-request-table">
                                    <tbody>
                                    <tr>
                                        <td className="sub-topic">Date</td>
                                        <td className="colon">:</td>
                                        <td> ................................</td>
                                    </tr>

                                    <tr style={{height: '150px'}}>
                                        <td className="sub-topic">Diagnosis</td>
                                        <td className="colon">:</td>
                                        <td> ................................</td>
                                    </tr>

                                    <tr>
                                        <td className="sub-topic">Relevant PMH</td>
                                        <td className="colon">:</td>
                                        <td> ................................</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="physiotherapy-request-sub-div">
                                <table className="physiotherapy-request-table">
                                    <tbody>
                                    <tr>
                                        <td className="sub-topic">Treatment Required</td>
                                        <td className="colon">:</td>
                                        <td> ................................</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
        </RichTextEditorComponent>);
};

export default PhysiotherapyRequestForm;