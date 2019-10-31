import React from 'react';

class SearchBar extends React.Component {
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.value);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input
                        type="text"
                        className="Search"
                        onChange={e => { this.setState({ value: e.target.value }) }}
                        value={this.state.value}
                    />
                </form>
            </div>
        )
    }
}
export default SearchBar;