import React, {Component} from 'react';
import TaskItem from "./TaskItem";

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1,
        }
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.props.onFilter(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus,
            )
        this.setState({
            [name]: value
        });
    }

    render() {
        let {tasks} = this.props;
        let {filterName, filterStatus} = this.state;
        let elmTasks = tasks.map((task, index) => {
            return <TaskItem
                key={task.id}
                index={index}
                task={task}
                onUpdateStatus={this.props.onUpdateStatus}
                onDelete={this.props.onDelete}
                onUpdate={this.props.onUpdate}
            />
        });
        return (
            <div className="row mt-3">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center" colSpan={2}>Hành Động</th>

                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='filterName'
                                    value={filterName}
                                    onChange={this.onChange}
                                />
                            </td>
                            <td>
                                <select
                                    className="form-control"
                                    name="filterStatus"
                                    value={filterStatus}
                                    onChange={this.onChange}>
                                    <option value="-1">Tất Cả</option>
                                    <option value="0">Ẩn</option>
                                    <option value="1">Kích Hoạt</option>
                                </select>
                            </td>
                            <td colSpan={2}/>
                        </tr>
                        {elmTasks}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default TaskList;
