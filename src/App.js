import React, {Component} from 'react';
import './App.css'
import TaskForm from "./components/TaskForm";
import TaskControl from "./components/TaskControl";
import TaskList from "./components/TaskList";
import _ from "lodash";
import {connect} from "react-redux";
import * as actions from "./actions";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskEditing: null,
            filterName: '',
            filterStatus: -1,
            keyword: '',
            sortBy: 'name',
            sortValue: 1
        }
    }


    onToggleForm = () => {
        // if (this.state.isDisplayForm && this.state.taskEditing != null) {
        //     this.setState({
        //         isDisplayForm: true,
        //         taskEditing: null
        //     });
        // } else {
        //     this.setState({
        //         isDisplayForm: !this.state.isDisplayForm,
        //         taskEditing: null
        //     });
        // }
        this.props.onToggleForm();
    }


    onShowForm = () => {
        this.setState({
            isDisplayForm: true,
        });
    }

    onUpdate = (id) => {
        let {tasks} = this.state;
        let index = _.findIndex(tasks, (task) => {
            return task.id === id;
        });
        let taskEditing = tasks[index];
        this.setState({
            taskEditing: taskEditing,
        });
        this.onShowForm();
    }

    onFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus, 10);
        this.setState({
            filter: {
                name: filterName.toLowerCase(),
                status: filterStatus
            }
        })
    }

    onSearch = (keyword) => {
        this.setState({
            keyword: keyword
        })
    }

    onSort = (sortBy, sortValue) => {
        this.setState({
            by: sortBy,
            value: sortValue
        })
    }

    render() {
        let {
            taskEditing,
            // filter,
            // keyword,
            sortBy,
            sortValue
        } = this.state;

        // tasks = _.filter(tasks, (task) =>{
        //     return task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        // })

        // if (keyword) {
        //     tasks = tasks.filter((task) => {
        //         return task.name.toLowerCase().indexOf(keyword) !== -1;
        //     });
        // }

        // if (filter) {
        //     if (filter.name) {
        //         tasks = tasks.filter((task) => {
        //             return task.name.toLowerCase().indexOf(filter.name) !== -1;
        //         });
        //     }
        //     tasks = tasks.filter((task) => {
        //         if (filter.status === -1) {
        //             return task;
        //         } else {
        //             return task.status === (filter.status === 1 ? true : false)
        //         }
        //     });
        // }

        // if (sortBy === 'name') {
        //     tasks.sort((a, b) => {
        //         if (a.name > b.name) return sortValue;
        //         else if (a.name < b.name) return -sortValue;
        //         else return 0;
        //     });
        // } else {
        //     tasks.sort((a, b) => {
        //         if (a.status > b.status) return -sortValue;
        //         else if (a.status < b.status) return sortValue;
        //         else return 0;
        //     });
        // }
        let {isDisplayForm} = this.props;

        let elmTaskForm = isDisplayForm === true ? <TaskForm task={taskEditing}/> : '';

        return (
            <div className="container">
                <div className="text-center mt-5">
                    <h1>Quản Lý Công Việc</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        {elmTaskForm}
                    </div>
                    <div
                        className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.onToggleForm}>
                            <span className="fa fa-plus mr-5"/> Thêm Công Việc
                        </button>

                        <TaskControl
                            onSearch={this.onSearch}
                            onSort={this.onSort}
                            sortBy={sortBy}
                            sortValues={sortValue}/>
                        <TaskList
                            onUpdate={this.onUpdate}
                            onFilter={this.onFilter}/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(actions.toggleForm())
        },
        onCloseForm: () => {
            dispatch(actions.closeForm())
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
