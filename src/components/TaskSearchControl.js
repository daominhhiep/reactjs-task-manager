import React, {Component} from 'react';

class TaskSearchControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
        }
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        });
    }

    onSearch = () => {
        this.props.onSearch(this.state.keyword)
    }


    render() {
        let keyword = this.state.keyword;
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input
                        type="text" className="form-control"
                        placeholder="Nhập từ khóa..."
                        name = "keyword"
                        value={keyword}
                        onChange={this.onChange}
                    />
                    <button className="btn btn-primary" type="button"
                            onClick={this.onSearch}>
                        <span className="fa fa-search mr-5"/>Tìm
                    </button>
                </div>
            </div>
        );
    }
}

export default TaskSearchControl;