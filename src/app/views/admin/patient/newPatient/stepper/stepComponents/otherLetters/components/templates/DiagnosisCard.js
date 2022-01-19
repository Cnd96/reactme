import React from 'react';
import {
    HtmlEditor,
    Image,
    Inject,
    Link,
    QuickToolbar,
    RichTextEditorComponent,
    Toolbar
} from '@syncfusion/ej2-react-richtexteditor';
import {useSelector} from "react-redux";
import {getFullName} from "../../../../../../../../../../utils/HealthTrackerUtils";

const DiagnosisCard = () => {

    const reducerData = useSelector(({selectOtherLetter}) => selectOtherLetter.selectOtherLetter);

    let procedure = reducerData.notes.procedure;
    let indication = reducerData.notes.indication;
    let postop = reducerData.notes.postop;
    let patient = reducerData.patient;
    let checkup = reducerData.checkup;

    let heading = "Right Distal radius osteotomy correction";

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

            <div  style={{marginTop: '100px', marginLeft: '70px'}}>
                <div className="align-content-center">
                    <table>
                        <tbody>
                        <tr>
                            <th>Name of the Patient</th>
                            <td> : {getFullName(patient)}</td>
                        </tr>
                        <tr>
                            <th>Age</th>
                            <td> : {patient.age}</td>
                        </tr>
                        <tr>
                            <th>Checkup No</th>
                            <td> : {checkup.checkupCode}</td>
                        </tr>
                        <tr>
                            <th>Checkup Date</th>
                            <td> : {checkup.checkupDateStr}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <hr/>
                <h4>{heading}</h4>
                <hr/>

                <table>
                    <tbody>
                    <tr>
                        <td>Done By</td>
                        <td> : ..............</td>
                    </tr>
                    <tr>
                        <td>General anaesthesia given by</td>
                        <td> : ..............</td>
                    </tr>
                    </tbody>
                </table>

                <br/>

                <p><b>Indication</b></p>
                <p className="ml-5">{indication}</p>

                <br/>
                <p><b>Procedure</b></p>
                <p className="ml-5">{procedure}</p>

                <br/>
                <p><b>Post op</b></p>
                <p className="ml-5">{postop}</p>

                <br/>

                <div className="d-flex flex-row flex-wrap justify-content-between">
                    <p>Date : {new Date().toDateString()}</p>
                    <p>P.T.O</p>
                    <p>Surgeon / Physician</p>
                </div>

            </div>
            <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
        </RichTextEditorComponent>);

};

export default DiagnosisCard;