import React, {Fragment} from 'react';
import CustomSelect from "./CustomSelect";

const CustomFormikSelect = ({field, form, options, innerRef, onFocus, name, ...props}) => {
    return (
        <Fragment>
            <CustomSelect
                onValueChange={(value) => {
                    form.setFieldValue(field.name, value);
                    form.setFieldTouched(field.name, true);
                    form.validateField(field.name);

                    setTimeout(() => {
                        form.setFieldTouched(field.name, true);
                        form.validateField(field.name);
                    }, 100)
                }}
                name={name}
                options={options}
                innerRef={innerRef}
                {...props}
            />
        </Fragment>
    );
};

export default CustomFormikSelect;