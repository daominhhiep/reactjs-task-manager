import React, {Component} from 'react';
import {Dropdown, DropdownButton} from "react-bootstrap";

class TaskSortControl extends Component {
    onClick= (sortBy,sortValue) => {
        this.props.onSort(sortBy, sortValue);
    }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <DropdownButton id="dropdown-basic-button" title="Sắp Xếp">
                    <Dropdown.Item
                        eventKey= "1"
                        onSelect={ () => this.onClick('name', 1)}>
                        <i className="fas fa-sort-alpha-down"/> Tên A-Z
                    </Dropdown.Item>
                    <Dropdown.Item
                        eventKey= "2"
                        onSelect={() => this.onClick('name', -1)}>
                        <i className="fas fa-sort-alpha-down-alt"/> Tên Z-A
                    </Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item
                        onSelect={() => this.onClick('status', 1)}>
                        Trạng Thái Kích Hoạt
                    </Dropdown.Item>
                    <Dropdown.Item
                        onSelect={() => this.onClick('status', -1)}>
                        Trạng Thái Ẩn
                    </Dropdown.Item>
                </DropdownButton>
            </div>
        );
    }
}

export default TaskSortControl;
