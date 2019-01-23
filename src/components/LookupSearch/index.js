import React, { Component } from 'react';
import SearchButton from '../SearchButton';
import './LookupSearch.css';

class LookupSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: ''
        };
    }

    onQueryChanged = (event) => {
        this.setState({
            query: event.target.value
        });
        
        if (event.target.value === '') {
            this.props.clear();
        }
    }

    onPerformSearch = (event) => {
        event.preventDefault();

        this.props.search(this.state.query);
    }

    render() {
        return (
            <form>
                <div className='__lookup_search-left d-inline-block'>
                    <input className='__lookup_search-input' type='text' placeholder='Lookup...' value={this.state.query} onChange={(e) => this.onQueryChanged(e)}></input>
                </div>
                <div className='__lookup_search-right d-inline-block'>
                    <SearchButton click={this.onPerformSearch}></SearchButton>
                </div>
            </form>
        );
    }
}

export default LookupSearch;