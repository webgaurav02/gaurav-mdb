import "./SearchItem.css"


const SearchItem = (props) => {
    return (
        <div className="container-fluid search-item">
            <div className="row">
                <div className="col-md-4">
                    <img className="poster" src={props.result.Poster} alt="Poster" />
                </div>
                <div className="col-md-8">
                    <h2>{props.result.Title}</h2>
                    <h5><b>{props.result.Year}</b></h5>
                    <p>{props.result.Type}</p>
                    
                </div>
            </div>
        </div>
    );
}


export default SearchItem