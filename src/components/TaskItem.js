import React, {Component} from 'react';
import {connect} from "react-redux";
import * as action from "../actions";

class TaskItem extends Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDeleteTask(this.props.task.id);
        this.props.onCloseForm();
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.task.id);
    }

    render() {
        let {task, index} = this.props;
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td>{this.props.task.name}</td>
                <td className="text-center">
                    <span
                        className={task.status === true ? 'badge rounded-pill bg-success' : 'badge rounded-pill bg-danger'}
                        onClick={this.onUpdateStatus}>
                        {task.status === true ? 'Kích hoạt' : ' Ẩn '}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning"
                            onClick={this.onUpdate}>
                        <span className="fas fa-edit mr-5"/> Sửa
                    </button>
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.onDelete}>
                        <span className="fas fa-trash mr-5"/> Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onUpdateStatus: (id) => {
            dispatch(action.updateStatus(id))
        },
        onDeleteTask: (id) => {
            dispatch(action.deleteTask(id))
        },
        onCloseForm: () => {
            dispatch(action.closeForm())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
