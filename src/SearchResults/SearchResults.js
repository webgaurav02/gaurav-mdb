import SearchItem from '../SearchItem/SearchItem';
import Spinner from '../Spinner/Spinner';
import "./SearchResults.css";
import searchSample from "../searchSample.json"
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from 'react';


const SearchResults = (props) => {
    return (
        <>
            <div className="container-fluid search-results">
                <h1 className='mt-2 mb-5'>Search Results for '{props.text}'</h1>
                {props.isLoading && <Spinner />}
                {!props.isLoading && <div>
                    <InfiniteScroll
                        dataLength={20}
                        next={props.fetchMoreData}
                        hasMore={props.results.length !== 20}
                        loader={<Spinner />}
                        style={{ overflow: 'hidden' }}
                    >
                        {props.results.length !== 0 && props.results.map((item) => {
                            return (<SearchItem
                                key={item.imdbID}
                                result={item}
                                setId={props.setId}
                            />);
                        })}
                    </InfiniteScroll>
                </div>}
                {props.page > 3 && props.results.length === 20 && !props.isLoading && <button
                    onClick={props.prevItems}
                    className='btn btn-outline-primary mr-4'>
                    Previous
                </button>}
                {props.results.length === 20 && !props.isLoading && <button onClick={props.nextItems} className='btn btn-outline-primary'>Next</button>}
            </div>

        </>
    );
}


export default SearchResults