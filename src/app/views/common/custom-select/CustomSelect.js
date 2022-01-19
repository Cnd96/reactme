import React from 'react';
import Select from 'react-select';

const CustomSelect = (props) => {
    const {
        className,
        options,
        defaultValue,
        isDisabled,
        isLoading,
        isClearable,
        isRtl,
        isSearchable,
        name,
        onChange,
        innerRef,
        styles,
        value,
        ...fields
    } = props;

    return (
        <>
            <Select
                className={className}
                options={options}
                defaultValue={defaultValue}
                isDisabled={isDisabled}
                isLoading={isLoading}
                isClearable={isClearable}
                isRtl={isRtl}
                isSearchable={isSearchable}
                name={name}
                value={value}
                onChange={onChange}
                ref={innerRef}
                onMenuOpen={true}
                styles={styles}
                {...fields}
            />
        </>
    )
};

CustomSelect.defaultProps = {
    defaultValue: null,
    isDisabled: false,
    isLoading: false,
    isClearable: false,
    isRtl: false,
    isSearchable: true,
};

export default CustomSelect;
