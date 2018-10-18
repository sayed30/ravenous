import React from 'react';

import './SearchBar.css';
const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            term:'',
            location:'',
            sortBy:'best_match'
            
        }
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    renderSortByOptions(){
        return Object.keys(sortByOptions).map(sortByOption => {
            const sortByOptionValue = sortByOptions[sortByOption];
                return <li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>
    });
    };
    getSortByClass(sortByOption){
        if(this.state.sortBy === sortByOption){
            return 'active';
        }
        else{
            return '';
        }
    }
    handleSortByChange(sortByOption){
        this.setState({sortBy :sortByOption});
    }
    handleTermChange(event){
        //this.setState(term) = '';
        this,this.setState({term: event.target.value});
    }
    handleLocationChange(event){
        //this.setState(location) = '';
        this.setState({location: event.target.value});
        
    }
    handleSearch(event){
        this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy);
        event.preventDefault()
    }
    render(){
        return(
        <div class="SearchBar">
  <div class="SearchBar-sort-options">
    <ul>
    {this.renderSortByOptions()}
    
    </ul>
  </div>
  <div class="SearchBar-fields">
    <input placeholder="Search a Business" onChange={this.handleTermChange}/>
    <input placeholder="Where?" onChange={this.handleLocationChange}/>
  </div>
  <div class="SearchBar-submit">
    <a onClick={this.handleSearch}>Let's Go</a>
  </div>
</div>
        );
    }

}

export default SearchBar;