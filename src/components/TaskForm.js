import React, {Component} from 'react';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            status: false,
        }
    }

    componentDidMount() {
        if(this.props.task){
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status,
            });
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps && nextProps.task){
            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status,
            });
        } else if (!nextProps.task){
            this.setState({
                id: '',
                name: '',
                status: false
            })
        }
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear();
    }

    onClear = () => {
        this.setState({
            name: '',
            status: 'false'
        })
    }

    render() {
        let {id} = this.state;

        return (
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">
                        {id !== '' ? 'Cập nhật công việc' : 'Thêm công việc'}
                        <span className="float-end" onClick={this.onCloseForm}>
                        <i className="fas fa-times-circle"/>
                    </span>
                    </h3>
                </div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}/>
                        </div>
                        <label className="mt-3">Trạng Thái :</label>
                        <select
                            className="form-control"
                            required="required"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}>
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <div className="text-center mt-4">
                            <button type="submit" className="btn btn-success">Thêm</button>
                            &nbsp;
                            <button type="button" className="btn btn-danger"
                                    onClick={this.onClear}>
                                Hủy Bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

}

export default TaskForm;
