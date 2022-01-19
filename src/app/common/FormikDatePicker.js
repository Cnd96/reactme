import React from 'react';
import AppDateTime from "./AppDateTime";
import {defaultDateFormat} from "../../utils/DateTimeUtil";

const FormikDatePicker = ({field, form, ...props}) => {

    let {dateFormat} = props;
    dateFormat = dateFormat ? dateFormat : defaultDateFormat;
    return (
        <>
            <AppDateTime
                onChange={(value) => {
                    form.setFieldValue(field.name, value);
                    form.setFieldTouched(field.name, true);
                    form.validateField(field.name);

                    //TODO hack for validation message view
                    setTimeout(() => {
                        form.setFieldTouched(field.name, true);
                        form.validateField(field.name);
                    }, 100);
                }}
                initialValue={field.value}
                value={field.value}
                // fields={{...field}}
                customProps={{...props}}
                showDate={true}
                showTime={false}
                dateFormat={dateFormat}
                initialViewMode={'days'}
            />
        </>
    );
};

export default FormikDatePicker;
