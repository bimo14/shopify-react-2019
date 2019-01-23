import React, { Component } from 'react';
import axios from 'axios';
import LookupSearch from '../LookupSearch';
import ItemDiv from '../ItemDiv';
import './LookupManager.css';

class LookupManager extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataset: null,
            favourites: [],
            results: [],
            network_error: false
        };
    }

    fetchDataset = async () => {
        try {
            let wasteData = await axios.get('https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000');

            await this.setState({
                dataset: (wasteData.data).map((item, index) => ({
                    ...item,
                    id: index
                }))
            });
        }
        catch (e) {
            console.log(e);
            this.setState({
                network_error: true
            });
        }
    }

    onSearch = (query) => this.setState({
        results: (this.state.dataset).filter(item => (item.keywords).includes(query))
    })

    onClear = () => this.setState({
        results: []
    })

    onFavouriteAdded = (item) => this.setState({
        favourites: [...this.state.favourites, item]
    })

    onFavouriteRemoved = (item) => this.setState({
        favourites: (this.state.favourites).filter(fav => fav.title !== item.title)
    })

    getFavouritesJSX = () => {
        if ((this.state.favourites.length > 1)) {
            const favourites = (this.state.favourites).map(fav => <ItemDiv key={`fav${fav.id}`} item={fav} isFavourite={true} starClicked={this.onFavouriteRemoved}></ItemDiv>)

            return (
                <div className='__lookup_manager-favourites'>
                    <div className='max-width-container'>
                        <h2 className='__lookup_manager-favourites-title'>Favourites</h2>
                        {favourites}
                    </div>
                </div>
            );
        }

        return null;
    }

    componentDidMount() {
        this.fetchDataset();
    }

    render() {
        if (this.state.network_error) {
            return 'Network Error: Check console.log()';
        }

        const favouriteIDs = (this.state.favourites).map(fav => fav.id);
        const results = (this.state.results).map(result => {
            const isFavourite = favouriteIDs.includes(result.id);

            return <ItemDiv key={result.id} item={result} isFavourite={isFavourite} starClicked={isFavourite ? this.onFavouriteRemoved : this.onFavouriteAdded}></ItemDiv>;
        });

        return (
            <>
                <div className='max-width-container'>
                    <LookupSearch search={this.onSearch} clear={this.onClear}></LookupSearch>
                </div>
                <div className='__lookup_manager-result'>
                    <div className='max-width-container'>
                        {results}
                    </div>
                </div> 
                {this.getFavouritesJSX()}
            </>
        );
    }
}

export default LookupManager;