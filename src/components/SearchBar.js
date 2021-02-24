import React from 'react';

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.state = {term: ''};
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className='search-bar ui segment'>
                <div 
                    
                    className='ui form'>
                    <form 
                        onSubmit={this.onFormSubmit}
                        className='field'>
                        <label>Video Seach</label>
                        <input 
                            type='text' 
                            value={this.state.term}
                            onChange={event => {this.setState({term: event.target.value})}}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default SearchBar;