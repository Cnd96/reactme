import React, {Component} from "react";
import * as _ from 'lodash';
import Privilege from "./Privilege";
import CustomCheckBox from "../../../../../../../common/CustomCheckBox";

class PrivilegeCategory extends Component {

    getSectionPrivilegeIDs = () => {
        const {privileges} = this.props;
        return privileges.map((p) => p.privilegeID);
    };

    onSectionPrivilegeClick = () => {
        const {checkedPrivilegeIDs, onSelectPrivileges} = this.props;
        let sectionPrivilegeIDs = this.getSectionPrivilegeIDs();

        let difference = _.difference(sectionPrivilegeIDs, checkedPrivilegeIDs);
        if (difference.length > 0) {
            onSelectPrivileges(sectionPrivilegeIDs, true);
        } else {
            onSelectPrivileges(sectionPrivilegeIDs, false);
        }
    };

    isSectionAllSelected = () => {
        const {checkedPrivilegeIDs} = this.props;
        let sectionPrivilegeIDs = this.getSectionPrivilegeIDs();
        let difference = _.difference(sectionPrivilegeIDs, checkedPrivilegeIDs);
        return difference.length === 0;
    };

    render() {

        const {category, privileges, checkedPrivilegeIDs, onCheckChange} = this.props;
        const isAllSelected = this.isSectionAllSelected();

        return (
            <div className='privilege-scroll-section'>
                <div
                    className={'privilege-main-category-section'}
                >
                    <div className={'privilege-category-name'}>
                        <CustomCheckBox
                            id={category}
                            name={category}
                            checked={isAllSelected}
                            value={category}
                            label={category}

                            onCheckChange={(value) => {
                                this.onSectionPrivilegeClick()
                            }}
                        />
                    </div>

                    <div
                        className={'privilege-category-section'}
                    >
                        {
                            privileges.map((privilege) => {
                                return <Privilege
                                    key={privilege.code}
                                    privilege={privilege}
                                    checked={_.indexOf(checkedPrivilegeIDs, privilege.privilegeID) !== -1}
                                    onCheckChange={onCheckChange}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default PrivilegeCategory;
