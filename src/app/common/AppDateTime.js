import React, {Component} from 'react';
import Datetime from 'react-datetime';
import {getFormattedDateString, getMomentDateTimeFromString} from "../../utils/DateTimeUtil";
import "react-datetime/css/react-datetime.css";

class AppDateTime extends Component {

    onChange = (momentDate) => {
        const {onChange, dateFormat} = this.props;
        let result = getFormattedDateString(momentDate, dateFormat);
        onChange(result);
    };

    getMomentValue = (value) => {
        const {dateFormat} = this.props;
        if (!value) {
            return '';
        }

        return getMomentDateTimeFromString(value, dateFormat);
    };

    render() {

        let {initialValue, value, initialViewMode, showDate, showTime, customProps, dateFormat} = this.props;
        customProps = customProps ? customProps : {};

        return (
            <>
                <Datetime
                    initialValue={this.getMomentValue(initialValue)}
                    value={this.getMomentValue(value)}
                    initialViewMode={initialViewMode}
                    dateFormat={dateFormat}
                    timeFormat={showTime}
                    onChange={this.onChange}
                    closeOnSelect={true}
                    {...customProps}
                />
            </>
        );
    }
}

export default AppDateTime;
