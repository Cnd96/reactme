import React, {Component} from "react";
import CustomCheckBox from "../../../../../../../common/CustomCheckBox";

class Privilege extends Component {

    render() {
        const {privilege, checked, onCheckChange} = this.props;

        return (

            <div className={'privilege-checkbox'}>
                <CustomCheckBox
                    id={privilege.privilegeID}
                    name={privilege.privilegeID}
                    checked={checked}
                    value={privilege.privilegeID}
                    label={privilege.privilegeName}

                    onCheckChange={(value) => {
                        onCheckChange(privilege.privilegeID);
                    }}
                />
            </div>
        );
    }
}

export default Privilege;
