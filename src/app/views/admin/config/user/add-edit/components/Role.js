import React, {Component} from "react";
import CustomCheckBox from "../../../../../common/CustomCheckBox";

class Role extends Component {

    render() {
        const {role, checked, onCheckBoxChange} = this.props;

        return (
            <div className={'role-checkbox'}>
                <CustomCheckBox
                    id={role.roleID}
                    name={role.roleID}
                    checked={checked}
                    label={role.roleName}
                    onCheckChange={() => {
                        onCheckBoxChange(role.roleID)
                    }
                    }
                />
            </div>
        );
    }
}

export default Role;
