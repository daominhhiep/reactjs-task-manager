import React, {Component} from 'react';
import TaskSearchControl from "./TaskSearchControl";

class TaskControl extends Component {
    render() {
        return (
            <div className="row mt-3">
                <TaskSearchControl onSearch={this.props.onSearch}/>
                {/*<TaskSortControl*/}
                {/*    onSort={this.props.onSort}*/}
                {/*    sortBy={this.props.sortBy}*/}
                {/*    sortValue={this.props.sortValue}*/}
                {/*/>*/}
            </div>
        );
    }

}

export default TaskControl;
