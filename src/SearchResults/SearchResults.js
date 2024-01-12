import SearchItem from '../SearchItem/SearchItem';
import Spinner from '../Spinner/Spinner';
import "./SearchResults.css";
import searchSample from "../searchSample.json"
import InfiniteScroll from "react-infinite-scroll-component";

const SearchResults = (props) => {

    return (
        <>
            <div className="container-fluid search-results">
                <h1 className='mt-2 mb-5'>Search Results for '{props.text}'</h1>
                <InfiniteScroll
                    dataLength={props.total}
                    next={props.fetchMoreData}
                    hasMore={props.results.length !== props.total}
                    loader={<Spinner />}
                    style={{overflow: 'hidden'}}
                >
                    {props.results.length !== 0 && props.results.map((item) => {
                        return (<SearchItem
                            key={item.imdbID}
                            result={item}
                        />);
                    })}
                </InfiniteScroll>
            </div>
        </>
    );
}


export default SearchResults