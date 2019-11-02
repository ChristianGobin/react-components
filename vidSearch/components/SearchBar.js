import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
    }
    
    //Pass Search Term To Parent Component using Callback.
    handleSubmit = (e) => {
        this.props.onFormSubmit(this.state.value);
        e.preventDefault();
    }
    //Recieve and Store User Search Term
    handleChange = (e) => {
        this.setState({value: e.target.value})
    }
    
    render() {
        return (
            <div>
                <form className="ui icon input" onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        className="Search"
                        onChange={this.handleChange}
                        value={this.state.value}
                    />
                    <i className="search icon"></i>
                </form>
            </div>
        )
    }
}
export default SearchBar;
