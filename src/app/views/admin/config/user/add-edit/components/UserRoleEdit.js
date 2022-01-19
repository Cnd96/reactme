import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as _ from "lodash";
import Role from "./Role";
import * as userAction from "../../store/actions";

class UserEditRole extends Component {

    onCheckBoxChange = (roleID) => {

        const {checkedRoleIDs, onRoleChange} = this.props;

        let roles = [];
        if (_.indexOf(checkedRoleIDs, roleID) !== -1) {
            roles = _.without(checkedRoleIDs, roleID);
        } else {
            roles = [...checkedRoleIDs, roleID];
        }

        onRoleChange(roles);
    };

    render() {
        const {roles, checkedRoleIDs} = this.props;

        return (

            <div className={'user-role-scroll-section'}>

                <h5>Roles</h5>

                <div className={'user-role-main-category-section'}>

                    {
                        roles.map((role) => {
                            return <Role
                                key={role.roleName}
                                role={role}
                                checked={_.indexOf(checkedRoleIDs, role.roleID) !== -1}
                                onCheckBoxChange={this.onCheckBoxChange}
                            />
                        })
                    }
                </div>

            </div>

        )

    }
}

function mapStateToProps({roles}) {
    return {
        //todo redux state value map to prop of this class
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        onCheckBoxChange: userAction.onRoleActionChange
    }, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditRole);
