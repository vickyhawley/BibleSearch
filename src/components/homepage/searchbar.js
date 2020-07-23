import React from 'react';
import './searchbar.scss';
import Button from '../button';

const SearchBar = () => {
    return (
        <div className="search">
            <div className="search__box">
                <div className="search__box-title">
                    <h1>Search over 2500 bibles for a keyword</h1>
                </div>
                <div className="search__box-input">
                   <form>
                       <input id="search" type="text"></input>
                   </form>
                </div>
                <div className="search__box-btn">
                    < Button id="searchbtn"> Search </Button>
                </div>

            </div>
        </div>
    );
};

export default SearchBar;