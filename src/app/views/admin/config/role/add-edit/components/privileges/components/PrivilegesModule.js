import React, {Component} from "react";
import * as _ from "lodash";
import Privilege from "./Privilege";

class PrivilegesModule extends Component {

    getModulePrivilegeIDs = () => {
        const {privileges} = this.props;
        return _.flatten(_.values(privileges)).map(p => p.privilegeID);
    };

    onSectionPrivilegeClick = () => {
        const {checkedPrivilegeIDs, onSelectPrivileges} = this.props;
        let modulePrivilegeIDs = this.getModulePrivilegeIDs();

        let difference = _.difference(modulePrivilegeIDs, checkedPrivilegeIDs);
        if (difference.length > 0) {
            onSelectPrivileges(modulePrivilegeIDs, true);
        } else {
            onSelectPrivileges(modulePrivilegeIDs, false);
        }
    };

    isSectionAllSelected = () => {
        const {checkedPrivilegeIDs} = this.props;
        let sectionPrivilegeIDs = this.getModulePrivilegeIDs();
        let difference = _.difference(sectionPrivilegeIDs, checkedPrivilegeIDs);
        return difference.length === 0;
    };

    render() {

        const {category, categories, privileges, checkedPrivilegeIDs, onCheckChange, onSelectPrivileges} = this.props;
        const isAllSelected = this.isSectionAllSelected();

        return (
            <div className={'m-2 my-8 p-2 border border-solid rounded-sm border-gray-600'}>
                <div
                    className={'role-module-name bg-gray-100 p-1 px-3'}>
                    {/*<Checkbox*/}
                    {/*    className={'font-medium'}*/}
                    {/*    checked={isAllSelected}*/}
                    {/*    label={module}*/}
                    {/*    onChange={this.onSectionPrivilegeClick}/>*/}

                    {category}
                </div>
                {
                    privileges.map((privilege) => {
                        return <Privilege
                            key={privilege.privilegeID}
                            privilege={privilege}
                            checked={false}
                            onCheckChange={(value) => {
                                console.log(value);
                            }}
                        />

                    })
                }
            </div>
        );
    }
}

export default PrivilegesModule;
