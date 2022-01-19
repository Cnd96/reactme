import React, {Component} from "react";
import * as _ from 'lodash';
import PrivilegeCategory from "./components/PrivilegeCategory";

class PrivilegeBase extends Component {

    state = {
        checkedPrivilegeIDs: []
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.role != prevProps.role) {
            this.init();
        }
    }

    init = () => {
        const {role} = this.props;
        let privileges = role.privileges ? role.privileges : [];
        this.updateSelectedPrivileges(privileges);
    };

    getInitData = () => {
        const {allPrivileges} = this.props;

        let categories = _.keys(allPrivileges).sort();
        let categoryWiseSortedPrivileges = {};

        categories.forEach((category) => {
            let categoryPrivileges = allPrivileges[category];
            categoryPrivileges = _.sortBy(categoryPrivileges, (privilege) => privilege.privilegeName);

            categoryWiseSortedPrivileges[category] = categoryPrivileges;
        });

        return {
            categories,
            categoryWiseSortedPrivileges
        };
    };

    onCheckChange = (privilegeID) => {
        const {checkedPrivilegeIDs} = this.state;
        let privileges = [];
        if (_.indexOf(checkedPrivilegeIDs, privilegeID) !== -1) {
            privileges = _.without(checkedPrivilegeIDs, privilegeID);
        } else {
            privileges = [...checkedPrivilegeIDs, privilegeID];
        }

        this.updateSelectedPrivileges(privileges);
    };

    onSelectPrivileges = (privilegeIDs, isSelect) => {
        const {checkedPrivilegeIDs} = this.state;
        let final = [];
        if (isSelect) {
            final = _.uniq([...checkedPrivilegeIDs, ...privilegeIDs]);
        } else {
            final = _.difference([...checkedPrivilegeIDs], privilegeIDs);
        }

        this.updateSelectedPrivileges(final);
    };

    updateSelectedPrivileges = (privileges) => {
        const {onPrivilegeChange} = this.props;
        this.setState({
            checkedPrivilegeIDs: privileges
        }, () => {
            onPrivilegeChange(privileges);
        });
    };

    render() {
        const {categories, categoryWiseSortedPrivileges} = this.getInitData();
        const {checkedPrivilegeIDs} = this.state;

        return (
            <div>
                <h5>Privileges</h5>

                {
                    categories.map((categoryName) => {
                        return <PrivilegeCategory
                            key={categoryName}
                            category={categoryName}
                            privileges={categoryWiseSortedPrivileges[categoryName]}
                            checkedPrivilegeIDs={checkedPrivilegeIDs}
                            onCheckChange={this.onCheckChange}
                            onSelectPrivileges={this.onSelectPrivileges}
                        />
                    })
                }
            </div>
        );
    }
}

export default PrivilegeBase;
